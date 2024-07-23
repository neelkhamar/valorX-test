import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { HelperService } from '../../core/service/helper.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public page: number = 0;
  public data: any[] = []
  public store: any[] = [
    {
      title: "Angular",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "React",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "NodeJs",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Vue",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Java",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Python",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "PHP",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: ".Net",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "Ruby on Rails",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    }
  ]

  constructor(public helperService: HelperService) {
    this.fetchData();
  }

  updateAction() {
    this.helperService.incrementValue()
  }

  render() {
    console.log("Parent loaded")
  }

  calculateNum(min: number, max: number) {
    let num: number = Math.floor(Math.random() * (max - min + 1) + min) | 0;
    return num
  }

  randomIntFromInterval(min: number, max: number) {
    let num = this.calculateNum(min, max);
    while (num === this.page) {
      num = this.calculateNum(min, max);
    }
    return num
  }

  fetchData() {
    this.page = this.randomIntFromInterval(1, 3);
    let endPoint = this.page * 3;
    let startPoint = endPoint - 2;
    this.data = this.store.slice(startPoint - 1, endPoint);
  }

}
