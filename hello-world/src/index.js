import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

/*function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}*/

/*function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}*/

/*const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg"
};*/

/*const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
        <img className="photo" src={user.avatarUrl} alt={"img not found"}></img>
    </div>
    );*/



function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



/*ReactDOM.render(
  *//*<React.StrictMode>
    <App />
  </React.StrictMode>*//*
    element,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
