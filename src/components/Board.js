import React from 'react';
import '../App.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    rand = () => {
        return Math.floor(Math.random() * (6 - 1 + 1)) + 1;    
    }

    handleClick = (e) => {
        e.preventDefault();
        let unchecked = e.currentTarget.parentElement.querySelectorAll('.unchecked');
        unchecked.forEach((e)=>{
            e.innerHTML = this.rand();
        })
        this.setState({
            counter: this.state.counter + 1
        })
        
    }

    check = (e) => {
        e.currentTarget.classList.toggle('unchecked');
        e.currentTarget.classList.toggle('checked');
    }

    componentDidMount () {
        let unchecked = document.querySelectorAll('.unchecked');
        unchecked.forEach((e)=>{
            e.innerHTML = this.rand();
        })
    }

    render() {
        return (
            <>
            <div className = 'board'>
                <div className = 'dice unchecked' onClick = {this.check}></div>
                <div className = 'dice unchecked' onClick = {this.check}></div>
                <div className = 'dice unchecked' onClick = {this.check}></div>
                <div className = 'dice unchecked' onClick = {this.check}></div>
                <div className = 'dice unchecked' onClick = {this.check}></div>
            </div>
            <button className = 'button' onClick = {this.handleClick} disabled = {this.state.counter > 1 ? true : false}>Throw</button>
            </>
        )
    }
}

export default Board;