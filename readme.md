# Linear Feet

Linear Feet is a simple NPM package written in typescript for calculating linear feet, as used in US LTL (Less than Truck Load) shipping. It doesn't attempt to do any bin packing (because you don't do bin packing when calculating linear feet).

## Installing

```
npm add linear-feet
```

## Examples:

```javascript
import {calculate, Skid} from "linear-feet";


const mySkids = {
    quantity: 3, //3 skids match these dimensions
    length: 45, //45 inches ling
    width: 20, //45 inches wide
    height: 45, //45 inches tall
    stackable: false //This skid cannot be stacked.
};

console.log(calculate(mySkids)); //Prints 2.8125

//There's also a handy class shorthand for creating skids!
const myOtherSkid = new Skid(1, 60, 45, 45, false);

console.log(calculate([mySkids, myOtherSkid])); //Prints 5.3125


const shippingOptions = {
  //If a skid is longer than 144 inches, it will never be considered stackable.
  maxStackableLength: 144, 

  //If a skid is taller than 48 inches, it will never be considered stackable.
  maxStackableHeight: 48, 

  //If a skid is wider than 50 inches, it will never be considered stackable.
  maxStackableWidth: 50,

  //The truck is 96 inches wide for the purposes of calculating how many skids can fit across.  
  truckWidth: 96, 

  //The truck is 110 inches tall for the purpsoe of calculating how tall skids can be stacked
  truckHeight: 110,

  //No more than 3 skids can be placed side-by-side, regardless of truck width. 
  maxSkidsAcross: 3,

  //Skids cannot be placed more than 2 high, regardless of truck height. 
  maxSkidsStackable: 2 
};

console.log(calculate(mySkids, shippingOptions)); //Prints 3.75

```

If you're on typescript, you can also use the `iLftOptions` and `iSkid` interfaces:

```typescript
import {calculate, iLftOptions, iSkid} from "linear-feet";

const mySkids: iSkid = {
    quantity: 3,
    length: 45,
    width: 20,
    height: 45, 
    stackable: false 
};

const shippingOptions: iLftOptions = {
    maxStackableLength: 144,
    maxStackableHeight: 48,
    maxStackableWidth: 50,  
    truckWidth: 96, 
    truckHeight: 110, 
    maxSkidsAcross: 3,
    maxSkidsStackable: 2
};

console.log(calculate(mySkids, shippingOptions)); 

```


## Source

Download the source here: `https://github.com/Pharylon/LinearFeet.git`

It's a typescript project, so if you want to build the source, just run `tsc`.  Then if you want to run tests, it's just `npm test`.

If you want to contribute, just send me a pull request. 😇


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## The End

Did you seriously keep reading once you got past the lisence??? 🤣