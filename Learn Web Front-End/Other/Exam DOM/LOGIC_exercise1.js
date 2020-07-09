function checkSquare(n){
	if(Math.sqrt(n) == Math.ceil(Math.sqrt(n)))
		return 1;
	else 
		return -1;
}

function display(){
	for(var i = 1; i <= 1000; i++){
		if(checkSquare(i) == 1)
			document.writeln(i);
	}
}
display();