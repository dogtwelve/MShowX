"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousInputSurface = _interopRequire(require("famous/surfaces/InputSurface"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var InputSurface = (function (_FamousComponent) {
  function InputSurface() {
    _classCallCheck(this, InputSurface);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(InputSurface, _FamousComponent);

  _createClass(InputSurface, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousInputSurface(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var inputSurface = this.getFamous();
        var node = parentNode.add(inputSurface);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var inputSurface = this.getFamous();

        inputSurface.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "InputSurface" });
      }
    }
  });

  return InputSurface;
})(FamousComponent);

defaults(InputSurface, FamousInputSurface);

module.exports = InputSurface;