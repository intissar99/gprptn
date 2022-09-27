import { React, useState, useContext } from "react";
import { axiosInstance } from "../config";
import { Context } from "../context/Context";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function ForgotPass() {
  const [showB, setShowB] = useState(false);
  const [showA, setShowA] = useState(false);
  const [email, setemail] = useState("");
  const [errmsg, seterrmsg] = useState("");

  const { isFetching } = useContext(Context);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  function genPass() {
    return Math.random().toString(36).slice(-8);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const password = genPass();
    axiosInstance
      .post("/verifyuser", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);

        console.log(showA);
        setShowA(!showA);
        console.log(showA);
      })
      .catch((err) => {
        console.log(err.response.data);
        seterrmsg(err.response.data[0].msg);
        toggleShowB();
      });
  };

  return (
    <section class="sticky">
      <div class="bubbles">
        <div class="mt-5 d-flex align-items-center justify-content-center">
          <ToastContainer position="top-end" className="p-3">
            <Toast show={showB} onClose={toggleShowB} bg="danger">
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Attention!</strong>
              </Toast.Header>
              <Toast.Body class="m-2">{errmsg}</Toast.Body>
            </Toast>
          </ToastContainer>

          {showA ? (
            <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <div
                class="alert alert-success d-flex align-items-center"
                role="alert"
              >
                <div className="ms-2">We Send New login Check Your Email.</div>
              </div>
            </div>
          ) : (
            <form>
              <p class="text-center text-primary h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Please Enter Your E-mail
              </p>
              <p class="text-center text-primary p fw-bold mb-5 mx-1 mx-md-4 mt-4">
                We will Send You how To Reset Your Password
              </p>
              <div class="form-outline  m-5">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control"
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Write Here"
                />
                <label class="form-label" for="form1Example13">
                  Email
                </label>
              </div>
              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="text-center form-check">
                  <button
                    type="submit"
                    class="btn btn-outline-primary rounded-5 px-5 mb-2"
                    disabled={isFetching}
                    onClick={onSubmit}
                  >
                    SEND
                  </button>
                </div>
              </div>
            </form>
          )}
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
export default ForgotPass;
