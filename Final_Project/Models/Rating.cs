namespace Final_Project.Models;

public class Rating
{
    public int Id { get; set; }
    public virtual int UserId{ get; set; }
    public int Value { get; set; }
}