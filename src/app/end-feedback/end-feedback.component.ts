import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-end-feedback",
  templateUrl: "./end-feedback.component.html",
  styleUrls: ["./end-feedback.component.css"],
  
})
export class EndFeedbackComponent{
  constructor(public dialogRef: MatDialogRef<EndFeedbackComponent>){}
  onOkClick(): void{
    this.dialogRef.close();
  }

}
