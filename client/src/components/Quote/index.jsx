import React, { Component } from "react";
import API from "../../utils/API";
import Box from "@material-ui/core/Box";
export default class Quote extends Component {
  state = {
    quotes: {}
  };
  componentDidMount() {
    API.GetQuotes().then(response => {
      console.log(response.data);

      this.setState({
        quotes: response.data
      });
    });
  }
  render() {
    return (
      <div>
        <br />
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <h3>{this.state.quotes.title}</h3>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <img src={this.state.quotes.media} />
        </Box>
      </div>
    );
  }
}
