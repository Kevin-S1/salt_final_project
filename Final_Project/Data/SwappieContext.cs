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
        
        public DbSet<Rating> Rating { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Toy> Toy { get; set; }
        public DbSet<Information> Information { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Toy>()
                .HasOne(_ => _.User)
                .WithMany(_ => _.Toys);
        }
    }
}
