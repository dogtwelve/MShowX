"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousView = _interopRequire(require("famous/core/View"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var View = (function (_FamousComponent) {
  function View() {
    _classCallCheck(this, View);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(View, _FamousComponent);

  _createClass(View, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousView(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var view = this.getFamous();
        parentNode.add(view);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, view];
        });
        return [view, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var view = this.getFamous();

        view.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "View" },
          this.getFamousChildren()
        );
      }
    }
  });

  return View;
})(FamousComponent);

defaults(View, FamousView);

module.exports = View;