import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

import { useNavigate } from "react-router-dom";

export default function CardNews(props) {
  const { title, url, publishedAt } = props;
  let navigate = useNavigate();

  let getNewsId = (props) => {
    const { id, title, description, url, publishedAt } = props;

    navigate(`/news/${id}`, {
      state: {
        idNews: id,
        titleNews: title,
        descriptionNews: description,
        urlNews: url,
        publishedAtNews: publishedAt,
      },
    });
  };
  return (
    <Grid>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <CardMedia
            component="img"
            height="700"
            image={url}
            alt="green iguana"
          />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {title}
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              onClick={() => {
                getNewsId(props);
              }}
              variant="contained"
            >
              See News
            </Button>
          </Stack>
        </Container>
      </Box>
    </Grid>
  );
}
