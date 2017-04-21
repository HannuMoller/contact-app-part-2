using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ContactService.DB;
using ContactService.Models;

namespace ContactService.Services
{
    public class ContactService
    {
        public static string escapeQuotes(string s)
        {
            if (s != null)
            {
                if (s.Length > 0)
                {
                    s = s.Replace("'", "\\'");
                }
            }
            return s;
        }

        public static void escapeQuotes(Contact contact)
        {
            contact.FirstName = escapeQuotes(contact.FirstName);
            contact.LastName = escapeQuotes(contact.LastName);
            contact.Phone = escapeQuotes(contact.Phone);
            contact.StreetAddress = escapeQuotes(contact.StreetAddress);
            contact.City = escapeQuotes(contact.City);
        }
        /// <summary>
        /// Fetch all contacts from database
        /// </summary>
        /// <returns></returns>
        public static Contact[] GetAllContacts()
        {
            var db = Database.GetConnection();
            var sql = "select id,first_name,last_name,phone,street_address,city from contacts";
            var result = db.Query(sql);

            var contacts = new Contact[result.Count];
            for (int i = 0; i < result.Count; i++)
            {
                contacts[i] = new Contact(int.Parse(result[i][0]), result[i][1], result[i][2], result[i][3], result[i][4], result[i][5]);
            }

            db.Close();

            return contacts;
        }

        /// <summary>
        /// Add new contact to database
        /// </summary>
        /// <param name="contact"></param>
        /// <returns> id for created contact </returns>
        public static int AddContact(Contact contact)
        {
            var db = Database.GetConnection();
            var sql = "select IFNULL(max(id)+1,1) from contacts";
            var result = db.Query(sql);
            contact.Id = int.Parse(result[0][0]);
            escapeQuotes(contact);

            sql = "insert into contacts (id,first_name,last_name,phone,street_address,city) values (" +
                      contact.Id + ",'" + contact.FirstName + "','" + contact.LastName + "','" +
                      contact.Phone + "','" + contact.StreetAddress + "','" + contact.City + "')";

            int i = db.Update(sql);

            db.Close();

            return (i > 0) ? contact.Id : -1;
        }

        /// <summary>
        /// Remove contact from database
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public static bool DeleteContact(int ID)
        {
            var sql = "delete from contacts where id=" + ID;
            var db = Database.GetConnection();
            int i = db.Update(sql);

            db.Close();

            return (i > 0);
        }

        /// <summary>
        /// Modify existing contact in database
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public static bool ModifyContact(int ID, Contact contact)
        {
            escapeQuotes(contact);
            var sql = "update contacts set first_name='" + contact.FirstName + "',last_name='" + contact.LastName +
                      "',phone='" + contact.Phone + "',street_address='" + contact.StreetAddress +
                      "',city='" + contact.City + "' where id=" + ID;
            var db = Database.GetConnection();
            int i = db.Update(sql);

            db.Close();

            return (i > 0);
        }
    }
}