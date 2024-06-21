import Matter from 'matter-js'

import { Dimensions } from "react-native";
import { getPipeSizePosPair } from "../app/utils/random"

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Physics = (entities, {touches, time, dispatch}) => {
   let engine = entities.physics.engine;
   touches
   .filter(touche => touche.type === 'press')
   .forEach(touche => {
      Matter.Body.setVelocity(entities.Bird.body, {
         x: 0,
         y: -8
      });
   });
   Matter.Engine.update(engine, time.del1a);

   for (let index = 1; index < 2; index++) { 
      if (entities[`ObstacleTop${index}`].body.bounds.max.x <= 0) {
            const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);
            Matter.Body.setPosition(entities[`ObstacleTop${index}`].body, pipeSizePos.pipeTop.pos);
            Matter.Body.setPosition(entities[`ObstacleBottom${1}`].body, pipeSizePos.pipeBottom.pos);
      }     
      Matter.Body.translate(entities[`ObstacleTop${index}`].body, {x: -3,y: 0});
      Matter.Body.translate(entities[`ObstacleBottom${1}`].body, {x: -3,y: 0});
   }
   return entities;
}

export default Physics;