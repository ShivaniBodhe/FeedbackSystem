import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherSubject } from '../teacher-subject';
import { Router } from '@angular/router';
import { MatSnackBar, MatButton } from '@angular/material';

@Component({
  selector: 'app-select-optional',
  templateUrl: './select-optional.component.html',
  styleUrls: ['./select-optional.component.css']
})
export class SelectOptionalComponent implements OnInit {
  dept: number
  sem: number
  subject_teacher: TeacherSubject[]
  checkbox:FormControl[]=[];
  fg: FormGroup
  
  constructor(private router: Router,private dataService: GlobalDataService,public snackbar:MatSnackBar) { }

  ngOnInit() {
    this.dept = this.dataService.getSelectedDepartment()
    this.sem = this.dataService.getSelectedDepartment();
    this.getTeacherSubject()

    
  }
  getTeacherSubject():void{
    this.dataService.getTeacherSubject().subscribe(
      subject_teacher => {this.subject_teacher = subject_teacher;
        this.fg=new FormGroup({})
        for(var i=0;i<this.subject_teacher.length;i++){
          this.checkbox[i] = new FormControl('')
          this.fg.addControl(this.subject_teacher[i].subject_code+''+this.subject_teacher[i].teacher,this.checkbox[i])
          this.checkbox[i].setValue(this.checkOptional(subject_teacher[i]))
          if(this.checkOptional(this.subject_teacher[i]))
          this.checkbox[i].disable()

        }
          let btn = document.getElementById("sbtn");
          console.log(btn);
        //  if(this.dept==1)
          //btn.style.background = "#00ff00";
          //if(this.dept==2)
          //btn.style.background = "#00ffff";
        
        
        
      }

    );
    
    
  }
  checkOptional(subtech: TeacherSubject):boolean{
    return !subtech.optional
  }
  checkNotOptional(subtech:TeacherSubject):boolean{
    return !subtech.optional
  }
  startFeedback():void{
    if(this.checkbox && this.subject_teacher){
      let newList: TeacherSubject[]=[]
      for(var i=0;i<this.checkbox.length;i++){
        if(this.checkbox[i].value){
          newList.push(this.subject_teacher[i])
        }
        
        
      }
      this.dataService.setTeacherSubject(newList)
      this.router.navigateByUrl('/feedback')
    }
    
  }
}
