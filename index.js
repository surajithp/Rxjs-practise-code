const Rx = require("rxjs/Rx");

// var myObservable = Rx.Observable.create((observer)=> {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
//   observer.next(5)
// });
// console.log('just before subscribe');
// myObservable.subscribe({
//   next: x => console.log(x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');
// console.log("Hello World")

// let arrayObsevable=Rx.Observable.from([10,12,15,16,17,19])
// arrayObsevable.filter(x=> x<15).subscribe(x=>console.log(x))
// arrayObsevable.filter(x=> x<15).subscribe(x=>console.log(x))
// arrayObsevable.filter(x=> x<15).subscribe(x=>console.log(x))

// let subject = new Rx.Subject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(2);

// let subject = new Rx.Subject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// var observable = Rx.Observable.from([1, 2, 3]);

// observable.subscribe(subject);

//  multiplyByTen=(input)=> {
//   let output = Rx.Observable.create(subscribe=(observer)=> {
//     input.subscribe({
//       next: (v) => observer.next(10 * v),
//       error: (err) => observer.error(err),
//       complete: () => observer.complete()
//     });
//   });
//   return output;
// }

// let input = Rx.Observable.from([1, 2, 3, 4]);
// let output = multiplyByTen(input);
// output.subscribe(x => console.log(x));

// var myObservable = Rx.Observable.create(observer => {
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
//   observer.next(5);
// });
// myObservable.subscribe({
//   next: x => console.log(x),
//   error: err => console.error("something wrong occurred: " + err),
//   complete: () => console.log("done")
// });
// let subject = new Rx.Subject();
// subject.subscribe({
//   next: v => console.log("observerA: " + v)
// });
// subject.subscribe({
//   next: v => console.log("observerC: " + v)
// });
// subject.next(1);
// subject.next(1);
// subject.next(1);
// subject.subscribe({
//   next: v => console.log("observerE: " + v)
// });

// subject.next(2);
// subject.subscribe({
//   next: v => console.log("observerF: " + v)
// });
// subject.next(3);

// const sleep = milliseconds => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds));
// };
// const runner = async () => {
//   console.log("Before");
//   //   let clicks = Rx.Observable.from([1,2,3,4,5]);
//   //   let result = clicks.debounceTime(100)
//   await sleep(1000);
//   //   console.log("After");
//   //   result.subscribe(x => console.log(x));
// };
// runner();

// const source=Rx.Observable.interval(1000)
// const example=source.skipWhile(val=>val<5)
// example.subscribe(x=>console.log(x))

// emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3

// const source = Rx.Observable.of(3, 9, 3, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

// // allow values until value from source equals 3, then complete
// // output: [3, 3, 3]
// source
//   .takeWhile(it => it === 3)
//   .subscribe(val => console.log("takeWhile", val));

// // output: [3, 3, 3, 3, 3, 3, 3]
// source.filter(it => it === 3).subscribe(val => console.log("filter", 3));

// const source = Rx.Observable
// 	.merge(
//         //emit every .75 seconds
// 		Rx.Observable.interval(750),
//         //emit every 1 second
//         Rx.Observable.interval(1000)
// 	);
// //throttle in middle of emitted values
// const example = source.throttleTime(2000);
// //output: 0...1...4...4...8...7
// const subscribe = example.subscribe(val => console.log(val));
//emit every 2.5 seconds

//emit one item
// const sample = val => Rx.Observable.of(val).delay(5000);
// //convert basic observable to promise
// const example = sample('First Example')
//   .toPromise()
//   //output: 'First Example'
//   .then(result => {
//     console.log('From Promise:', result);
//   });

// const source = Rx.Observable.interval(1000);
// //After three values are emitted, pass on as an array of buffered values
// const bufferThree = source.bufferCount(5);
// //Print values to console
// //ex. output [0,1,2]...[3,4,5]
// const subscribe = bufferThree.subscribe(val => console.log('Buffered Values:', val));

// const source = Rx.Observable
// 	.merge(
//         //emit every .75 seconds
// 		Rx.Observable.interval(750),
//         //emit every 1 second
//         Rx.Observable.interval(1000)
// 	).take(20);
// source.subscribe(x=>console.log(x))

