function checkDriveAge(){
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
} 
checkDriveAge();

var checkDriveAge2 = function (){
	var age = prompt("What is your age?");
	if (Number(age) < 18) {
		alert("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}
checkDriveAge2();

function checkDriveAge3(age){
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}
checkDriveAge3(92);

/****************************************************************************************************************************/

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array.shift()); 
console.log(array.sort());
console.log(array.push("kiwi"));
console.log(array.splice(0, 1));
console.log(array.reverse());

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

/****************************************************************************************************************************/

var acc1 = {
	username : "0912700469",
	password : "bomeowmeow03012020"
};
var acc2 = {
	username : "anhyeuem99",
	password : "buihongngoc"
};
var acc3 = {
	username : "ahihi99",
	password : "cutephomaique"
};

var database = [acc1,acc2,acc3];
console.log(database);

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];


/****************************************************************************************************************************/

var database = [
	{
		username: "andrei",
		password: "superscret"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "andrei",
		password: "12"
	}
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is soooooo cooooool"
	},
	{
		username: "Kaori",
		timeline: "Shigatsu wa kimi no uso!"
	}
];

function isUserValid(username, password){
	for(var i = 0; i < database.length; i++){
		if(database[i].username === user && database[i].password === pass){
			return true;
		}
	}
	return false;
}

function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!");
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);


/****************************************************************************************************************************/

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todosImportant = [
	"clean room!",
	"brush teeth!",
	"exercise!",
	"study javascript!",
	"eat healthy!"
];

var todosLength = todos.length;

for(var i = 0 ; i < todosLength; i++){
	todos[i] = todos[i] + "!";
	todos.pop();
	console.log(todos[i], i);
}

function logTodos(value, index) {
	console.log(value, index);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

var counterOne = 0;
while(counterOne > 0){
	console.log("while",counterOne);
	counterOne--;
}


var counterTwo = 10;
do{
	console.log("do while",counterTwo)
	counterTwo--;
} while (counterTwo > 0);




















































