import React, { useState, useEffect }from 'react';
import axios from 'axios';

const FriendsList = ()=> {
    const [state, setState] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token'),
            }
        })
        .then(res => setState(res.data))
        .catch(err => console.error({err}))
    },[])

    return(
        <div className='centColumn'>
            <div className='friends'>
                <h1>FRIENDS LIST</h1>
                { state.map( friend => {
                    return( 
                        <p key={friend.name} className='uppercase' >
                            -{friend.name} -{friend.email}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default FriendsList;