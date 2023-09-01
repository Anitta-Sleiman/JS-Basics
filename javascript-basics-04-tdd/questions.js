
const stringSize = (text) => {
    return text.length;
};
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
};
const concatString = (text1, text2) => {
    return (text1 + text2);
};
const showChar5 = (text) => {
    return (text.charAt(4));
};
const showChar9 = (text) => {
    return text.slice(0, 9);
};
const toCapitals = (text) => {
    return text.toUpperCase();
};
const toLowerCase = (text) => {
    return text.toLowerCase();
};
const removeSpaces = (text) => {
    return text.trim();
};
const IsString = (text) => {
    return typeof text === "string";
};

const getExtension = (text) => {
    return text.split(".").pop();
};
const countSpaces = (text) => {
    return text.split(" ").length - 1;
};
const InverseString = (text) => {
    return text.split("").reverse().join("");
};

const power = (x, y) => {
    return Math.pow(x, y);
};
const absoluteValue = (num) => {
    return Math.abs(num);
};
const absoluteValueArray = (array) => {
    return array.map((value) => Math.abs(value));
};
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
};
const hypothenuse = (ab, ac) => {
    return Math.sqrt(ab * ab + ac * ac);
};
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
};

const createLanguagesArray = () => {
    const languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
};

const createNumbersArray = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
    return numbers;
};

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
};

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
};

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
    return numbers;
};

const removeFirst = (languages) => {
    languages.shift();
    return languages;
};

const removeLast = (languages) => {
    languages.pop();
    return languages;
};

const convertStrToArr = (social_arr) => {
    const strToaArr = social_arr.split(",");
    return strToaArr;
};

const convertArrToStr = (languages) => {
    const arrToStr = languages.join();
    return arrToStr;
};

const sortArr = (social_arr) => {
    return social_arr.sort();
};

const invertArr = (social_arr) => {
    return social_arr.reverse();
};