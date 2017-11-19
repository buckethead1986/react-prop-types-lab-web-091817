// Code Product Component Here
import React from "react";

import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: (props, PropName) => {
    const weight = props[PropName];
    if (weight === undefined) {
      return new Error("weight is required");
    }
    if (typeof weight != "number") {
      return new Error("weight needs to be a number");
    }
    if (weight < 80 || weight > 300) {
      return new Error("The weight needs to be between 80 and 300");
    }
  }
};

export default Product;
