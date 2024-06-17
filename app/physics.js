import Matter from 'matter-js'

const Physics = (entities, {touches, time, dispatch}) => {
   let engine = entities.physics.engine;
console.log('touches: ',touches);
console.log('time: ', time);
   touches
   .filter(touche => touche.type === 'press')
   .forEach(touche => {
      Matter.Body.setVelocity(entities.Bird.body, {
         x: 0,
         y: -8
      });
      console.log('touche: ',touche);
   });

   Matter.Engine.update(engine, time.delta)

   return entities;
}

export default Physics;