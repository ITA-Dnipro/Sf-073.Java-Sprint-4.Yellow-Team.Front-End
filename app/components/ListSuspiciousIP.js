import React, { Component } from "react";
import { Buffer } from "buffer";

const LIST_IPS_API = "http://localhost:28852/api/antifraud/suspicious-ip";
export default class ListSuspiciousIP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listIps: [],
    };
  }

  componentDidMount() {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_IPS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
            listIps: json,
        });
      });
  }

  render() {
    if (this.state.listIps[0] != null) {
      return (
        <div>
          <div className="container">
        
            {this.state.listIps &&
              this.state.listIps.map((ip) => (
                <div key={ip.id}>
                  {ip.id}
                  <br />
                  {ip.ip}
                  <br />
                </div>
              ))}
              
          </div>
        </div>
      );
    }
  }
}
