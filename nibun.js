var a=0.0,b=1.0,c;
var ans,EPS;
EPS=0.001;//htmlで選択された許容誤差を参照したい
do{
    c=(a+b)/2.0;
    if((func_y(c)+func_y(a))<0)
        b=c;
    else a=c;
}while((a-b)>EPS);
console.log(c);

//y=(x^3)+2x+1
function func_y(x){
    return x*x*x+2.0*x+1.0;
}