import { Component } from "react";
import StyledComponent from "./StyledComponent";
// import CSSModule from "./CSSModule";
// import SassComponent from "./SassComponent";

class App extends Component {
  fname(params) {
    console.log(params);
  }
  render() {
    this.fname`hello is ${{ TTHIS: true }} ${() => "WORK?"}`;
    return (
      <>
        {/* <SassComponent /> */}
        {/* <CSSModule /> */}
        <StyledComponent />
      </>
    );
  }
}

export default App;
