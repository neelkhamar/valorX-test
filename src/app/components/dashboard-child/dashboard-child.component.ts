import { Component } from '@angular/core';
import { HelperService } from '../../core/service/helper.service';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.css'
})
export class DashboardChildComponent {
  constructor(public helperService: HelperService) {

  }
  updateAction() {
    this.helperService.incrementValue()
  }
}
