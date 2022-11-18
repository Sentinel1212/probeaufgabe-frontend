import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { FileUploadModule } from 'primeng/fileupload';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { DeviceGridComponent } from './devices/device-grid/device-grid.component';

@NgModule({
  declarations: [AppComponent, DeviceGridComponent, DeviceDetailComponent],
  imports: [
    BrowserModule,
    DataViewModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
