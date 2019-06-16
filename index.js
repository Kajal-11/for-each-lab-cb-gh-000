function iterativeLog(array){
  array.forEach(callbackFn)
}

function callbackFn(element, index, array){
  console.log(`${index}: ${element}`);
}

function iterate(callback){
  array = ['1', '2', '3', '4'];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
