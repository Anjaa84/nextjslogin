import { useState, useEffect } from "react";
import Router from "next/router";
import { loginUser } from "../../../lib/auth";
import { removeToken } from "../../../lib/token";
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../../../actions/auth";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();


  useEffect(() => {
    // Remove the User's token which saved before.
    removeToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      // API call:
      // const data = await loginUser({
      //   email,
      //   password
       
      // });

      dispatch(login(email, password));
      // console.log("Data is :", data);
      // console.log("Payload is :" , data.payload);
      console.log("Token is :" , data.payload);
      if (data.payload ) {
        if (rememberMe) {
          window.localStorage.setItem("token", data.payload);
        } else {
          window.sessionStorage.setItem("token", data.payload);
        }

        // Router.push("/dashboard");
        setTimeout(() => {

          Router.push("/dashboard");
        }, 1000);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend className="h1">Login</legend>
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="usernameInput"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="passwordInput"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="RememberMeInput"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="RememberMeInput">
              Remember Me
            </label>
          </div>
        </div>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </fieldset>
    </form>
  );
}
