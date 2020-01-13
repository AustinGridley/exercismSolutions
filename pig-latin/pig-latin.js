export class translator {
static translate(phrase) {
  //this will map and translate multiple words if they input multiple words otherwise it would only translate one word 
  // this also will make it so it translates one word at a time so that the words don't get tangled together
  return phrase.split(' ').map(this.translateWord).join(' ');
}
static translateWord(wordOutput) {
  //finds the length of the word input
  var wordInputLength = wordOutput.length;
  //saves the first three characters which I may need depending on the word
  var char0=wordOutput.charAt(0);
  var char1=wordOutput.charAt(1);
  var char2=wordOutput.charAt(2);
  //this if statement is if the input is not just one character etc
if (wordInputLength!=1){
  //this if statement finds if the input is a vowel or an exception and if it is it finds out which exception it is
    if((char0=="a"||char0=="e"||char0=="i"||char0=="u"||char0=="o"||(char0=="x" && char1=="r")||(char0=="y" && char1=="t")) ||
    ((char0=="c" && char1=="h")||(char0=="q" && char1=="u")||(char0=="t" && char1=="h")||(char0=="r" && char1=="h")) ||
    ((char0=="t" && char1=="h" && char2=="r")||(char0=="s" && char1=="c" && char2=="h")) ||
    ((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="q" && char2=="u")) ||
    ((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="s" && char2=="q"))
    ){
      //this if statement finds if the input starts with a vowel or xr or yt and returns the approriate output
    if(char0=="a"||char0=="e"||char0=="i"||char0=="u"||char0=="o"||(char0=="x" && char1=="r")||(char0=="y" && char1=="t")){
      wordOutput = wordOutput + "ay";
      return wordOutput;
    }
    //this if statement finds if the input starts with a qu and returns the approriate output
    if(char1=="q" && char2=="u"){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
      return wordOutput;
    }
    //this if statement finds if the input starts with a thr or sch and returns the approriate output
    if((char0=="t" && char1=="h" && char2=="r")||(char0=="s" && char1=="c" && char2=="h")){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
      return wordOutput;
    }
    //this if statement finds if the input starts with a ch or qu or th or rh and returns the approriate output
    if((char0=="c" && char1=="h")||(char0=="q" && char1=="u")||(char0=="t" && char1=="h")||(char0=="r" && char1=="h")){
      wordOutput = wordOutput.slice(2) + char0 + char1 + "ay";
      return wordOutput;
    }
    //this if statement finds if the input does not start with a vowel and the second two characters are an s and a q and then returns the approriate output
    if((char0!="a"||char0!="e"||char0!="i"||char0!="u"||char0!="o")&&(char1=="s" && char2=="q")){
      wordOutput = wordOutput.slice(3) + char0 + char1 + char2 + "ay";
      return wordOutput;
    }
  }
  //if a word does not start with any of those exceptions it will return this normal output
    else
    {
        wordOutput = wordOutput.slice(1) + char0 + "ay";
        return wordOutput;
      }
    }
    //this else statement is in case there is only one letter input and then the output just adds an ay
    else{
      wordOutput= wordOutput + "ay"
      return wordOutput;
    }
    return wordOutput;
  }
}
