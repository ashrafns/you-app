import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import Grid from "@mui/material/Grid";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Test() {
  const [posts, setposts] = React.useState([]);
  // -----------------------------
  React.useEffect(() => {
    axios
      .get("http://localhost/react/you-app/post.php")
      .then(function (response) {
        setposts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(posts);
  // ------------------------------
  const [comments, setcomment] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost/react/you-app/comment.php")
      .then(function (response) {
        setcomment(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(comments);
  // ------------------------------

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // -----------------------------
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>
        {posts.map((post, index) => (
          <Card key={index} sx={{ maxWidth: 1000, marginBottom: 3 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img
                    id="img"
                    style={{width:40}}
                    src={require("../images/postImages/" + post.profileImage)}
                    alt=""
                  />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.firstName}
              subheader={post.time}
            />
            <CardMedia
              component="img"
              // height="194"
              image={require("../images/postImages/" + post.post_img)}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.post_content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              {comments.map(
                (comment, index) =>
                  comment.postid === post.id &&
                  (console.log(comment),
                  (
                    <CardContent key={index}>
                      <Typography
                        paragraph
                        sx={{
                          "--Grid-borderWidth": "2px",
                          borderTop: "var(--Grid-borderWidth) solid",
                          borderLeft: "var(--Grid-borderWidth) solid",
                          borderRight: "var(--Grid-borderWidth) solid",
                            borderBottom: "var(--Grid-borderWidth) solid",
                          borderColor: "divider",
                          "& > div": {
                            borderRight: "var(--Grid-borderWidth) solid",
                            borderBottom: "var(--Grid-borderWidth) solid",
                            borderColor: "divider",
                          },
                        }}
                      >
                        <Typography paragraph textAlign={"left"} display={"flex"} justifyContent= {'space-around'} width={"15%"}>
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            <img
                              id="img"
                              style={{width:40}}
                              src={require("../images/postImages/" +
                                post.profileImage)}
                              alt=""
                            />
                          </Avatar>
                          {comment.firstName}{comment.lastName}

                        </Typography>
                        {comment.com_body}
                        {/* </Skeleton> */}
                      </Typography>
                    </CardContent>
                  ))
              )}
            </Collapse>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
