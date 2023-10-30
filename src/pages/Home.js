import { Link, useLoaderData } from "react-router-dom"
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Home() {
    const api_url = 'https://nlp.fantasyligasuper.com';
    const [users,setData] = useState([])

    useEffect(() =>  {
      axios.get(api_url + '/users')
             .then(res => setData(res.data))
             .catch(err => console.log(err))
 },[]);

    return (
            <div className="users">
                <h2>BADA APP</h2>
                <input id="userName" />
                <button onClick={() => this.addClick()} >Add User</button>
                { users.map(user =>
                        <p>
                            <b>{user.name}</b>
                            <button onClick={() => this.deleteClick(user.user_id)} >Delete User</button>
                        </p>
                )}
            </div>
            );
}

