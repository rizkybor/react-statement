import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setDataDetailNews } from "../../store/actions/news";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

export default function CardNews() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const detailNews = useSelector((state) => state.news.dataDetailNews);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(setDataDetailNews(id));
  }, []);

  let toNewsPage = () => {
    navigate(`/news`);
  };
  return (
    <Fragment>
      {loading ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Grid>
      ) : (
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
                image={detailNews.url}
                alt="green iguana"
              />
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {detailNews.title}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                paragraph
              >
                {/* {news.publishedAtNews} */}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                {detailNews.body}
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
      )}
    </Fragment>
  );
}
