import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail"

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {

    this.setState({
      currentAuthor: author
    })
  }

  authorIsSelected = () => {
    if (this.state.currentAuthor !== null)
      return <AuthorDetail author={this.selectAuthor} />
    else
      return <AuthorsList selectAuthor={this.selectAuthor} authors={authors} />



  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">

            <div> {this.authorIsSelected()} </div>
            {
              /* <AuthorDetail />
            <AuthorsList selectAuthor={this.selectAuthor} authors={authors} /> */
            }

          </div>
        </div>
      </div>
    );
  }
}

export default App;
