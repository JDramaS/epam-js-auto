//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const testStr = 'ahb acb aeb aeeb adcb axeb';
const regExp = /[a].[b]/gm
console.log(testStr.match(regExp));
//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const testStr2 = '2 + 3 223 2223';
console.log(testStr2.match(/2\s[+]\s3/gm));
//Get the day, month and year of the current date and output it to the console separately
let date = new Date();
console.log(date.getFullYear(), date.getMonth(), date.getDate());