"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var ElementAllocator = _interopRequire(require("famous/core/ElementAllocator"));

var _allocate = ElementAllocator.prototype.allocate;

ElementAllocator.prototype.allocate = function () {
  var result = _allocate.apply(this, arguments);
  this.container.appendChild(result);
  return result;
};