import React, { useEffect, useState } from "react";

function Card({imageUrl, title, price, onClickPlus}) {

    const[isClicked, setIsClicked] = useState(false)            //состояние кнопки добавления в корзину (плюсика)
    //const[isClickedLike, setIsClickedLike] = useState(false)    //состояние кнопки добавления в избранные (сердце)

    const handleClickPlus = () => {
      onClickPlus({ imageUrl, title, price });
      setIsClicked(!isClicked);
    } 

    // const handleClickLike = () => {
    //   onClickFavourite({imageUrl, title, price})
    //   setIsClickedLike(!isClickedLike)
    // }

    return(
        <div className="card">
          {/* <div className="favourite" onClick={handleClickLike}>
            <img onClick={() => setIsClickedLike(!isClickedLike)}  src={isClickedLike ? 'img/heart_liked.svg' : 'img/heart_unliked.svg'} alt="heart_icon" />
          </div> */}

          <img src={imageUrl} alt="bearbrick_1" width={200} height={200}/>
          <p>{title}</p>
          <div className="cardBottom">
            <div className="cardBottom2">
              <span>Price: </span>
              <b>{price}$</b>
            </div>
              {/* иконка плюса для добавления товара в корзину */}
              <img className="plus" onClick={handleClickPlus} src={isClicked ? "/img/plus_active.svg" : "/img/plus_passive.svg"} alt="plus" />

          </div>
        </div>
    )
}


export default Card;