/*function preg1() {
  var matriz=[[0,1,1,2],
              [0,5,0,0],
              [2,0,3,3]];
  var sum=0;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      sum +=matriz [i][j];
    }
  }
  return sum;
}
console.log("repuesta :" + preg1());
*/

function preg2() {
  var cont=0;
  var año=1700;
  var i=0;
  while(i<año){
    año =año-100
    cont = cont +1;
  }
  return cont;
}
console.log("el siglo es:"+ preg2());
/*function preg5(p,n) {
  n +=1;
  var suma=1;
  var sum= p;
  while(n==0){
    suma *=10;
  }
  suma += p;
  suma = Math.pow(suma,2);
  p = 0;
  while (suma > 0 ) {
    p += suma%10;
    suma = parseInt(suma/=10);
  }
  return p;
}
console.log( " ejemplo del ejercicio cinco: " + preg5 ( 5 ,1 ));
*/
