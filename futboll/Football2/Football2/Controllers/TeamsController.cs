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
    public class TeamsController : ControllerBase
    {
        private readonly DataContext _context;

        public TeamsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Teams>>> GetTeams()
        {
            return await _context.Teams.ToListAsync();
        }
       

        // GET: api/Teams/5
        [HttpGet("{id}")]

        public async Task<ActionResult<Teams>> GetTeams(int id)
        {
            if (_context.Teams == null)
            {
                return NotFound();
            }

            var teams = await _context.Teams.FindAsync(id);

            if (teams == null)
            {
                return NotFound();
            }

            return teams;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<List<Teams>>> UpdateTeams(Teams team)
        {
            var dbTeam = await _context.Teams.FindAsync(team.Id);
            if (dbTeam == null)
                return BadRequest("Team not found");

            dbTeam.TeamName = team.TeamName;
            dbTeam.NumberPlayers = team.NumberPlayers;
            dbTeam.Details = team.Details;

            await _context.SaveChangesAsync();
            return Ok(await _context.Teams.ToListAsync());
        }

        // POST: api/Teams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]

        public async Task<ActionResult<List<Teams>>> Create(Teams teams)
        {
            _context.Teams.Add(teams);
            await _context.SaveChangesAsync();

            return Ok(await _context.Teams.ToListAsync());
        }


        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        
        public async Task<ActionResult<List<Teams>>> DeleteTeam(int id)
        {
            var dbTeam = await _context.Teams.FindAsync(id);
            if (dbTeam == null)
            {
                return BadRequest("Team not found");
            }

            _context.Teams.Remove(dbTeam);
            await _context.SaveChangesAsync();

            return Ok(await _context.Teams.ToListAsync());
        }

        private bool TeamsExists(int id)
        {
            return (_context.Teams?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
