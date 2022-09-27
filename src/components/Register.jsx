import { useState } from "react";
import { axiosInstance } from "../config";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Register() {
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [passsword, setpassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [usedEmail, setUsedEmail] = useState([]);

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const navigate = useNavigate();

  function navigatelogin() {
    navigate("/Login");
  }
  function genPass() {
    return Math.random().toString(36).slice(-8);
  }
  const validate = (fullname, username, email) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!username) {
      errors.username = "Username is required!";
    }
    if (!fullname) {
      errors.fullname = "Full Name is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };
  function onSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(fullname, username, email));
    console.log(formErrors, Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      const pas = genPass();
      setpassword(pas);
      axiosInstance
        .post("/user/register", {
          fullname: fullname,
          username: username,
          email: email,
          password: pas,
        })
        .then((res) => {
          console.log(res);
          setIsSubmit(true);
        })
        .catch((err) => {
          setUsedEmail(err.response.data);
          console.log(usedEmail);
          toggleShowA();
        });
    }
  }
  return (
    <section class="sticky">
      <div class="bubbles">
        <div class="row mx-0 d-flex align-items-center justify-content-center auth-wrapper">
          {usedEmail.length !== 0 ? (
            <ToastContainer position="top-end" className="p-3">
              <Toast
                show={showA}
                onClose={toggleShowA}
                bg="danger"
                delay={2500}
                autohide
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Attention !</strong>
                </Toast.Header>
                <Toast.Body class="m-2">{usedEmail[0].msg}.</Toast.Body>
              </Toast>
            </ToastContainer>
          ) : null}

          <div class="row d-flex align-items-center justify-content-center col-lg-8 m-2">
            {usedEmail.length === 0 &&
            Object.keys(formErrors).length === 0 &&
            isSubmit ? (
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <div
                  class="alert alert-success d-flex align-items-center"
                  role="alert"
                >
                  <div className="ms-2">
                    You Signed Up successfully Please cheak your email.
                  </div>
                </div>
              </div>
            ) : (
              <div class="col col-sm-4 col-lg-6 d-flex align-items-center justify-content-center">
                <div class="bg-white m-2 p-5">
                  <form class="px-2">
                    <div class="mb-4">
                      <h1>Sign Up</h1>
                      <p>Please Sign Up For A New Account.</p>
                    </div>
                    <div class="mb-5">
                      <form action="">
                        <div class="form-group">
                          <label for="username" class="">
                            FullName
                          </label>
                          <input
                            onChange={(event) =>
                              setfullname(event.target.value)
                            }
                            name="username"
                            type="text"
                            class="form-control"
                          />
                          <p className="text-danger">{formErrors.fullname}</p>
                        </div>
                        <div class="form-group">
                          <label for="username" class="">
                            Username
                          </label>
                          <input
                            onChange={(event) =>
                              setusername(event.target.value)
                            }
                            name="username"
                            type="text"
                            class="form-control"
                          />
                          <p className="text-danger">{formErrors.username}</p>
                        </div>
                        <div class="form-group">
                          <label for="Email" class="">
                            Email
                          </label>
                          <input
                            onChange={(event) => setemail(event.target.value)}
                            name="Email"
                            type="Email"
                            class="form-control"
                          />
                          <p className="text-danger">{formErrors.email}</p>
                        </div>
                        <div class="row text-right mt-4">
                          <button
                            onClick={onSubmit}
                            type="submit"
                            class="col btn btn-dark rounded-5 text-white btn-block"
                          >
                            Sign Up
                          </button>
                        </div>
                        <p class="mt-5 ">
                          Allready have an account?
                          <strong>
                            <button
                              onClick={navigatelogin}
                              type="button"
                              class="btn btn-link text-info"
                            >
                              Signin
                            </button>
                          </strong>
                        </p>
                      </form>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div class="col">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid w-70"
                alt="Phone"
              />
            </div>
          </div>
        </div>
        <div className="div"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </section>
  );
}

export default Register;
