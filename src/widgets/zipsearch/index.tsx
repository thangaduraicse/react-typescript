import * as React from "react";

import SearchZipcode from "./components/SearchZipcode";
import SelectAddress from "./components/SelectAddress";
import SearchHistory from "./components/SearchHistory";

require("./css/style.css");

const ZipcodeWidget = () =>
  <div>
    <SearchZipcode />
    <SelectAddress />
    <SearchHistory />
  </div>;

export default ZipcodeWidget;
