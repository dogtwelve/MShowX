"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var isEqual = _interopRequire(require("lodash/lang/isEqual"));

var isFunction = _interopRequire(require("lodash/lang/isFunction"));

var values = _interopRequire(require("lodash/object/values"));

var React = _interopRequire(require("react"));

var shallowEqual = _interopRequire(require("react/lib/shallowEqual"));

var FamousNodeMixin = _interopRequire(require("./FamousNodeMixin"));

var FamousScheduler = _interopRequire(require("./FamousScheduler"));

var FamousUtil = _interopRequire(require("./FamousUtil"));

module.exports = {
  mixins: [FamousNodeMixin],

  propTypes: {
    options: React.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      options: {}
    };
  },

  componentWillMount: function componentWillMount() {
    if (!this.famousContext) {
      if (isFunction(this.famousCreate)) {
        this.setFamous(this.famousCreate());
      }
      if (isFunction(this.famousUpdate)) {
        this.famousUpdate(this.props, this.state);
      }
    }
  },

  _createFamousNode: function _createFamousNode(component) {
    var _this = this;

    var parentNode = arguments[1] === undefined ? null : arguments[1];

    if (FamousUtil.isFamous(component)) {
      if (isFunction(component.famousCreateNode)) {
        var _component$famousCreateNode = component.famousCreateNode(parentNode);

        var _component$famousCreateNode2 = _slicedToArray(_component$famousCreateNode, 2);

        var node = _component$famousCreateNode2[0];
        var next = _component$famousCreateNode2[1];

        component.setFamousNode(node);
        (next || []).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2);

          var child = _ref2[0];
          var parentNode = _ref2[1];

          _this._createFamousNode(child, parentNode);
        });
      }
    } else {
      var instance = FamousUtil.getInstance(component);
      FamousUtil.getFamousChildren(instance).forEach(function (child) {
        _this._createFamousNode(child, parentNode);
      });
    }
  },

  componentDidMount: function componentDidMount() {
    if (this.famousContext) {
      if (isFunction(this.famousCreate)) {
        this.setFamous(this.famousCreate());
      }
      if (isFunction(this.famousUpdate)) {
        this.famousUpdate(this.props, this.state);
      }
      this._createFamousNode(this);
      setTimeout(FamousScheduler.run);
    }
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState) || !isEqual(this.props.options, nextProps.options);
  },

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    if (isFunction(this.famousUpdate)) {
      this.famousUpdate(nextProps, nextState);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    if (isFunction(this.famousDelete)) {
      this.famousDelete();
    }
    this.releaseFamous();
  }
};