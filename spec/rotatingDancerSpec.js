describe('rotatingDancer', function() {

  var rotatingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotatingDancer = new makeRotatingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotatingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(rotatingDancer.$node, 'css');
    rotatingDancer.step();
    expect(rotatingDancer.$node.css.called).to.be.true;
    // may need to change rotatingDancer.$node.rotate.called name given 'rotate' method call
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotatingDancer, 'step');
      expect(rotatingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotatingDancer.step.callCount).to.be.equal(2);
    });
  });
});
