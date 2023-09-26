import React from 'react'

const Character = ({ id, name, chrImg, level, levelImg}) => {
  return (
    <>
      <div class='inventory_img'>
        <div class="row">
          <div class="col-8">
            <img src={chrImg} alt={name} width="150px"/>
          </div>
          <div class="col-4 d-flex justify-content-center align-items-center align-self-end level_icon">
           {level}
          </div>
        </div>
      </div>
    </>
  )
}

export default Character