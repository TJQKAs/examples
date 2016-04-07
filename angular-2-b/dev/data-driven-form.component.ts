import{Component, OnInit}from 'angular2/core';
import{FormBuilder, Validators} from 'angular2/common';

//    <form (ngSubmit)="onSubmit(f)" #f="ngFrom">
// by clicking button submit we call function onSubmit with argument #f
// and #f is a reference to  ngForm , which includes all elems in elem form
// thus we submit data from all forms which belong to <form>
@Component({
  selector: 'data-driven-form',
  template:`
   <h2>Additional information</h2>
   <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
     <div>
       <label for="occupation">Occupation:</label>
       <input [ngFormControl]="myForm.controls['occupation']" type="text" id="occupation">
      <span class="validaton-error">not valid</span>
     </div>
     <div>
       <label for="education">Education:</label>
       <input [ngFormControl]="myForm.controls['education']" type="text" id="education">
       <span class="validaton-error">not valid</span>
     </div>
     <div>
       <label for="annual">Annual income:</label>
       <input [ngFormControl]="myForm.controls['annual']" type="number" id="annual">
        <span class="validaton-error">not valid</span>
     </div>
     <button type="submit">Submit</button>
      </form>
   <div>
     <h4> Your additional information are: </h4>
     <h5>Your occupation: {{user.occupation}}</h5>
     <h5>Your education: {{user.education}}</h5>
     <h5>Your annual income: {{user.annual}}</h5>
   </div>

  `
})
//[ngFormModel]="myForm"  => it means that now ngFormModel should use my ControlGroup instead of default type


export class DataDrivenFormComponent implements OnInit{
// myForm - property refers to ControlGroup - which controls validation of my forms
 myForm: ControlGroup;
 user ={occupation: ' ', education: ' ', annual: ' '};

// FormBuilder - service that creates forms and our refernce to it - _formBuilder
 constructor(private _formBuilder: FormBuilder){}

  onSubmit(form){
    console.log(this.myForm);
    this.user.occupation = form.value['occupation'];
       this.user.education = form.value['education'];
          this.user.annual = form.value['annual'];

  }

//:any means that it might be whatever argument in OnInit
 ngOnInit():any{
   //access to FormBuilder and run method group
   // in left side my prop which responsible for controlling of my forms (3 elems in this case)
   // in right side I tell : let  "this.myFrom" be equal to my new control  method "group"
   // which I've created by using FromBuilder service
    this.myForm = this._formBuilder.group({
      // 'name of  object' :[' default meaning', validation logic (in our case Validators.reqiured means that we only check whether our form is not empty)]
      'occupation':['',Validators.required],
            'education':['',Validators.required],
                  'annual':['',Validators.required],
    });
 }
}
