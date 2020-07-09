var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function addEvent(obj){
	var check = obj.classList.toggle("done");
	var btn = document.createElement("button");
	if(check){
		btn.appendChild(document.createTextNode("Delete"));
		obj.appendChild(btn);
		btn.addEventListener("click", function() {
			obj.remove();
		});
	} else {
		obj.lastChild.remove();
	}
};

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", () => {addEvent(li)});
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var li = document.querySelectorAll("li");

for (var i = 0; i < li.length; i++) {
	let obj = li[i];
	obj.addEventListener("click",() => {addEvent(obj)});
}

