import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss"; // Import the CSS file for styling
import Button from "../button/button.component";
const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields); // Reset the form fields to their default values
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields(); // Reset the form fields after successful
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      if (error.code === "auth/weak-password") {
        alert("password should be at least 6 characters long");
      }
      if (error.code === "auth/invalid-email") {
        alert("email is invalid");
      } else {
        console.log("error creating user", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
