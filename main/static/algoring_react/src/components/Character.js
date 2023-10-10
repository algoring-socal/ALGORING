import React from 'react'

const Character = ({ id, name, chrImg, level, levelImg}) => {
  return (
    <>
      <div className='inventory_img'>
        <div className="col-12 d-flex ">
          <div className="col-9">
            <img src={chrImg} alt={name} width="150px"/>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center align-self-end ">
            <div className="level_icon rounded-circle">
              {level}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Character