import React from 'react'
import { useParams } from 'react-router'
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  productImg :{
    height:350, 
    width: 350,

  }
})

function ProductDetails() {
  const style = useStyle();

    const {productID} = useParams();
    const product = shoes[productID];
    const {name, img} = product;

    return (
        <>
        <Grid>
          <Grid item xs={12} sm={3}>
            <h3>{name}</h3>
            <img className={style.productImg} src={img} alt={name} />
            <button>Add to Cart!</button>
          </Grid>
        </Grid>
            
        </>
    )
}
const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    
    "nike-shoes-white":{
        name: "Nike shoes white", 
        img: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg"
    },
   
    "nike-shoes-black":{
        name: "Nike shoes black", 
        img: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg"
    }, 

    "sports-shoes-black":{
        name: "sports shoes black", 
        img: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg"
    }



  };
export default ProductDetails
