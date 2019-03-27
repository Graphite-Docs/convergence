import React, { Component } from 'react';


class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundUrl: "", 
      loading: true
    }
  }


  render() {

    return (
        <header className="masthead" style={{backgroundImage: 'url(' + this.state.backgroundUrl + ')'}}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  
                </div>
                </div>
            </div>
            </div>
        </header>
    );
  }
}

export default Hero;
