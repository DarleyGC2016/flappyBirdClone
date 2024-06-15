import 'react-native-reanimated';

import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';

export default function App() { 
  return (
    <View>
      <StatusBar style='auto' hidden={true}/>
      <GameEngine
        entities={entities()}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      </GameEngine>
    </View>
  );
}
