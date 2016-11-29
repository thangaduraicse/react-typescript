import * as React from "react";

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
// const App2 = (props) =>
//   <div className="container">
//     {
//       {React.cloneElement({...props}.children, {...props})}
//     }
//   </div>;

export default App;
