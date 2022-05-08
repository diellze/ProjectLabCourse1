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
    public class TransfersController : ControllerBase
    {
        private readonly DataContext _context;

        public TransfersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transfers>>> Get()
        {
            return await _context.Transfers.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Transfers>> Get(int id)
        {
            var news = await _context.Transfers.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<Transfers>>> UpdateContact(Transfers transfers)
        {
            var dbTransfers = await _context.Transfers.FindAsync(transfers.Id);
            if (dbTransfers == null)
                return BadRequest("News not found");

            dbTransfers.PlayerName = transfers.PlayerName;
            dbTransfers.LastTeam = transfers.LastTeam;
            dbTransfers.CurrentTeam = transfers.CurrentTeam;
            dbTransfers.TimeTransfer = transfers.TimeTransfer;


            await _context.SaveChangesAsync();
            return Ok(await _context.Transfers.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Transfers>>> Create(Transfers transfers)
        {
            _context.Transfers.Add(transfers);
            await _context.SaveChangesAsync();

            return Ok(await _context.Transfers.ToListAsync());
        }

        
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Transfers>>> DeleteContact(int id)
        {
            var dbTransfer = await _context.Transfers.FindAsync(id);
            if (dbTransfer == null)
            {
                return BadRequest("News not found");
            }

            _context.Transfers.Remove(dbTransfer);
            await _context.SaveChangesAsync();

            return Ok(await _context.Transfers.ToListAsync());
        }
        private bool TransfersExists(int id)
        {
            return _context.Transfers.Any(e => e.Id == id);
        }
    }
}
