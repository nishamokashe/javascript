function stringHandson(){
    string="    Hey you are doing good, keep it up   ";
    console.log(string);}
    stringHandson();
    
     
    var string = "   Hey you are doing good, keep it up   ";
    var stringLength = string.length;
    console.log("Calculate len of string is: ", stringLength);
    
    var trimmedstring = string.trim();
    var lengthAfterTrim = trimmedstring.length;
    console.log("remove leading and trailing extra spaces: ",trimmedstring.length );
    console.log(" total spaces : ", stringLength-lengthAfterTrim);
    
    var charIndex = string.charAt(2);
    console.log("Char at starting index: ",charIndex);  
    
    var charAtLastIndex = string.charAt(string.length-4);
    console.log("Char at last index: ",charAtLastIndex);
    
    
    var resultSplit = string.split(" ");
    console.log(resultSplit);
    console.log("Total number of words: ",resultSplit.length);
    
    var indexOfGood = string.indexOf("good")
    console.log("Index of good is: ", indexOfGood);
    
    var sliceResult =string.slice(22);
    console.log("Slice Result is: ", sliceResult);
    
    var subStringResult = string.substring(22);
    console.log("Substring result is: ", subStringResult);
    
    var result = string.startsWith("Hey");
    console.log(` Is ${string} starts with character E: ${result}`);
    
    var result =string.endsWith("E");
    console.log(` Is ${string} end with character E: ${result}`);
    
    
    var stringLength = string.length;
    console.log("Calculate len of string is: ", stringLength);