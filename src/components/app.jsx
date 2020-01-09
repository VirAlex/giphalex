import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';
import Giphy from 'giphy-api';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null//"xT9IgDEI1iZyb2wqo8",
    }
  }

  search = (query) => {
    giphy('dRGCPC9TuwBLH9nkpfMAcUBLBjzwwQZX').search({
      q: query,
      rating: 'g',
      limit: 10,
      https: true
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    )
  }
}

export default App;
