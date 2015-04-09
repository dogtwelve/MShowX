"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousModifierChain = _interopRequire(require("famous/modifiers/ModifierChain"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var ModifierChain = (function (_FamousComponent) {
  function ModifierChain() {
    _classCallCheck(this, ModifierChain);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(ModifierChain, _FamousComponent);

  _createClass(ModifierChain, {
    famousCreate: {
      value: function famousCreate() {
        var modifierChain = new FamousModifierChain(this.props.options);

        this.props.modifiers.forEach(function (modifier) {
          return modifierChain.addModifier(modifier);
        });

        return modifierChain;
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var modifierChain = this.getFamous();
        var node = parentNode.add(modifierChain);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, node];
        });
        return [node, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var modifierChain = this.getFamous();

        this._chain.length = 0;
        nextProps.modifiers.forEach(function (modifier) {
          return modifierChain.addModifier(modifier);
        });
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "ModifierChain" },
          this.getFamousChildren()
        );
      }
    }
  });

  return ModifierChain;
})(FamousComponent);

defaults(ModifierChain, FamousModifierChain);

ModifierChain.propTypes = {
  modifiers: React.PropTypes.array
};

module.exports = ModifierChain;