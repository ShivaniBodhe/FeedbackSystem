import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { TeacherSubject } from './teacher-subject';
import { CategoryQuestion } from './category-question';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Response } from './response';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  selectedDepartment: number;
  selectedSemester: number;
  subjectTeacherList: Observable<TeacherSubject[]>;
  categoryQuestionList: Observable<CategoryQuestion[]>;

  constructor(private http: HttpClient) { }

  getSelectedDepartment(): number {
    if (this.selectedDepartment) {
    return this.selectedDepartment
    }
  }
  setSelectedDepartment(department: number): void {
    this.selectedDepartment = department;

  }

  getSelectedSemester(): number {
    if (this.selectedSemester) {
    return this.selectedSemester
    }
  }
  setSelectedSemester(semester: number): void {
    this.selectedSemester = semester;
    this.setTeacherSubject([]);
    this.subjectTeacherList = this.http.get<TeacherSubject[]>('get_teacher_subjects.php?dept=' + this.selectedDepartment + '&sem=' + this.selectedSemester);
  }
  getTeacherSubject(): Observable<TeacherSubject[]> {
    if (!this.subjectTeacherList) {
      this.subjectTeacherList = this.http.get<TeacherSubject[]>('get_teacher_subjects.php?dept='+this.selectedDepartment+'&sem='+this.selectedSemester);
    }

     return this.subjectTeacherList;
  }
  setTeacherSubject(subjectTeacherList: TeacherSubject[]): void {
    this.subjectTeacherList = of(subjectTeacherList);
  }
  getCategoryQuestion(): Observable<CategoryQuestion[]> {
    if (!this.categoryQuestionList) {
    this.categoryQuestionList = this.http.get<CategoryQuestion[]>('get_cat_questions.php')
    }
    return this.categoryQuestionList;
  }
  putResponse(response: Response): void {
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
    const output = JSON.stringify(response);
    console.log(output);
    this.http.post('post_response_new.php', output, httpHeader)
    .pipe(
      catchError(this.handleError)
    ).subscribe();
}
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
