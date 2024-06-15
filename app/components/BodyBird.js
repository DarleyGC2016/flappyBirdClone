import React from 'react'

const BodyBird = (props) => {
    console.log('props do bird: ',props);
    // const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    // const heighBody = props.body.bounds.max.x - props.body.bounds.min.x;
    
    // const xbody = props.body.position.x - widthBody / 2
    // const ybody = props.body.position.y - heighBody / 2;

    // const color = props.color;

    return (
      <View style={{
         borderWidth: 1,
        //  borderColor: color,
         borderStyle: 'solid',
         position: 'absolute',
        //  left: xbody,
        //  top: ybody,
        //  width: widthBody,
        //  height: heighBody
      }}/>
    )
}

export default BodyBird;
