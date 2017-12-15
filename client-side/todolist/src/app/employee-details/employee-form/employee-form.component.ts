import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  /*
  * Employee form
  */
  public employeeForm: any;

  /*
  * params
  */
  public params: any;

  /*
  * params
  */
  public buttonLabel: string;

  /**
   * constructor.
   * @param formBuilder
   * @param router
   * @param http
   */

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.employeeForm = this.formBuilder.group({
      'sapId': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'position': ['', Validators.required]
    });

    this.activatedRoute.params.subscribe( params => this.params = params );
    if(this.params.id) {
      this.buttonLabel = 'Edit'
    } else {      
      this.buttonLabel = 'Add'
    }
   }

  ngOnInit() {
  }

  public submit() {
    this.http.post('http://localhost:3000/login', this.employeeForm.value).subscribe(
      (data) =>  {debugger}
    ) 
  }
}
