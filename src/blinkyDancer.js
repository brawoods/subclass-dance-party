var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   // makedancer.call(this); <= makeBlinkyDancer.makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);

  // this.$node => <span class="blinkyDancer">
  // <img src=/img/pikachu.png>
  //</span>

};

// // connect makeBlinkyDancer and makeDancer po
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); // step, setPosition
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // oldStep

  makeDancer.prototype.step.call(this); // =>
  // new thing
  this.$node.toggle();
};

var dancerB = new makeBlinkyDancer(30, 50, 200);

// get all the props
// step() will be Bstep();
//                      setTimeout for Blinkydancer
// toggle => shown => hidden
// dancerB.setPosition() => dancerB.__proto__.__proto__setPosition();
// 100ms after
// function() ==> this is bound to dancerB