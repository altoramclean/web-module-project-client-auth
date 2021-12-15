import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {
    useEffect(() => {
        axiosWithAuth().post("/logout", {

        }).then(resp => {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            props.history.push("/login")

        }).catch(error => {
            console.error(error)
        })
    }, [])


    return(
        <div>
        </div>
    )
} 

export default Logout;