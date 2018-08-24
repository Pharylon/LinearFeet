const compiled = require("./dist/index");

if (!compiled){
  "Run 'tsc' to compile before tests";
}

let allTestsPassed = true;

const Skid = compiled.Skid;

function testSkid(skid, expected, name, options){
  try{
    let lft = compiled.calculate(skid, options);
    let maxOK = expected + 0.001;
    let minOK = expected - 0.001;
    if (lft > maxOK || lft < minOK){
      console.error(`Failed test '${name}'. Excpectd ${expected}, got ${lft}`);
      allTestsPassed = false;
    }
  }
  catch(err){
    console.error(`Exception occured while running test ${name}`, err);
    allTestsPassed = false;
  }
}

testSkid(new Skid(1, 45, 45, 30, true), 0.9375, "Test 1");
testSkid(new Skid(2, 45, 46, 45, true), 1.875, "Test 2");
testSkid(new Skid(2, 78, 65, 33, false), 13, "Not Stackable");
testSkid(new Skid(2, 190.2, 65, 33, true), 31.7, "Past Stackable Length Limit");
testSkid(new Skid(3, 65, 40, 49, true), 8.125, "Past Stackable Height Limit");
testSkid(new Skid(5, 65, 40, 20, true), 4.513, "maxSkidsStackable", {maxSkidsStackable: 3});
testSkid(new Skid(2, 45, 46, 45, true), 3.75, "truckWidth", {truckWidth: 90});
testSkid(new Skid(3, 50, 40, 48, true), 6.249, "truckHeight", {truckHeight: 94});
testSkid(new Skid(3, 65, 40, 47.3, true), 8.125, "maxStackableHeight", {maxStackableHeight: 47});
testSkid(new Skid(3, 65, 40, 47.3, true), 8.125, "maxStackableWidth", {maxStackableWidth: 39});
testSkid(new Skid(2, 140.2, 65, 33, true), 23.366, "maxStackableLength", {maxStackableLength: 140});
testSkid(new Skid(7, 127, 15, 33, false), 24.694, "maxSkidsAcross", {maxSkidsAcross: 3});


if (allTestsPassed){
  console.log("All tests passed! 👍 👍 👍 👍 👍")
}
else{
  console.error("Tests failed, see above for details 😭 😭 😭");
}

