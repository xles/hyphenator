//main.js
var Hyphenator = (function (window) {
	/**
	 * @constructor
	 */
	var Hyphenator = function () {
		/**
		 * @constructor
		 */
		var F = function () {
			this.addModule = Hyphenator.fn.addModule;
		};
		F.prototype = new Hyphenator.fn.getProto();
		return new F();
	};

			
	Hyphenator.fn = {
		getProto: function () {
			this.fn = Hyphenator.fn;
		},
		/*extend: function (name, fnproto) {
			this[name] = fnproto;
		},*/
		EO: function (obj) {
			this.each = function (fn) {
				var k;
				for (k in obj) {
					if (obj.hasOwnProperty(k)) {
						fn(k, obj[k]);
					}
				}
			};
		},
		addModule: function (module) {
			var that = this;
			module = new Hyphenator.fn.EO(module);
			module.each(function (k, v) {
				that[k] = v;
			});
		}
		
	};
	
	// Expose Hyphenator to the global object
	return new Hyphenator();	
}(window));


Hyphenator.addModule({
	run: function (config) {
		if (!!config) {
			Hyphenator.config(config);
		}
		Hyphenator.fn.prepareDocuments(window);
		//window.console.log(Hyphenator);
	}
});

