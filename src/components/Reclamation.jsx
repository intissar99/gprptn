import { React, useState, useContext } from "react";
import { Context } from "../context/Context";
import { axiosInstance } from "../config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Reclamation(props) {
  const [message, setMess] = useState();
  const [subject, setSubj] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useContext(Context);

  const handleChangeSujet = (event) => {
    setSubj(event.target.value);
  };
  const handleChangeReclamation = (event) => {
    setMess(event.target.value);
  };
  const createReclamation = async (event) => {
    event.preventDefault();
    console.log(user[0].email);
    try {
      const res = axiosInstance.post("/reclamation", {
        subject: subject,
        message: message,
        email: user[0].email,
        productId: props.productId,
      });
      alert("reclamation faite");
    } catch (error) {
      alert("try again");
    }
  };
  return (
    <>
      <Button variant="link border-0" onClick={handleShow}>
        Complaint
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Let's Hear From You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user ? (
            <section style={{ marginTop: "2em" }}>
              <div>
                <div>
                  <div>
                    <div>
                      <form>
                        <div class="mb-3">
                          <label for="Subject" class="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="Subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div class="mb-3">
                          <label for="Message" class="form-label">
                            Message
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="Message"
                            placeholder="Message"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            onClick={createReclamation}
                            class="btn btn-outline-dark"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div
              open={show}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div id="alert-dialog-title">{"You have to login first "}</div>
              <div>
                <button onClick={handleClose}>Agree</button>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={createReclamation}>
            Reclamation
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <div>
    //   <button type="submit" id="submit-button" onClick={handleOpen}>
    //     Reclamer
    //   </button>
    //   <div
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     {user ? (
    //       <section style={{ marginTop: "2em" }}>
    //         <div>
    //           <div>
    //             <div>
    //               <div>
    //                 <form>
    //                   <div fullWidth>
    //                     <label>Subject</label>
    //                     <input onChange={handleChangeSujet} />
    //                   </div>
    //                   <div fullWidth>
    //                     <label>Message</label>
    //                     <input onChange={handleChangeReclamation} />
    //                   </div>

    //                   <div fullWidth>
    //                     <button
    //                       onClick={createReclamation}
    //                       variant="contained"
    //                       color="primary"
    //                       type="submit"
    //                       id="submit-button"
    //                     >
    //                       Send
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     ) : (
    //       <div
    //         open={open}
    //         onClose={handleClose}
    //         aria-labelledby="alert-dialog-title"
    //         aria-describedby="alert-dialog-description"
    //       >
    //         <div id="alert-dialog-title">{"You have to login first "}</div>
    //         <div>
    //           <button onClick={handleClose}>Agree</button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
}

export default Reclamation;
