using System.ComponentModel;

namespace Final_Project.Models;

public enum Ages
{
    [Description("0-1")]
    AgeCategory1,
    [Description("2-4")]
    AgeCategory2,
    [Description("5-6")]
    AgeCategory3,
    [Description("7-10")]
    AgeCategory4,
    [Description("10+")]
    AgeCategory5
}