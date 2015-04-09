"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var FamousImageSurface = _interopRequire(require("famous/surfaces/ImageSurface"));

var defaults = _interopRequire(require("lodash/object/defaults"));

var React = _interopRequire(require("react"));

var FamousComponent = _interopRequire(require("../lib/FamousComponent"));

var FamousConstants = _interopRequire(require("../lib/FamousConstants"));

var ImageSurface = (function (_FamousComponent) {
  function ImageSurface() {
    _classCallCheck(this, ImageSurface);

    if (_FamousComponent != null) {
      _FamousComponent.apply(this, arguments);
    }
  }

  _inherits(ImageSurface, _FamousComponent);

  _createClass(ImageSurface, {
    famousCreate: {
      value: function famousCreate() {
        var _this = this;

        var imageSurface = new FamousImageSurface(this.props.options);

        FamousConstants.SURFACE_EVENTS.forEach(function (event) {
          if (_this.props[event.prop]) {
            imageSurface.on(event.type, function () {
              _this.props[event.prop](_this.props.eventKey);
            });
          }
        });

        return imageSurface;
      }
    },
    famousCreateNode: {
      value: function famousCreateNode(parentNode) {
        var imageSurface = this.getFamous();
        var node = parentNode.add(imageSurface);
        return [node, null];
      }
    },
    famousUpdate: {
      value: function famousUpdate(nextProps) {
        var imageSurface = this.getFamous();

        imageSurface.setOptions(nextProps.options);
      }
    },
    render: {
      value: function render() {
        return React.createElement("div", { "data-famous": "ImageSurface" });
      }
    }
  });

  return ImageSurface;
})(FamousComponent);

defaults(ImageSurface, FamousImageSurface);

ImageSurface.propTypes = defaults({}, FamousConstants.SURFACE_PROPTYPES);

module.exports = ImageSurface;