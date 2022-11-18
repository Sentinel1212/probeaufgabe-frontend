import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Device } from '../../device.mode';
import { DeviceService } from '../../device.service';

@Component({
  selector: 'app-device-grid',
  templateUrl: './device-grid.component.html',
  styleUrls: ['./device-grid.component.css']
})
export class DeviceGridComponent implements OnInit {
  @Output() onDeviceSelected = new EventEmitter<Device>();
  public devices: Device[];

  constructor(private deviceService: DeviceService) {
    this.devices = this.deviceService.getDevices();
  }

  ngOnInit(): void {}

  onSelect(device: Device) {
    this.onDeviceSelected.emit(device);
  }

  onDeleteDevice(deviceId: string, event: Event) {
    event.stopPropagation();
    this.deviceService.deleteDevice(deviceId);
  }
}
