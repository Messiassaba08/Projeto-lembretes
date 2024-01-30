using System.ComponentModel.DataAnnotations.Schema;

namespace reminder.Server.Model
{
    [Table("ReminderStruct")]
    public class ReminderStruct
    {
        [Column("Name")]
        public required int Id { get; set; }

        [Column("Name")]
        public required string Name { get; set; }

        [Column("Description")]
        public string? Description { get; set; }

        [Column("Data")]
        public required String Data { get; set; }
    }
}
