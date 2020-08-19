import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
//import './Card.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Card from './Card';

//The file input tag
/*class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
          <input type="file" ref={this.fileInput} />        </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(
    <FileInput />,
    document.getElementById('root')
);*/





//Controlled Input Null Value
//The input is locked at first but becomes editable after a short delay.
/*ReactDOM.render(<input value="hi" />, document.getElementById('root'));

setTimeout(function () {
    ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 5000);*/




//Handling Multiple Inputs 
/*class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
          <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
          <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);*/




//The select Tag 
/*class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root')
);
*/

//The textarea Tag
/*class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Please write an essay about your favorite DOM element.' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(
    <EssayForm />,
    document.getElementById('root')
);*/


//Controlled Components 
/*class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);*/


//Embedding map() in JSX 
/*function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                    value={number} />
            )}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);*/



//Keys Must Only Be Unique Among Siblings 
/*function Blog(props) {
    const sidebar = (<ul>
        {props.posts.map((post) =>
            <li key={post.id}>          {post.title}
            </li>
        )}
    </ul>
    );
    const content = props.posts.map((post) => <div key={post.id}>      <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );
    return (
        <div>
            {sidebar}      <hr />
            {content}    </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);*/



//Extracting Components with Keys
/*function ListItem(props) {
    // Correct! There is no need to specify the key here: 
    return <li>{props.value}</li>;
}

function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
            // Correct! Key should be specified inside the array.    
            <ListItem key={number.toString()} value={number} />);
  return (
            <ul>
                {listItems}
            </ul>
        );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
        <NumberList numbers={numbers} />,
        document.getElementById('root')
);*/



//Basic List Component 
/*function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>      {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);*/



//Rendering Multiple Components
/*const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
);*/



//Preventing Component from Rendering 
/*function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);*/



//Inline If with Logical && Operator
/*function Mailbox(props) {
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
);*/



//conditional rendering with Inline If-Else with Conditional Operator and Preventing Component from Rendering
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
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn ? <Card url="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg" imgAlt="img not found" name="Cat" series="Neko" details="Meow!" /> : null}
                {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
            </div>
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
