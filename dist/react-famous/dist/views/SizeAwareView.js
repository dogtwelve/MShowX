"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousSizeAwareView = _interopRequire(require("famous/views/SizeAwareView"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var SizeAwareView = (function (_FamousComponent) {
  function SizeAwareView() {
    _classCallCheck(this, SizeAwareView);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(SizeAwareView, _FamousComponent);

  _createClass(SizeAwareView, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousSizeAwareView(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var sizeAwareView = this.getFamous();
        parentNode.add(sizeAwareView);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, sizeAwareView];
        });
        return [sizeAwareView, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var sizeAwareView = this.getFamous();

        sizeAwareView.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "SizeAwareView" },
          this.getFamousChildren()
        );
      }
    }
  });

  return SizeAwareView;
})(FamousComponent);

defaults(SizeAwareView, FamousSizeAwareView);

module.exports = SizeAwareView;