import { React, useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import EditComment from "./EditComment"
import {
  Box,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import axios from "axios";
import { Replies } from "./Replies";
import { Answer } from "./Answer";

export const Forum = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [Updatedcomment, setUpdatedComment] = useState("");

  const { user } = useContext(Context);

  const createComment = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const res = axios.post("http://localhost:3000/comment", {
        comment: comment,
        user: user[0].username,
      });
      alert("Comment Added");
      console.log(res);
    } catch (error) {
      alert("Failed to comment");
    }
  };
 
  const fetchCommets = async () => {
    try {
      const res = await axios.get("http://localhost:3000/fetchComments").then((res) => {
          const orgcomm = res.data.reverse();
          setComments(orgcomm);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCommets();
  });

  return (
    <div>
      {" "}
      <Grid>
        <Card
          style={{ maxWidth: 1000, padding: "20px 5px", margin: " 90px auto" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Forum
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Add your comments or open a subject for desccusion.
            </Typography>
            <form>
              {!user ? (
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      placeholder="Enter name"
                      label="Comment"
                      variant="outlined"
                      fullWidth
                      required
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="ADD"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled
                    >
                      Login to comment
                    </Button>
                  </Grid>
                </Grid>
              ) : (
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      placeholder="Enter name"
                      label="Comment"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="ADD"
                      variant="contained"
                      color="primary"
                      fullWidth
                      onClick={createComment}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          </CardContent>
        </Card>
        <Card
          style={{ maxWidth: 1000, padding: "20px 5px", margin: " 90px auto" }}
        >
          <CardContent>
            <Typography style={{ bgcolor: "info" }} gutterBottom variant="h5">
              Comments here
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              to keep it pro
            </Typography>
            {comments.map((comment) => {
              return (
                <Card
                  style={{
                    maxWidth: 1000,
                    padding: "20px 5px",
                    margin: " 90px auto",
                  }}
                >
                  <CardContent>
                    <Typography
                      style={{ bgcolor: "info" }}
                      gutterBottom
                      variant="h5"
                    >
                      {comment.user}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      gutterBottom
                    >
                      {comment.comment}
                    </Typography>
                    {user[0].username===comment.user ? <> <EditComment commentid={comment._id}/> <Button>Delete</Button> </>
                    :null}
                    
                    <Replies commentid={comment._id} sx={{ maxWidth: 1000 }} />
                  </CardContent>
                </Card>
              );
            })}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};
