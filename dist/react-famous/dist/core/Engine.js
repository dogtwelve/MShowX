"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var FamousEngine = _interopRequire(require("famous/core/Engine"));

// import ReactUpdates from 'react/lib/ReactUpdates';

require("../lib/FamousPatch");

// ReactUpdates.injection.injectBatchingStrategy({
//   isBatchingUpdates: true,
//   batchedUpdates(callback, param) {
//     callback(param);
//   }
// });
// FamousEngine.on('prerender', ReactUpdates.flushBatchedUpdates.bind(ReactUpdates));

FamousEngine.setOptions({
  appMode: false
});

module.exports = FamousEngine;