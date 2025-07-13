export default function reverseString(str) {
    if (!str) return '';
    else {
        let rev = '';
        let strLen = str.length - 1;
        while (rev.length != str.length) {
            rev += str[strLen];
            strLen--;
        }
        return rev;
    }
}