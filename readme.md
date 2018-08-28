# Linear Feet

Linear Feet is a simple NPM package written in typescript for calculating the linear feet of a skid or set of skids, as commonly used in United States LTL (Less than Truck Load) shipping. It doesn't attempt to do any bin packing, because you don't do bin packing when calculating linear feet. Just simple linear feet.

## Installing

```
npm add linear-feet
```

## Examples:

```javascript
import {calculate, Skid} from "linear-feet";

const mySkids = {
    length: 45, //45 inches long
    width: 20, //45 inches wide
    height: 45, //45 inches tall
    quantity: 3, //3 skids match these dimensions
    stackable: false //This skid cannot be stacked.
};

 //Prints 2.8125 linear feet
console.log(calculate(mySkids) + " linear feet");

//There's also a handy class for creating skids!
const myOtherSkid = new Skid(1, 60, 45, 45, false);

//The calculate method also accepts an array of skids
//These skids combine for 5.3125 linear feet
let myArray = [mySkids, myOtherSkid];
console.log(`All skids total ${calculate(myArray)} linear feet`); 

//The options object allows you to modify 
//how the linear feet are calculated
const lft = calculate(mySkids, {maxSkidsAcross: 3});
```


If you're using typescript, you can also use the `iLftOptions` and `iSkid` interfaces:

```typescript
import {calculate, iLftOptions, iSkid} from "linear-feet";

const mySkids: iSkid = {
    quantity: 3,
    length: 45,
    width: 20,
    height: 45, 
    stackable: false 
};

const shippingOptions: iLftOptions = { maxSkidsAcross: 3 };

console.log(calculate(mySkids, shippingOptions)); 

```

## Linear Foot Options

The options object has the follow properites:

`maxStackableLength`: Skids greater than this length will never be considered stackable. Default is 144.

`maxStackableHeight`: Skids taller than this will never be considered stackable. Default is 48.

`maxStackableWidth`: Skids wider than this will never be considered stackable. Default is undefined (no limit).

`truckWidth`: The width in inches of the truck/trailer for the purposes of determining how many items can sit wide. Default is 96.

`truckHeight`: The height in inches of the truck/trailer for the purposes of determining how high items can be stacked. Default is 106.

`maxSkidsAcross`: Maximum number of skids that can be placed side-by-side, regardless of truck width. Default is undefined (no limit).

`maxSkidsStackable`: Maximum number of skids that can be placed on top of each other, regardless of truck height. Default is 2.



## Source

Download the source here: `https://github.com/Pharylon/LinearFeet.git`

It's a typescript project, so if you want to build the source, just run `tsc`.  Then if you want to run tests, it's just `npm test`.
If you want to contribute, just send me a pull request. 😇


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## The End

You made it to the end of the ReadMe! Congratulations! 🎉🍰🎈💃