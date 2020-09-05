import React from 'react'
import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        
      maxWidth: 300,
      
    },
    media: {
      height: 370,
      
    },
  });

function ProductListIndex() {
    const style = useStyles();

    return (
        <ul>
            {Object.entries(shoes).map(([productID, {name, img}]) => 
            
                <Card className={style.root} display="inline">
                    <CardActionArea>
                        <CardMedia className= {style.media}

                            image= {img}
                            title={name}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
     
                   
                
            )}
        </ul>
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
    }
  };

export default ProductListIndex
