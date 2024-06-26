import 'react-native-reanimated';

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from "./entities"
import Physics from './physics'

export default function App() { 
  const [running, setRunning] = useState<boolean>(false);
  const [gameEngine, setGameEngine] = useState<any>(null);
  const [currentPoints, setCurrentPoints] = useState<number>(0)

  useEffect(()=>{
    setRunning(false);
  }, []);

  return (
    <View>      
      <Text style={{textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 20
      }}>{currentPoints}</Text>
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
            case 'new_point':
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <StatusBar style='auto' hidden={true}/>
      </GameEngine>
        
      {!running?
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'}}>
          <TouchableOpacity 
            style={{
              backgroundColor: 'green',
              paddingHorizontal: 30,
              paddingVertical: 30
            }}
            onPress={() => {
                setCurrentPoints(0);
                setRunning(true);
                gameEngine.swap(entities())
            }}
          >
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 30 }}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View> 
        : null }
    </View>
  );
}
