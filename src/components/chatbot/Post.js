
import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props)
        const { steps } = this.props;
        const { firstname, lastname, age, email, phone, submit } = steps;

        this.state = { firstname, lastname, age, email, phone, submit };
    }
    
    componentDidMount() {
        const userDetails = {
            firstName: this.state.firstname.value,
            lastName: this.state.lastname.value,
            age: this.state.age.value,
            email: this.state.email.value,
            phone: this.state.phone.value,
        };
        axios
            .post('http://localhost:3000/api', userDetails)
            .then(res => {
                console.log(res.status)
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <p>Thank you! </p>
                <p>Your data was submitted successfully!</p>
                <p>Our customer service agent will contact you soon!</p>
            </div>
        )
    }
    
};

export default Post;