import { React, useState, useContext, useEffect } from "react";
import { CgSoftwareUpload, CgClose } from "react-icons/cg";
import { Context } from "../context/Context";
import { axiosInstance } from "../config";
import axios from "axios";

const preset = "mrbielhx";
const url = "https://api.cloudinary.com/v1_1/dkgglsra2/image/upload";
const defaultImg =
  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.web";

function Profile() {
  const [show, setShow] = useState(false);
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [fileImage, setFileImage] = useState("");
  const [sub, setSub] = useState({});
  const { user, dispatch } = useContext(Context);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [usedEmail, setUsedEmail] = useState([]);

  const validate = (fullname, username, password, email) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!username) {
      errors.username = "Username is required!";
    }
    if (!fullname) {
      errors.fullname = "Full Name is required!";
    }
    if (!password) {
      errors.password = "Password is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const previewImage = (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output_image");
      output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
    var formData = new FormData();
    var file = e.target.files[0];
    formData.append("file", file);
    formData.append("upload_preset", preset);
    axios({
      url: url,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: formData,
    })
      .then((res) => {
        console.log("answer for post request:", res.data.secure_url);
        setFileImage({ image1: res.data.secure_url });
        console.log("state imge:", fileImage);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const UpdateUser = async (event) => {
    event.preventDefault();
    const updatedUser = {
      userId: user[0]._id,
      fullname,
      username,
      email,
      password,
      picture: fileImage.image1,
    };
    setFormErrors(
      validate(
        updatedUser.fullname,
        updatedUser.username,
        updatedUser.password,
        updatedUser.email
      )
    );
    console.log(formErrors, Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      dispatch({ type: "UpdateStart" });
      axiosInstance
        .put(`/updateUser/${user[0]._id}`, updatedUser)
        .then((res) => {
          console.log("inside try", updatedUser);
          const resultat = [res.data];
          dispatch({ type: "UpdateSuccess", payload: resultat });
          setShow(!show);
          setIsSubmit(true);
        })
        .catch((err) => {
          dispatch({ type: "UpdateFailure" });
          setUsedEmail(err.response.data);
          console.log(usedEmail);
          console.log(updatedUser);

          alert("try again");
        });
    }
  };
  const subscription = async (event) => {
    try {
      const res = await axiosInstance.post(`/getonesub`, {
        email: user[0].email,
      });
      setSub(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  subscription();
  return (
    <section class="vh-100">
      <div class="bubbles">
        <div class="container py-5 h-8 0">
          <div class="row d-flex justify-content-center  align-items-center h-100">
            <div class="col col-lg-10 mb-4 mb-lg-0 ">
              {show ? (
                <div class="card mb-3 rounded-4 bg-light">
                  <div class="row g-0">
                    <>
                      <div class="col-md-4 mt-5 text-center text-dark">
                        <div class="col m-3">
                          <div className="row">
                            <label htmlFor="fileInput">
                              <CgSoftwareUpload size={42} />
                            </label>
                            <input
                              id="fileInput"
                              type="file"
                              style={{ display: "none" }}
                              onChange={previewImage}
                            />
                            <h6 htmlFor="fileInput">Update Your Picture</h6>
                          </div>
                          <img
                            id="output_image"
                            alt="Avatar"
                            src={
                              fileImage.image1 ||
                              user[0].picture ||
                              "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            }
                            class="create-preview-image rounded m-2 mt-5"
                            width={150}
                            hieght={150}
                          />
                        </div>
                        <input
                          type="text"
                          class="form-control text-dark border-info bg-light m-2 ms-2 border-bottom border-0 rounded-0"
                          placeholder={user[0].username}
                          onChange={(event) => setUsername(event.target.value)}
                        />
                        <p className="text-danger">{formErrors.username}</p>
                        <p>
                          Last Updated at :{user[0].updatedAt.split("T")[0]}
                        </p>
                        <i class="far fa-edit mb-5"></i>
                        <button
                          type="submit"
                          onClick={UpdateUser}
                          class="btn btn-outline-info mb-5 w-50"
                        >
                          Update Your Info
                        </button>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-5">
                          <h6>Information</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="row mb-2 pt-1">
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <input
                                type="email"
                                class="form-control text-dark border-info bg-light m-2 ms-2 border-bottom border-0 rounded-0"
                                placeholder={user[0].email}
                                onChange={(event) =>
                                  setEmail(event.target.value)
                                }
                              />
                              <p className="text-danger">{formErrors.email}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Full Name</h6>
                              <input
                                type={"text"}
                                class="form-control text-dark border-info bg-light m-2 ms-2 border-bottom border-0 rounded-0"
                                placeholder={user[0].fullname}
                                onChange={(event) =>
                                  setFullname(event.target.value)
                                }
                              />
                              <p className="text-danger">
                                {formErrors.fullname}
                              </p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Password</h6>
                              <input
                                type={"password"}
                                class="form-control text-dark border-info bg-light m-2 ms-2 border-bottom border-0 rounded-0"
                                placeholder="Write your new Password"
                                onChange={(event) =>
                                  setPassword(event.target.value)
                                }
                              />
                              <p className="text-danger">
                                {formErrors.password}
                              </p>
                            </div>
                          </div>
                          <h6>Your Products</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="card mb-3 ">
                            <div class="card-body bg-warning">
                              <div class="d-flex flex-start">
                                <div className="row">
                                  <h5> Hey {sub.name} 👋</h5>
                                </div>
                                <div className="row">
                                  {" "}
                                  <p>
                                    Your Subscribe to a <b>{sub.packType}</b>{" "}
                                    for a<b>${sub.packPrice}</b>
                                  </p>
                                </div>
                                <div className="row">
                                  {/* <p>started at {sub.createdAt.split("T")[0]}</p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="float-end mt-5 pt-5 m-4">
                          <CgClose
                            onClick={() => setShow(!show)}
                            size={28}
                            color={"red"}
                          />
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              ) : (
                <div class="card mb-3 rounded-4 bg-light">
                  <div class="row g-0">
                    <>
                      <div class="col-md-4  text-center text-dark">
                        <img
                          src={
                            user[0].picture ||
                            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          }
                          alt="Avatar"
                          class="rounded m-2 mt-5"
                          width={150}
                          hieght={150}
                        />
                        <h5>{user[0].username} </h5>
                        <p>
                          Last Updated at :{user[0].updatedAt.split("T")[0]}
                        </p>
                        <i class="far fa-edit mb-5"></i>
                        <button
                          type="submit"
                          onClick={() => setShow(!show)}
                          class="btn btn-outline-secondary mb-5 w-50"
                        >
                          Edit
                        </button>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-5">
                          <h6>Information</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="row mb-5 pt-1">
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">{user[0].email}</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Full Name</h6>
                              <p class="text-muted">{user[0].fullname}</p>
                            </div>
                          </div>
                          <h6>My Subscription</h6>
                          <hr class="mt-0 mb-4" />
                          <div class="card mb-3 ">
                            <div class="card-body bg-warning">
                              <div class="d-flex flex-start">
                                <div className="row">
                                  <h5> Hey {sub.name} 👋</h5>
                                </div>
                                <div className="row">
                                  {" "}
                                  <p>
                                    Your Subscribe to a <b>{sub.packType}</b>{" "}
                                    for a<b>${sub.packPrice}</b>
                                  </p>
                                </div>
                                <div className="row">
                                  {/* <p>started at {sub.createdAt.split("T")[0]}</p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              )}
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

export default Profile;
