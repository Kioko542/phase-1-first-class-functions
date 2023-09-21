function receivesAFunction(Children) {
  Children();
}

function returnsANamedFunction() {
  return function cart() {};
}


function returnsAnAnonymousFunction(){
    
}


function returnsAnAnonymousFunction() {
    return function() {
      const x = function (a, b) {
        return a * b;
      };
    };
  }