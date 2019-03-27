import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalDataService } from './global-data.service';


@Injectable({
  providedIn: 'root'
})
export class DataGuard implements CanActivate {
  constructor(private router: Router,private dataService: GlobalDataService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.dataService.selectedSemester&&this.dataService.selectedDepartment){
      if(this.dataService.selectedDepartment!=0&& this.dataService.selectedSemester!=0)
        return true
    }
    //if(this.dataService.feedbackComplete)
     // return false
      this.router.navigateByUrl('/')
    return false
    }
}
