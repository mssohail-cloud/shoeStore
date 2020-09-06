import React from 'react'
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, Grid, CardActions, } from '@material-ui/core';
import { Link, Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const useStyles = makeStyles({
    root: {
        flexGrow: 1, 
        marginLeft: 100,
      
    },
    media: {
      height: 250,  
    },

    disply: {
        maxWidth:300,

    }
  });

function ProductListIndex() {
    const style = useStyles();

    return (
        <div className={style.root}>
            <Grid
            container
            spacing={2}
            direction="row"
            justify="space-evenly"
            alignItems="flex-start">
                {Object.entries(shoes).map(([productID, { name, img }]) =>

                <Grid item xs={12} sm={6} md={4} key={productID}>
                     <Card className={style.disply}>
                        <CardActionArea>
                            <CardMedia className={style.media}

                                image={img}
                                title={name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={productID}>See Details </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                   
                )}
            </Grid>
        </div>
           
      
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

export default ProductListIndex
