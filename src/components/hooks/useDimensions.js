import { useState, useCallback, useLayoutEffect } from "react";

function getDimensionObject(node) {
  var rect = node.getBoundingClientRect();
  return {
      width: rect.width,
      height: rect.height,
  };
}

function useDimensions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$liveMeasure = _ref.liveMeasure,
      liveMeasure = _ref$liveMeasure === undefined ? true : _ref$liveMeasure;

  var _useState = useState({}),
      dimensions = _useState[0],
      setDimensions = _useState[1];

  var _useState2 = useState(null),
      node = _useState2[0],
      setNode = _useState2[1];

  var ref = useCallback(function (node) {
		setNode(node);
  }, []);
  useLayoutEffect(function () {
		if (node) {
			var measure = function measure() {
				return window.requestAnimationFrame(function () {
					return setDimensions(getDimensionObject(node));
				});
			};
			measure();
			if (liveMeasure) {
			window.addEventListener("resize", measure);
			return function () {
			window.removeEventListener("resize", measure);
			};
			}
		}
  }, [node]);
  return [ref, dimensions, node];
}
export default useDimensions;
//# sourceMappingURL=index.js.map