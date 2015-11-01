import Backbone from 'backbone';
import Cartoon from './cartoon';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/cartoonList2',

  model: Cartoon,

  parse: function(data) {
    return data.results;
  }

});


// This sets up our list view of all of the cartoons that I have on my list 