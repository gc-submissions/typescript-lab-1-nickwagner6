//we created a new data type called Mountain
export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  //below code is an alternate to the code below it

  //let tallestMountainIndex: number = 0
  //let tallestMountainHeight: number = 0
  //for (let i =0; I< mountains.length: i++) {
  //if(mountain[i].height > tallestMountainHeight) {
  //tallestMountainIndex = i
  //tallestMountainHeight = mountains[i].height
  //return mountains [tallestMountainIndex].name
  // let tallestMountain: string = findNameOfTallestMountain(mountains)

  if (mountains.length > 0) {
    let tallestMountain: Mountain = mountains[0];
    mountains.forEach((mountain) => {
      if (mountain.height > tallestMountain.height) {
        tallestMountain = mountain;
      }
    });
    return tallestMountain.name;
  } else {
    return "";
  }
}

console.log(findNameOfTallestMountain(mountains));
console.log(findNameOfTallestMountain([]));
