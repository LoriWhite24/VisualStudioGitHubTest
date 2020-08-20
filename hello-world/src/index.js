import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import { useTable } from 'react-table';
//import './Card.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Card from './Card';

//Playing with Containment where the components don’t know their children ahead of time
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

//Playing with Tables
const cities = [
    {
        id: 1,
        city: 'New York',
        state: 'NY',
        population: 8000000
    },
    {
        id: 2,
        city: 'Los Angeles',
        state: 'CA',
        population: 4000000
    },
    {
        id: 3,
        city: 'Dallas',
        state: 'TX',
        population: 1300000
    },
    {
        id: 4,
        city: 'Chicago',
        state: 'IL',
        population: 2700000
    },
    {
        id: 5,
        city: 'Boston',
        state: 'MA',
        population: 700000
    }
];

const datahead = ["#", "City", "State", "Population"];
const data = cities;
const columns = [
    {
        Header: '#',
        accessor: 'id',
    },
    {
        Header: 'City',
        accessor: 'city',
    },
    {
        Header: 'State',
        accessor: 'state',
    },
    {
        Header: 'Population',
        accessor: 'population',
    }
];
//Table with built in library
function App() {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
       
    } = useTable({
        columns,
        data,
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, j) => {
                                return  j === 0 ? <th {...cell.getCellProps()}>{cell.render('Cell')}</th> : <td {...cell.getCellProps()} data-th={datahead[j]}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}
//Table without built in library
function TableRow(props) {
    const city = props.value;
    return (
    <tr>
        <th >{city.id}</th>
            <td data-th="City">{city.city}</td>
            <td data-th="State">{city.state}</td>
            <td data-th="Population">{city.population}</td>
    </tr>);
}

function CityTable(props) {
    const cities = props.cities;
    const dhead = props.head;
    return (
        <table>
            <thead>
                <tr>
                    {dhead.map((item) => {
                        return <th>{item}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {cities.map((item) =>
                    <TableRow key={item.id}
                        value={item} />
                )}
            </tbody>
        </table>
    );
}

const left = <div><h2> Table Made From Scratch</ h2><CityTable cities={cities} head={datahead} /></div>;
const right = <div><h2>Table Made From react-table</h2><App /></div>;

ReactDOM.render(
    <FancyBorder color="green">
        <SplitPane left={left} right={right}/>        
    </FancyBorder>,
    document.getElementById('root')
);


//Lifting State Up

//Writing Conversion Functions
/*function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

//Adding a Second Input 
const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale; return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>        <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }
    handleCelsiusChange (temperature) {
        this.setState({ scale: 'c', temperature });
    }
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput scale="f" temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);*/




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
