export class Device {
  constructor(
    public id: string,
    public name: string,
    public deviceTypeId: string,
    public failsafe: boolean,
    public tempMin: number,
    public tempMax: number,
    public installationPosition: string,
    public insertInto19InchCabinet: boolean,
    public motionEnable: boolean,
    public siplusCatalog: boolean,
    public simaticCatalog: boolean,
    public rotationAxisNumber: number,
    public positionAxisNumber: number,
    public terminalElement?: boolean,
    public advancedEnvironmentalConditions?: boolean
  ) {}
}
