import {Component} from 'angular2/core';


@Component({

    selector: 'my-app',
    template: `<section class="pipe">
      <h2>The date pipe</h2>
      <p>Today is : {{today}}  without pipe </p>
      <p>Today is : {{today | date : 'short'}}  with date pipe and argument short </p>
      <p>Today is : {{today | date : 'longDate'}}  with date pipe and argument longDate </p>
            <p>Today is : {{today | date : 'yMMMd'}}  with date pipe and argument yMMMd </p>
    </section>

    <section class="pipe">
      <h2>The lowercase  and uppercase pipe</h2>
      <input type="text" #inputCasePipe (keyup)="0"><br/>
      <div>Output lowercase: XX</div>
            <div>Output uppercase: XX</div>
    </section>

    <section class="pipe">
      <h2>Slice pipe</h2>
      <input type="text" #inputSlicePipe (keyup)="0" (keyup)="0"> - from <input type="text"  #start (keyup)="0" >
 to <input type="text #end" (keyup)="0" >
      <div>Output: XX</div>
    </section>

    <section class="pipe">
      <h2>Number Pipes</h2>
      <input type="text" #inputNumberPipes (keyup)="0"> - currency <input type="text" #currency  value="USD" (change)="0"><br/>
      <div>Output decimal: XX</div>
            <div>Output currency: XX</div>
              <input type="checkbox" #currencyShort (change)="0">Short currency code
    </section>

    <section class="pipe">
      <h2>Chaining multiple pipes</h2>
      <input type="text" #inputChainPipes (keyup)="0"><br/>
      <div>Output: XX</div>
    </section>

    <section class="pipe">
      <h2>Async (stateful) pipes</h2>
      <div>Output (obtained after 2s): XX</div>
    </section>
    `,

})
export class AppComponent  {
   today = new Date();
}
