import React, { useState } from "react";
import { Col } from "reactstrap";
import UrlModalBtn from "../components/UrlModalBtn";
import logo from "../img/03.Algoring Logo.png";
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

const MainPage = () => {
  const [responseData, setResponseData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //   todo: when on mount we need to fetch data (get) of the latest Log report.

  const handleResponseData = (data) => {
    setResponseData(data);
    console.log("responseData: ", data);
    console.log(responseData.data.exp);
  };
  const handleLoading = (data) => {
    setIsLoading(data);
    // console.log("isLoading: ", data);
  };

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

        {/* Character window */}
        {isLoading ? ( // Render Loading if isLoading state is true
          <p>loading...</p>
        ) : responseData ? ( // Render Updated Character if successfully fetched data
          <div>
            <img
              src={woopaBg}
              alt="background"
              style={{ width: "50rem" }}
              className="main_img_border"
            />
            {/* render character based on response */}
            {responseData && (
              <img
                src={
                  responseData.data.character.id === 1 &&
                  responseData.data.level === 1
                    ? duck_1
                    : responseData.data.character.id === 1 &&
                      responseData.data.level === 2
                    ? duck_2
                    : responseData.data.character.id === 1 &&
                      responseData.data.level === 3
                    ? duck_3
                    : responseData.data.character.id === 2 &&
                      responseData.data.level === 1
                    ? penguin_1
                    : responseData.data.character.id === 2 &&
                      responseData.data.level === 2
                    ? penguin_2
                    : responseData.data.character.id === 2 &&
                      responseData.data.level === 3
                    ? penguin_3
                    : responseData.data.character.id === 3 &&
                      responseData.data.level === 1
                    ? woopa_1
                    : responseData.data.character.id === 3 &&
                      responseData.data.level === 2
                    ? woopa_2
                    : woopa_3
                }
                alt="character"
                style={{ width: "25rem" }}
                className="overlay_char_image"
              />
            )}

            {/* <img src={duck_1} alt="background" style={{ width: "25rem" }} /> */}
          </div>
        ) : (
          // Default
          <div>
            <img
              src={woopaBg}
              alt="Algoring Logo"
              style={{ width: "50rem" }}
              className="main_img_border"
            />
          </div>
        )}

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
