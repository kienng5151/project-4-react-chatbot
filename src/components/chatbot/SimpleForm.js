
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post'

class SimpleForm extends Component {
    render() {
        return (
            <ChatBot
            // The ChatBot class component uses the property steps to list an array of text, user, and option steps
            steps={[
                {
                    id: "intro",
                    message: "Hi",
                    trigger: "intro-greeting",
                },
                {
                    id: "intro-greeting",
                    message: "Welcome to Self-Diagnosis Medical Centre.",
                    trigger: "intro-bot-name",
                },
                {
                    id: "intro-bot-name",
                    message: "My name is SmartBot.",
                    trigger: "q-firstname",
                },
                {
                    id: "q-firstname",
                    message: "What is your first name?",
                    trigger: "firstname",
                },
                {
                    id: "firstname",
                    user: true,
                    trigger: "q-lastname",
                },
                {
                    id: "q-lastname",
                    message: "What is your last name?",
                    trigger: "lastname",
                },
                {
                    id: "lastname",
                    user: true,
                    trigger: "q-age",
                },
                {
                    id: "q-age",
                    message: "What is your age?",
                    trigger: "age",
                },
                {
                    id: "age",
                    user: true,
                    trigger: "q-fever",
                },
                {
                    id: "q-fever",
                    message: "Do you have fever?",
                    trigger: "q-yes-or-no-fever",
                },
                {
                    id: "q-yes-or-no-fever",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-fever-response" },
                        {value: "n", label: "No", trigger: "no-fever-response"},
                    ]
                },
                {
                    id: "yes-fever-response",
                    options: [
                        { value: "y", label: "Mild fever", trigger: "q-sore-throat" },
                        { value: "y", label: "High fever", trigger: "q-sore-throat" },
                    ]
                },
                {
                    id: "no-fever-response",
                    message: "Great!",
                    end: false,
                    trigger: "q-sore-throat",
                },
                {
                    id: "q-sore-throat",
                    message: "Do you have sore throat?",
                    trigger: "q-yes-or-no-sore-throat",
                },
                {
                    id: "q-yes-or-no-sore-throat",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-sore-throat-response" },
                        {value: "n", label: "No", trigger: "no-sore-throat-response"},
                    ]
                },
                {
                    id: "yes-sore-throat-response",
                    options: [
                        { value: "y", label: "Sore throat", trigger: "q-difficulty-breathing"},
                        { value: "y", label: "Sore throat and dry cough", trigger: "q-difficulty-breathing" },
                    ]
                },
                {
                    id: "no-sore-throat-response",
                    message: "Great!",
                    end: false,
                    trigger: "q-difficulty-breathing",
                },
                {
                    id: "q-difficulty-breathing",
                    message: "Do you have breathing difficulty or shortness of breath?",
                    trigger: "q-yes-or-no-difficulty-breathing",
                },
                {
                    id: "q-yes-or-no-difficulty-breathing",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-difficulty-breathing-response" },
                        { value: "n", label: "No", trigger: "no-difficulty-breathing-response" },
                    ]
                },
                {
                    id: "yes-difficulty-breathing-response",
                    message: "Please proceed to the next question.",
                    end: false,
                    trigger: "q-tiredness",
                },
                {
                    id: "no-difficulty-breathing-response",
                    message: "Great!",
                    end: false,
                    trigger: "q-tiredness",
                },
                {
                    id: "q-tiredness",
                    message: "Do you suddenly feel tired or are fatigued?",
                    trigger: "q-yes-or-no-tiredness",
                },
                {
                    id: "q-yes-or-no-tiredness",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-tiredness-response" },
                        {value: "n", label: "No", trigger: "no-tiredness-response"},
                    ]
                },
                {
                    id: "yes-tiredness-response",
                    message: "Sorry to hear that.",
                    end: false,
                    trigger: "q-loss-of-taste",
                },
                {
                    id: "no-tiredness-response",
                    message: "Good to hear that!",
                    end: false,
                    trigger: "q-loss-of-taste",
                },
                {
                    id: "q-loss-of-taste",
                    message: "Do you have new or sudden loss of taste or smell?",
                    trigger: "q-yes-or-no-loss-of-taste",
                },
                {
                    id: "q-yes-or-no-loss-of-taste",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-loss-of-taste-response" },
                        { value: "n", label: "No", trigger: "no-loss-of-taste-response" },
                    ]
                },
                {
                    id: "yes-loss-of-taste-response",
                    message: "Hang on there!",
                    end: false,
                    trigger: "q-suggestion",
                },
                {
                    id: "no-loss-of-taste-response",
                    message: "Awesome!",
                    end: false,
                    trigger: "q-suggestion",
                },
                {
                    id: "q-suggestion",
                    message: "If you have any of these symptoms, we would like to suggest that you check with our panel doctors.",
                    trigger: "q-suggestion-query",
                },
                {
                    id: "q-suggestion-query",
                    message: "Do you want to make appointment with our panel doctors?",
                    trigger: "q-yes-or-no-to-suggestion",
                },
                {
                    id: "q-yes-or-no-to-suggestion",
                    options: [
                        { value: "y", label: "Yes", trigger: "yes-to-suggestion-response" },
                        { value: "n", label: "No", trigger: "no-to-suggestion-response" },
                    ]
                },
                {
                    id: "yes-to-suggestion-response",
                    message: "What is your e-mail?",
                    trigger: "email",
                },
                {
                    id: "no-to-suggestion-response",
                    message: "Thank you for your time. Please chat with us again if you need our help.",
                    end: true,
                },
                {
                    id: "email",
                    user: true,
                    validator: (value) => {
                        // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                            return true;
                        } else {
                            return'Please enter a valid email.';
                        }
                    },
                    trigger: "q-phone",
                },
                {
                    id: "q-phone",
                    message: "What is your phone number? Please state your phone number without any space and hyphen.",
                    trigger: "phone",
                },
                {
                    id: "phone",
                    user: true,
                    validator: (number) => {
                        if (/^\d{10}$/.test(number)) {
                            return true;
                        } else {
                            return "Please enter a valid phone number.";
                        }
                    },
                    trigger: "q-submit",
                },
                {
                    id: "q-submit",
                    message: "Do you wish to submit your details?",
                    trigger: "submit",
                },
                {
                    id: "submit",
                    options: [
                        { value: "y", label: "Yes", trigger: "end-message-response" },
                        { value: "n", label: "No", trigger: "no-submit-response" },
                    ]
                },
                {
                    id: "no-submit-response",
                    message: "Your details was not submitted. Thank you and chat with us again!",
                    end: true,
                },
                {
                    id: "end-message-response",
                    // call on the <Post /> component and display it as a chatbot message
                    component: <Post />,
                    asMessage: true,
                    end: true,
                },
            ]}
            />
        );
    }
}


export default SimpleForm;