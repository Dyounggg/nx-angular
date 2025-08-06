import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export const mockCompanies = [
  {
    name: 'test1',
    description: '테스트1 입니다1',
    contact: '111-111-111',
    businessNumber: '1111111',
  },
  {
    name: 'test2',
    description: '테스트2 입니다',
    contact: '222-111-111',
    businessNumber: '22222',
  },
];

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.page.html',
  styleUrl: './company.page.css',
})
export default class CompanyPage {
  companies = JSON.parse(localStorage.getItem('companies')!);

  constructor() {
    localStorage.setItem('companies', JSON.stringify(mockCompanies));
  }
}
