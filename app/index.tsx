import 'react-native-reanimated';

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from "./entities"
import Physics from './physics'

export default function App() { 
  const [running, setRunning] = useState<boolean>(false);
  const [gameEngine, setGameEngine] = useState<any>(null);
  const [start, setStart] = useState(initialState)

  useEffect(()=>{
    setRunning(true);
  }, []);

  return (
    <View>
      <StatusBar style='auto' hidden={true}/>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e: any) => {
          switch (e.type) {
            case 'game_over':
               setRunning(false);
               gameEngine.stop();
              break;
          
            default:
              break;
          }
        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      </GameEngine>
    </View>
  );
}
