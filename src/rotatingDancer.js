var makeRotatingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps); // <=============


  // declare a degree property
  this.degree = 0; // <=======
};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

// METHODS
// step that will rotate the element
// rotate => by changing CSS transform class' value
makeRotatingDancer.prototype.step = function() {
  // invoke 'oldStep' => setTimeout
  makeDancer.prototype.step.call(this);
  // real step
  // change degree
  // console.log('rotate-ish');
  this.degree += 10;
  this.degree %= 360;

  this.$node.css({rotate: this.degree + 'deg'}); // <========
  ////// Minseok playing around //////
  // this.$node.animate()
};