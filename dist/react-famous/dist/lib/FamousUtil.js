"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.getFamousChildren = getFamousChildren;
exports.getFamousParent = getFamousParent;
exports.getInstance = getInstance;
exports.getOwner = getOwner;
exports.isFamous = isFamous;
exports.renderContent = renderContent;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var isFunction = _interopRequire(require("lodash/lang/isFunction"));

var values = _interopRequire(require("lodash/object/values"));

var React = _interopRequire(require("react"));

var ReactInstanceMap = _interopRequire(require("react/lib/ReactInstanceMap"));

function _buildTraversePath(fromAncestor, toDescendant) {
  if (fromAncestor === toDescendant) {
    return [fromAncestor];
  }
  var component = undefined;
  fromAncestor = getInstance(fromAncestor);
  if (component._renderedComponent) {
    var traversePath = undefined;
    if (isFunction(component._renderedComponent.getPublicInstance)) {
      traversePath = _buildTraversePath(component._renderedComponent.getPublicInstance(), toDescendant);
    } else {
      traversePath = _buildTraversePath(component._renderedComponent, toDescendant);
    }
    if (traversePath) {
      return [fromAncestor].concat(traversePath);
    }
  } else if (component._renderedChildren) {
    var children = values(component._renderedChildren);
    for (var i = 0; i < children.length; ++i) {
      var child = children[i];
      var traversePath = _buildTraversePath(child.getPublicInstance(), toDescendant);
      if (traversePath) {
        return [fromAncestor].concat(traversePath);
      }
    }
  }
  return null;
}

function _findKeyFromNearestDescendant(traversePath, root) {
  for (var i = 0; i < traversePath.length; ++i) {
    if (traversePath[i] === root) {
      var descendants = traversePath.slice(i + 1);
      for (var j = 0; j < descendants.length; ++j) {
        var descendant = descendants[j];
        descendant = getInstance(descendant);
        if (descendant._currentElement.key) {
          return descendant._currentElement.key;
        }
      }
      break;
    }
  }
  return null;
}

function _findNearestFamousAncestor(_x2) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    _again = false;
    var component = _x2;
    searchedSubpath = owner = traversePath = famousTraversePath = _searchedSubpath = undefined;
    var searchedSubpath = _arguments[1] === undefined ? [] : _arguments[1];

    var owner = getOwner(component);
    if (!owner || owner === component) {
      return null;
    }
    var traversePath = _buildTraversePath(owner, component).concat(searchedSubpath);
    var famousTraversePath = traversePath.slice(0, -1).filter(isFamous);
    if (famousTraversePath.length) {
      return famousTraversePath.slice(-1)[0];
    } else {
      var _searchedSubpath = traversePath.slice(1);
      _arguments = [_x2 = owner, _searchedSubpath];
      _again = true;
      continue _function;
    }
  }
}

function getFamousChildren(component) {
  if (component._renderedComponent && isFunction(component._renderedComponent.getPublicInstance)) {
    return [component._renderedComponent.getPublicInstance()];
  }
  var instance = component;
  while (instance._renderedComponent && !instance._renderedChildren) {
    instance = instance._renderedComponent;
  }
  if (instance._renderedChildren) {
    return values(instance._renderedChildren).map(function (child) {
      return child.getPublicInstance();
    });
  }
  return [];
}

function getFamousParent(component) {
  return _findNearestFamousAncestor(component);
}

function getInstance(component) {
  if (ReactInstanceMap.has(component)) {
    return ReactInstanceMap.get(component);
  }
  return component;
}

function getOwner(component) {
  var pointer = getInstance(component);
  var owner = null;
  do {
    pointer = pointer._currentElement._owner;
    if (!pointer) {
      break;
    }
    owner = pointer._renderedComponent.getPublicInstance();
  } while (owner === component);
  return owner;
}

function isFamous(component) {
  var FamousComponent = require("./FamousComponent");
  return component instanceof FamousComponent;
}

function renderContent(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (obj) {
      return renderContent(obj);
    }).join("");
  } else if (React.isValidElement(obj)) {
    return React.renderToString(obj);
  } else {
    return obj;
  }
}

exports["default"] = {
  getFamousChildren: getFamousChildren,
  getFamousParent: getFamousParent,
  getInstance: getInstance,
  getOwner: getOwner,
  isFamous: isFamous,
  renderContent: renderContent
};