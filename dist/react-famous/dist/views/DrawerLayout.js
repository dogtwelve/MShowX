"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousRenderNode = _interopRequire(require("famous/core/RenderNode"));

var FamousDrawerLayout = _interopRequire(require("famous/views/DrawerLayout"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var DrawerLayout = (function (_FamousComponent) {
  function DrawerLayout() {
    _classCallCheck(this, DrawerLayout);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(DrawerLayout, _FamousComponent);

  _createClass(DrawerLayout, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousDrawerLayout(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var drawerLayout = this.getFamous();
        var node = parentNode.add(drawerLayout);
        var next = [[this.refs.content, drawerLayout.content], [this.refs.drawer, drawerLayout.drawer]];
        return [node, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var drawerLayout = this.getFamous();

        drawerLayout.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        var _this = this;

        var children = [];

        React.Children.forEach(this.props.children, function (child) {
          switch (child.type) {
            case DrawerLayout.Content:
              children.push(_this.createFamousWrapper(child, { key: "content", ref: "content" }));
              break;
            case DrawerLayout.Drawer:
              children.push(_this.createFamousWrapper(child, { key: "drawer", ref: "drawer" }));
              break;
            default:
              break;
          }
        });

        return React.createElement(
          "div",
          { "data-famous": "DrawerLayout" },
          children
        );
      }
    }
  });

  return DrawerLayout;
})(FamousComponent);

;

DrawerLayout.Content = (function (_FamousComponent2) {
  var _class = function () {
    _classCallCheck(this, _class);

    if (_FamousComponent2 != null) {
      _FamousComponent2.apply(this, arguments);
    }
  };

  _inherits(_class, _FamousComponent2);

  _createClass(_class, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousRenderNode();
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var renderNode = this.getFamous();
        var node = parentNode.add(renderNode);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, node];
        });
        return [node, next];
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "DrawerLayout.Content" },
          this.getFamousChildren()
        );
      }
    }
  });

  return _class;
})(FamousComponent);

DrawerLayout.Drawer = (function (_FamousComponent3) {
  var _class2 = function () {
    _classCallCheck(this, _class2);

    if (_FamousComponent3 != null) {
      _FamousComponent3.apply(this, arguments);
    }
  };

  _inherits(_class2, _FamousComponent3);

  _createClass(_class2, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousRenderNode();
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var renderNode = this.getFamous();
        var node = parentNode.add(renderNode);
        var next = this.getFamousChildrenRef().map(function (child, idx) {
          return [child, node];
        });
        return [node, next];
      }
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { "data-famous": "DrawerLayout.Drawer" },
          this.getFamousChildren()
        );
      }
    }
  });

  return _class2;
})(FamousComponent);

defaults(DrawerLayout, FamousDrawerLayout);

module.exports = DrawerLayout;