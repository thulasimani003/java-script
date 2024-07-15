function ispalindrome(str){
    const rs=str.split('').reverse().join('');
    if (str==rs){
        console.log(`the given string "${str}" is a palindrome`);
    }
    else{
        console.log(`the given string "${str}" is not a palindrome`)
    }
}
(ispalindrome("malayalam"));
(ispalindrome("hello"));
