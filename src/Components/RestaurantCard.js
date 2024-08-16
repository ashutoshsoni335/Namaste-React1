import { RES_LOGO_URL } from "../utils/constants";


// we can write with many types of functional component
// 1.) const RestaurantCard = (props) => {  
// 2.) const RestaurantCard = ({resName,cuisine}) =>{        <------------destructuring method
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.info;
    return (
      // we can write like this but this code takes much code & not looks so good so we can short this code with destructuring method
  
      // <div className="rest-card">
      //   <img
      //     className="rest-logo"
      //     src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId }/>
  
      // this is first method i learnt to access values ---------------------------------->
  
      //   {/* <h3>{props.resName}</h3>
      //   <h4>{props.cousine}</h4> */}
  
      // this is second method i learnt-------------------------------------------->
  
      //   <h3>{resData.info.name}</h3>
      //   <h4>{resData.info.cuisines.join(", ")}</h4>
      //   <h4>{resData.info.avgRating} ⭐</h4>
      //   <h4>{resData.info.costForTwo}</h4>
      //   <h4>{resData.info.sla.deliveryTime} mins</h4>
      // </div>
      <div className="rest-card">
        <img
          className="rest-logo"
          // this is third method with destructuring it--------------------------------->
          src={
            RES_LOGO_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
  };


  export default RestaurantCard