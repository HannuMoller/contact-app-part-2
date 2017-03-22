using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ContactService.DB;
using ContactService.Models;

namespace ContactService.Controllers
{
    public class ContactsController : ApiController
    {

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet]
        public IEnumerable<Contact> GetAllContacts()
        {
            return Contact.GetAllContacts();
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPost]
        public IHttpActionResult AddContact([FromBody]Contact contact)
        {
            if (Contact.AddContact(contact))
            {
                return Ok();
            }
            else
            {
                return this.NotFound();
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpDelete]
        public IHttpActionResult RemoveContact([FromBody]Contact contact)
        {
            if (Contact.DeleteContact(contact))
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpPut]
        public IHttpActionResult ModifyContact([FromBody]Contact contact)
        {
            if (Contact.ModifyContact(contact))
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
