import sum from './sum';
import React from 'react';
import ReactDOM from 'react-dom';

const greet = (name) => console.log(`Hello, ${name}`);

greet('Jon Snow v3');

const a = new Promise((resolve, reject) => {
    console.log('whatever promise');
});

console.log(sum(2, 4));

const Root = () => {
    return <div>Hello world, this is my react app</div>;
};

ReactDOM.render(<Root />, document.getElementById('root'));
