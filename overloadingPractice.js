function overLoad1(value, value1) {
    if (value && typeof value === 'number') {
        console.log(Math.pow(value, 2) / Math.sqrt(value));
    }
    else if (value && typeof value === 'string') {
        console.log("\"".concat(value.trim(), "\", \"").concat(value1 === null || value1 === void 0 ? void 0 : value1.trim(), "\""));
    }
    else if (Array.isArray(value)) {
        value.map(function (currentVal, index) {
            if (typeof currentVal === 'string') {
                console.log("\"".concat(currentVal.trim(), "\""));
            }
            else if (typeof currentVal === 'number') {
                if (index % 2 == 0) {
                    console.log(Math.sqrt(currentVal));
                }
                else {
                    console.log(Math.pow(currentVal, 3));
                }
            }
        });
    }
}
overLoad1(3); // print square root of 3
overLoad1(" Hitesh ", " Hello "); // trim name
overLoad1(["Apple ", " Mango", " banana "]); // Unable to find output
overLoad1([3, 4, 5, 6, 7, 9, 23, 43, 33]); // Unable to find output
