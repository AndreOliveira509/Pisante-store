import axios from 'axios';
import React, { useState } from 'react';

function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/data');
            setData(response.data);
            setError('');
        } catch (error) {
            if (!error?.response) {
                setError('Error: No Server Response');
            } else if (error.response.status === 404) {
                setError('Data not found');
            } else {
                setError('Error fetching data');
            }
        }
    };

    return (
        <div className='home'>
            <h2>Home</h2>
            <button onClick={fetchData}>Fetch Data</button>
            {error && <p className='error'>{error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default Home;
