import { Injectable } from '@angular/core';

@Injectable()
export class VehiclesInfoService {
  constructor() { }

  getVehiclesInfo() {
    return [
      { 'Type': 'Truck', 'Wheels': 8 },
      { 'Type': 'Car', 'Wheels': 4 },
      { 'Type': 'Motorcycle', 'Wheels': 2 }
    ];
  }
}
