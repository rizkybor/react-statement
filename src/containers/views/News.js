import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import CardNews from "../../components/CardNews";
import Container from "@mui/material/Container";

const dataNews = [
  {
    title:
      "Elon Musk, SpaceX face online backlash in China after space station near-misses",
    description:
      "Musk and SpaceX faced online backlash in China after a note sent to the UN revealed the company's satellites almost collided with China's space station in 2021.",
    url: "https://image.cnbcfm.com/api/v1/image/106836978-1612792123304-gettyimages-1206292055-aa_10032020_39844.jpeg?v=1629114768",
    publishedAt: "2021-12-27T18:18:00Z",
  },
  {
    title: "No Wonder People, Businesses Are Dumping California",
    description:
      "A recent study by the Cato Institute, the libertarian think tank, ranked California 48th out of the 50 states in personal and economic freedom. The... Read More\nThe post No Wonder People, Businesses Are Dumping California appeared first on The Daily Signal.",
    url: "https://www.dailysignal.com/wp-content/uploads/211227_GavinNuisance-scaled.jpg",
    publishedAt: "2021-12-27T17:59:25Z",
  },
  {
    title: "How To Talk To People About Electric Car Supply Chain Issues",
    description:
      "Education is the antidote to ignorance. Here is the information you need to educate people about electric cars.",
    url: "https://cleantechnica.com/files/2021/12/NOAA-oil-well-burning-1200.jpg",
    publishedAt: "2021-12-27T17:57:31Z",
  },
  {
    title: "What Does Tesla - Serverboy Do?",
    description:
      "Prime Power: How Amazon Squeezes The Businesses Behind Its StoreSome Ideas on Enable Cheat",
    url: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211227-delta-airlines-al-0815-c328f6.jpg",
    publishedAt: "2021-12-27T17:48:14Z",
  },
  {
    title: "Why S&P 500 Investors Should Prepare For A 2022 Comedown",
    description:
      "Musk and SpaceX faced online backlash in China after a note sent to the UN revealed the company's satellites almost collided with China's space station in 2021.",
    url: "https://image.cnbcfm.com/api/v1/image/106836978-1612792123304-gettyimages-1206292055-aa_10032020_39844.jpeg?v=1629114768",
    publishedAt: "2021-12-27T18:18:00Z",
  },
  {
    title:
      "Elon Musk, SpaceX face online backlash in China after space station near-misses",
    description:
      "The S&P 500 is trading at $4,725.79 to close 2021 - up 28% YTD.",
    url: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/500304998/large_image_500304998.jpg",
    publishedAt: "2021-12-27T17:44:33Z",
  },
];

export default class News extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    this.fetchNews(dataNews);
  }

  fetchNews = (value) => {
    let result = value.map((el, index) => {
      el["id"] = index;
      return el;
    });
    console.log(result);
    this.setState({ news: result });
  };

  render() {
    const {
      state: { news },
    } = this;
    return (
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {news.map((el, index) => (
            <CardNews
              id={index}
              title={el.title}
              description={el.description}
              url={el.url}
              publishedAt={el.publishedAt}
              key={`list-${index}`}
            ></CardNews>
          ))}
        </Grid>
      </Container>
    );
  }
}
//? CONTINUE, LANJUT DISINI
