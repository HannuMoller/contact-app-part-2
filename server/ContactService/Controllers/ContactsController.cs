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
    [RoutePrefix("api/contacts")]
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
        [Route("{id}")]
        public IHttpActionResult RemoveContact(int id)
        {
            if (Services.ContactService.DeleteContact(id))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult ModifyContact(int id, [FromBody]Contact contact)
        {
            if (Services.ContactService.ModifyContact(id, contact))
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
