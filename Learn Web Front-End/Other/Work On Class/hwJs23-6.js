//bai 2
    function giaithua(gt){
        var a =  1;
        if(!isNaN(gt) && gt > 0){
        for(var i = 1; i <= gt; i++){
            a*=i;
        }
        document.writeln(a);
        }
        else {
        	alert('phai la so nguyen > 0');
        }
    }
    giaithua(5);

    //bai 1
    function loop(number)
    {
        for(var i = 1; i <= 10; i++)
        {
            if(i < 10)
            {
                document.write(number+'-');
            }
            else {
                document.write(number);
            }
        }
    }
    loop(123);

    //bai 3
    for(var i = 99; i >= 0; i--){
        if(i == 99){
            document.write(`99 bottles of beer on the wall 98 bottles of beer Take one down,<br>`);
        }
        else{
            document.write('pass it around '+i+' bottles of beer on the wall '+i+' bottles of beer on the wall '+i+' bottles of beer Take one down,'+'<br>');
        }
    }

    //bai 4
    function check(num,rand){
        if(isNaN(num)){
            alert('input khong hop le');
        }
        else {
            if(num == rand){
            alert('ban da doan dung');
            return true;
            }
            if(num < rand){
                alert('nho hon');
            }
            else {
                alert('lon hon');
            }
            return false;   
        }
    }           
    var rand = Math.floor(Math.random() * 10) + 1;
    while(true){
        var value = prompt('so ngau nhien do la bao nhieu?');
        if(!isNaN(value)) break;
        alert("input khong hop le");
    }
    if(!check(value,rand)){
        for(var i = 3; i >= 1; i--){
            var num = prompt('ban con '+i+' lan doan');
            if(num == null) break;
            if(isNaN(num)){
                i++;
                alert('input khong hop le');
                continue;
            }
            if(check(num,rand)) break;
            if(i == 1){
                alert('game over');
            }
        }
    }