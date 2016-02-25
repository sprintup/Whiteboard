// features/support/world.js
var zombie = require('zombie');

//for domain world testing
function DomainWorld() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

//for web world testing 
function WebWorld() {
	this.browser = new zombie();


}

module.exports = function() {
  this.World = DomainWorld;
};