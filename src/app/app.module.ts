import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatOptionModule,
  MatToolbarModule,
  MatStepperModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatDividerModule,
  MatSnackBarModule,
  MatGridListModule,
  MatDialogModule
} from "@angular/material";

import { SelectSemComponent } from "./select-sem/select-sem.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { SelectOptionalComponent } from "./select-optional/select-optional.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { EndFeedbackComponent } from "./end-feedback/end-feedback.component";
import { DataGuard } from "./data.guard";
const approutes: Routes = [
  { path: "", component: SelectSemComponent },
  { path: "selectsem", component: SelectSemComponent },
  { path: "feedback", component: FeedbackComponent, canActivate: [DataGuard] },
  {
    path: "selectOptional",
    component: SelectOptionalComponent,
    canActivate: [DataGuard]
  },
  {
    path: "endFeedback",
    component: EndFeedbackComponent,
    canActivate: [DataGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SelectSemComponent,
    FeedbackComponent,
    SelectOptionalComponent,
    EndFeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule,
    LayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatGridListModule,
    MatDialogModule,
    RouterModule.forRoot(approutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DataGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
