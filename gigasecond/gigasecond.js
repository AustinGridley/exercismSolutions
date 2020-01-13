//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (inputDate) => {
  //gets the time since 1970
  let timeInSeconds = inputDate.getTime();
  //turns the seconds to milliseconds (1000 milliseconds per second)
  timeInSeconds = timeInSeconds / 1000;
  //then gets 1 billion milliseconds or a giga second
  timeInSeconds = timeInSeconds + Math.pow(10, 9);
  //then turns the time back to seconds
  timeInSeconds = timeInSeconds * 1000;
  return (new Date(timeInSeconds));
};

