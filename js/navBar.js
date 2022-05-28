function toggleNavBar() 
{
    var x = document.getElementById("primaryNav");
    if (x.className === "primaryNav") 
    {
        x.className += " responsive";
    } else 
    {
        x.className = "primaryNav";
    }
}