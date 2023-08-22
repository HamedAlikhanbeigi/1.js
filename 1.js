function number(num){
    let newNumber;
    let remaining;
    let revers;
    remaining=num%10;
    revers=remaining*10000;
    newNumber=Math.floor(num/10);
    remaining=newNumber%10;
    revers+=remaining*1000;
    newNumber=Math.floor(newNumber/10);
    remaining=newNumber%10;
    revers+=remaining*100;
    newNumber=Math.floor(newNumber/10);
    remaining=newNumber%10;
    revers+=remaining*10;
    newNumber=Math.floor(newNumber/10);
    remaining=newNumber%10;
    revers+=remaining*1;
    newNumber=Math.floor(newNumber/10);
    console.log(revers);
    }
   number(52147);
