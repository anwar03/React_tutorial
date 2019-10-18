// object destructuringggg 

const person = {
    name: 'Anwar',
    location: {
        city: 'Dhaka',
        temp: 32
    },
    age: 26
};


const {age, name: firstName = "Anonymous" } = person;

console.log(`${firstName} is ${age}`);

const { temp: temparature, city } = person.location;

if( temparature && city ){
    console.log(`it's ${ temparature } in ${ city }.`);
}



const book = {
    title: 'the art of explenation.',
    author: 'Anwar',
    publishar: {
        name: 'panguin'
    }
};


const {name: publisharName = "Self-published" } = book.publishar

console.log( publisharName );

// Array destructuring