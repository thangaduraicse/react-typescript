import * as React from "react";
import {connect} from "react-redux";
import SelectAddressOption from "./SelectAddressOption";
import {Zipcodes} from "../model";
// import * as zipcodeActions from "../actions";
// ES6 modules only expose properties, and cannot be invoked as a function or with new
const zipcodeActions = require("../actions");

interface SelectAddressProps {
  addresses?: Zipcodes,
  updateSearchHistory?: Function
};

interface SelectAddressState {
  saveError?: string
};

@connect(
  (state) => ({
    addresses: state.zipcodeReducer.addresses
  }),
  zipcodeActions
)
class SelectAddress extends React.Component<SelectAddressProps, SelectAddressState> {
  constructor(props) {
    super(props);
    this.state = {
      saveError: ""
    }
  }

  handleSubmit() {
    let zipcodeIndex = $("input[name=zipcode]:checked", "#addressForm").val();
    if (typeof zipcodeIndex !== "undefined" && zipcodeIndex != "") {
      zipcodeIndex = zipcodeIndex.trim();
      this.props.updateSearchHistory(zipcodeIndex);
    } else {
      this.setState({
        saveError: "Please select the option from the list!"
      });
    }
  }

  onChange(evt) {
    this.setState({
      saveError: ""
    });
  }

  render() {
    if (!this.props.addresses.length) {
      return null;
    }

    return(
      <section className="addresses">
        <div className="row">
          <div className="col-xs-12 spaced">
            <div id="addressForm">
              <legend><h4>List of address from the zipcode.
              Pick the address you are looking for.</h4></legend>
              {
                this.props.addresses.map(
                  $.proxy(function(address, i) {
                    return <SelectAddressOption
                      key={i}
                      index={i}
                      address={address}
                      onChange={this.onChange.bind(this)} />;
                  }), this)
              }
            </div>
            <div>
            {
              this.state.saveError ?
                <div className="has-error">
                  <span className="help-block">{this.state.saveError}</span>
                </div>
              : null
            }
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-6 text-left half-spaced">
                <button type="submit" className="btn btn-success btn-block"
                  onClick={this.handleSubmit.bind(this)}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default SelectAddress;
