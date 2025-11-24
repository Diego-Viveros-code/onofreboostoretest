import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComplete } from './table-complete';

describe('TableComplete', () => {
  let component: TableComplete;
  let fixture: ComponentFixture<TableComplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
