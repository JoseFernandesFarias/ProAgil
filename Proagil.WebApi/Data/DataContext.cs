using Microsoft.EntityFrameworkCore;
using Proagil.WebApi.Model;

namespace Proagil.WebApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Evento> Eventos { get; set; }
    }
}