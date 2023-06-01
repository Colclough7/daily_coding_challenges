/*Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"*/




var Ghost = function() {
  // your code goes here
      var array = ['white','yellow','purple','red'];
    var index = Math.floor(Math.random()*array.length);
    this.color = array[index];
};
