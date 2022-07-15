// Routes files are loaded in alphabetical order. 
// To load custom routes before core routes, 
// make sure to name custom routes appropriately (e.g. 01-custom-routes.js and 02-core-routes.js).

module.exports = {
  routes: [
    { // Path defined with an URL parameter
      method: 'GET',
      path: '/posts/hello', 
      handler: 'post.hello',
    }
  ]
}