import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-client',
  templateUrl: './vehicle-client.component.html',
  styleUrls: ['./vehicle-client.component.css']
})
export class VehicleClientComponent implements OnInit {
  vehicleTypes: string[] = [];

  constructor(private service: VehicleService) { }

  ngOnInit() {
    this.vehicleTypes = this.service.getVehicles();
  }
}
