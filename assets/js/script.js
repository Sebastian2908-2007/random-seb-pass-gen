// Assignment code here
// symbols for password, variables

var generateBtn = document.querySelector("#generate");
var length = prompt("how many charectures will your password be ?"); 
var charType = prompt("Enter character type for password: special, numeric, uppercase, lowercase.");



//password function
function writePassword() {     
  function generatePassword()   {
    var charSet = "";
    if( charType.toLowerCase() === "lowercase" ) {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    }else if( charType.toLowerCase() === "upercase" ) {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }else if( charType.toLowerCase() === "numeric") {
      charSet = "0123456789";
    }else if(charType.toLowerCase() === "special") {
      charSet = "!@#$%^&*()_+=/?><`~{}[]\|;:";
    }
    //return value
    var retVal = "";
    //for (var i = 0, n = charSet.length; i < length; i++) {
      for (var i = 0, n = length; i < length; i++) {
        //picks charecture inside charSet at random
        retVal += charSet.charAt(Math.floor(Math.random()* n));
      }
      console.log(retVal);
  return retVal;
  
  }
  alert(generatePassword());
 


};

generateBtn.addEventListener("click", writePassword);






























//function generatePassword() {
  //var charSet = "";
  //if (charType.toLowerCase === "lowercase") {
    //charSet = "abcdefghijklmnopqrstuvwxyz";
  //} else if (charType.toLowerCase === "upercase") {
    //charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //} else if (charType.toLowerCase === "numeric") {
    //charSet = "0123456789";
  //} else if (charType.toLowerCase === "special") {
    //charSet = "!@#$%^&*()_+=/?><`~{}[]\|;:";
  //}
  //return value
  //var retVal = "";
  //for (var i = 0, n = charSet.length; i < length; i++) {
  //for (var i = 0, n = length; i < length; i++) {
    //picks charecture inside charSet at random
    //retVal += charSet.charAt(Math.floor(Math.random() * n));
  //}
  //return retVal;};





// Get references to the #generate element
// this is the button!!!
//****var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//****function writePassword() {
  //****var password = generatePassword();
  //****var passwordText = document.querySelector("#password");

  //****passwordText.value = password;



// Add event listener to generate button
//****generateBtn.addEventListener("click", writePassword);

