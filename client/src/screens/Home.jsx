import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
// import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [search, setSearch] = useState('');

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);



  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel" style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner " id="carousel">
          {/* external code start */}
          <div className="carousel-caption" style={{zIndex:"10"}}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
          {/* external code end */}

          <div className="carousel-item active ">
            <img
              src="https://picsum.photos/536/354"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/237/536/354"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>




      <div className="container">
        {
        foodItem !== []
          ? foodItem.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodCat !== []? foodCat.filter((category)=> (category.CategoryName === data.CategoryName) && (category.name.toLowerCase().includes(search.toLowerCase())) )
                  .map(filterCategorys=>{
                    return(
                      <div key={filterCategorys._id} className="col-12 col-md-6 col-lg-3">
                             <Card 
                                   foodItem = {filterCategorys}
                                   options = {filterCategorys.options[0]}
                                   //  foodName = {filterCategorys.name}
                                  //  imgSrc = {filterCategorys.img}
                                  //  description = {filterCategorys.description}
                                   >

                                    </Card>
                           </div>
                    )

                  }
                  
                  ): <div> No Such Data Found </div>}
                </div>
              );
            })
          : ""
          }

      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

// {foodCat !== []?
//   foodCat.filter((category) => category.CategoryName === data.CategoryName).map(filterCategorys => {
//     return(
//       <div key={filterCategorys._id}>
//       <Card></Card>
//     </div>
//     )
//   }

//   ): <div> No Such Data Found </div>}
