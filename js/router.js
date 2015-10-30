import Backbone from 'backbone';
import $ from 'jquery';
import CartoonCollection from './cartoon_collection';
import listTemplate from './views/cartoon_list';
import cartoonTemplate from './views/individual_view';

var Router = Backbone.Router.extend({

  routes: {
    '' : 'cartoonlist',
    'individualView/:id' : 'showIndividualCartoon'
  },

  initialize: function(appElement) {
    this.$el = appElement;

    this.cartoons = new CartoonCollection();

    let router = this;

    this.$el.on('click', '.cartoon-list-item', (event) => {
      let $p = $(event.currentTarget);
      let cartoonId = $p.data('cartoon-id');
      router.navigate('cartoons/${cartoonId}');
      router.showIndividualCartoon(cartoonId);
      // back to home button
      let backButton = $('back');
      backButton.on('click', (event) => {
        let $button = $(event.currentTarget);
        router.navigate('', {trigger: true});
      });
    });

  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  cartoonlist: function() {
    this.showSpinner();
    console.log('grabbing cartoons');
    this.cartoons.fetch().then(() => {

      this.$el.html(listTemplate(this.cartoons.toJSON()));

    });
  },

  showIndividualCartoon: (cartoonId) => {
    console.log('show individual cartoons');
    let cartoon = this.cartoons.get(cartoonId);

    if (cartoon) {
      this.$el.html(cartoonTemplate(cartoon.toJSON()));
    } else {
      let cartoon = this.cartoons.add({objectId: cartoonId});
      let router = this;
      this.showSpinner();
      cartoon.fetch().then(() => {
        cartoon.$div.html(cartoonTemplate(cartoon.toJSON()));
      });
    }
  },

  start: () => {
    Backbone.history.start();
  }

});

export default Router;
