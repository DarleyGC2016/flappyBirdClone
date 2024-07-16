import Matter from 'matter-js'
import React, { useEffect, useState } from 'react'
import { Image, View, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Bird = props => {
    const [imagem, setImage] = useState();
    const widthBody = (props.body.bounds.max.x - props.body.bounds.min.x) + 20;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
    
    const xBody = props.body.position.x - widthBody / 2 
    const yBody = props.body.position.y - heightBody / 2;

    const voo = () => {
      if (yBody === 280){
        setImage('up')
      }
    }
     
    return (
      <View >
        { yBody === 280 ? 
        <Image 
            style={{ 
              left: xBody,       
              top: yBody,
              width: widthBody,
              height: heightBody
            }}
            source={require('../imgs/bluebird-upflap.png')}/>
          :  <Image 
                style={{ 
                  left: xBody,       
                  top: yBody,
                  width: widthBody,
                  height: heightBody
                }}
                source={require('../imgs/bluebird-downflap.png')}/>
        }
        
      </View>
    )
}
export default (world, foto, pos, size) => {
  const initialBird = Matter
  .Bodies
  .rectangle(
          pos.x,
          pos.y,
          size.width,
          size.height,
          {
            label: 'Bird'     
          });
  Matter.World.add(world, initialBird);
  return {
      body: initialBird,
      foto,
      pos,       
      renderer: <Bird/>
  }
}