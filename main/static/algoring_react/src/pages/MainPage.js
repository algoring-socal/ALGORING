import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Col } from "reactstrap";
import UrlModalBtn from "../components/UrlModalBtn";
import logo from "../img/03.Algoring Logo.png";
import duckBg from "../img/duck BG.png";
import penguinBg from "../img/penguin BG.png";
import woopaBg from "../img/woopa BG.png";
import duck_1 from "../img/duck1.png";
import duck_2 from "../img/duck2.png";
import duck_3 from "../img/duck3.png";
import penguin_1 from "../img/penguin1.png";
import penguin_2 from "../img/penguin2.png";
import penguin_3 from "../img/penguin3.png";
import woopa_1 from "../img/woopa1.png";
import woopa_2 from "../img/woopa2.png";
import woopa_3 from "../img/woopa3.png";
import inventoryBtn from "../img/03.Library_Fill_40px.png";

const MainPage = () => {
  const [responseData, setResponseData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //   todo: when on mount we need to fetch data (get) of the latest Log report.

  const testData = {data: 
                      {exp: 40, 
                      character : {id: 1}, 
                      level: 2
                      }
                   }

  useEffect(() => {
    setResponseData(testData);
  }, []);
  // how did fetch data without using useEffect ?

  const handleResponseData = (data) => {
    setResponseData(data);
    console.log("responseData: ", data);
    console.log(responseData.data.exp);
  };
  const handleLoading = (data) => {
    setIsLoading(data);
    // console.log("isLoading: ", data);
  };

  const imgList = {
                    '1' : [duckBg, duck_1, duck_2, duck_3],
                    '2' : [penguinBg, penguin_1, penguin_2, penguin_3],
                    '3' : [woopaBg, woopa_1, woopa_2, woopa_3],
                  }

  return (
    <>
      <Col className="mt-5 d-flex flex-column justify-content-center align-items-center">
        {/* Header */}
        <header className="logo_img_container">
          <img src={logo} alt="Algoring Logo" />
        </header>

        {/* EXP Bar */}
        <div className="progress w-50 mt-5 mb-4">
          <div
            className={`progress-bar bg-success w-${
              responseData ? responseData.data.exp : 0
            }`}
            role="progressbar"
            aria-valuenow={responseData ? responseData.data.exp : 0}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="col-12 d-flex justify-content-center">
            {/* Inventory button */}
            <div className="col d-flex justify-content-end">
              <NavLink to={"/inventory"}>
                <img
                  style={{ width: "40px" }}
                  src={inventoryBtn}
                  alt="Inventory Button"
                />
              </NavLink>
            </div>

            <div>
              {/* Character window */}
              {isLoading ? ( // Render Loading if isLoading state is true
                <p>loading...</p>
              ) : responseData ? ( // Render Updated Character if successfully fetched data
                <div className="col">
                  <img
                    src={imgList[responseData.data.character.id][0]}
                    alt="background"
                    style={{ width: "50rem" }}
                    className="main_img_border"
                  />
                  {/* render character based on response */}
                  {responseData && (
                    <img
                      src={
                        imgList[responseData.data.character.id][responseData.data.level]
                      }
                      alt="character"
                      style={{ width: "25rem" }}
                      className="overlay_char_image"
                    />
                  )}
                </div>
              ) : (
                // Default
                <div className="col">
                  <img
                    src={woopaBg}
                    alt="Algoring Logo"
                    style={{ width: "50rem" }}
                    className="main_img_border"
                  />
                </div>
              )}
            </div>

            {/* For spacing */}
            <div className="col">blank</div>
        </div>

        {/* Start button */}
        <UrlModalBtn
          onResponseData={handleResponseData}
          onLoading={handleLoading}
        />
      </Col>
    </>
  );
};

export default MainPage;
