import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    //action for sidebar toggle
    sidebarToggle:function(){
      document.getElementById("mainpage").classList.toggle("toggled");
    },
    //modals actions
    showModal: function(name, model) {
      this.render(name, {
        into: 'application',
        outlet: 'bootstrap-modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'bootstrap-modal',
        parentView: 'application'
      });
    }
  }
});
