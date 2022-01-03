import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import CardNews from "../../components/CardNews";
import { getDataNews } from "../../store/actions/news";

export default function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getDataNews());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      {news.loading ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={4}>
          {news.dataNews.map((el, index) => (
            <CardNews
              id={el.id}
              title={el.title}
              description={el.body}
              url={el.url}
              publishedAt={el.publishedAt}
              key={`list-${index}`}
            ></CardNews>
          ))}
        </Grid>
      )}
    </Container>
  );
}
