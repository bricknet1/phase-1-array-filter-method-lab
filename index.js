// Code your solution here

let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching (array, string){
    const matchingNames = 
    array.filter(function (name) {
        return name.toLowerCase() === string.toLowerCase()
    });
    return matchingNames;
}

console.log(findMatching(drivers, 'Bobby'))

//////////

function fuzzyMatch (array, string) {
    // let spreadString = [...string];
    const matches = 
    array.filter(function (name) {
        let nameChecker = 0;
        for (let i = 0; i < string.length; i++) {
            // debugger;
            if (name[i] === string[i]) {nameChecker++}
        }
        return nameChecker === string.length
      });
    return matches;
}

console.log(fuzzyMatch(drivers, 'Sa'))

////////////

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (driverObjects, string) {
    const matchingNames = 
        driverObjects.filter(function (object) {
            // debugger;
            return object.name === string
        });
        return matchingNames;
}

console.log(matchName(drivers, 'Bobby'));
