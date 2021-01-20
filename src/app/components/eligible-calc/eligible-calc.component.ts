import { Component, OnInit } from '@angular/core';

interface Tenure {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-eligible-calc',
  templateUrl: './eligible-calc.component.html',
  styleUrls: ['./eligible-calc.component.scss']
})
export class EligibleCalcComponent implements OnInit {
  incomeMin = 100000;
  incomeMax = 300000;
  selectedIncome=150000;

  expenseMin = 10000;
  expenseMax = 100000;
  selectedExpense=50000;

  tenure: Tenure[] = [
    {value: '3', viewValue: '3 Months'},
    {value: '6', viewValue: '6 Months'},
    {value: '12', viewValue: '12 Months'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
