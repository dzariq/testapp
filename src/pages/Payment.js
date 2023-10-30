import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';


export default function Payment() {
   const searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get('order_id');

        const api_url = 'https://nlp.fantasyligasuper.com';
    const [users,setData] = useState([])

    useEffect(() =>  {
      axios.get(api_url + '/payment/'+orderId)
             .then(res => setData(res.data))
             .catch(err => console.log(err))
 },[]);

return (
        <div className="about">
 <h2>Parameter Value: {orderId}</h2>
</div>
)
}
