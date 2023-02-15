describe('moonWalkingDancer', function() {

  var moonWalkingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    moonWalkingDancer = new makeMoonWalkingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(moonWalkingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node rotate', function() {
    sinon.spy(moonWalkingDancer.$node, 'css');
    moonWalkingDancer.step();
    expect(moonWalkingDancer.$node.css.called).to.be.true;
    // may need to change moonWalkingDancer.$node.rotate.called name given 'rotate' method call
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(moonWalkingDancer, 'step');
      expect(moonWalkingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(moonWalkingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(moonWalkingDancer.step.callCount).to.be.equal(2);
    });
  });
});
