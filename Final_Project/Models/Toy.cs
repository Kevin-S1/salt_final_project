using System.Reflection.Metadata;
using System.Security.Principal;

namespace Final_Project.Models;

public class Toy
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }

    public virtual int UserId { get; set; }
    public Ages Age { get; set; }
    public Categories Category { get; set; }
}