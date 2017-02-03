"use strict";
function hasClassName(element, className) {
    return element.classList.contains(className);
}
exports.hasClassName = hasClassName;
function getElementByClassName(element, className) {
    var nodes = element.getElementsByClassName(className);
    if (nodes.length > 0) {
        return nodes[0];
    }
    return null;
}
exports.getElementByClassName = getElementByClassName;
function getParentElementByClassName(element, className, topParentElementClassName) {
    var parent = element.parentElement;
    while (parent) {
        if (hasClassName(parent, className))
            return parent;
        if (topParentElementClassName && hasClassName(parent, topParentElementClassName))
            return null;
        parent = parent.parentElement;
    }
    return null;
}
exports.getParentElementByClassName = getParentElementByClassName;
function getSelfOrParentElementByClassName(element, className, topParentElementClassName) {
    if (hasClassName(element, className))
        return element;
    return getParentElementByClassName(element, className, topParentElementClassName);
}
exports.getSelfOrParentElementByClassName = getSelfOrParentElementByClassName;
function isSelfOrChildOf(element, parent, topParent) {
    if (element === parent) {
        return true;
    }
    var par = element.parentElement;
    while (par) {
        if (par === parent) {
            return true;
        }
        if (par === topParent) {
            return false;
        }
        par = par.parentElement;
    }
}
exports.isSelfOrChildOf = isSelfOrChildOf;
//# sourceMappingURL=index.js.map