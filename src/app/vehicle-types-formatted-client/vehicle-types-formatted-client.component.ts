import { Component, OnInit } from '@angular/core';
import { VehiclesInfoFormattedService } from '../vehicles-info-formatted.service';

@Component({
  selector: 'app-vehicle-types-formatted-client',
  templateUrl: './vehicle-types-formatted-client.component.html',
  styleUrls: ['./vehicle-types-formatted-client.component.css']
})
export class VehicleTypesFormattedClientComponent implements OnInit {
  vehicles: string = "";

  constructor(private service: VehiclesInfoFormattedService) { }

  ngOnInit() {
    this.vehicles = this.service.getVehiclesInfoFormatted().toString();
  }
}
