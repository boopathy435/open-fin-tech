import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() isPurple=false;
  @Input() imageUrl: string = 'assets/images/Covid.png';
  @Input() heading: string = 'Loans to fight COVID-19';
  @Input() content: string = 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh';
  constructor() { }

  ngOnInit(): void {
  }

}
