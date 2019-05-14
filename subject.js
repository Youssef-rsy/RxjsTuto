
let {Subject} = require('rxjs/Subject');

const mySubject = new Subject();
const  firstSubscriber = mySubject.subscribe(
    x=>console.log(`First subscriber got ${x}`)
);
const secondSubscriber = mySubject.subscribe(
    y=>console.log(`Second subscriber got ${y}`)
    );

    mySubject.next(1);
   firstSubscriber.unsubscribe();
    mySubject.next(3);

