"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousSubmitInputSurface = _interopRequire(require("famous/surfaces/SubmitInputSurface"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var SubmitInputSurface = (function (_FamousComponent) {
  function SubmitInputSurface() {
    _classCallCheck(this, SubmitInputSurface);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(SubmitInputSurface, _FamousComponent);

  _createClass(SubmitInputSurface, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousSubmitInputSurface(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var submitInputSurface = this.getFamous();
        var node = parentNode.add(submitInputSurface);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var submitInputSurface = this.getFamous();

        submitInputSurface.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "SubmitInputSurface" });
      }
    }
  });

  return SubmitInputSurface;
})(FamousComponent);

defaults(SubmitInputSurface, FamousSubmitInputSurface);

module.exports = SubmitInputSurface;