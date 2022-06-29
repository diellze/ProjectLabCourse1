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
    public class NewsController : ControllerBase
    {
        private readonly DataContext _context;

        public NewsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> Get()
        {
            List<News> news = new List<News>();
            News.news = news;
            return await _context.News.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<News>> Get(int id)
        {
            var news = await _context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<News>>> UpdateContact(News news)
        {
            var dbNews = await _context.News.FindAsync(news.Id);
            if (dbNews == null)
                return BadRequest("News not found");

            dbNews.Image = news.Image;
            dbNews.Name= news.Name;
            dbNews.Details = news.Details;

            await _context.SaveChangesAsync();
            return Ok(await _context.News.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<News>>> Create(News news)
        {
            _context.News.Add(news);
            await _context.SaveChangesAsync();

            return Ok(await _context.News.ToListAsync());
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<News>>> DeleteContact(int id)
        {
            var dbNews = await _context.News.FindAsync(id);
            if (dbNews == null)
            {
                return BadRequest("News not found");
            }

            _context.News.Remove(dbNews);
            await _context.SaveChangesAsync();

            return Ok(await _context.News.ToListAsync());
        }

        private bool NewsExists(int id)
        {
            return _context.News.Any(e => e.Id == id);
        }
    }
}
