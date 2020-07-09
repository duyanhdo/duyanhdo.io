//bai 1
var student = ['duy anh','quyet','thien','vuong','trung'];
student.sort().forEach(function(item,index) { document.write(`${index+1}: ${item+'\n'}`);});

//bai 2
function even(item){
        if(item%2==0)
        	return item;
    }
    function test(array) {
return newArr = array.sort(function (a,b) {return b-a;}).filter(even);
}
test([2,4,5,6]);

//bai 3
var arr =  [true,false,false,true];
arr.indexOf(false);

//bai 4
var str = 'hello';
str.split('').reverse().join('');

//bai 5
var arr = [1,2,3,4,5,6,7,8,9];
function sum(arr){
	var res = 0;
	for(var i = 0; i < arr.length; i++){
		res += arr[i];
	}
	return res;
}
sum(arr);

//bai 6
function array(arr){
	for(var i = 0;i<arr.length;i++){
	if(arr[i].toLowerCase().charAt(0) == 'h')
		document.writeln(arr[i]);
	}
}
array(['huong','duy anh','quyet','thien','vuong','ha','ngoc']);

//bai 7
function isOpen(n){
	var open = 0;
	for(var i = 1; i <= n; i++){
		if(n%i==0)
			open = 1 - open;
	}
	return open;
}

//bai 8
var arr = [
  {name: "Alibaba", id: 1},
  {name: "Kane", id: 2},
  {name: "Steven", id: 3},
  {name: "Mike", id: 4},
  {name: "Suzy", id: 5}
];
// ?sắp xếp theo value (giá trị)
arr.sort(function (a, b) {
  return a.id - b.id;
});
// sắp xếp theo name (tên)
arr.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
  var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // name trùng nhau
  return 0;
});

























