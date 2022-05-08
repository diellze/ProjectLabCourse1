#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Football2.DataModel;

namespace Football2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly DataContext _context;

        public ContactsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> Get()
        {
            return await _context.Contacts.ToListAsync();
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> Get(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Contact>>> UpdateContact(Contact contact)
        {
            var dbContact = await _context.Contacts.FindAsync(contact.Id);
            if (dbContact == null)
                return BadRequest("Hero not found");

            dbContact.Emri = contact.Emri;
            dbContact.Email = contact.Email;
            dbContact.PhoneNumber = contact.PhoneNumber;
            dbContact.Mesazhi = contact.Mesazhi;

            await _context.SaveChangesAsync();
            return Ok(await _context.Contacts.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Contact>>> Create(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();

            return Ok(await _context.Contacts.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Contact>>> DeleteContact(int id)
        {
            var dbContact = await _context.Contacts.FindAsync(id);
            if (dbContact == null)
            {
                return BadRequest("Contact not found");
            }

            _context.Contacts.Remove(dbContact);
            await _context.SaveChangesAsync();

            return Ok(await _context.Contacts.ToListAsync());
        }

        private bool ContactExists(int id)
        {
            return _context.Contacts.Any(e => e.Id == id);
        }
    }
}
