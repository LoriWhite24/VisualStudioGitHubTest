import React from "react";

// JavaScript source code
class Card extends React.Component {
    render() {
        return (
        <div className="card">
            <Header title="Chararter Card" />
                <Body url={this.props.url} imgAlt={this.props.imgAlt} name={this.props.name} series={this.props.series} />
                <Footer details={this.props.details} />
        </div>
        );
    }
}
function Header(props) {
    return (
        < div className = "card-header" >
        <h4>{ props.title }</h4>
    </div >
    );
}
function Body(props) {
    return (
        < div className="card-body" >
            <img src={props.url} alt={props.imgAlt} />
            <div className="container">
                <p> Name: {props.name}</p>
                <p> Series: {props.series}</p>
            </div>
        </div >
    );
}

function Footer(props) {
    return (
        < div className="card-footer" >
            <p> {props.details} </p>
        </div >
    );
}
export default Card;