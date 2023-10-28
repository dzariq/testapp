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
        const response = await axios.get(this.api_url + '/users')
        const data = await response.data
        this.setState({
            users: data,
        })
    }

    async addClick() {
        var userName = document.getElementById('userName').value;
        const data = new FormData();

        data.append("name", userName);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await axios.post(this.api_url + '/add', data, config)
        const resData = await res.resData
        alert('SUCCESS ADD')
        this.refreshUsers();

    }

    async deleteClick(id) {
        const res = await axios.delete(this.api_url + '/delete?user_id=' + id)
        const resData = await res.resData
        alert('SUCCESS DELETE')
        this.refreshUsers();

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
