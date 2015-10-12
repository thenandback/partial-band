'use strict';

var Adjective = function() {
  this.sleepy = true;
  this.fuzzy = true;
  this.cranky = true;
  this.soporific = true;
  this.lazy = true;
  this.penultimate = true;
  this.geodesic = true;
  this.superb = true;
  this.tasty = true;
  this.intense = true;
  this.magnificent = true;
  this.eloquent = true;
};

var Verb = function() {
  this.sleeping = true;
  this.skiing = true;
  this.flopped = true;
  this.waiting = true;
  this.plotting = true;
  this.burping = true;
  this.sneezing = true;
  this.flying = true;
  this.snoozing = true;
  this.dancing = true;
};

var Noun = function() {
  this.ninjas = true;
  this.cowboys = true;
  this.bears = true;
  this.beats = true;
  this.alligators = true;
  this.hamsters = true;
  this.otters = true;
  this.helicopters = true;
  this.unicorns = true;
  this.rhymes = true;
};

module.exports.adjective = Adjective;
module.exports.verb = Verb;
module.exports.noun = Noun;
