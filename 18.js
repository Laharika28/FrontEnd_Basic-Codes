console.log("Functions made are iseven() , factorial() , kebabToSnake() ");
function iseven(n){
    if(n%2 === 0)
    {
        return true;
    }
    return false;
}

function factorial(n){
    if(n === 0)
        return 1;
    else if(n>0)
    {   
        var fact=1;
        while(n>1)
        {
            fact*=n;
            n--;
        }
        return fact;
    }
}

function kebabToSnake(str){
    /*str=str.split("");
    for(var i=0;i<str.length;i++)
    {
        if(str[i] == '-')
        {
            str[i]="_";
        }
    }  
    str=str.join("");
    */

    str=str.replace(/-/g,"_");
    return str;
}