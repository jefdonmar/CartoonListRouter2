import Backbone from 'backbone';
import $ from 'jquery';

import {Cartoons as CartoonCollection} from './resources';
import {Cartoon as CartoonModel} from './resources';
import {Cartoon as CartoonView} from './views';
import {Cartoons as CartoonsView} from './views';
import {Spinner} from './views';
import {NewCartoon} from './views/';

export default Backbone.Router.extend({

  routes: {
    '' : 'redirectToCartoons',
    'cartoons': 'showCartoons',
    'cartoon/:id' : 'showCartoon',
    'addCartoon' : 'newCartoon'
  },

  // This occurs when the app runs 
  initialize: function(appElement) {

    // This defines your DOM element
    this.$el = appElement;

    // This creates the instance of the collection
    this.collection = new CartoonCollection();

    // click event for selecting a cartoon
    this.$el.on('click', '.cartoon-list-item', (event) => {
      let $div = $(event.currentTarget);
      let cartoonId = $div.data('cartoon-id');
      this.navigate(`cartoon/${cartoonId}`, {trigger: true});  
    });

    // click event for the back button 
    this.$el.on('click', '.back-button', (event) => {
      console.log("y'all go back now ya hear");
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    // click event for adding a new character
    this.$el.on('click', '.create-character', (event) => {
      console.log('should have me at the update form');
      let $div = $(event.currentTarget);
      this.navigate(`addCartoon`, {trigger: true});
    });

    // Click event to submit new cartoon character
    this.$el.on('click', '.add-new-cartoon', (event) => {
      let Photo = $('.photo').val();
      let CharacterName = $('.characterName').val();
      let CartoonTitle = $('.cartoonName').val();
      let Station = $('.station').val();
      let model = new CartoonModel({
        photo: Photo,
        characterName: CharacterName,
        cartoonName: CartoonTitle,
        station: Station
      });

      this.collection.add(model);
      model.save().then( () => {
        alert('And We have a new CARTOON!!!');
        this.navigate(`cartoons`, {trigger: true});
      });

    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  // Spinner shown when fetching the data 
  showSpinner() {
    this.$el.html(Spinner());
  },

  // start the app on the address book and lets user return to previous page
  redirectToCartoons() {
    this.navigate('cartoons', {replace: true, trigger: true});
  },

  // the full cartoon character page
  showCartoons() {
    this.showSpinner();
    this.collection.fetch().then( () => {
      this.$el.html(CartoonsView(this.collection.toJSON()));
    });
  },

  // Show a specific contact from the address book
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
    this.$el.html(NewCartoon());
  }

});


