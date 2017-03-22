using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using ContactService.DB;

namespace ContactService.Models
{
    public class Contact
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }

        public string OriginalFirstName { get; set; } // placeholder for update
        public string OriginalLastName { get; set; } // placeHolder for update

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <param name="phone"></param>
        /// <param name="streetAddress"></param>
        /// <param name="city"></param>
        public Contact(string firstName, string lastName, string phone, string streetAddress, string city)
        {
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            StreetAddress = streetAddress;
            City = city;
        }

        /// <summary>
        /// Fetch all contacts from database
        /// </summary>
        /// <returns></returns>
        public static Contact[] GetAllContacts()
        {
            var db = Database.GetConnection();
            var sql = "select first_name,last_name,phone,street_address,city from contacts";
            var result = db.Query(sql);
 
            var contacts = new Contact[result.Count];
            for (int i = 0; i < result.Count; i++)
            {
                contacts[i] = new Contact(result[i][0], result[i][1], result[i][2], result[i][3], result[i][4]);
            }

            db.Close();

            return contacts;
        }

        /// <summary>
        /// Add new contact to database
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public static bool AddContact(Contact contact)
        {
            var sql = "insert into contacts (first_name,last_name,phone,street_address,city) values ('" +
                      contact.FirstName + "','" + contact.LastName + "','" + contact.Phone + "','" +
                      contact.StreetAddress + "','" + contact.City + "')";
            var db = Database.GetConnection();

            int i = db.Update(sql);
           
            db.Close();

            return (i > 0);
        }

        /// <summary>
        /// Remove contact from database
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public static bool DeleteContact(Contact contact)
        {
            var sql = "delete from contacts where first_name='" + contact.FirstName + "' and last_name='" + contact.LastName + "'";
            var db = Database.GetConnection();
            int i = db.Update(sql);

            db.Close();

            return (i > 0);
        }

        /// <summary>
        /// Modify existing contact in database
        /// </summary>
        /// <param name="contact"></param>
        /// <returns></returns>
        public static bool ModifyContact(Contact contact)
        {
            var sql = "update contacts set first_name='" + contact.FirstName + "',last_name='" + contact.LastName +
                      "',phone='" +
                      contact.Phone + "',street_address='" + contact.StreetAddress + "',city='" + contact.City +
                      "' where first_name='" +
                      contact.OriginalFirstName + "' and last_name='" + contact.OriginalLastName + "'";
            var db = Database.GetConnection();
            int i = db.Update(sql);

            db.Close();

            return (i > 0);
        }
    }

}