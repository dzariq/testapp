import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.api_url = 'https://nlp.fantasyligasuper.com';
    }

    //init
    componentDidMount() {
        this.refreshUsers()
    }

    async refreshUsers() {
        fetch(this.api_url + '/users')
                .then((res) => res.json())
                .then((data) => this.setState({users: data}));
    }

    async addClick() {
        var userName = document.getElementById('userName').value;
        const data = new FormData();

        data.append("name", userName);
        axios.post(this.api_url + '/add', data)
                .then((res) => res.json())
                .then((res) => {
                    alert(res);
                    this.refreshUsers()
                });

    }

    async deleteClick(id) {
        fetch(this.api_url + '/delete?user_id=' + id, {
            method: 'DELETE'
        })
                .then((res) => res.json())
                .then((res) => {
                    alert(res);
                    this.refreshUsers()
                });
    }

    render() {
        const{users} = this.state;
        return (
                <div className="App">
                    <h2>BADA APP</h2>
                    <input id="userName" />
                    <button onClick={() => this.addClick()} >Add User</button>
                    {users.map(user =>
                                <p>
                                    <b>{user.name}</b>
                                    <button onClick={() => this.deleteClick(user.user_id)} >Delete User</button>
                                </p>
                        )}
                </div>
                );
    }

}

export default App;
