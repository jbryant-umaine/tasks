/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newArray = numbers.filter((e, index) => {
        if (index === 0 || index === numbers.length - 1) return e;
    });
    if (newArray.length === 1) newArray.push(numbers[0]);
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let newArray = numbers.map((e) => e * 3);
    return newArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let newArray: number[] = numbers.map((e) => {
        let num = parseInt(e);
        if (isNaN(num)) return 0;
        return num;
    });
    return newArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let newArray: number[] = amounts.map((e) => {
        if (e.startsWith("$")) {
            e = e.substring(1);
        }
        let num = parseInt(e);
        if (isNaN(num)) return 0;
        return num;
    });
    return newArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newArray: string[] = messages
        .filter((e) => !e.endsWith("?"))
        .map((e) => {
            if (e.endsWith("!")) {
                e = e.toUpperCase();
            }
            return e;
        });
    return newArray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let newArray: string[] = words.filter((e) => e.length < 4);
    return newArray.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (!colors.length) return true;

    let validColors = colors.every(
        (e) => e === "red" || e === "green" || e === "blue",
    );

    return validColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (!addends.length) return "0=0";

    const sum = addends.reduce((total, num) => total + num, 0);

    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex((number) => number < 0);

    const sum = values
        .slice(
            0,
            firstNegativeIndex === -1 ? values.length : firstNegativeIndex,
        )
        .reduce((total, num) => total + num, 0);

    if (firstNegativeIndex === -1) {
        return [...values, sum];
    } else {
        return [
            ...values.slice(0, firstNegativeIndex + 1),
            sum,
            ...values.slice(firstNegativeIndex + 1),
        ];
    }
}
