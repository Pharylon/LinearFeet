import { iSkid } from "./skid";
import { iLftOptions, DefaultOptions, iLftConcreteOptions } from "./options";



const calculate = (skids: iSkid[] | iSkid, options?: iLftOptions): number => {
  const concreteOptions = getConcreteOptions(options);
  if (!Array.isArray(skids)){
    skids = [skids];
  }
  const linearFeet = skids
    .map(skid => getLinearFeet(skid, concreteOptions))
    .reduce((acc, curr) => acc + curr);
  return linearFeet;
}

const getLinearFeet = (skid: iSkid, options: iLftConcreteOptions): number => {
  let numberAccross = Math.floor(options.truckWidth / skid.width);
    if (options.maxSkidsAcross){
      numberAccross = Math.min(numberAccross, options.maxSkidsAcross);
    }
    let linearFeet = skid.length / 12 / numberAccross; //12 inches to a foot
    if (isStackable(skid, options)){
      const maxStacked = Math.floor(Math.min(options.truckHeight / skid.height, options.maxSkidsStackable));
      linearFeet /= maxStacked;  
    }
    linearFeet *= skid.quantity;
    return linearFeet;
}

const isStackable = (skid: iSkid, options: iLftConcreteOptions): boolean => {
  const isStackable = skid.stackable &&
    (skid.height <= options.maxStackableHeight) &&
    (skid.length <= options.maxStackableLength) &&
    (!options.maxStackableWidth || skid.width <= options.maxStackableWidth);
  
  return isStackable;
}

const getConcreteOptions = (options?: iLftOptions): iLftConcreteOptions => {
  if (!options){
    return DefaultOptions;
  }
  return {
    truckWidth: options.truckWidth || DefaultOptions.truckWidth,
    maxStackableHeight: options.maxStackableHeight || DefaultOptions.maxStackableHeight,
    maxStackableLength: options.maxStackableLength || DefaultOptions.maxStackableLength,
    maxStackableWidth: options.maxStackableWidth || DefaultOptions.maxStackableWidth,
    maxSkidsAcross: options.maxSkidsAcross || DefaultOptions.maxSkidsAcross,
    maxSkidsStackable: options.maxSkidsStackable || DefaultOptions.maxSkidsStackable,
    truckHeight: options.truckHeight || DefaultOptions.truckHeight
  }
}

export default calculate;