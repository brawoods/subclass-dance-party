var makeMoonWalkingDancer = function(top, left, timeBetweenSteps) {
//   // makedancer.call(this); <= makeBlinkyDancer.makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps / 30);

  // store left value
  this.top = top;
  this.leftStart = left;
  this.left = left;

  this.$node = $('<span class="dancer moonWalkingDancer"></span>');

};

// connect makeMoonWalkingDancer and makeDancer po
makeMoonWalkingDancer.prototype = Object.create(makeDancer.prototype); // step, setPosition
makeMoonWalkingDancer.prototype.constructor = makeMoonWalkingDancer;

makeMoonWalkingDancer.prototype.step = function() {
  // oldStep
  makeDancer.prototype.step.call(this); // =>
  // new thing
  // change left value to move back and forth
  // 500px
  // if ((this.leftStart + 5) >= this.left) { // 200 + 100 > 300
  //   //moves left
  //   this.left++;
  // } else {
  //   this.left--; // moves right
  // }

  this.$node.css({
    top: this.top,
    left: this.left++});
};

//
// var dancerB = new makeWalkingDancer(30, 50, 200);

// get all the props
// step() will be Bstep();
//                      setTimeout for Blinkydancer
// toggle => shown => hidden
// dancerB.setPosition() => dancerB.__proto__.__proto__setPosition();
// 100ms after
// function() ==> this is bound to dancerB