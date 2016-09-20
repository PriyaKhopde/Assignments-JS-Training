function isPalindrome(str) {
    return str == str.split('').reverse().join('');
}

isPalindrome("i ama i");
isPalindrome("hello mike");
