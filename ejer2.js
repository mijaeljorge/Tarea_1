function preg2() {
  var cont=0;
  var año=2018;
  var i=0;
  while(i<año){
    año =año-100
    cont = cont +1;
  }
  return cont;
}
console.log("el siglo es:"+ preg2());
