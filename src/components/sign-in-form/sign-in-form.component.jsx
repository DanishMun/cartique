import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase.utils";
import { signInAuthUserWithEmailandPassword } from "../../utils/firebase.utils";
import { buttonTypeClasses } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"; // Import the CSS file for styling
import Button from "../button/button.component";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields); // Reset the form fields to their default values
  };

  const signInWithGoogle = async () => {
    try {
      console.log("Google Sign-In triggered"); // Debugging log
      await signInWithGooglePopup();
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailandPassword(email, password);
      // Update the current user in context
      // Debugging log
      resetFormFields(); // Reset the form fields after successful sign-in
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/invalid-credential":
          alert("Invalid credentials provided");
          break;
        default:
          console.error("Error during sign-in:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button
            buttonType={buttonTypeClasses.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
