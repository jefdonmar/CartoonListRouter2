import Backbone from 'backbone';
import $ from 'jquery';

import {Cartoons as CartoonCollection} from './resources';
import {Cartoon as CartoonModel} from './resources';
import {Cartoon as CartoonView} from './views';
import {Cartoons as CartoonsView} from './views';
import {Spinner} from './views';
import {NewCartoon} from '.views';

export default Backbone.Router.extend({

  routes: {
    "" : "redirectToCartoons",
    "cartoons": "showCartoons",
    "cartoon/:id" : "showCartoon",
    "addCartoon" : "newCartoon"
  },

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new CartoonCollection();

    this.$el.on('click', '.cartoon-list-item', (event) => {
      let $div = $(event.currentTarget);
      let cartoonId = $div.data('cartoon-id');
      
      this.navigate('cartoon/${cartoonId}', {trigger: true});  
    });

    this.$el.on('click', '.back-button', (event) => {
      console.log("y'all go back not ya hear");
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', ',create-character', (event) => {
      console.log('should have me at the update form');
      let $div = $(event.currentTarget);
      this.navigate('addCartoon', {trigger: true});
    });

    this.$el.on('click', '.add-new-cartoon', (event) => {
      console.log('I wanna be a cartoon');

      let photo = $(this.$el).find('.photo').val();
      let characterName = $(this.$el).find('.characterName').val();
      let cartoonTitle = $(this.$el).find('.cartoonTitle').val();
      let station = $(this.$el).find('.station').val();

      let model = new CartoonModel({
        Photo: photo,
        Character: characterName,
        Cartoon: cartoonTitle,
        Station: station
      });

      this.collection.add(model);
      model.save().then( () => {
        alert('And We have a new CARTOON!!!');
        this.navigate('cartoons', {trigger: true});
      });

    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html(Spinner());
  },

  redirectToCartoons() {
    this.navigate('cartoons', {replace: true, trigger: true});
  },

  showCartoons() {
    this.showSpinner();
    this.collection.fetch().then( () => {
      this.$el.html(CartoonsView(this.collection.toJSON()));
    });
  },

  showCartoon(id) {
    let cartoon = this.collection.get(id);

    if (cartoon) {
      this.$el.html(CartoonView(cartoon.toJSON()));
    } else {
      this.showSpinner();
      cartoon = this.collection.add({objectId: id});
      cartoon.fetch().then( () => {
        this.$el.html(CartoonView(cartoon.toJSON()));
      });
    }
  },

  newCartoon() {
    this.showSpinner();
    this.$el.html.(NewCartoon());
  }

});
