"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousStateModifier = _interopRequire(require("famous/modifiers/StateModifier"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var StateModifier = (function (_FamousComponent) {
  function StateModifier() {
    _classCallCheck(this, StateModifier);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(StateModifier, _FamousComponent);

  _createClass(StateModifier, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousStateModifier(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var stateModifier = this.getFamous();
        var node = parentNode.add(stateModifier);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, node];
        });
        return [node, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var stateModifier = this.getFamous();

        if (nextProps.options.transform) {
          stateModifier.setTransform(nextProps.options.transform);
        }
        if (nextProps.options.opacity !== undefined) {
          stateModifier.setOpacity(nextProps.options.opacity);
        }
        if (nextProps.options.origin) {
          stateModifier.setOrigin(nextProps.options.origin);
        }
        if (nextProps.options.align) {
          stateModifier.setAlign(nextProps.options.align);
        }
        if (nextProps.options.size) {
          stateModifier.setSize(nextProps.options.size);
        }
        if (nextProps.options.proportions) {
          stateModifier.setProportions(nextProps.options.proportions);
        }
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "StateModifier" },
          this.getFamousChildren()
        );
      }
    }
  });

  return StateModifier;
})(FamousComponent);

defaults(StateModifier, FamousStateModifier);

module.exports = StateModifier;