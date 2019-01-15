angular.module('svysignaturePad', ['servoy']).directive('svysignaturePad', function() {
		return {
			restrict: 'E',
			scope: {
				model: '=svyModel',
				handlers: "=svyHandlers",
				api: "=svyApi",
				svyServoyapi: "="
			},
			controller: function($scope, $element, $attrs) {
				$scope.signaturePad = null;

				/*
				 * Draw image with a base 64 string
				 * @param {String} data base64 data string to draw
				 *
				 */
				$scope.api.setDataUrl = function(data) {
					return $scope.signaturePad.fromDataURL(data);
				};

				/*
				 * Get image as base64 string
				 * @param {String} [type] image mimetype to save as ("image/jpeg","image/png") full list at https://mdn.io/todataurl
				 *
				 * @private
				 */
				$scope.api.getDataUrl = function(type) {

					var datatemp = $scope.signaturePad.toData();
					setTimeout(function() {
							$scope.signaturePad.fromData(datatemp);
						}, 500);

					var data = $scope.signaturePad.toDataURL(type);

					return data;
				};

				/*
				 * Clear Signature Pad
				 */
				$scope.api.clear = function() {
					$scope.signaturePad.clear();
				};

				/*
				 * Initialize Signature Pad
				 * @param {Object} options additional options
				 * Options {}
				 * dotSize : (float or function) Radius of a single dot.
				 * minWidth : (float) Minimum width of a line. Defaults to 0.5.
				 * maxWidth : (float) Maximum width of a line. Defaults to 2.5.
				 * throttle : (integer) Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling. Defaults to 16.
				 * minDistance : (integer) Add the next point only if the previous one is farther than x pixels. Defaults to 5.
				 * backgroundColor : (string) Color used to clear the background. Can be any color format accepted by context.fillStyle.
				 * Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white)
				 * if you'd like to save signatures as JPEG images.
				 * penColor: (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
				 * velocityFilterWeight : (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.
				 * onBegin : (function) Callback when stroke begin.
				 * onEnd : (function) Callback when stroke end.
				 */
				$scope.api.init = function(options) {
					var element = document.getElementById($scope.model.svyMarkupId + '-wrapper');
					var canvas = document.getElementById($scope.model.svyMarkupId);

					//add onBegin/onEnd Handlers
					if ($scope.handlers.onBegin) {
						options.onBegin = $scope.handlers.onBegin
					}
					if ($scope.handlers.onEnd) {
						options.onEnd = $scope.handlers.onEnd
					}
					$scope.signaturePad = new SignaturePad(canvas, options);

					function resizeCanvas() {
						var data = $scope.signaturePad.toData()
						var ratio = Math.max(window.devicePixelRatio || 1, 1);
						canvas.width = canvas.offsetWidth * ratio;
						canvas.height = canvas.offsetHeight * ratio;
						canvas.getContext("2d").scale(ratio, ratio);
						$scope.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
						$scope.signaturePad.fromData(data);
					}

					window.addEventListener("resize", resizeCanvas);
					resizeCanvas();

				};
			},
			templateUrl: 'svysignature/pad/pad.html'
		};
	})