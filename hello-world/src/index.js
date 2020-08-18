import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

/*const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatarUrl: "https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg"
};*/

/*function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />      <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">      <Avatar user={props.user} />      <div className="UserInfo-name">        {props.user.name}      </div>    </div>);
}

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />);
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
