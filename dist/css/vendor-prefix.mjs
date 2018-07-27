/**
 * Copy of https://github.com/jkroso/prefix
 */
var style = typeof document != 'undefined' ? document.createElement('p').style : {};
var prefixes = ["O", "ms", "Moz", "Webkit"];
var upper = /([A-Z])/g;
var memo = {};
/**
 * prefix `key`
 *
 *   prefix("transform") // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 */
function prefix(key) {
    // camel case
    key = key.replace(/-([a-z])/g, function (_, char) { return char.toUpperCase(); });
    // without prefix
    if (style[key] !== undefined)
        return key;
    // with prefix
    var prefixed = key.charAt(0).toUpperCase() + key.slice(1);
    var i = prefixes.length;
    while (i--) {
        var name_1 = prefixes[i] + prefixed;
        if (style[name_1] !== undefined)
            return name_1;
    }
    return key;
}
/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
export function cssVendorPrefix(key) {
    return key in memo ? memo[key] : memo[key] = prefix(key);
}
/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */
export function cssVendorPrefixDashed(key) {
    key = cssVendorPrefix(key);
    if (upper.test(key)) {
        key = "-" + key.replace(upper, "-$1");
        upper.lastIndex = 0;
    }
    return key.toLowerCase();
}
//# sourceMappingURL=vendor-prefix.js.map