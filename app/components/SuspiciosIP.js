import React, { Component } from 'react';
import axios from "axios";
class SuspiciosIP extends Component {
    handleSubmit = event => {
        const base64encodedData = localStorage.getItem("Authorization");
        event.preventDefault();
        const ip = {
            ip: this.state.ip
        }
        console.log(ip)
        axios.post('http://localhost:28852/api/antifraud/suspicious-ip', ip, {
            headers: {
                Authorization: base64encodedData,
            },
        });
    }
    handleChange = event => {
        this.setState({ ip: event.target.value });
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <label> Suspicious ip:
                    <input type="text" name="ip" onChange={this.handleChange} />
                </label>
                <button type="submit"> Add </button>
            </form>
        );
    }
}
export default SuspiciosIP;