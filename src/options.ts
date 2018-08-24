export interface iLftOptions{    
    /** Maximum length a skid can be considered stackable. Default is 144 */
    maxStackableLength?: number,

    /** Maximum height a skid can be considered stackable.. Default is 48 */
    maxStackableHeight?: number,

    /** Maximum width a skid can be considered stackable. Defualt is undefined (no limit) */
    maxStackableWidth?: number,

    /** In inches. Default is 96 */
    truckWidth?: number,
    
    /** In inches. Default is 106 */
    truckHeight?: number,

    /** The maximum number of skids that can sit across the width of the truck, regardless of truck width. Default undefined (no limit) */
    maxSkidsAcross?: number

    /**Maximum number of skids that can be stacked high, regarless of truck height. Default is 2 */
    maxSkidsStackable?: number
}


export interface iLftConcreteOptions extends iLftOptions{
    /** Maximum length a skid can be considered stackable. Default is 144 */
    maxStackableLength: number,

    /** Maximum height a skid can be considered stackable.. Default is 48 */
    maxStackableHeight: number,

    /** Maximum width a skid can be considered stackable. Defualt is undefined (no limit) */
    maxStackableWidth?: number,

    /** In inches. Default is 96 */
    truckWidth: number,
    
    /** In inches. Default is 106 */
    truckHeight: number,

    /** The maximum number of skids that can sit across the width of the truck, regardless of truck width. Default undefined (no limit) */
    maxSkidsAcross?: number

    /**Maximum number of skids that can be stacked high, regarless of truck height. Default is 2 */
    maxSkidsStackable: number
}

export const DefaultOptions: iLftConcreteOptions = {
    truckWidth: 96,
    truckHeight: 106,
    maxStackableHeight: 48,
    maxStackableWidth: undefined,
    maxStackableLength: 144,
    maxSkidsAcross: undefined,
    maxSkidsStackable: 2
}