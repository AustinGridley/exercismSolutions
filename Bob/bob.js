export const hey = (message) => {
  //gets rid of extra space this will help simplify silence
  var message = message.trim();
  //finds if the question mark is at the end of the input
  var questionMark = message.length-1;
  //defined the output
  var output = "";
  //this if statement finds if the input is in caps and is a question and returns the appropriate output
  if ((message.toUpperCase() === message && message.match(/[A-Za-z]/)) && (message.charAt(questionMark) == '?')) {
    output = "Calm down, I know what I'm doing!";
    return output;
  }
  //this if statement finds if the input is in caps and returns the approriate output
  if (message.toUpperCase() === message && message.match(/[A-Za-z]/)){
    output = "Whoa, chill out!";
    return output;
  }
  //this if statement finds if the input was some form of silence and returns the appropriate output
  if (message==""){
    output = "Fine. Be that way!";
    return output;
  }
  // this if statement finds if the input was a question and returns the approriate output
  if (message.charAt(questionMark) == '?') {
    output = "Sure.";
    return output;
}
//most of the scenarios have an output of whatever so if the input is not one of these exceptions bob says whatever in this else statement
else {
  output = "Whatever."
  return output;
}
  }

