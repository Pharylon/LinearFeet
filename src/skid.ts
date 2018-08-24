export interface iSkid {
  quantity: number,
  length: number,
  width: number,
  height: number,
  stackable: boolean
}

export class Skid implements iSkid{
  constructor(
    public quantity: number,
    public length: number,
    public width: number,
    public height: number,
    public stackable: boolean
  ){}
}