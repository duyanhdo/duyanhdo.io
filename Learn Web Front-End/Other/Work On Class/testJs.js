//xu ly so
	//bai 1
	function area(r){
		return (4/3)*3.14*Math.pow(r,3);
	}
	area(2)

	//bai 2
	function sum(a,b){
		var sum = 0;
		for(var i = a+1; i < b; i++){
			 sum+=i;
		}
		return sum;
	}
	sum(3,8)

	//bai 3
	function isPrime(n){
		if(n == 1) return 0;
		for(var i = 2; i <= Math.sqrt(n); i++){
			if(n%i == 0) return 0;
		}
		return 1;
	}
	isPrime(3)

	//bai 4
	function sumPrime(n){
		var sum = 0;
			for(var i = 0; i <= n; i++){
				if(isPrime(i)){
					sum+=i;
				}	
			}
			return sum;
		}
	sumPrime(7);

	//bai 5
	function sumUoc(n){
		var sum = 0;
		for(var i = 1; i <= n; i++){
			if(n%i == 0)
				sum+=i;
		}
		return sum;
	}
	sumUoc(7);

	//bai 6
	function sumFib(n){
		var sum = 0;
		var a = 0,b=1;
		var c;
		while(true){
			c = a+b;
			if(c>=n) break;
			if(c%2==0) sum+=c;
			a=b;
			b=c;
		}
		return sum;
	}
	sumFib(10);

//tong hop
	//bai 1
	function ptb1(a,b){
		var x;
		if (a == 0)
			{
				if(b == 0)
					alert("Phuong trinh co vo so nghiem");
				else 
					alert("Phuong trinh vo nghiem");
			}
		else
			{
				alert("Phuong trinh co 1 nghiem");
				document.write(`x = ${x= -b/a+'<br>'}`);
			}
		}

	//bai 2
	function ptb2(x,y,z)
{
	var x1,x2;
	var x,y,z,delta;
	delta=(y*y-4*x*z)
		if(delta == 0)
			{	
				alert("phuong trinh co nghiem kep");
				document.write(`x1 = x2 = ${-y/(2*x)}`);
			}
		else if(delta<0)
			{
			alert("phuong trinh vo nghiem");
			} 
		else
		{
			alert("phuong trinh co hai nghiem");
			document.writeln(`x1 = ${(-y-Math.sqrt(delta))/(2*x)+'<br>'}`);
			document.writeln(`x2 = ${(-y+Math.sqrt(delta))/(2*x)}`);
		}
}
ptb2(1,-9,1)
	
	//bai 5
	function sort(n){
	    var str = n.toString().split("");
	    str.sort();
	    var start = str.indexOf('0');
	    var end  = str.lastIndexOf('0');
	    str.splice(start,end+1); //xoa bao nhieu so 0 tu vi tri start
	    for(var i=1;i<=end+1;i++){
	        str.splice(1,0,"0");
	    }
	    str = str.join('');
	    document.writeln(str);
	}
	sort(12900);

	//bai 4
	function ocSen(x,y,h){
		var k = (Math.ceil((h - x) / (x - y)));
		return k+1;
	}

	//bai 3
	function time(t,x){
		while (x <= 1000) {
			
		}
	}

//array
	//bai 1
	function filter(arr) {
    	var newArr = arr.filter(function(element) {return element});
    	return newArr;
    }

    //bai 2
    var arr = ["duy anh","quang anh","map dit","truong hu"];
function findStringLongest(arr){
    var maxLength = 0;
    var result = [];
    for(var str of arr){
        maxLength = Math.max(str.length,maxLength);
    }

    for(var str of arr){
        if(str.length == maxLength)
            result.push(str);
    }
    return result;
}
findStringLongest(arr);

//String
	//bai 1
	function Upper(str){
		 var newStr = str.toLowerCase().split(' ');
		 for(var i = 0; i < newStr.length; i++){ 	 
		 	 newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
		 }
		 document.write(newStr.join(' '))
	}
	Upper('hello world');

	//bai 2
	function lower(str){
		return str.toLowerCase().split(' ').join('-');
	}

	//bai 3
	function Palidrome(n){
		for(var i = 0; i < n.length; i++){
			if(n.charAt(i) != n.charAt(n.length-i-1))
				return false;
		}
		return true;
	}
	Palidrome('ABBA');

	//bai 4
	

//object
	//bai1
var obj = ["duy anh","quang anh","bui hoang"];
function isEmpty(obj) {
    for (var ele in obj) {
    	//ele = "duy anh"
    	//ele = "quang anh"
    	//ele = "bui hoang"
        return false;
    }
    return true;
}
isEmpty([]);

var studentList = [
    { name: 'foreword', age: 14, gender: 'male' },
    { name: 'boyWhoLived', age: 18, gender: 'male' },
    { name: 'vanishingGlass', age: 13, gender: 'male' },
    { name: 'lettersFromNoOne', age: 17, gender: 'male' },
    { name: 'afterword', age: 19, gender: 'male' }
];

//bai2
function compareAgeAcc(studentList) {
	var avr = 0;
    for(var i = 0; i < studentList.length; i++){
    	 avr+=studentList[i].age;
    }
    return avr/studentList.length;
}
compareAgeAcc(studentList);
//bai3
function compareAgeDes(a, b) {
    if (a.age > b.age) return -1;
    return 1;
}

//bai4
function compareName(a, b) {
    const namea = a.name.toUpperCase();
    const nameb = b.name.toUpperCase();

    let comparison = 0;
    if (namea > nameb) {
        comparison = 1;
    } else if (namea < nameb) {
        comparison = -1;
    }
    return comparison;
}
studentList.sort(compareName);

//bai5
function findName(studentList){
    for(var i = 0;i<studentList.length;i++){
        if(studentList[i].name.toUpperCase().charAt(0)=="H")
        document.write(studentList[i]);
    }
}
findName(studentList)































