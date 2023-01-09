let info: any;  //pode atribuir qualquer valor. EVITAR USAR para não causar problemas na aplicação.

info = [1, 2, 3];
info = 'Daniel';
info = true;
info = 10.89;

function sum(a: any, b: any){
    return a + b;
}
sum(1, 3)
sum('1', '3')