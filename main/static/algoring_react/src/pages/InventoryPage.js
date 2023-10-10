import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Col } from "reactstrap";
import logo from "../img/03.Algoring Logo.png";
import Character from '../components/Character';
import inventoryBtn from "../img/03.Library_blank_40px.png";
import duck_1 from "../img/duck1.png";
import duck_2 from "../img/duck2.png";
import duck_3 from "../img/duck3.png";
import penguin_1 from "../img/penguin1.png";
import penguin_2 from "../img/penguin2.png";
import penguin_3 from "../img/penguin3.png";
import woopa_1 from "../img/woopa1.png";
import woopa_2 from "../img/woopa2.png";
import woopa_3 from "../img/woopa3.png";
import eggImg from "../img/04.egg.png";

const InventoryPage = () => {
  const [chrList, setChrList] = useState([]);
  const TOTAL = 12;

  const imgList = {'woopa' : [woopa_1, woopa_2, woopa_3],
                  'duck' : [duck_1, duck_2, duck_3],
                  'penguin' : [penguin_1, penguin_2, penguin_3],
                  'egg' : [eggImg],
                    // level : [level_1, level_2, level_3] // add level img later
  }

  const testChrList = [{id: 1, name: 'woopa', level: 3}, 
                      {id: 2, name: 'duck', level: 3}, 
                      {id: 3, name: 'penguin', level: 1}];

  useEffect(() => {
    setChrList(testChrList);
  }, []);

  if (chrList.length < TOTAL) {
    let newList = [ ...chrList ];
    for (let i = chrList.length; i < TOTAL; i++) {
      let egg = {id: i + 1, name: 'egg', level: 1};
      newList.push(egg);
    }
    setChrList(newList);
  }

  return (
    <>
      <Col className="mt-5 d-flex flex-column justify-content-center align-items-center">
        {/* Header */}
        <header className="row logo_img_container" style={{marginBottom : "80px"}}>
          <img src={logo} alt="Algoring Logo" />
        </header>

        <div className="col-12 d-flex justify-content-center">

          {/* Inventory button */}
          <div className="col-2 d-flex justify-content-end align-items-start">
            <NavLink to={"/algoring"}>
              <img
                style={{ width: "40px" }}
                src={inventoryBtn}
                alt="Inventory Button"
              />
            </NavLink>
          </div>

          {/* Charanters Div */}
          <div className="col-8 d-flex justify-content-center flex-wrap">
              { chrList.length && chrList.map((chr) => {
                  return (
                    <div className="col d-flex justify-content-center inventory_img_border rounded">
                    <Character
                      key={chr.id}
                      id={chr.id}
                      name={chr.name}
                      chrImg={imgList[chr.name][chr.level - 1]}
                      level={chr.level}
                      levelImg=''
                    />
                    </div>
                  );
                })
              }
          </div>

          {/* For spacing */}
          <div className="col-2">blank</div>
        </div>
      </Col>
      </>
    )
};

export default InventoryPage;
