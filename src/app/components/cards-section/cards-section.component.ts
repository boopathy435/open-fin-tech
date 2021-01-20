import { Component, OnInit } from '@angular/core';

interface Card{
  imageUrl: string,
  heading: string,
  content: string,
  isPurple: boolean
}

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent implements OnInit {

  col1Cards: Card[] = [
    {
      imageUrl: 'assets/images/Get Paid Instantly.png',
      heading: 'Quick cash disbursement',
      content: 'Get terms loans that your business needs within 72 hrs',
      isPurple: false
    },
    {
      imageUrl: 'assets/images/Low interest rate.png',
      heading: 'Low-interest rate',
      content: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
      isPurple: false
    },
    {
      imageUrl: 'assets/images/Secure Payments.png',
      heading: 'Zero Paperwork',
      content: 'Get started instantly by submitting only your basic details & bank statements',
      isPurple: false
    },
  ];

  col2Cards: Card[] = [
    {
      imageUrl: 'assets/images/freelancer_feature_icon_6@1.5x.png',
      heading: 'Ace your business finances',
      content: 'Manage banking, accounting & everything in between, on one platform',
      isPurple: true
    },
    {
      imageUrl: 'assets/images/Covid.png',
      heading: 'Loans to fight COVID-19',
      content: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
      isPurple: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
