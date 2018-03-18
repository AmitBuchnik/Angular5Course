import { Injectable } from '@angular/core';
import { VehiclesInfoService } from './vehicles-info.service';

@Injectable()
export class VehiclesInfoFormattedService {

  constructor(private service: VehiclesInfoService) { }

  getVehiclesInfoFormatted() {
    return this.service.getVehiclesInfo()
      .map(v => `${v.Type} has ${v.Wheels} wheels`)
  }
}
