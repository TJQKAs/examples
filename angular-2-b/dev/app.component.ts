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
      <div>Output lowercase: {{inputCasePipe.value | lowercase}}</div>
            <div>Output uppercase: {{inputCasePipe.value | uppercase}}</div>
    </section>

    <section class="pipe">
      <h2>Slice pipe</h2>
      <input type="text" #inputSlicePipe (keyup)="0" (keyup)="0"> - from <input type="text"  #start (keyup)="0" >
 to <input type="text"  #end (keyup)="0" >
      <div>Output: {{inputSlicePipe.value | slice:start.value:end.value}}</div>
    </section>

    <section class="pipe">
      <h2>Number Pipes</h2>
      <input type="text" #inputNumberPipes (keyup)="0"> - currency <input type="text" #currency  value="USD" (change)="0"><br/>
      <div>Output decimal: {{1.0 * inputNumberPipes.value | number: '1.1-5' }}</div>
            <div>Output currency: {{1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked}}</div>
              <input type="checkbox" #currencyShort (change)="0">Short currency code
    </section>

    <section class="pipe">
      <h2>Chaining multiple pipes lowercase and slice</h2>
      <input type="text" #inputChainPipes (keyup)="0"><br/>
      <div>Output: {{inputChainPipes.value | lowercase | slice: 2-5 }}</div>
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
