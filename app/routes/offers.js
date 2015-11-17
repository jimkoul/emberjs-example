import Ember from 'ember';

export default Ember.Route.extend({
  //model hook
  model(){
    let offers=[
      {
        Product: "Φακές Ψιλές",
        Until: "4/11/2015",
        MinBid:"3000",
        Location:"athinas 2",
        Capacity:"3000",
        HighBid:"3100",
        Status:"Open"
      },
      {
        Product: "Φακές Ψιλές",
        Until: "4/11/2015",
        MinBid:"3000",
        Location:"athinas 2",
        Capacity:"1000",
        HighBid:"1200",
        Status:"Closed"
      },
      {
        Product: "Φακές Ψιλές",
        Until: "4/11/2015",
        MinBid:"3000",
        Location:"athinas 2",
        Capacity:"2000",
        HighBid:"2100",
        Status:"Pending"
      }
    ];
    return offers;
  }

});
