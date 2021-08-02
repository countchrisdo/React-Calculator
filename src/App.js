import React, { Component } from "react";
import "./styles.css";
import ResultComponent from "./components/ResultComponent";
import KeyPadComponent from "./components/KeyPadComponent";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        //convert checkResult into Javascript to be Evaluated
        result: (eval(checkResult) || "") + ""
      });
      //built in error catching
    } catch (e) {
      this.setState({
        result: "err"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h2>React Calculator</h2>
          <h3></h3>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
