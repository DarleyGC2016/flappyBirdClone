import { View } from 'react-native';

import { GameEngine } from 'react-native-game-engine';

import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <StatusBar style='auto' hidden={true}/>
      <GameEngine
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >

      </GameEngine>
    </View>
  );
}

