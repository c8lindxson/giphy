/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import GifList from './gif_list';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "SRG1Vk92HgTfP3F6gH"
    };
    this.search("frog");
  }

  search = (query) => {
    // API call
    giphy('istUe8Sac5uRmEyLnjhjlK633CII8Hca').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      // gif data
      this.setState({
        gifs: result.data
      });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({
      selectedGifId: newSelectedGifId
    });
  };

  render() {
    return (
      <div className="row d-grid">
        <div className="left-scene col-12 col-lg-8">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene col-12-l8-4">
          <GifList gifs={this.state.gifs} changeSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
