function throttle( func, delay ) {
			let past = 0;
			return function( ...args ) {
				let current = new Date().getTime();

				if ( current - past < delay ) {
					return false;
				}

				window.intervalID = setTimeout( function() {
					func( ...args );
				}, delay );

				past = current;
			};
		}

		function debounce( fn, delay ) {
			let timeID;
			return function( ...args ) {
				timeID ? clearTimeout( timeID ) : null; //eslint-disable-line
				timeID = setTimeout( function() {
					fn( ...args );
				}, delay );
			};
		}
