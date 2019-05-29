import React, {Component} from "react";

class SearchBox extends Component {
  state = {
    searchTerm: ''
  }

  render() {
    return (
      <div id="search" className="Search">
        <input 
          onChange={(e)=>this.setState({searchTerm: e.target.value})}
          onKeyUp={
            (e) => {
              /* this is so th search will only be done on enter key */
              if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                this.props.loadSearch(this.state.searchTerm),
                e.target.value = ''; //to clear out box, for new search, when enter has been pressed.
              }
            }
          } 
          type="search" 
          placeholder="Search for a title..." />
      </div>
    );
  }
}
export default SearchBox;

