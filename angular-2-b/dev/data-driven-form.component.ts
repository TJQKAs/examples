import{Component}from 'angular2/core';

//    <form (ngSubmit)="onSubmit(f)" #f="ngFrom">
// by clicking button submit we call function onSubmit with argument #f
// and #f is a reference to  ngForm , which includes all elems in elem form
// thus we submit data from all forms which belong to <form>
@Component({
  selector: 'data-driven-form',
  template:`
   <h2>Additional information</h2>
   <form (ngSubmit)="onSubmit()">
     <div>
       <label for="occupation">Occupation:</label>
       <input ngControl="occupation" type="text" id="occupation">
      <span class="validaton-error">not valid</span>
     </div>
     <div>
       <label for="education">Education:</label>
       <input ngControl="education" type="text" id="education" required>
       <span class="validaton-error">not valid</span>
     </div>
     <div>
       <label for="annual">Annual income:</label>
       <input ngControl="annual" type="number" id="annual" required>
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

export class DataDrivenFromComponent{
 user ={occupation: ' ', education: ' ', annual: ' '};

  onSubmit(form){
     this.user.occupation = form.value['occupation'];
        this.user.education = form.value['education'];
           this.user.annual = form.value['annual'];

  }
}
