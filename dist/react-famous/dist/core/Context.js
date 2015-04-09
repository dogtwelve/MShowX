"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousContext = _interopRequire(require("famous/core/Context"));

var isUndefined = _interopRequire(require("lodash/lang/isUndefined"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var Engine = _interopRequire(require("./Engine"));

var Context = (function (_FamousComponent) {
  function Context() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Context);

    _get(Object.getPrototypeOf(Context.prototype), "constructor", this).apply(this, args);

    this.famousContext = true;
  }

  _inherits(Context, _FamousComponent);

  _createClass(Context, {
    famousCreate: {
      value: function famousCreate() {
        return Engine.createContext(React.findDOMNode(this.refs.container));
      }
    },
    famousCreateNode: {
      value: function famousCreateNode() {
        var context = this.getFamous();
        var node = context;
        var next = this.getFamousChildrenRef().map(function (child) {
          return [child, context];
        });
        return [node, next];
      }
    },
    famousDelete: {
      value: function famousDelete() {
        Engine.deregisterContext(this.getFamousNode());
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var context = this.getFamous();

        if (!isUndefined(nextProps.perspective)) {
          context.setPerspective(nextProps.perspective);
        }
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "famous" },
          React.createElement(
            "div",
            { "data-famous": "Context", style: { display: "none" } },
            this.getFamousChildren()
          ),
          React.createElement("div", { className: "famous-container", ref: "container" })
        );
      }
    }
  });

  return Context;
})(FamousComponent);

defaults(Context, FamousContext);

Context.propTypes = {
  perspective: React.PropTypes.number
};

module.exports = Context;