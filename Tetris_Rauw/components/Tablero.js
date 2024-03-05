import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { TETROMINOS, getRandomTetromino } from './Tetrominos';


//esto luego lo quito porque es para una prueba 

// Constantes que definen las dimensiones del tablero y la velocidad base del juego
const numRows = 20;
const numCols = 10;
const baseSpeed = 1000; // Velocidad base en milisegundos

/**
 * Función que crea un tablero vacío.
 * @returns {number[][]} Tablero vacío
 */
const createEmptyBoard = () =>
  Array.from({ length: numRows }, () => Array(numCols).fill(0));

/**
 * Componente principal del juego Tetris.
 */
const GameBoard = () => {
  // Estados del componente
  const [board, setBoard] = useState(createEmptyBoard()); // Tablero de juego
  const [currentPiece, setCurrentPiece] = useState(getRandomTetromino()); // Pieza en movimiento actual
  const [nextPiece, setNextPiece] = useState(getRandomTetromino()); // Siguiente pieza a mostrar
  const [position, setPosition] = useState({ x: numCols / 2 - 1, y: 0 }); // Posición de la pieza actual
  const [gameOver, setGameOver] = useState(false); // Indica si el juego ha terminado
  const [score, setScore] = useState(0); // Puntuación del jugador
  const [speed, setSpeed] = useState(baseSpeed); // Velocidad del juego

  /**
   * Función que verifica si hay colisión entre una pieza y su nueva posición.
   * @param {object} newPosition Nueva posición de la pieza
   * @param {object} piece Pieza actual
   * @returns {boolean} True si hay colisión, False de lo contrario
   */
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

  /**
   * Función que reinicia el juego.
   */
  const resetGame = () => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomTetromino());
    setNextPiece(getRandomTetromino());
    setPosition({ x: numCols / 2 - 1, y: 0 });
    setGameOver(false);
    setScore(0);
    setSpeed(baseSpeed);
  };

  /**
   * Efecto que muestra un mensaje de "Game Over" cuando el juego termina.
   */
  useEffect(() => {
    if (gameOver) {
      Alert.alert("Game Over", "Has perdido!", [
        { text: "Reiniciar", onPress: resetGame }
      ]);
    }
  }, [gameOver]);

  // Función para bloquear la pieza y generar una nueva
  const lockPieceAndGenerateNewOne = () => {
    const newBoard = board.map(row => [...row]);
    const { shapes, rotationIndex, color } = currentPiece;
    const shape = shapes[rotationIndex % shapes.length];
    let collisionAtTop = false;
    shape.forEach((row, y) => row.forEach((value, x) => {
      if (value !== 0) {
        if (position.y + y < 1) {
          collisionAtTop = true;
        }
        newBoard[y + position.y][x + position.x] = color;
      }
    }));

    if (collisionAtTop) {
      setGameOver(true);
    } else {
      let linesCleared = 0;
      for (let y = numRows - 1; y >= 0; y--) {
        if (newBoard[y].every(cell => cell !== 0)) {
          newBoard.splice(y, 1); // Eliminar línea completa
          newBoard.unshift(Array(numCols).fill(0)); // Agregar línea vacía en la parte superior
          linesCleared++;
        }
      }

      const emptyRows = Array(linesCleared).fill(Array(numCols).fill(0));
      newBoard.splice(0, linesCleared, ...emptyRows);

      setBoard(newBoard);
      setCurrentPiece(nextPiece);
      setNextPiece(getRandomTetromino());
      setPosition({ x: numCols / 2 - 1, y: 0 });
      setScore(prevScore => {
        const newScore = prevScore + linesCleared * 10;
        if (newScore > 0 && newScore % 20 === 0) {
          setSpeed(prevSpeed => Math.max(prevSpeed - 100, 100));
        }
        return newScore;
      });
    }
  };

  const movePiece = (direction) => {
    if (!gameOver) {
      const newPos = { x: position.x + direction.x, y: position.y + direction.y };
      if (!checkCollision(newPos, currentPiece)) {
        setPosition(newPos);
      } else if (direction.y > 0) {
        lockPieceAndGenerateNewOne();
      }
    }
  };

  useEffect(() => {
    const update = () => {
      movePiece({ x: 0, y: 1 });
    };
    const interval = setInterval(update, speed);
    return () => clearInterval(interval);
  }, [position, currentPiece, board, gameOver, speed]);

  const moveLeft = () => movePiece({ x: -1, y: 0 });
  const moveRight = () => movePiece({ x: 1, y: 0 });
  const moveDown = () => movePiece({ x: 0, y: 1 });
  const rotate = () => {
    const newRotationIndex = (currentPiece.rotationIndex + 1) % currentPiece.shapes.length;
    setCurrentPiece({ ...currentPiece, rotationIndex: newRotationIndex });
  };

  // Interfaz de usuario del componente
  return (
    <View style={styles.container}>
      {/* Mostrar la puntuación */}
      <Text style={styles.scoreText}>Puntuación: {score}</Text>
      
      {/* Tablero de juego */}
      <View style={styles.boardContainer}>
        <View style={styles.board}>
          {board.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, cellIndex) => {
                let color = '#333'; // Color de celda vacía
                if (cell !== 0) {
                  color = cell; // Mantener el color de la celda para tetrominos estáticos
                } else {
                  const pieceY = rowIndex - position.y;
                  const pieceX = cellIndex - position.x;
                  if (
                    pieceY >= 0 && pieceY < currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length].length &&
                    pieceX >= 0 && pieceX < currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length][pieceY].length &&
                    currentPiece.shapes[currentPiece.rotationIndex % currentPiece.shapes.length][pieceY][pieceX] !== 0
                  ) {
                    color = currentPiece.color; // Establecer el color de la celda para el tetromino en movimiento
                  }
                }
                return (
                  <View
                    key={cellIndex}
                    style={[styles.cell, { backgroundColor: color }]}
                  />
                );
              })}
            </View>
          ))}
        </View>
      </View>
      
      {/* Siguiente pieza a mostrar */}
      <View style={styles.nextPieceContainer}>
        <View style={styles.nextPiece}>
          {nextPiece.shapes[nextPiece.rotationIndex % nextPiece.shapes.length].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((cell, cellIndex) => (
                <View
                  key={cellIndex}
                  style={[styles.cell, { backgroundColor: cell !== 0 ? nextPiece.color : '#333' }]}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
      
      {/* Botones de control */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={moveLeft} style={styles.button}><Text style={styles.buttonText}>Izquierda</Text></TouchableOpacity>
        <TouchableOpacity onPress={moveDown} style={styles.button}><Text style={styles.buttonText}>Bajar</Text></TouchableOpacity>
        <TouchableOpacity onPress={moveRight} style={styles.button}><Text style={styles.buttonText}>Derecha</Text></TouchableOpacity>
        <TouchableOpacity onPress={rotate} style={styles.button}><Text style={styles.buttonText}>Rotar</Text></TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  boardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  board: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    width: numCols * 30,
    height: numRows * 30,
    marginRight: 5,
  },
  scoreText: {
    backgroundColor: 'white',
    borderRadius: 2,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    marginBottom: 10, // Añadir espacio debajo de la puntuación
    color: 'blue', // Color del texto de la puntuación
  },
  nextPieceContainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue', // Color de fondo del botón
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'pink', // Color del texto del botón
    fontSize: 18, // Tamaño de fuente del texto del botón
    fontWeight: 'bold', // Peso de fuente del texto del botón
  },
});

export default GameBoard;