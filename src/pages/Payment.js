import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Payment() {
    const searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get('order_id');

    const api_url = 'https://nlp.fantasyligasuper.com';
    const [payment, setData] = useState([]);
    const [actionUrl, setUrl] = useState('');

    useEffect(() => {
        const form = document.getElementById('order');
        if (actionUrl != '')
            form.submit();
    }, [actionUrl]);

    

    useEffect(() => {
        axios.get(api_url + '/payment/' + orderId)
                .then(response => {
                    console.log(response.data[0].formcode)
                    setData(response.data[0])
                    setUrl(`${response.data[0].url}/payment/${response.data[0].formcode}`)

                })
                .catch(err => console.log(err))

    }, [orderId]);

    return (
            <form id="order" method="post" action={actionUrl}>
                <input type="hidden" name="detail" value={payment.detail} />
                <input type="hidden" name="amount" value={payment.amount}/>
                <input type="hidden" name="order_id" value={payment.order_id}/>
                <input type="hidden" name="name" value={payment.name}/>
                <input type="hidden" name="email" value={payment.email}/>
                <input type="hidden" name="phone" value={payment.phone}/>
                <input type="hidden" name="hash" value={payment.hash}/>
            </form>
            )



}
