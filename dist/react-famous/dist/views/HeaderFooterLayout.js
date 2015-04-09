"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousRenderNode = _interopRequire(require("famous/core/RenderNode"));

var FamousHeaderFooterLayout = _interopRequire(require("famous/views/HeaderFooterLayout"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var HeaderFooterLayout = (function (_FamousComponent) {
  function HeaderFooterLayout() {
    _classCallCheck(this, HeaderFooterLayout);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(HeaderFooterLayout, _FamousComponent);

  _createClass(HeaderFooterLayout, {
    famousCreate: {
      value: function famousCreate() {
        return new FamousHeaderFooterLayout(this.props.options);
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var headerFooterlayout = this.getFamous();
        var node = parentNode.add(headerFooterlayout);
        var next = [[this.refs.content, headerFooterlayout.content], [this.refs.footer, headerFooterlayout.footer], [this.refs.header, headerFooterlayout.header]];
        return [node, next];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var headerFooterlayout = this.getFamous();

        headerFooterlayout.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        var _this = this;

        var children = [];

        React.Children.forEach(this.props.children, function (child) {
          switch (child.type) {
            case HeaderFooterLayout.Content:
              children.push(_this.createFamousWrapper(child, { key: "content", ref: "content" }));
              break;
            case HeaderFooterLayout.Footer:
              children.push(_this.createFamousWrapper(child, { key: "footer", ref: "footer" }));
              break;
            case HeaderFooterLayout.Header:
              children.push(_this.createFamousWrapper(child, { key: "header", ref: "header" }));
              break;
            default:
              break;
          }
        });

        return React.createElement(
          "div",
          { "data-famous": "HeaderFooterLayout" },
          children
        );
      }
    }
  });

  return HeaderFooterLayout;
})(FamousComponent);

;

HeaderFooterLayout.Content = (function (_FamousComponent2) {
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
          { "data-famous": "HeaderFooterLayout.Content" },
          this.getFamousChildren()
        );
      }
    }
  });

  return _class;
})(FamousComponent);

HeaderFooterLayout.Footer = (function (_FamousComponent3) {
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
          { "data-famous": "HeaderFooterLayout.Footer" },
          this.getFamousChildren()
        );
      }
    }
  });

  return _class2;
})(FamousComponent);

HeaderFooterLayout.Header = (function (_FamousComponent4) {
  var _class3 = function () {
    _classCallCheck(this, _class3);

    if (_FamousComponent4 != null) {
      _FamousComponent4.apply(this, arguments);
    }
  };

  _inherits(_class3, _FamousComponent4);

  _createClass(_class3, {
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
          { "data-famous": "HeaderFooterLayout.Header" },
          this.getFamousChildren()
        );
      }
    }
  });

  return _class3;
})(FamousComponent);

defaults(HeaderFooterLayout, FamousHeaderFooterLayout);

module.exports = HeaderFooterLayout;