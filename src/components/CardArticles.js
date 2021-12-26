import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typographys from "../components/Typographys";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

// import IconButton from "@mui/material/IconButton";
// import ShareIcon from "@mui/icons-material/Share";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import IconLink from "../components/IconLinks";

const CardArticles = (props) => {
  const { idCard, ads, title, cover, summary, bookmarked, likes, clickLove } =
    props;

  let cardStyle = {
    width: "30vw",
    height: "30vw",
  };

  let cardBody = {
    height: "16vw",
  };

  return (
    <Grid item lg={4} md={6} sm={12} xs={12} key={`card-${idCard}`}>
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={cover}
          alt="green iguana"
        />
        <CardContent style={cardBody}>
          <Typographys data={title} variant="h5" component="div"></Typographys>
          <Typographys
            data={summary}
            variant="body2"
            component="div"
          ></Typographys>

          {/* <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography> */}
        </CardContent>

        <Grid container>
          <Grid container textAlign="left" paddingLeft={2} item xs={4}>
            <Typography
              marginTop={2}
              variant="h7"
              fontWeight="bold"
              color="#3DB2FF"
            >
              {ads && idCard >= 3 && "Sponsored Ad"}
            </Typography>
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
              <p> {likes} </p>
              <IconLink
                idCard={idCard}
                clickLove={clickLove}
                nameicon="favoriteClick"
              ></IconLink>
              <IconLink
                bookmark={bookmarked}
                nameicon="bookmarkClick"
              ></IconLink>
              <IconLink nameicon="shareClick"></IconLink>

              {/* <IconButton
                baseClassName="favoriteClick"
                onClick={() => handleClickLove(idCard)}
                aria-label="add-to-favorite"
              >
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="add-to-local-offer">
                {bookmarked ? <LocalOfferIcon /> : <LocalOfferOutlinedIcon />}
              </IconButton>
              <IconButton aria-label="share-to-people">
                <ShareIcon />
              </IconButton> */}
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardArticles;
