"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousSurface = _interopRequire(require("famous/core/Surface"));

var isUndefined = _interopRequire(require("lodash/lang/isUndefined"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var FamousConstants = _interopRequire(require("../lib/FamousConstants"));

var FamousUtil = _interopRequire(require("../lib/FamousUtil"));

var Surface = (function (_FamousComponent) {
  function Surface() {
    _classCallCheck(this, Surface);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(Surface, _FamousComponent);

  _createClass(Surface, {
    famousCreate: {
      value: function famousCreate() {
        var _this = this;

        var surface = new FamousSurface(this.props.options);

        FamousConstants.SURFACE_EVENTS.forEach(function (event) {
          if (_this.props[event.prop]) {
            surface.on(event.type, function () {
              _this.props[event.prop](_this.props.eventKey);
            });
          }
        });

        return surface;
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var surface = this.getFamous();
        var node = parentNode.add(surface);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var surface = this.getFamous();
        var content = undefined;

        if (!isUndefined(nextProps.children)) {
          content = FamousUtil.renderContent(nextProps.children);
        }

        surface.setOptions(defaults({}, nextProps.options, { content: content }));
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "Surface" });
      }
    }
  });

  return Surface;
})(FamousComponent);

defaults(Surface, FamousSurface);

Surface.propTypes = defaults({}, FamousConstants.SURFACE_PROPTYPES);

module.exports = Surface;