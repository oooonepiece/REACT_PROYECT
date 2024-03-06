import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Alert, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { getRandomTetromino } from './piezas';

import Botones from './botones';

const numRows = 20;
const numCols = 10;
const velocidades = 1000;

const createEmptyBoard = () =>
  Array.from({ length: numRows }, () => Array(numCols).fill(0));

const GameBoard = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(getRandomTetromino());
  const [position, setPosition] = useState({ x: numCols / 2 - 1, y: 0 });
  const [isGameOver, setIsGameOver] = useState(false);
  const [nextPiece, setNextPiece] = useState(getRandomTetromino());
  const [velocidad, setVelocidad] = useState(velocidades);
  const [puntuacion, setPuntuacion] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  let fallingInterval;
  let moveInterval;

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/tuNoMetesCabra.mp3')
      );
      setSound(sound);
      await sound.playAsync();
      await sound.setIsLoopingAsync(true);
    };

    loadSound();

    return () => {
      if (sound) {
        sound.stopAsync();
        sound.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (isGameOver) {
      Alert.alert('Fin del juego', 'El juego ha terminado', [
        { text: '!Jugar otra vez!', onPress: resetGame },
      ]);
    }
    return;
  }, [isGameOver]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        movePiece({ x: 0, y: 1 });
      }
    }, velocidad);
    fallingInterval = interval;
    return () => clearInterval(interval);
  }, [position, currentPiece, board, isGameOver, velocidad, isPaused]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        movePiece({ x: 0, y: 1 });
      }
    }, 1000);
    moveInterval = interval;
    return () => clearInterval(interval);
  }, [position, currentPiece, board, isGameOver, isPaused]);

  const checkCollision = useCallback((newPosition, piece) => {
    const { shapes, rotationIndex } = piece;
    const shape = shapes[rotationIndex % shapes.length];
    for (let y = 0; y < shape.length; y++) {
      for (let x = 0; x < shape[y].length; x++) {
        if (shape[y][x] !== 0) {
          const newX = newPosition.x + x;
          const newY = newPosition.y + y;
          if (newX < 0 || newX >= numCols || newY >= numRows) {
            return true;
          }
          if (newY >= 0 && board[newY][newX] !== 0) {
            return true;
          }
        }
      }
    }
    return false;
  }, [board]);

  const lockPieceAndGenerateNewOne = () => {
    const newBoard = board.map((row) => [...row]);
    const { shapes, rotationIndex, color } = currentPiece;
    const shape = shapes[rotationIndex % shapes.length];
    let collisionAtTop = false;
    shape.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value !== 0) {
          if (position.y + y < 1) {
            collisionAtTop = true;
          }
          newBoard[y + position.y][x + position.x] = color;
        }
      })
    );

    if (collisionAtTop) {
      setIsGameOver(true);
    } else {
      let linesCleared = 0;
      for (let y = numRows - 1; y >= 0; y--) {
        if (newBoard[y].every((cell) => cell !== 0)) {
          newBoard.splice(y, 1);
          newBoard.unshift(Array(numCols).fill(0));
          linesCleared++;
        }
      }

      const emptyRows = Array(linesCleared).fill(Array(numCols).fill(0));
      newBoard.splice(0, linesCleared, ...emptyRows);

      setBoard(newBoard);
      setCurrentPiece(nextPiece);
      setNextPiece(getRandomTetromino());
      setPosition({ x: numCols / 2 - 1, y: 0 });
      setPuntuacion((prevPuntuacion) => {
        const newScore = prevPuntuacion + linesCleared * 10;
        if (newScore > 0 && newScore % 20 === 0) {
          setVelocidad((prevVelocidad) => Math.max(prevVelocidad - 100, 100));
        }
        return newScore;
      });
    }
  };

  const movePiece = (direction) => {
    if (!isGameOver && !isPaused) {
      const newPos = { x: position.x + direction.x, y: position.y + direction.y };
      if (!checkCollision(newPos, currentPiece)) {
        setPosition(newPos);
      } else if (direction.y > 0) {
        lockPieceAndGenerateNewOne();
      }
    }
  };

  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetromino());
    setNextPiece(getRandomTetromino());
    setPosition({ x: numCols / 2 - 1, y: 0 });
    setIsGameOver(false);
    setPuntuacion(0);
    setVelocidad(velocidades);
  };
  const moveLeft = () => movePiece({ x: -1, y: 0 });
  const moveRight = () => movePiece({ x: 1, y: 0 });
  const moveDown = () => movePiece({ x: 0, y: 1 });
  const rotate = () => {
    const newRotationIndex = (currentPiece.rotationIndex + 1) % currentPiece.shapes.length;
    setCurrentPiece({ ...currentPiece, rotationIndex: newRotationIndex });
  };
  const pauseGame = () => {
    setIsPaused(true);
    clearInterval(fallingInterval);
    clearInterval(moveInterval);
    sound.pauseAsync();
  };

  const resumeGame = () => {
    setIsPaused(false);
    fallingInterval = setInterval(movePiece, velocidad, { x: 0, y: 1 });
    moveInterval = setInterval(movePiece, 1000, { x: 0, y: 1 });
    sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fondoHumo.jpg')} style={styles.background}>
        <Text style={styles.textoPuntuacion}>Puntuación: {puntuacion}</Text>

        <View style={styles.nextPieceContainer}>
          <View style={styles.nextPiece}>
            {nextPiece.shapes[nextPiece.rotationIndex % nextPiece.shapes.length].map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((cell, cellIndex) => (
                  <View
                    key={cellIndex}
                    style={[styles.cell, { backgroundColor: cell !== 0 ? nextPiece.color : 'transparent' }]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.boardContainer}>
          <View style={styles.board}>
            {board.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((cell, cellIndex) => {
                  let color = 'transparent';
                  if (cell !== 0) {
                    color = cell;
                  } else {
                    const pieceY = rowIndex - position.y;
                    const pieceX = cellIndex - position.x;
                    if (
                      pieceY >= 0 &&
                      pieceY < currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length].length &&
                      pieceX >= 0 &&
                      pieceX < currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length][pieceY].length &&
                      currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length][pieceY][pieceX] !== 0
                    ) {
                      color = currentPiece.color;
                    }
                  }
                  return <View key={cellIndex} style={[styles.cell, { backgroundColor: color }]} />;
                })}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Botones name="arrow-left" onPress={moveLeft} />
          <Botones name="arrow-down" onPress={moveDown} />
          <Botones name="arrow-right" onPress={moveRight} />
          <Botones name="refresh" onPress={rotate} />
          {!isPaused ?( 
          <Botones name="pause" onPress={pauseGame} />):
          (
             <Botones name="play" onPress={resumeGame} />
          )}
         
         
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  background: {
    width: '100%',
    height: '100%',
  },
  boardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'black',
    width: numCols * 26,
    height: numRows * 26,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPuntuacion: {
    textAlign: 'center',
    color: 'white',
  },
  nextPiece: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default GameBoard;
