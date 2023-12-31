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
            </div>
            );
}

