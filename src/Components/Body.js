import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // State variable (super special power variable)
  // we can modify this function by giving it a second parameter ----------------->
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // this a normal JS variable   ------------------------------>
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "592627",
  //         name: "La Pino'z Pizza",
  //         cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //         avgRating: 4.1,
  //       },
  //     },
  //     {
  //       info: {
  //         id: "592628",
  //         name: "Domino's Pizza",
  //         cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
  //         costForTwo: "₹400 for two",
  //         cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
  //         avgRating: 4.4,
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}

          //   onClick={() => {
          //    // Filter Logic
          //     listOfRestaurants = listOfRestaurants.filter(
          //       (res) => res.info.avgRating > 4.2
          //     );

          //   }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
