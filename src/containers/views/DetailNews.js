import * as React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

import { useLocation, useNavigate } from "react-router-dom";

export default function CardNews() {
  let navigate = useNavigate();
  const { state } = useLocation();

  let toNewsPage = () => {
    navigate(`/news`);
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
            image={state.urlNews}
            alt="green iguana"
          />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {state.titleNews}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            {state.publishedAtNews}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {state.descriptionNews}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button onClick={toNewsPage} variant="contained">
              Back
            </Button>
          </Stack>
        </Container>
      </Box>
    </Grid>
  );
}
