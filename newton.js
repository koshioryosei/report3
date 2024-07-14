var a=1.0,b;
var EPS;
EPS=0.001;//htmlで選択された許容誤差を参照したい
while(1){
    b=a-func_y(a)/func_z(a);
    if((a-b)<EPS) break;
    else a=b;
}
console.log(b);

//y=(x^3)+2x+1
function func_y(x){
    return x*x*x+2.0*x+1.0;
}

//func_yを微分　y'=3x^2+2
function func_z(x){
    return 3.0*x*x+2.0;
}