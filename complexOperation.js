function complexOperations(x) {
  return function(y) {
	  return function(z) {
		return x*y-z ;
	};    
  };
}

console.log(complexOperations(5)(10)(2));