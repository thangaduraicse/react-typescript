import * as React from "react";

const SearchHistoryItem = ({zipcode}) =>
  <tr>
    <td>
      <div><span>{zipcode.zipcode}</span></div>
    </td>
    <td>
      <div>
        <span>
          {zipcode.locality.length ? zipcode.locality : null}
        </span>
      </div>
    </td>
    <td>
      <div>
        <span>
          {zipcode.neighborhood.length ? zipcode.neighborhood : null}
        </span>
      </div>
    </td>
    <td>
      <div>
        <span>
          {zipcode.city.length ? zipcode.city : null}
        </span>
      </div>
    </td>
    <td>
      <div><span>{zipcode.state}</span></div>
    </td>
    <td>
      <div><span>{zipcode.country}</span></div>
    </td>
  </tr>;

export default SearchHistoryItem;
