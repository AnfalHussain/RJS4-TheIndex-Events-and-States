import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail"

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors,
  };

  selectAuthor = author => {

    this.setState({
      currentAuthor: author
    })
  };




  // filterAuthors = query => {
  //   let filteredAuthors = authors
  //   this.filteredAuthors = filteredAuthors.filter((author) => {
  //     let authorName = author.first_name.toLowerCase() + author.last_name.toLowerCase()
  //     return this.authorName.indexOf(
  //       query.toLowerCase()) !== -1  // 

  //   })
  //   this.setState({
  //     filteredAuthors: filteredAuthors
  //   })

  // }

  filterAuthors = query => {
    const filteredAuthors = authors.filter(author => {
      return `${author.first_name} ${author.last_name}`.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({
      filteredAuthors: filteredAuthors
    })
  }

  getView = () => {
    if (this.state.currentAuthor) // (this.state.currentAuthor !== null)
      return <AuthorDetail author={this.state.currentAuthor} />
    else
      return <AuthorsList
        authors={this.state.filteredAuthors}
        selectAuthor={this.selectAuthor}
        filterAuthors={this.filterAuthors} />
    //<AuthorsList selectAuthor={this.selectAuthor} authors={this.state.filteredAuthors} match={this.props.match} onChange={this.filterAuthors} filterAuthors={this.filterAuthors} />

  }


  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar selectAuthor={this.selectAuthor} />
          </div>
          <div className="content col-10">

            {this.getView()}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
