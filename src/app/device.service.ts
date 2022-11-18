import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from './device.mode';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private _devices: Device[] = [
    {
      id: '1glmLrTZqf9YZleN',
      name: 'S7-150009',
      deviceTypeId: 'Beweis',
      failsafe: true,
      tempMin: 0,
      tempMax: 60,
      installationPosition: 'horizontal',
      insertInto19InchCabinet: true,
      motionEnable: true,
      siplusCatalog: true,
      simaticCatalog: true,
      rotationAxisNumber: 0,
      positionAxisNumber: 0
    },
    {
      id: '1glmLrTZqf9YZleN',
      name: 'S7-1500',
      deviceTypeId: 'S7_1500',
      failsafe: true,
      tempMin: 0,
      tempMax: 50,
      installationPosition: 'horizontal',
      insertInto19InchCabinet: true,
      motionEnable: true,
      siplusCatalog: false,
      simaticCatalog: true,
      rotationAxisNumber: 0,
      positionAxisNumber: 0,
      advancedEnvironmentalConditions: false
    },
    {
      id: '9RLMugEpCVSeemZ5',
      name: 'ET 200SP',
      deviceTypeId: 'ET200_SP',
      failsafe: false,
      tempMin: 0,
      tempMax: 40,
      installationPosition: 'horizontal',
      insertInto19InchCabinet: true,
      motionEnable: true,
      siplusCatalog: false,
      simaticCatalog: true,
      rotationAxisNumber: 0,
      positionAxisNumber: 0,
      terminalElement: true,
      advancedEnvironmentalConditions: false
    },
    {
      id: '9RLMugEbCVSeemZ4',
      name: 'S7-300',
      deviceTypeId: 'S7_300',
      failsafe: true,
      tempMin: 0,
      tempMax: 40,
      installationPosition: 'vertical',
      insertInto19InchCabinet: false,
      motionEnable: false,
      siplusCatalog: false,
      simaticCatalog: false,
      rotationAxisNumber: 0,
      positionAxisNumber: 0,
      terminalElement: true,
      advancedEnvironmentalConditions: false
    },
    {
      id: '9RLMugEbCVSeemZ4',
      name: 'S7-300',
      deviceTypeId: 'S7_300',
      failsafe: true,
      tempMin: 0,
      tempMax: 40,
      installationPosition: 'vertical',
      insertInto19InchCabinet: false,
      motionEnable: false,
      siplusCatalog: false,
      simaticCatalog: false,
      rotationAxisNumber: 0,
      positionAxisNumber: 0,
      terminalElement: true,
      advancedEnvironmentalConditions: false
    }
  ];

  constructor(private http: HttpClient) {}

  public uploadDevicesFile(devicesFile: any) {
    this.http.post("localhost:7181", devicesFile).subscribe(() => {

    })
  }

  public getDevices(): Device[] {
    return this._devices;
  }

  public deleteDevice(deviceId: string) {
    let index: number = this._devices.findIndex((device) => device.id === deviceId);
    if (index > -1) {
      this._devices.splice(index, 1);
    }
  }
}
