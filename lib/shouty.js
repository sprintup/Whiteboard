module.exports = (function(location){
		//person constructor
	var Person = function () {
		this.position = 0;
	};
	Person.prototype.move_to = function(location){
		this.position = location;
	};
})();