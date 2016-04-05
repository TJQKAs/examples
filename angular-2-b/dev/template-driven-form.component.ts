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
       <input ngControl="name" type="text" id="name" required>
     </div>
     <div>
       <label for="surname">Surname:</label>
       <input ngControl="surname" type="text" id="surname" required>
     </div>
     <div>
       <label for="age">Age:</label>
       <input ngControl="age" type="number" id="age" required>
     </div>
     <div>
       <label for="country">Country:</label>
       <input ngControl="counrty" type="text" id="counrty" required>
     </div>
     <div>
       <label for="mail">Mail:</label>
       <input ngControl="mail" type="text" id="mail" required>
     </div>
     <div>
       <label for="password">Password:</label>
       <input ngControl="password" type="text" id="name" required>
     </div>
     <div>
       <label for="confirm-password">Confirm Password:</label>
       <input ngControl="confirm-password" type="text" id="confirm-password" required>
     </div>
     <button type="submit">Submit</button>
   </form>
  `
})

export class TemplateDrivenFromComponent{

  onSubmit(value){
    console.log(value.value);
  }
}
