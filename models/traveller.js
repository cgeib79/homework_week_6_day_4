const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
  return this.journeys.map((journey) => {
    return journey.startLocation
  });
};

Traveller.prototype.getJourneyEndLocations = function (endLocation) {
  return this.journeys.map((journey) => {
    return journey.endLocation
  });
};

Traveller.prototype.getModesOfTransport = function (transport) {
  return this.journeys.map((journey) => {
    return journey.transport
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport == transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  return this.journeys.every((journey) => {
    return journey.distance >= distance;
  });
};
//not sure why this test is failing

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport == transport;
  })
};
//I am aware that this is not the right test, it would return train, train, aeroplane, car, ferry rather than listing every means of transport just once . I have tried .every but that does not do the trick either

module.exports = Traveller;
