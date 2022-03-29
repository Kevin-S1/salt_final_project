#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Final_Project.Models;

namespace Final_Project.Data
{
    public class SwappieContext : DbContext
    {
        public SwappieContext (DbContextOptions<SwappieContext> options)
            : base(options)
        {
        }

        public DbSet<Final_Project.Models.User> User { get; set; }

        public DbSet<Final_Project.Models.Toy> Toy { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<User>()
                .HasMany(_ => _.Toys)
                .WithOne();
        }
    }
}
