import React, { Component } from 'react';
import { View, Text, AppRegistry, StyleSheet, AsyncStorage, asset, Sound } from 'react-vr';
import Shape, { shapes } from './vr/Components/Shape';
import API from "./utils/API";
import Button from './song.js';
import {init as firebaseInit} from './base';

import Login from './vr/Components/Login';

import {addSection} from './base';
import {saveState} from './base';

class ShapeGame extends Component{
  constructor(){
    super();
    firebaseInit();
    this.state = {
      gameShapes: [1, 1, 1, 1],
      score: 0,
      specialIndex: 0
    }

  }


componentDidMount(){

addSection("Anastasia is struggling", "mildredBonk@gmail.com", "idk")
  AsyncStorage.getItem('score')
  .then(value =>{
    this.setState({score: value})
  })
  this.newGameSet();
}



pickShape(shapeIndex){
  let score = this.state.score;

  score = this.state.specialIndex === shapeIndex ? score +1 : score;

  this.setState({score});
console.log(score)
  saveState(this.state);
  AsyncStorage.setItem('score', score);
  this.newGameSet();
}

newGameSet(){
  let baseShapeId = Math.floor(Math.random() * shapes.length);

  let specialShapeId = baseShapeId;

  while (specialShapeId === baseShapeId) {
    specialShapeId = Math.floor(Math.random() * shapes.length);
  }

  let newGameShapes = [];

  for (let i=0; i<this.state.gameShapes.length; i++) {
    newGameShapes[i] = baseShapeId;
  }

  let specialIndex = Math.floor(Math.random() * newGameShapes.length);

  newGameShapes[specialIndex] = specialShapeId;

  this.setState({
    gameShapes: newGameShapes,
    specialIndex: specialIndex

  });
}

  render(){
    return(
      <View style={styles.game}>
      <View>
      <Login />
      </View>
        <Text style={styles.text}>Find the Odd One Out!</Text>
<View style={styles.menu }>
  <Button  />

    <Sound
      autoPlay source={{mp3: asset('ForgiveVocalSlowed.mp3')}}
    />

</View>

        <Text style={styles.text}>{this.state.score}</Text>
      {
        this.state.gameShapes.map((shape, index) =>{
          return(
            <View key={index}
              onEnter={() => this.pickShape(index)}>
              <Shape shapeNum={shape}
                transform={[{translate: [(index-1.5)*1.5, 0, -5]}]}
                colorNum={index}/>
            </View>
          )
        })
      }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  game: {
    transform: [
      {translate: [-2.25, 0, 0]}
    ]
  },
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  },
  auth: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0,3, -2]}
    ]
  },
  menu: {
      flex: 1,
      flexDirection: 'column',
      width: 1,
      alignItems: 'stretch',
      transform: [{translate: [0.5, 0.5, -4]}],
      }
});

AppRegistry.registerComponent('ShapeGame', () => ShapeGame)
