import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import { getDataHome } from "../../store/actions/home";
import CardArticles from "../../components/CardArticles";

class Home extends Component {
  componentDidMount() {
    const { getHome } = this.props;
    getHome();
  }

  addLove = (idCard) => {
    let addLoves = this.props.home.dataHome.map((el) => {
      if (idCard === el.id) {
        el.likes = el.likes + 1;
      }
      return el;
    });
    this.setState({ dataHome: addLoves });
  };

  render() {
    const {
      addLove,
      props: { home },
    } = this;

    return (
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {home.dataHome.map((el, index) => (
            <CardArticles
              addsLove={addLove}
              idCard={el.id}
              ads={el.ads}
              title={el.title}
              cover={el.url}
              summary={el.body}
              // bookmarked={el.bookmarked}
              likes={el.likes}
              key={`list-${index}`}
            ></CardArticles>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapState = (state) => ({
  home: state.home,
  news: state.news,
});

const mapDispatch = (dispatch) => {
  return {
    getHome: () => dispatch(getDataHome()),
  };
};

export default connect(mapState, mapDispatch)(Home);
