import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typographys from "../components/Typographys";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Buttons from "../components/Buttons";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";

const CardArticles = (props) => {
  const { idCard, title, cover, summary, bookmarked, addsLove } = props;
  let navigate = useNavigate();

  let cardStyle = {
    width: "30vw",
    height: "30vw",
  };

  let cardBody = {
    height: "16vw",
  };

  let getIdProduct = (props) => {
    const { idCard, title, cover, summary, bookmarked } = props;

    navigate(`/home/${idCard}`, {
      state: {
        // adsArticle: ads,
        titleArticle: title,
        coverArticle: cover,
        summaryArticle: summary,
        bookmarkedArticle: bookmarked,
        // likesArticle: likes,
      },
    });
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
          <Typographys variant="h5" component="div">
            {title}
          </Typographys>
          <Typographys variant="body2" component="div">
            {summary}
          </Typographys>
          <Button
            onClick={() => {
              getIdProduct(props);
            }}
          >
            Show Detail
          </Button>
        </CardContent>

        <Grid container>
          <Grid container textAlign="left" paddingLeft={2} item xs={4}>
            {/* <Typographys
              marginTop={2}
              variant="h7"
              fontWeight="bold"
              color="#3DB2FF"
            >
              {ads && idCard >= 3 && "Sponsored Ad"}
            </Typographys> */}
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
              {/* <p> {likes} </p> */}
              {/* <Buttons
                type="icon"
                onClick={() => addsLove(idCard)}
                ariaLabel="add-to-favorite"
              >
                <FavoriteBorderIcon />
              </Buttons> */}
              <Buttons
                type="icon"
                bookmark={bookmarked}
                ariaLabel="add-to-local-offer"
              >
                {bookmarked ? <LocalOfferIcon /> : <LocalOfferOutlinedIcon />}
              </Buttons>
              <Buttons type="icon" ariaLabel="shareClick">
                <ShareIcon />
              </Buttons>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardArticles;
