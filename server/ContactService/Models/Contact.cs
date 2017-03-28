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
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <param name="phone"></param>
        /// <param name="streetAddress"></param>
        /// <param name="city"></param>
        public Contact(int id, string firstName, string lastName, string phone, string streetAddress, string city)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Phone = phone;
            StreetAddress = streetAddress;
            City = city;
        }
    }

}