import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { Answer } from "./Answer";

export const Replies = ({ commentid }) => {
  const [reply, setreply] = useState("");
  const [replies, setreplies] = useState([]);
  const [y, sety] = useState(true);
  const { user } = useContext(Context);

  const createReply = async (event) => {
    event.preventDefault();
    try {
      const res = axios.post("http://localhost:3000/replies", {
        reply: reply,
        user: user[0].username,
        comment: commentid,
      });
      alert("reply Added");
      console.log(res);
    } catch (error) {
      alert("Failed to reply");
    }
  };
  const fetchReplies = async () => {
    try {
      const res = await axios
        .post("http://localhost:3000/fetchReplies", { commentId: commentid })
        .then((res) => {
          const orgrep = res.data.reverse();
          setreplies(orgrep);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteReply = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteReply/${id}`);
      alert(" Deleted");
    } catch (err) {
      alert("try again");
    }
  };
  useEffect(() => {
    fetchReplies();
  });

  return (
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div >
    //     <div>
    //         <form>
    //             <div>
    //                 {replies.map((reply, i) => {
    //                     return (
    //                         <div>
    //                             <h6>{reply.user}</h6>
    //                             {y ?
    //                                 <div>
    //                                     <p
    //                                         variant="body2"
    //                                         color="textSecondary"
    //                                         component="p"
    //                                         gutterBottom
    //                                     >
    //                                         {reply.reply}
    //                                         <Answer replyId={reply._id} />
    //                                         {
    //                                             user[0].username === reply.user ?
    //                                                 <>
    //                                                     <button variant="outlined" onClick={() => sety(false)}>
    //                                                         EDIT REPLY
    //                                                     </button>
    //                                                     <button variant="outlined" onClick={() => { deleteReply(reply._id) }}>
    //                                                         DELETE
    //                                                     </button>
    //                                                 </> : null
    //                                         }
    //                                     </p>
    //                                 </div> :
    //                                 <div>
    //                                     <input
    //                                         name="reply"
    //                                         placeholder="Enter reply"
    //                                         label="reply"
    //                                         variant="outlined"
    //                                         fullWidth
    //                                         value={reply.reply}
    //                                         required
    //                                     />
    //                                     <button >
    //                                         Submit Your reply
    //                                     </button>
    //                                 </div>
    //                             }
    //                         </div>)
    //                 })}
    //                 <div className="row">
    //                     <input
    //                         type="text"
    //                         class="col form-control me-5"
    //                         placeholder="Enter reply"
    //                         fullWidth
    //                         onChange={(e) => { console.log(e.target.value); setreply(e.target.value) }}
    //                         required

    //                     />
    //                     <button
    //                         type="button"
    //                         class="col-1 btn btn-primary">
    //                         REPLY
    //                     </button>
    //                 </div>
    //             </div>
    //         </form>
    //     </div>
    // </div>
  );
};
