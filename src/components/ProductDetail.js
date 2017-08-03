import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props){
  return (
<div className="grid_1_of_5 images_1_of_5">
   <img src={props.product.imgUrl} />
   <h3>Lorem Ipsum is simply </h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, in reprehenderit.</p>
   <h4>{props.product.price}</h4>
     <div className="button"><span><a href="singlepage.html">Read More</a></span></div>
</div>
);

}
ProductDetail.proptypes = {
product: PropTypes.object.isRequired
};
export default ProductDetail;
