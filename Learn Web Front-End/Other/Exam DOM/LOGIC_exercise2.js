function tachso(n){
    var number = n.toString();
    var result = "";
    for(var i=0;i<number.length;i=i+3) {
        if(i+3 > number.length) 
        result = result.trim() + number.substring(i,number.length);
        else
        result = result + " " + number.substring(i,i+3) ;
    }
    return result;
}
tachso('0978212108');