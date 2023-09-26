import React from 'react'

const Character = ({ id, name, chrImg, level, levelImg}) => {
  return (
    <>
      <div>
        <img src={chrImg} alt={name} width="150px"/>
        <img src={levelImg} alt={level} width="150px"/>
        id : {id}
        level : {level}
      </div>
    </>
  )
}

export default Character