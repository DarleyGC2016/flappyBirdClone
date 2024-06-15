import Matter from 'matter-js'
import React from 'react'

const Physics = (entities, {thouches, time, dispatch}) => {
   let engine = entities.physics.engine;

   Matter.Engine.update(engine, time.delta)

   return entities;
}

export default Physics;