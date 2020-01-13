//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


//the array set up
let colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
//gets the two colors
export const value = ([color1, color2]) => {
 //sets what color 1 and color 2 are
 let color1Index = colors.indexOf(color1) * 10;
 let color2Index = colors.indexOf(color2);
 //adds the colors number together for a total
 let colorTotal= color1Index + color2Index;
  return colorTotal;
}

