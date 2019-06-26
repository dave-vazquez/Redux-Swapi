import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  state = {
    characters: [],
    fetching: false
  };

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetching && <p>Fetching Data...</p>}
        {this.props.characters && (
          <CharacterList characters={this.props.characters} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.fetching
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getCharacters
  }
)(CharacterListView);
