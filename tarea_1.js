function preg5(p,n) {
  n=1;
  //var suma=0;
  var sum= p;
  while(n==0){
    suma =suma*10;
  }
  n=n+1;
  suma =p++;
  suma = Math.pow(suma,2);
  p = 0;
  while (suma > 0 ) {
    p += suma%10;
    suma = parseInt(suma/=10);
  }
  return p;
}
console.log( " ejemplo del ejercicio cinco: " + preg5 ( 5 ,1 ));
