"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousRenderNode = _interopRequire(require("famous/core/RenderNode"));

var FamousDeck = _interopRequire(require("famous/views/Deck"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var Deck = (function (_FamousComponent) {
  function Deck() {
    _classCallCheck(this, Deck);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(Deck, _FamousComponent);

  _createClass(Deck, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousDeck(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var deck = this.getFamous();
        var node = parentNode.add(deck);
        var next = [];
        var sequence = this.getFamousChildrenRef().map(function (child, idx) {
          var renderNode = new FamousRenderNode();
          next.push([child, renderNode]);
          return renderNode;
        });
        deck.sequenceFrom(sequence);
        return [node, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var deck = this.getFamous();

        deck.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "Deck" },
          this.getFamousChildren()
        );
      }
    }
  });

  return Deck;
})(FamousComponent);

defaults(Deck, FamousDeck);

module.exports = Deck;