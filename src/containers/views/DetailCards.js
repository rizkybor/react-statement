import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import ShareIcon from "@mui/icons-material/Share";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function DetailsCard() {
  let navigate = useNavigate();
  const { state } = useLocation();

  let toHome = () => {
    navigate(`/`);
  };

  return (
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          component="img"
          height="140"
          image={state.coverArticle}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {state.titleArticle}
          </Typography>
          <Typography variant="body2" component="div">
            {state.summaryArticle}
          </Typography>
        </CardContent>

        <Grid container>
          <Grid container textAlign="left" paddingLeft={2} item xs={4}>
            <Button onClick={toHome}>back to home</Button>
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            item
            xs={8}
          >
            <CardActions>
              <p> Likes: {state.likesArticle} </p>
              <Button type="icon" ariaLabel="shareClick">
                <ShareIcon />
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
