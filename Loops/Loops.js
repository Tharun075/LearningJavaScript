let bag = 0;
for(i=0;i<=10;i++){
  for(j=0;j<=10;j++){
    if(i===j){
      bag += i+" ";
    }
  }
}
console.log(bag);