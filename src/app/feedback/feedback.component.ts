import {
  Component,
  OnInit,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef,
  
} from "@angular/core";
import { TeacherSubject } from "../teacher-subject";
import { GlobalDataService } from "../global-data.service";
import { CategoryQuestion } from "../category-question";
import { FormGroup, FormControl } from "@angular/forms";
import { MatStepper, MatButton, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { Response } from "../response";
import { Router } from "@angular/router";
import { EndFeedbackComponent } from "../end-feedback/end-feedback.component";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"]
})
export class FeedbackComponent implements OnInit, AfterViewChecked {
  subjectTeacher: TeacherSubject[] = [];
  subteacherptr: number = 0;
  currTS: TeacherSubject;
  categoryQuestion: CategoryQuestion[];
  currCQ: CategoryQuestion;
  semester: number;
  department: number;
  @ViewChild("stepper")
  stepper: MatStepper;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: GlobalDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    window.history.pushState(null,null,'/feedback')
    this.getTeacherSubject();
    this.getCategoryQuestion();
    this.semester = this.dataService.getSelectedSemester();
    this.department = this.dataService.getSelectedDepartment();
  }
  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }
  getTeacherSubject(): void {
    /*this.dataService.getTeacherSubject().subscribe(subjectTeacher => {
      this.subjectTeacher=subjectTeacher;
      this.currTS = this.subjectTeacher.shift();})*/
    this.dataService.subjectTeacherList.subscribe(subjectTeacher => {
      this.subjectTeacher = subjectTeacher;
      this.currTS = this.subjectTeacher[this.subteacherptr];
    });
  }
  getCategoryQuestion(): void {
    this.dataService.getCategoryQuestion().subscribe(categoryQuestion => {
      this.categoryQuestion = categoryQuestion;
      
      for (var i = 0; i < this.categoryQuestion.length; i++) {
        this.categoryQuestion[i].formGroup = new FormGroup({});
        for (var j = 0; j < this.categoryQuestion[i].questions.length; j++) {
          this.categoryQuestion[i].formGroup.addControl(
            "" + this.categoryQuestion[i].questions[j].q_id,
            new FormControl("")
          );
        }
      }
      this.currCQ = this.categoryQuestion[0];
    });
  }

  isInvalid(category: CategoryQuestion): boolean {
    if (category) {
      return category.formGroup.invalid;
    }
  }
  goNext() {
    this.currTS = this.subjectTeacher[++this.subteacherptr];
    if (!this.currTS){
      this.dataService.setSelectedDepartment(0)
      this.dataService.setSelectedSemester(0)
      this.openDialog()
      
      //this.router.navigateByUrl("/endFeedback");
    } 
  }
  goNextStepper() {
    
    let response = new Response();
    response.category = this.currCQ.cat_id;
    response.teacher = this.currTS.teacher;
    response.subject = this.currTS.subject_code;
    response.response = this.currCQ.formGroup.value;
    response.dept = this.department;
    response.sem = this.semester;
    this.dataService.putResponse(response);
    
      this.stepper.reset();
      this.currCQ = this.categoryQuestion[0];
      for (var i = 0; i < this.categoryQuestion.length; i++) {
        this.categoryQuestion[i].formGroup.reset();
      }
      this.goNext();
    
  }
  openDialog(){
    const dialogRef = this.dialog.open(EndFeedbackComponent,{
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.router.navigateByUrl('/')
    })
  }
}


