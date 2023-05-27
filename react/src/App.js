import React, { useState } from 'react';
import RegistrationForm from './RegistrationPage';

function App() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false); // State to track registration success

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { day, month, year } = formData;
    const dateOfBirth = `${year}-${month}-${day}`;

    const updatedFormData = {
      ...formData,
      date_of_birth: dateOfBirth,
    };

    fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData),
    })
      .then((response) => {
        if (response.status === 201) {
          // Registration successful
          setFormErrors((prevErrors) => ({ ...prevErrors, email: '', mobile_number: '' }));
          setRegistrationSuccessful(true); // Set registration success state
          console.log('Registration successful!');
          // You can perform any additional actions here, such as showing a success message or redirecting the user.
        } else if (response.status === 400) {
          // Registration failed with validation errors
          return response.json();
        } else {
          throw new Error('Registration failed.');
        }
      })
      .then((data) => {
        if (data) {
          // Registration failed with validation errors
          setFormErrors(data);
          console.log('Registration failed:', data);
          // You can handle the error here, such as showing the error messages on the form.
        }
      })
      .catch((error) => {
        console.error('Error registering:', error);
        // You can handle the error here, such as showing an error message to the user.
      });
  };

  const handleLogin = () => {
    // Handle login button click here
    console.log('Login button clicked');
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <RegistrationForm
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        registrationSuccessful={registrationSuccessful} // Pass registration success state to the form
        handleLogin={handleLogin} // Pass login button click handler to the form
      />
    </div>
  );
}

export default App;
