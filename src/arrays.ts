/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length !== 0) {
        if (numbers.length === 1) {
            return [...numbers, ...numbers];
        }
        const newNumbers = [numbers[0], numbers[numbers.length - 1]];
        return newNumbers;
    } else {
        return [...numbers];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number => {
        return !isNaN(parseInt(num)) ? parseInt(num) : 0;
    });
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nums = amounts.map((amount: string): number => {
        if (amount.indexOf("$") !== -1) {
            const newAmt = amount.replace("$", "");
            return !isNaN(parseInt(newAmt)) ? parseInt(newAmt) : 0;
        } else {
            return !isNaN(parseInt(amount)) ? parseInt(amount) : 0;
        }
    });
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMsgs = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const finalMsgs = newMsgs.map((message: string): string => {
        if (message[message.length - 1] === "!") {
            return message.toUpperCase();
        }
        return message;
    });
    return finalMsgs;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const lessThan4 = words.filter((word: string): boolean => word.length < 4);
    return lessThan4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const allRGB = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    if (allRGB.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum = 0;
    addends.map((num: number): void => {
        sum = sum + num;
    });
    return sum + "=" + addends.join("+"); //sumStr;
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
    const newValues = [...values];
    let sum = 0;
    let insertedSum = false;

    values.map((value: number, index: number): void => {
        if (value >= 0) {
            sum += value;
        }
        if (value < 0 && !insertedSum) {
            newValues.splice(index + 1, 0, sum);
            insertedSum = true;
        }
    });
    if (!insertedSum) {
        newValues.push(sum);
    }
    return newValues;
}
