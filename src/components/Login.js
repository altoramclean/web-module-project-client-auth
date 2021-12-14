import React from 'react';
import axios from 'axios';

class Login extends React.Component {
 // Initial state (values)
 state = {
    credentials: {
        username: "",
        password: ""
    }
};
