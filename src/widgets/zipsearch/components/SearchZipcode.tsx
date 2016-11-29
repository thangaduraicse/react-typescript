import * as React from "react";
import {connect} from "react-redux";
const zipcodeActions = require("../actions");

interface SearchZipcodeProps {
  errMsg?: string,
  fetchDataFromGoogleAPI?: Function
};

interface SearchZipcodeState {
  zipcode?: string
};

@connect(
  (state) => ({
    errMsg: state.zipcodeReducer.fetchZipcodeErrorMessage
  }),
  zipcodeActions
)
class SearchZipcode extends React.Component<SearchZipcodeProps, SearchZipcodeState> {
  static defaultProps = {
    errMsg: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      zipcode: ""
    };
  }

  onChange(evt) {
    this.setState({ zipcode: evt.target.value });
  }

  handleSubmit(evt) {
    // Use Type Assertions
    let zipcodeElement = document.getElementById("zipcode") as HTMLInputElement
    let zipcode = zipcodeElement.value;
    if(zipcode != "") {
      zipcode = zipcode.trim();
      this.props.fetchDataFromGoogleAPI(zipcode);
      this.setState({ zipcode: "" });
    }
  }

  render() {
    return (
      <section className="zipCodeContainer">
        <div className="row">
          <div className="col-md-8 col-sm-10 col-xs-12">
            <label htmlFor="zipcode">
              <h4>
                Enter the zipcode:
                <small>(By using google geocode api to get zipcode details)</small>
              </h4>
            </label>
            <div className="input-group">
              <input
              id="zipcode"
              name="zipcode"
              type="text"
              autoFocus={true}
              className="form-control"
              placeholder="Valid Zipcode"
              value={this.state.zipcode}
              onChange={this.onChange.bind(this)} />
              <span className="input-group-btn">
                <button className="btn btn-info" onClick={this.handleSubmit.bind(this)} type="button">Submit</button>
              </span>
            </div>
            {
              this.props.errMsg.length ?
                <div className="has-error">
                  <span className="help-block">
                    {this.props.errMsg}
                  </span>
                </div>
              : null
            }
          </div>
        </div>
      </section>
    );
  }
};

export default SearchZipcode;
