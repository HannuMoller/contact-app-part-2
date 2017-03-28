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
        public int AddContact([FromBody]Contact contact)
        {
            contact.Id =Services.ContactService.AddContact(contact);
            if (contact.Id > 0)
            {
                return contact.Id;
            }
            else
            {
                return -1;
            }
        }

        [HttpDelete]
        public IHttpActionResult RemoveContact([FromBody]Contact contact)
        {
            if (Services.ContactService.DeleteContact(contact))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut]
        public IHttpActionResult ModifyContact([FromBody]Contact contact)
        {
            if (Services.ContactService.ModifyContact(contact))
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
