(function () {
    "use strict";

    function forEach(collection, callBack) {
        var
            i = 0, // Array and string iteration
            iMax = 0, // Collection length storage for loop initialisation
            key = '', // Object iteration
            collectionType = '';

        // Verify that callBack is a function
        if (typeof callBack !== 'function') {
            throw new TypeError("forEach: callBack should be function, " + typeof callBack + "given.");
        }

        // Find out whether collection is array, string or object
        switch (Object.prototype.toString.call(collection)) {
        case "[object Array]":
            collectionType = 'array';
            break;

        case "[object Object]":
            collectionType = 'object';
            break;

        case "[object String]":
            collectionType = 'string';
            break;

        default:
            collectionType = Object.prototype.toString.call(collection);
            throw new TypeError("forEach: collection should be array, object or string, " + collectionType + " given.");
        }

        switch (collectionType) {
        case "array":
            // Fallthrough intended, array and string work similary for iteration
        case "string":
            for (i = 0, iMax = collection.length; i < iMax; i += 1) {
                callBack(i, collection[i]);
            }
            break;

        case "object":
            for (key in collection) {
                // Omit prototype chain properties and methods
                if (collection.hasOwnProperty(key)) {
                    callBack(key, collection[key]);
                }
            }
            break;

        default:
            throw new Error("Continuity error in forEach, this should not be possible.");
        }

        return null;
    }

    // Array example
    forEach(["a", "b", "c"], function (index, value) {
        console.log(index + ": " + value);
    });

    // Object example
    forEach({"foo": "bar", "barfoo": "foobar"}, function (key, value) {
        console.log(key + ": " + value);
    });

    // String example
    forEach("Hello, world!", function (index, character) {
        console.log(index + ": " + character);
    });

}());