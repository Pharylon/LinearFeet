import { iSkid } from "./skid";
import { ILftOptions, DefaultOptions, ILftConcreteOptions } from "./options";



function calculate(skids: iSkid[] | iSkid, options?: ILftOptions): number {
  const concreteOptions: ILftConcreteOptions = getConcreteOptions(options);
  if (!Array.isArray(skids)) {
    skids = [skids];
  }
  const linearFeet: number = skids
    .map(skid => getLinearFeet(skid, concreteOptions))
    .reduce((acc, curr) => acc + curr);
  return linearFeet;
}

function getLinearFeet(skid: iSkid, options: ILftConcreteOptions): number {
  let numberAcross: number = Math.floor(options.truckWidth / skid.width);
  if (options.maxSkidsAcross) {
    numberAcross = Math.min(numberAcross, options.maxSkidsAcross);
  }
  let linearFeet: number = skid.length / 12 / numberAcross; // 12 inches to a foot
  if (isStackable(skid, options)) {
    const maxStacked: number = Math.floor(Math.min(options.truckHeight / skid.height, options.maxSkidsStackable));
    linearFeet /= maxStacked;
  }
  linearFeet *= skid.quantity;
  return linearFeet;
}

function isStackable(skid: iSkid, options: ILftConcreteOptions): boolean {
  const isSkidStackable: boolean = skid.stackable &&
    (skid.height <= options.maxStackableHeight) &&
    (skid.length <= options.maxStackableLength) &&
    (!options.maxStackableWidth || skid.width <= options.maxStackableWidth);

  return isSkidStackable;
}

function getConcreteOptions(options?: ILftOptions): ILftConcreteOptions {
  if (!options) {
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
  };
}

export default calculate;