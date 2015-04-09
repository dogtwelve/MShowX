"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var FamousMixin = _interopRequire(require("./FamousMixin"));

module.exports = React.createClass({
  displayName: "FamousComponent",

  mixins: [FamousMixin],

  render: function render() {}
});

// Override me