import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log("Google User Response:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
