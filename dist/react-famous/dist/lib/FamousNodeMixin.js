"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var merge = _interopRequire(require("lodash/object/merge"));

var React = _interopRequire(require("react"));

var FAMOUS_KEY = "__famous__";
var FAMOUS_NODE_KEY = "__famous_node__";

module.exports = {
  createFamousWrapper: function createFamousWrapper(child, props) {
    return React.createElement("div", merge({
      "data-famous": "Wrapper"
    }, props), child);
  },

  getFamous: function getFamous() {
    return this[FAMOUS_KEY];
  },

  getFamousNode: function getFamousNode() {
    return this[FAMOUS_NODE_KEY];
  },

  getFamousChildren: function getFamousChildren() {
    var _this = this;

    var result = [];
    var children = React.Children.forEach(this.props.children, function (child, idx) {
      result.push(_this.createFamousWrapper(child, { key: idx, ref: idx }));
    });
    return result;
  },

  getFamousChildrenRef: function getFamousChildrenRef() {
    var _this = this;

    return this.getFamousChildren().map(function (child, idx) {
      return _this.refs[idx];
    });
  },

  releaseFamous: function releaseFamous() {
    delete this[FAMOUS_KEY];
    delete this[FAMOUS_NODE_KEY];
  },

  setFamous: function setFamous(famousInstance) {
    this[FAMOUS_KEY] = famousInstance;
  },

  setFamousNode: function setFamousNode(famousNode) {
    this[FAMOUS_NODE_KEY] = famousNode;
  }
};