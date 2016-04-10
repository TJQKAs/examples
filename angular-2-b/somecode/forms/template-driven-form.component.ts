import{Component}from 'angular2/core';

//    <form (ngSubmit)="onSubmit(f)" #f="ngFrom">
// by clicking button submit we call function onSubmit with argument #f
// and #f is a reference to  ngForm , which includes all elems in elem form
// thus we submit data from all forms which belong to <form>
@Component({
  selector: 'template-driven-form',
  template:`
   <h2>Sing up form</h2>
   <form (ngSubmit)="onSubmit(f)" #f="ngForm">
     <div>
       <label for="name">Name:</label>
       <input ngControl="name" type="text" id="name" #name="ngForm" required>
      <span class="validation-error" *ngIf="!name.valid">not valid</span>
     </div>
     <div>
       <label for="surname">Surname:</label>
       <input ngControl="surname" type="text" id="surname" #surname="ngForm" required>
       <span class="validation-error" *ngIf="!surname.valid">not valid</span>
     </div>
     <div>
       <label for="age">Age:</label>
       <input ngControl="age" type="number" id="age" #age="ngForm" required>
        <span class="validation-error" *ngIf="!age.valid">not valid</span>
     </div>
     <div>
       <label for="country">Country:</label>
       <input ngControl="counrty" type="text" id="counrty" required>
     </div>
     <div>
       <label for="mail">Mail:</label>
       <input ngControl="mail" type="text" id="mail" #mail="ngForm" required>
       <span class="validation-error" *ngIf="!mail.valid">not valid</span>
     </div>
     <div>
       <label for="password">Password:</label>
       <input ngControl="password" type="text" id="name" #password="ngForm" required>
        <span class="validation-error" *ngIf="!password.valid">not valid</span>
     </div>
     <div>
       <label for="confirm-password">Confirm Password:</label>
       <input ngControl="confirm-password" type="text" id="confirm-password" #confirmPassword="ngForm" required>
        <span class="validation-error" *ngIf="!confirmPassword.valid">not valid</span>
     </div>
     <button type="submit" [disabled]="!f.valid || password.value !== confirmPassword.value">Submit</button>
      </form>
   <div [style.display]="f.valid === false ? 'none' : 'block' ">
     <h4>Data which you've just typed</h4>
     <h5>name: {{user.name}}</h5>
     <h5>surname: {{user.surname}}</h5>
     <h5>age: {{user.age}}</h5>
     <h5>mail: {{user.mail}}</h5>
     <h5>counrty: {{user.age}}</h5>
   </div>

  `
})

export class TemplateDrivenFormComponent{
 user ={name: ' ', surname: ' ', age: ' ', mail: ' ', country: ' '};

  onSubmit(form){
     this.user.name = form.value['name'];
        this.user.surname = form.value['surname'];
           this.user.age = form.value['age'];
              this.user.mail = form.value['mail'];
                 this.user.country = form.value['country'];
  }
}
