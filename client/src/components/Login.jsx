import { React, useState, useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { isFetching, dispatch } = useContext(Context);

  function usernamechanged(event) {
    setusername(event.target.value);
  }

  function passwordchanged(event) {
    setpassword(event.target.value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LoginStart" });
    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        username: username,
        password: password,
      });
      dispatch({ type: "LoginSuccess", payload: res.data });
      if (res) navigate("/Profile");
      window.location.reload();
    } catch (err) {
      dispatch({ type: "LoginFailure" });
      alert("try again");
    }
  };
  return (
    <section class="vh-80">
      <div class="container h-80">
        <div class="row d-flex align-items-center justify-content-center h-80">
          <div class="col-md-8 col-lg-4 col-xl-4">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <p class="text-center text-primary h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Log In
              </p>

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  onChange={usernamechanged}
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example13">
                  Username
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  onChange={passwordchanged}
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="text-center form-check">
                  <button
                    type="submit"
                    class="btn btn-outline-primary mb-2 btn-lg w-100"
                    disabled={isFetching}
                    onClick={onSubmit}
                  >
                    Log In
                  </button>
                  <a class="text-muted" href="/ForgotPass">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
