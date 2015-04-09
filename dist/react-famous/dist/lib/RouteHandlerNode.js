"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var RouteHandler = require("react-router").RouteHandler;

var FamousComponent = _interopRequire(require("./FamousComponent"));

var FamousReactNode = require("./ReactNode").FamousReactNode;

var FamousRouteHandlerNode = exports.FamousRouteHandlerNode = (function (_FamousReactNode) {
  function FamousRouteHandlerNode(options, context) {
    var _this = this;

    _classCallCheck(this, FamousRouteHandlerNode);

    if (!context) {
      throw new Error("Missing context.");
    }

    _get(Object.getPrototypeOf(FamousRouteHandlerNode.prototype), "constructor", this).call(this, options, context);

    React.withContext(context, function () {
      _this.setContent(React.createElement(RouteHandler));
    });
  }

  _inherits(FamousRouteHandlerNode, _FamousReactNode);

  return FamousRouteHandlerNode;
})(FamousReactNode);

var RouteHandlerNode = exports.RouteHandlerNode = (function (_FamousComponent) {
  function RouteHandlerNode() {
    _classCallCheck(this, RouteHandlerNode);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(RouteHandlerNode, _FamousComponent);

  _createClass(RouteHandlerNode, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousRouteHandlerNode(defaults(this.props.options, {
          properties: {
            overflow: "hidden"
          }
        }));
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var routeHandlerNode = this.getFamous();
        var node = parentNode.add(routeHandlerNode);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var routeHandlerNode = this.getFamous();

        routeHandlerNode.setOptions(defaults({}, nextProps.options, { content: content }));
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "RouteHandlerNode" });
      }
    }
  });

  return RouteHandlerNode;
})(FamousComponent);

defaults(RouteHandlerNode, FamousRouteHandlerNode);

exports["default"] = RouteHandlerNode;