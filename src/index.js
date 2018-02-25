/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
var array = preferences;
var sum = 0;
let memory = [];

array.forEach(function(item,index){
  let Check2 = true;
  if(memory.includes(item - 1)){
    Check2 = false;
  }
  if (Check2) {
  let length = array.length;
  let second;
  let third;
  if(check(item - 1,length) ){
    second = array[item - 1]; 
    if(check(second - 1,length) ){
      third  = array[second - 1];
      if(second === item){

        }else{
        if(third - 1 === index){
          sum++;
          memory.push(item - 1);
          memory.push(second - 1);
          memory.push(third - 1);
        }
      }
    }
  }
}
});
return sum;


  
};

function check(index,length){
  if (index >= 0 && index < length){
    return true;
  }else{
    return false;
  } 
}