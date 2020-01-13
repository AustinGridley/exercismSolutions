export const twoFer = (x) => {
  //if no input is given or x is undefined return One for you, one for me.
  if (x==undefined) {
    return "One for you, one for me.";
    //else return One for " + x + ", one for me.
  } else {
    return "One for " + x + ", one for me."
  }
};
