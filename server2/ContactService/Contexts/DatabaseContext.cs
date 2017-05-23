using ContactsService.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactsService.Contexts
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options) { }

        public DbSet<Contact> Contact { get; set; }
        public DbSet<User> User { get; set; }

        // create tables if not already existing...
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().ToTable("Contact");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}
