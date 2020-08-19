import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
//import './Card.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Card from './Card';

//Inline If with Logical && Operator
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
        </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React', ''];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);
//conditional rendering
/*function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) { return <UserGreeting />; } return <GuestGreeting />;
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) { button = <LogoutButton onClick={this.handleLogoutClick} />; } else { button = <LoginButton onClick={this.handleLoginClick} />; }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />  <Card url="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg" imgAlt="img not found" name="Cat" series="Neko" details="Meow!" />  {button}      </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);*/
//handling events
/*class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this);
    }
        handleClick() { this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn })); }
        render() {
            return (
                <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
}

ReactDOM.render(
  <Toggle />,
document.getElementById('root')
);*/
//using classes
/*function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { this.setState({ date: new Date() }); }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date = {this.state.date} />
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />      <Clock />      <Clock />    </div>
    );
}

function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);*/

//using functions
/*function formatDate(date) {
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
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
