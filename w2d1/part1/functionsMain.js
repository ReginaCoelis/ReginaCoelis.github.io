(function() {

    "use strict";

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, found) {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    function assertArray(expected, found) {
        if (JSON.stringify(expected) === JSON.stringify(found)) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }

    /* max returns the maximum of 2 arguments */
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        };
    }
    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

    /* max3 takes 3 numbers as arguments and returns the largest */
    function maxOfThree(a, b, c) {
        return max(max(a, b), c);
    }

    /* isVowel takes a single character and returns a boolean  **/
    function isVowel(a) {
        if (a.length > 1) return false;
        let flag = false;
        //Vowels
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        vowels.forEach(function(value, index, vowels) {
            if (a === value) {
                flag = true;
            }
        })
        return flag;
    }

    /*  sum takes an array and returns the sum */
    function sum(n) {
        return n.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        })
    }

    /* multipy takes an array and returns the result */
    function multiply(n) {
        return n.reduce(function(previousValue, currentValue) {
            return previousValue * currentValue;
        })
    }

    /* reverse takes a string and returns a reversed string */
    function reverse(keyword) {
        if (keyword.length == 0) return '';
        let lastChar = keyword.substring(keyword.length - 1);
        let remaining = keyword.substring(0, keyword.length - 1);
        return lastChar + "" + reverse(remaining);
    }

    /* findLongestWords and returns the longest word */
    function findLongestWords(words) {
        let longestWord = '';
        words.forEach(function(value, index, words) {
            if (longestWord.length < value.length)
                longestWord = value;
        })
        return longestWord;
    }

    /* filterLongWords and returns an array of words greate than i */
    function filterLongWords(words, i) {
        let filter = [];
        words.filter(function(value) {
            if (value.length > i) {
                filter.push(value)
            }
        })

        return filter;
    }


    const a = [1, 3, 5, 3, 3];

    /* multiplyEachBy10 and returns array of numbers multiplied by 10*/
    function multiplyEachBy10() {
        return a.map(function(value, i, array) {
            return value * 10;
        })
    }

    /* filterBy3 filter array for values equal to 3 */
    function filterBy3() {
        return a.filter(function(value, i, array) {
            return (value == 3)
        })
    }

    /* productOfAllElem returns the product of all elements */
    function productOfAllElem() {
        return a.reduce(function(previousValue, currentValue) {
            return previousValue * currentValue;
        })
    }





    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

    console.log("Expected output of isVowel('a') is true " + myFunctionTest(true, isVowel('a')));

    console.log("Expected output of sum([1,2,3]) is 6  " + myFunctionTest(6, sum([1, 2, 3])));

    console.log("Expected output of multiply([1,2,3]) is 60 " + myFunctionTest(60, multiply([10, 2, 3])));

    console.log("Expected output of reverse('Regina') is anigeR " + myFunctionTest('anigeR', reverse('Regina')));

    console.log("Expected output of findLongestWords(['regina','coelis','kandekere']) is kandekere" + myFunctionTest('kandekere', findLongestWords(['regina','coelis','kandekere'])));


    console.log("Expected output of filterLongWords(['regina','coelis','kandekere'],6) is ['kandekere'] " + assertArray(['kandekere'], filterLongWords(['regina','coelis','kandekere'], 9)));


    console.log("Expected output of  multiplyEachBy10() is [10,30,50,30,30] " + assertArray([10, 30, 50, 30, 30], multiplyEachBy10()));

    console.log("Expected output of filterBy3() is [3,3,3] " + assertArray([3, 3, 3], filterBy3()));

    console.log("Expected output of productOfAllElem() is 135 " + myFunctionTest(135, productOfAllElem()))


   /** mocha unit testing */
   describe("intro to js unit ", function() {
    it("maxOfThree(5,4,44) is 44", function() {
        assert.equal(maxOfThree(5, 4, 44), 44);
    })

    it("maxOfThree(55,4,44) is 55", function() {
        assert.equal(maxOfThree(55, 4, 44), 55)
    })

    it("sum([1,2,3]) is 6", function() {
        assert.equal(sum([1, 2, 3]), 6);
    })

    it("multiply([1,2,3]) is 60", function() {
        assert.equal(multiply([10, 2, 3]), 60);
    })

    it("reverse('Regina') is anigeR", function() {
        assert.equal(reverse('Regina'), 'anigeR');
    })

    it("findLongestWords(['regina','coelis','kandekere']) is kandekere", function() {
        assert.equal(findLongestWords(['regina','coelis','kandekere']), 'kandekere')
    })

    it("filterLongWords(['regina','coelis','kandekere'],6) is ['kandekere']", function() {
        assert.equal(filterLongWords(['regina','coelis','kandekere'], 6).toString(), ['kandekere'].toString())
    })

    it("multiplyEachBy10() is [10,30,50,30,30]", function() {
        assert.equal(multiplyEachBy10().toString(), [10, 30, 50, 30, 30].toString())
    })

    it("filterBy3() is [3,3,3]", function() {
        assert.equal(filterBy3().toString(), [3, 3, 3].toString())
    })

    it("productOfAllElem() is 135", function() {
        assert.equal(productOfAllElem(), "135");
    })
})

}());

