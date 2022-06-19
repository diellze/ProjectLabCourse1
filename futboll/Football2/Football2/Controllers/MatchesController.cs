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
    public class MatchesController : ControllerBase
    {
        private readonly DataContext _context;

        public MatchesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Matches
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Matches>>> Get()
        {
            return await _context.Matches.ToListAsync();
        }

        // GET: api/Matches/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Matches>> Get(int id)
        {
            var match = await _context.Matches.FindAsync(id);

            if (match == null)
            {
                return NotFound();
            }

            return match;
        }

        // PUT: api/Matches/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Matches>>> UpdateMatch(Matches match)
        {
            var dbMatch = await _context.Matches.FindAsync(match.Id);
            if (dbMatch == null)
                return BadRequest("Match not found");

            dbMatch.Ekipi1 = match.Ekipi1;
            dbMatch.Ekipi2 = match.Ekipi2;
            dbMatch.goalsTeam1 = match.goalsTeam1;
            dbMatch.goalsTeam2 = match.goalsTeam2;
            dbMatch.location = match.location;

            await _context.SaveChangesAsync();
            return Ok(await _context.Matches.ToListAsync());
        }

        // POST: api/Matches
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<Matches>>> Create(Matches match)
        {
            _context.Matches.Add(match);
            await _context.SaveChangesAsync();

            return Ok(await _context.Matches.ToListAsync());
        }

        // DELETE: api/Matches/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Matches>>> DeleteMatch(int id)
        {
            var dbMatch = await _context.Matches.FindAsync(id);
            if (dbMatch == null)
            {
                return BadRequest("Contact not found");
            }

            _context.Matches.Remove(dbMatch);
            await _context.SaveChangesAsync();

            return Ok(await _context.Matches.ToListAsync());
        }

        private bool MatchesExists(int id)
        {
            return (_context.Matches?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
