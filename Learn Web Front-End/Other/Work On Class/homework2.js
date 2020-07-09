function check(num1,num2){
    if(!isNaN(num1) && !isNaN(num2)){
        if(num1==num2){
            document.write('2 so bang nhau');
        }
        return Math.max(num1,num2);
    }
    else{
        document.write('k phai la so');
    }
}
check(1,2);

function check(user){
    if(user.trim()!=0 && user.length <= 20){
        return user;
    }
    else{
        return false;
    }
}
check('');

function check(pass){
    if(pass.length<=32 && pass.length >=6){
        return pass;
    }
    else{
        return false;
    }
}
check('duyanh123');

var pass = 'duyanh1234';
function confirm(confirm){
    if(confirm == pass){
        return confirm;
    }
    else{
        return false;
    }
}
confirm('duyanh1234');

var now = new Date();   // Lấy thời gian hiện tại
var date = now.getDate();   // Lấy ngày từ thời gian hiện tại
document.writeln(date);
var month = now.getMonth() + 1;   // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
document.writeln(month);
var year = now.getFullYear();   // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại
document.writeln(year);

function check(score){
    if(score>=8.5 && score <=10){
        document.writeln('A');
    }
    if(score>=7 && score <8.5){
        document.writeln('B');
    }
    if(score>=5.5 && score <7){
        document.writeln('C');
    }
    if(score>=4 && score <5.5){
        document.writeln('D');
    }
    if(score>=0 && score <4){
        document.writeln('F');
    }
}
check(7);

var language = 'japan';
    switch(language){
        case 'france':
            document.write('Bonjour');
            break;
        case 'japan':
            document.write('Hajimemashite');
            break;
        case 'germany':
            document.write('Hallo');
            break;
        case 'korea':
            document.write('annyeonghaseyo');
            break;
        default:
            document.write('Xin chào');
            break;
    }

for(var i=20;i>=11;i--){
    document.write(i);
    document.write('<br>');
}
document.write('<hr>');

var i =20;
while(i>=11){
    document.write(i);
    document.write('<br>');
    i--;
}
document.write('<hr>');

var i=20;
do{
    document.write(i);
    document.write('<br>');
    i--;
}
while(i>=11);