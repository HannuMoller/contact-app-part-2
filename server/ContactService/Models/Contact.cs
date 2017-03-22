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
    }

}