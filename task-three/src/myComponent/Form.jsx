/*Task 3: Create a JSX component for a form
Create a new file called "Form.js" and define a functional component.
Inside the component, render a form element with input fields for name, email, and message.
Handle form submission using react event handlers like onSubmit and implement any necessary validation.
Use state props to store form input values and update them as the user types.*/

// Form.js

import React, { useState } from "react";

function Form() {
    // Define state variables for form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Define a state variable for form submission status
    const [submitted, setSubmitted] = useState(false);

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form data here (e.g., check if fields are not empty)

        // For demonstration purposes, let's just set the submission status to true
        setSubmitted(true);
    };

    return (
        <div className="container">
            <div className="form">
                <h1>Contact Us</h1>
                {submitted ? (
                    <div>
                        <p>Form submitted successfully!</p>
                        <p>Name: {formData.name}</p>
                        <p>Email: {formData.email}</p>
                        <p>Message: {formData.message}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Form;
