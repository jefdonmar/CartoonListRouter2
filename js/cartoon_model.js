import Backbone from 'backbone';

let CartoonModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/cartoonList',

  idAttribute: 'objectId'

});

export default CartoonModel;

// This gives the model of how you want data to be collected for an individual cartoon 