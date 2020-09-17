    console.log("employees", employees)
var getImages = function(employees)
{
return employees.photo;
}
console.log("employees",employees)
d3.select("body")
.selectAll("img")
.data(employees)
.enter()
.append ("img")
.attr("src", getImages)  
      