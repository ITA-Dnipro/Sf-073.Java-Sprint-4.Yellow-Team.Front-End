import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

export default class SupportBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <nav>
            <div>
              <ul className="header">
                <li>
                  <Link to="users">All users</Link>
                </li>
                <li>
                  <Link to="add-ip">Add Suspicious IP</Link>
                </li>
                <li>
                  <Link to="list-ip">List Suspicious IP</Link>
                </li>
                <li>
                  <Link to="add-stolen-card">Add Stolen Card</Link>
                </li>
                <li>
                  <Link to="transaction-history">Transaction History</Link>
                </li>
                <li>
                  <Link to="transaction-feedback">Transaction Feedback</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}
