var makeRotatingDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeRotatingDancer.prototype = Object.call(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;


// $("a.shownav img").css("transform", "rotate(180deg)")

// jQuery.fn.rotate = function(degrees) {
//   $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
//   return $(this);
// };