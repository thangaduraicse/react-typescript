import * as React from "react";
import {connect} from "react-redux";
import SearchHistoryItem from "./SearchHistoryItem";

const SearchHistory = ({searchHistory}) => {
  if(!searchHistory.length) {
    return null;
  }

  return(
    <section className="zipCodeContainer">
      <div className="row">
        <div className="col-xs-12 spaced">
          <h4>Search History</h4>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ZipCode</th>
                  <th>Locality</th>
                  <th>Neighborhood</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {
                  searchHistory.map(
                    $.proxy(function(zipcode, key) {
                      return <SearchHistoryItem
                        key={key}
                        zipcode={zipcode} />;
                    }), this)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect((state) => ({
  searchHistory: state.zipcodeReducer.searchHistory
}))(SearchHistory);
