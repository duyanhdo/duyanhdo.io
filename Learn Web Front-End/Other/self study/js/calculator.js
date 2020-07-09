var result = document.getElementsByClassName('onea')[0];
function show(n){
	result.textContent += n;
}
function tinh(){
	let x = eval(result.textContent);
	result.textContent = x;
}
function binhphuong(){
	let x = result.textContent*result.textContent;
	result.textContent = x;
}
function can2(){
	let x = Math.sqrt(result.textContent);
	result.textContent = x;
}
function percent(){
	let x = result.textContent/100;
	result.textContent = x;
}
function giaithua(){
	let gt = 1;
		for(var i = 2; i <= result.textContent; i++){
			gt*=i;
		}
		if(result.textContent == 0) gt = 0;
		result.textContent = gt;
	} 
	
// //jquery
// $(function() {
// 	var $result = $(".onea");
// 	$('.cal3,.cal3a,.cal3b').click(function(event) {
// 	let $type = $result.text() + $(event.target).text();
// 	$result.text($type);
// })

// var $type = $result.text() + $(event.target).text();

// function tinh(){
// 	let x = eval($result.text($type));
// 	$result.text($type) = x;
// }
// function binhphuong(){
// 	let x = $result.text()*$result.text($type);
// 	$result.text() = x;
// }
// function can2(){
// 	let x = Math.sqrt($result.text($type));
// 	$result.text() = x;
// }
// function percent(){
// 	let x = $result.text($type)/100;
// 	$result.text() = x;
// }
// function giaithua(){
// 	let gt = 1;
// 		for(var i = 2; i <= $result.text($type); i++){
// 			gt*=i;
// 		}
// 		if($result.text() == 0) gt = 0;
// 		$result.text() = gt;
// 	} 

// });


