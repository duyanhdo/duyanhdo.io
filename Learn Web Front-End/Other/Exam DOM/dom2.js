let body = document.getElementsByTagName("body");
body[0].style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").textContent = "Duy Anh";
document.getElementById("favorites").textContent = "Du Lich";
document.getElementById("hometown").textContent = "Thai Nguyen";
//viet bang DOM js
var listItem = document.getElementsByTagName("li");
for(var i = 0; i < listItem.length; i++){
	listItem[i].classList.add("listitem");
}
//viet bang jquery
$("li").addClass('listitem'); 
//document.createElement("img").setAttribute('src','DOM_exercise1.png');
$('body').prepend(`<img src='DOM_ex1.png'>`);
