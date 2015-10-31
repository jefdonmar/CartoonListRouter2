import Backbone from 'backbone';

export default Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/cartoonList2',

  idAttribute: 'objectId'

});


// This gives the model of how you want data to be collected for an individual cartoon 