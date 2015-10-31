
  // start: function() {
  //   Backbone.history.start();
  //   return this;
  // },

//   showSpinner: function() {
//     this.$el.html(Spinner());
//   },

//   redirectToCartoons: function() {
//     this.navigate('cartoons', {replace: true, trigger: true});
//   },

//   showCartoons: function() {
//     this.showSpinner();
//     this.collection.fetch().then( () => {
//       this.$el.html(CartoonsView(this.collection.toJSON()));
//     });
//   },

//   showCartoon: function(id) {
//     let cartoon = this.collection.get(id);

//     if (cartoon) {
//       this.$el.html(CartoonView(cartoon.toJSON()));
//     } else {
//       this.showSpinner();
//       cartoon = this.collection.add({objectId: id});
//       cartoon.fetch().then( () => {
//         this.$el.html(CartoonView(cartoon.toJSON()));
//       });
//     }
//   },

//   newCartoon: function() {
//     this.showSpinner();
//     this.$el.html.(NewCartoon());
//   }

// });