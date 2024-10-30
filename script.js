function palindrome(myStr){
    let input = myStr.replace(/[^A-Z0-9]/ig,"").toLowerCase();

    let reverseInput = input.split("").reverse().join("");

    if (input === reverseInput){
        document.write("<div>" + myStr + " is a palindrome :) </div>")
    }
    else{
        document.write("<div>" + myStr + " is NOT a palindrome :( </div>")
    }
}

palindrome("eunjae")
palindrome("racar")