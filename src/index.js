import sum from './sum';

const greet = (name) => console.log(`Hello, ${name}`);

greet('Jon Snow v3');

const a = new Promise((resolve, reject) => {
    console.log('whatever promise');
});

console.log(sum(2, 4));
