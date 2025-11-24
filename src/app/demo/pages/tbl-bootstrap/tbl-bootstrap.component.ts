import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbdTableComplete } from "../table-complete/table-complete";

@Component({
  selector: 'app-tbl-bootstrap',
  imports: [SharedModule, NgbdTableComplete],
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})
export class TblBootstrapComponent {}
