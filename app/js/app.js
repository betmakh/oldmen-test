angular.module('oldmenTest', []);
window.loadData = function()
{
var xmlhttp;
if (window.XMLHttpRequest){
  	xmlhttp=new XMLHttpRequest();
 	}
else{
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    	window.jsonData = xmlhttp.responseText;
    }
}
xmlhttp.open("GET","demo_get.asp",true);
xmlhttp.send();
}