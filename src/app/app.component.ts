import { Component } from '@angular/core';
import { Device } from './device.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Probeaufgabe - Bertan Bahsi';
  public currentDate: Date = new Date();
  public selectedDevice!: Device;
  public isGridMode: boolean = true;

  public onDeviceSelected(device: Device) {
    this.selectedDevice = device;
    this.isGridMode = false;
  }

  public onAddDevices(event: any) {
    console.log(event);
    const fileReader: FileReader = new FileReader();
    fileReader.readAsText(event.currentFiles[0], 'UTF-8');
    fileReader.onload = () => {
      console.log(JSON.parse(fileReader.result as string));
    };
  }

  public onBack() {
    this.isGridMode = true;
  }
}
