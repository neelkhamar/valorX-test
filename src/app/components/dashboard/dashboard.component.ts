import { Component } from '@angular/core';
import { HelperService } from '../../core/service/helper.service';
import { DashboardChildComponent } from '../dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [HelperService]
})
export class DashboardComponent {
  constructor(public helperService: HelperService) { }
}
