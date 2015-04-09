"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

exports.schedule = schedule;
exports.run = run;
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _callbacks = [];

function schedule(cb, delay) {
  _callbacks.push([cb, delay]);
}

function run() {
  while (_callbacks.length) {
    var _callbacks$shift = _callbacks.shift();

    var _callbacks$shift2 = _slicedToArray(_callbacks$shift, 2);

    var cb = _callbacks$shift2[0];
    var delay = _callbacks$shift2[1];

    if (delay) {
      setTimeout(cb, delay);
    } else {
      cb();
    }
  }
}

exports["default"] = {
  schedule: schedule,
  run: run
};