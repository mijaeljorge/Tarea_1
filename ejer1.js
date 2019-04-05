function preg1() {
  var matriz=[[1,1,1,0],
              [0,5,0,1],
              [2,1,3,10]];
  var sum=0;
  var c;
  for(var i=0;i<3;i++){
    for(var j=0;j<4;j++){
      c=i+1;
      if (matriz[i][j]!=0{
        /*if(matriz[i+1][c]!=0){
          sum +=matriz [i][j];
        }*/
        sum +=matriz [i][j];
      }
    }
  }
  return sum;
}
console.log("repuesta :" + preg1());
