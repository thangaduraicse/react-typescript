let Store = require("./stores/store.dev").default;
if (process.env.NODE_ENV === "production") {
  Store = require("./stores/store.prod").default
}
export default Store;
