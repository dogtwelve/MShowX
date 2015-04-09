"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FamousSurface = _interopRequire(require("famous/core/Surface"));

var isArray = _interopRequire(require("lodash/lang/isArray"));

var isString = _interopRequire(require("lodash/lang/isString"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("./FamousComponent"));

var FamousReactNode = exports.FamousReactNode = (function (_FamousSurface) {
  function FamousReactNode(options, context) {
    _classCallCheck(this, FamousReactNode);

    _get(Object.getPrototypeOf(FamousReactNode.prototype), "constructor", this).call(this, options);

    this._reactContext = context;

    this.deploy = this.recall = function () {};

    this.on("deploy", this.onDeploy);
    this.on("recall", this.onRecall);
  }

  _inherits(FamousReactNode, _FamousSurface);

  _createClass(FamousReactNode, {
    onDeploy: {
      value: function onDeploy() {
        var content = this.getContent();
        var context = this._reactContext;
        var target = this._currentTarget;

        if (Array.isArray(content)) {
          content = React.createElement(
            "div",
            null,
            content
          );
        } else if (isString(content)) {
          content = React.createElement(
            "span",
            null,
            content
          );
        }

        if (React.isValidElement(content)) {
          if (context) {
            React.withContext(context, function () {
              React.render(content, target);
            });
          } else {
            React.render(content, target);
          }
        } else {
          throw new Error("Content is not a valid react component");
        }
      }
    },
    onRecall: {
      value: function onRecall() {
        var target = this._currentTarget;

        React.unmountComponentAtNode(target);
      }
    }
  });

  return FamousReactNode;
})(FamousSurface);

var ReactNode = exports.ReactNode = (function (_FamousComponent) {
  function ReactNode() {
    _classCallCheck(this, ReactNode);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(ReactNode, _FamousComponent);

  _createClass(ReactNode, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousReactNode(defaults(this.props.options, {
          properties: {
            overflow: "hidden"
          }
        }));
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var reactNode = this.getFamous();
        var node = parentNode.add(reactNode);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var reactNode = this.getFamous();
        var content = this.props.children;

        reactNode.setOptions(defaults({}, nextProps.options, { content: content }));
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "ReactNode" });
      }
    }
  });

  return ReactNode;
})(FamousComponent);

defaults(ReactNode, FamousReactNode);

exports["default"] = ReactNode;