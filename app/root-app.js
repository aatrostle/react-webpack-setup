import Nav from "./nav";
import React from "react";

export default React.createClass({
  displayName: 'App',

  getInitialState: function() {
    // NOTE get data from service or something
    return {name:"Seattle", email:"aaron.trostle@gmail.com"}
  },

  render: function() {
    return (
      <div className="root">
        <Nav {...this.state} />
      </div>
    );
  },
});
