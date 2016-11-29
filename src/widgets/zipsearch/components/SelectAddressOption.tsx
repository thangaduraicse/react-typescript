import * as React from "react";
import {Zipcode} from "../model";

interface SelectAddressOptionProps {
  index?: number,
  address?: Zipcode,
  onChange?: Function
};

interface SelectAddressOptionState {
  zipcode?: string
};

class SelectAddressOption extends React.Component<SelectAddressOptionProps, SelectAddressOptionState> {
  constructor(props) {
    super(props);
  }

  onChange(evt) {
    this.props.onChange(evt)
  }

  render() {
    let address = this.props.address;
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="radio">
            <label>
              <input
                type="radio"
                name="zipcode"
                id={address.zipcode}
                onChange={this.onChange.bind(this)}
                value={this.props.index} />
              {
                address.locality.length ? `${address.locality}, ` : null
              }
              {
                address.city.length ? `${address.city}, ` : null
              }
              {
                `${address.state} ${address.zipcode}, ${address.country}`
              }
            </label>
          </div>
        </div>
      </div>
    );
  }
};

export default SelectAddressOption;
