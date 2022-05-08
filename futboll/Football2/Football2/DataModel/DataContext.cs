using Microsoft.EntityFrameworkCore;

namespace Football2.DataModel
{
    public class DataContext:DbContext

    {
        public DataContext(DbContextOptions options) : base(options)
        { }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Transfers> Transfers { get; set; }

    }
}
