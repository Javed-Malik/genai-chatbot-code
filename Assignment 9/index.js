// Assignment NO. 09

// Return the length of a given string.

let str = "javaScript"

function strlength(){
    let strlength = str.length
    console.log(strlength)
}
strlength()

// Concatenate two strings together.
 
let str1 = "abcd";
let str2 = "efgh";

function concat(){
    bothStr = str1.concat(str2)
    console.log(bothStr)
}
concat()


// Determine if a given string is empty.

let str3 = "  "

function checkstr(){
    if (str3.length==0){
        console.log("Given string is empty");
    } else{
        console.log("Given String is not empty")
    }
}
checkstr()

// Count the number of vowels in a string.

let str4 = "Muhammad Javed Aslam"

function checkVowel(str4){
    let count = 0
    let vowels = "aeiouAEIOU";
    for (let i = 0; i< str4.length; i++){
        if (vowels.includes(str4[i])){
            count++
        }
    }
    return count; 
}
console.log(checkVowel(str4))

// Reverse a given string.

    let str5 = "ABCDEFGH"
    let reversed = ""
    function reverse1(){
        for (i=str5.length-1 ; i>=0 ; i--){
            reversed = reversed + str5[i];
        }
        console.log(reversed)
   
    }
    reverse1()

// Convert a string to uppercase.

    let str6 = "Codding with Sir Ahmad"

    function ucase(str6){
       str6= str6.toUpperCase()
        console.log(str6);

    }
    ucase(str6)
// Find the first occurrence of a given character in a string.

    let str7 = "abcdefghjikl"
     let character = "f"

     function checkChar(character){
        let ocr = str7.indexOf(character)
        console.log(ocr);
     }
     checkChar(character)

// Replace all occurrences of a given character in a string with another character.

     let str8 = "look";


// Trim leading and trailing whitespace from a string.

     let str9 = "    Hello World  "

     function trimMe(str9){
        return str9.trim()
      }
     console.log(trimMe(str9))

// Count the number of words in a string.

      let str10 = "This is test string"

      function countWord(str10){
        return str10.split(" ").length
      }

     console.log(countWord(str10));

//  Check if a string contains only numeric characters.

      let str11 = "12345"

      function check(str11){
        for (let i = 0 ; i<str11.length; i++){
            const charCode = str11.charCodeAt(i);
            if (charCode < 48 || charCode > 57){
                return "No. teh string does not have all numeric characters"}
              }
              return str11.length>0 ? "yes, the string has all numeric characters" : "No, the string does not have all numeric characters"            }
            
        console.log(check(str11));

// Check if a string is a valid email address.

    let Email = "javed@gmai.com"
    const sample = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    function checkEmail(Email){
        if (sample.test(Email)){                 
                console.log("valid email Address")
            }
            else{
            console.log("Invalid Email Address")
        }}
    
    checkEmail(Email)


// Extract the domain name from a URL string

        let domain = "https://www.bing.com/search"

        function extractDomain(domain){
            let exctr = domain.slice(8)
        console.log(exctr)}

    extractDomain(domain)

//  Convert a string into title case (the first letter of each word capitalized).

            let str12 = "This is title Case Sentence."
        function titleCase (str12){
            let word = str12.split(" ");
            for(let i = 0; i<word.length; i++){
                word[i]= word[i].charAt(0).toUpperCase()+ word[i].slice(1)
            }
            console.log(word.join(" "))
        }

       titleCase(str12);

// Remove all non-alphabetic characters from a string.

        let str13 = "These are 13kg of apples"
    function cleanStr(str){
        console.log(str.replace(/[0-9]/g,"") )   //    /[0-9]/g, is a regular expression called character class.
    }
    cleanStr(str13);


//   Find the longest word in a string.

    let Sentence1 = "This is a longest sentence."

    function LongestWord(str) {
        const words = str.split(' ')
        let longestWord = '';
    
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
    
        console.log(longestWord);
    }
    LongestWord(Sentence1)
      
   
    