// const timerobservable = Rx.Observable.timer(0, 1000);
// const clockobservable = Rx.Observable.interval(1000);
// const result = timerobservable.window(clockobservable);
// result.subscribe(x => console.log(`split part:${x}`));

// let foo=Rx.Observable.of('h','e','l','l','o')
// let bar=Rx.Observable.interval(400).take(5)
// let combined=Rx.Observable.zip(foo,bar,(x,y)=>x)
// combined.subscribe(x=>console.log(x))

// const subject = new Rx.Subject();
// const example = subject.scan((acc, curr) => Object.assign({}, acc, curr), {});
// const subscribe = example.subscribe(val => console.log('Accumulated object:', val));
// //next values into subject, adding properties to object
// subject.next({name: 'Surajith'}); // {name: 'Joe'}
// subject.next({age:28})

// const scanObs=Rx.Observable.interval(1000)
// const result=scanObs.scan((a,c)=>[...a,c],[])
// result.subscribe(x=>console.log(x))

// const foo = Rx.Observable.interval(1000).take(4);
// const result = foo.startWith("a", "b", "c");

// result.subscribe(x => console.log(x));

//emit a value every 2 seconds

// const source = Rx.Observable.interval(2000);
// const example = source
//   //for demonstration, add 10 to and return as observable
//   .map(val => Rx.Observable.of(val + 10))
//   //merge values from inner observable
//   .concatAll();
// //output: 'Example with Basic Observable 0', 'Example with Basic Observable 2'...
// const subscribe = example.subscribe(val => console.log('Example with Basic Observable:', val));

// const source = Rx.Observable.interval(3000);
// const secondSource = Rx.Observable.interval(1000);
// const example = source
//   .withLatestFrom(secondSource)
//   .map(([first, second]) => {
//     return `First Source (2s): ${first} Second Source (1s): ${second}`;
//   });
// const subscribe = example.subscribe(val => console.log(val));

// const foo=Rx.Observable.empty()
// foo.subscribe(x=>console.log(x))

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// const runner = async () => {
//   console.log("Before");
//   await sleep(1000);
//   console.log("After");
//   const delaytime = Math.floor(Math.random() * 4 + 1) * 1000;
//   const values = Rx.Observable.interval(1000).delay(delaytime);
//   const randomvalues = values
//     .map(data => Math.floor(Math.random() * 1000))
//     .take(20)
//     .do(x => console.log(`current value:${x}`));
//   const maxvalue = randomvalues.scan((acc, curr) => {
//     return acc > curr ? acc : curr;
//   }, 0);
//   maxvalue.subscribe(x => console.log(`max value:${x}`));
// };
// runner();
///////Show Max Number of out of some Radom Numbers///////
// const runner = async () => {
//   console.log("Before");
//   await sleep(1000);
//   console.log("After");
//   const delaytime = Math.floor(Math.random() * 4) * 1000;
//   console.log(delaytime);
//   const values = Rx.Observable.interval(delaytime)
//     .map(data => Math.floor(Math.random() * 1000))
//     .scan((acc, curr) => {
//       console.log(`Current value:${curr}`);
//       return acc > curr ? acc : curr;
//     }, 0);
//   values.subscribe(val => console.log(`Max Value:${val}`));
// };
// runner();

//////Diff Between MergeMap and ConcatMap//////////

// show = x => {
//   console.log(`Max Value :${x}`);
// };

// const interval = Rx.Observable.interval(1000)
//   .concatMap(val =>
//     Rx.Observable.of(Math.floor(Math.random() * 1000)).delay(
//       Math.floor(Math.random() * 10) * 1000
//     )
//   )
//   .scan((acc, curr) => {
//     console.log(`Current value:${curr}`);
//     return acc > curr ? acc : curr;
//   }, 0).subscribe(x=>show(x))

////Replace Concat map With MergeMap and Switch Map and see the difference/////
const interval = Rx.Observable.interval(1000).take(5)
  .concatMap(val =>
    Rx.Observable.of(`Delayed by: ${val}ms`).delay(2000)
  )
  .subscribe(x=>console.log(x))
