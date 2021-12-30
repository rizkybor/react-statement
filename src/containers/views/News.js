import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardNews from "../../components/CardNews";
import Container from "@mui/material/Container";
import { getDataNews } from "../../store/actions/news";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function News() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  const home = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getDataNews());
  }, []);

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
