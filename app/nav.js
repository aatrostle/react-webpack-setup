import React from "react";

export default React.createClass({
  displayName: 'Nav',

  render: function() {
    return (
      <div className="nav">
        <div className="name">
          {this.props.name}
        </div>
        <div className="email">
          {this.props.email}
        </div>

      </div>
    );
  },
});
