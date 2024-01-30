using Microsoft.EntityFrameworkCore;
using reminder.Server.Model;

namespace reminder.Server.Configuracao
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<ReminderStruct> ReminderStruct { get; set; }

    }
}