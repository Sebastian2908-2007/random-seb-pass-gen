 // Assignment code here
 // symbols for password, variables

 var generateBtn = document.querySelector("#generate");

var textBox = document.getElementById("password")


 //password function
 function writePassword() {    
   function generatePassword()   {
    var length = prompt("how many characters will your password be ?"); 
    if (length < 8) {
      alert("password must be atleast 8 characters long!!!please try again!")
      return;
    }if (length > 128){
      alert("seriously who needs a password that long? the pentagon?, try again SMH...")
      return;
    }
    var charType = prompt("Enter character type for password: special, numeric, uppercase, lowercase,all.");
     var charSet = "";
    if( charType.toLowerCase() === "lowercase" ) {
      charSet = "abcdefghijklmnopqrstuvwxyz";
    }else if( charType.toLowerCase() === "uppercase" ) {
       charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     }else if( charType.toLowerCase() === "numeric") {
      charSet = "0123456789123456789123456789123456789";
     }else if(charType.toLowerCase() === "special") {
       charSet = "!@#$%^&*()_+=/?><`~{}[]\|;:!@#$%^&*()_+=-+_)(*&^%$#@!!@#$%^&*()_+";
     }else if(charType.toLowerCase() === "all") {
       charSet ="1a2B3R6*{]$sewvkggAWCGB&^$#12494Ttas()45MBVDTHskytvCD%^&#@"
     }else {alert("please enter valid length and charecture type!!!")}
     //return value
    var retVal = "";
    // for (var i = 0, n = charSet.length; i < length; i++) {
      for (var i = 0, n = length; i < length; i++) {
        //picks charecture inside charSet at random
         retVal += charSet.charAt(Math.floor(Math.random()* n));
       }
       // console.log(retVal);
   return retVal;
  
  };
   //alert(generatePassword());
 textBox.innerHTML = generatePassword()


 };


 generateBtn.addEventListener("click", writePassword);







