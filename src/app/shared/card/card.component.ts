import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../core/service/helper.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HelperService]
})
export class CardComponent {
  @Input() data: any;
  constructor(public helperService: HelperService) { }

  renderValue() {
    console.log("Child Updated")
  }

  updateAction() {
    this.helperService.incrementValue()
  }

  updateTitle() {
    this.data["title"] = this.data.title + " " + Math.random()
  }
}
