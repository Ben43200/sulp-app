import React from "react";

class Mouse extends React.Component {
    state = {
      showBox: false
    };
  
    handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });
  
    render() {
      return (
        <div
          onMouseEnter={this.handleBoxToggle}
          className={`container${this.state.showBox ? " show" : ""}`}
        >
          <div className="wrapper">
            <div className="innerBox" />
          </div>
        </div>
      );
    }
  }

  export default Mouse;