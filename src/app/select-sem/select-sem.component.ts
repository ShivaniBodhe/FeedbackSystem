import { Component, OnInit, ViewChild } from '@angular/core';

import { GlobalDataService } from '../global-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-sem',
  templateUrl: './select-sem.component.html',
  styleUrls: ['./select-sem.component.css']
})
export class SelectSemComponent implements OnInit {

  semester = '';
  department = '';
  odd: FormControl  = new FormControl('');
  constructor(private dataService: GlobalDataService) { }

  ngOnInit() {

  }
  isinvalid(): boolean {
    // return !((this.semester.value)&&(this.department.value))
    if (!((this.semester === '') || (this.department === ''))) {
      return false;
    }
    return true;
  }
  setData() {
    this.dataService.setSelectedDepartment(+this.department);
    this.dataService.setSelectedSemester(+this.semester);
  }
}
