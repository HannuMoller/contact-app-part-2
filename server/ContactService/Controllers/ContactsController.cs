using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using ContactService.DB;
using ContactService.Models;

namespace ContactService.Controllers
{
    public class ContactsController : ApiController
    {

        [HttpGet]
        public IEnumerable<Contact> GetAllContacts()
        {
            return Services.ContactService.GetAllContacts();
        }

        [HttpPost]
        public Contact AddContact([FromBody]Contact contact)
        {
            contact.Id =Services.ContactService.AddContact(contact);
            if (contact.Id > 0)
            {
                return contact;
            }
            else
            {
                return contact;
            }
        }

        [HttpDelete]
        public IHttpActionResult RemoveContact(int ID)
        {
            if (Services.ContactService.DeleteContact(ID))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut]
        public IHttpActionResult ModifyContact(int ID, [FromBody]Contact contact)
        {
            if (Services.ContactService.ModifyContact(ID, contact))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

    }
}
