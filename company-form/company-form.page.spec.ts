import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFormPage } from './company-form.page';

describe('CompanyFormPage', () => {
  let component: CompanyFormPage;
  let fixture: ComponentFixture<CompanyFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyFormPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
