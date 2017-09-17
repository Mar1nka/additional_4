function multiply(first, second) {
  var product = [];
  var productLength = first.length + second.length;

  for(var i = 0; i < productLength; i++) {
      product[i] = 0;
  }

  var buffer = 0;
  var result = 0;
  var rest = 0;

  for(var i = first.length -1; i >= 0; i--) {
      for(var j =  second.length - 1; j >= 0; j--) {
          var currentPosition  = i + j + 1 + 1 - 1;
          result = first[i] * second[j] + product[currentPosition];
          buffer = Math.floor(result / 10);
          rest = result - buffer * 10;

          product[currentPosition] = rest;
          product[currentPosition - 1] += buffer;
      }
  }

  if(product[0] === 0 ) {
      product.splice(0, 1);
  }

  var productString = product.join('');

  return productString;
}

module.exports = multiply;

