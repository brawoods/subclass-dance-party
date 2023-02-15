var makeMoonWalkingDancer = function(top, left, timeBetweenSteps) {
//   // makedancer.call(this); <= makeBlinkyDancer.makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

  // store left value
  this.left = left;
};

// connect makeMoonWalkingDancer and makeDancer po
makeMoonWalkingDancer.prototype = Object.create(makeDancer.prototype); // step, setPosition
makeMoonWalkingDancer.prototype.constructor = makeMoonWalkingDancer;

makeMoonWalkingDancer.prototype.step = function() {
  // oldStep
  makeDancer.prototype.step.call(this); // =>
  // new thing
  // change left value
  this.$node.css({left: this.left++});
};

//
var dancerB = new makeWalkingDancer(30, 50, 200);

// get all the props
// step() will be Bstep();
//                      setTimeout for Blinkydancer
// toggle => shown => hidden
// dancerB.setPosition() => dancerB.__proto__.__proto__setPosition();
// 100ms after
// function() ==> this is bound to dancerB