export const TETROMINOS = {
    I: {
      shapes: [
        [[1, 1, 1, 1]],
        [[1], [1], [1], [1]]
      ],
      color: 'cyan',
    },
    L: {
      shapes: [
        [[0, 0, 1], [1, 1, 1]],
        [[1, 0], [1, 0], [1, 1]],
        [[1, 1, 1], [1, 0, 0]],
        [[1, 1], [0, 1], [0, 1]]
      ],
      color: 'orange',
    },
    J: {
      shapes: [
        [[1, 0, 0], [1, 1, 1]],
        [[1, 1], [1, 0], [1, 0]],
        [[1, 1, 1], [0, 0, 1]],
        [[0, 1], [0, 1], [1, 1]]
      ],
      color: 'blue',
    },
    O: {
      shapes: [
        [[1, 1], [1, 1]]
      ],
      color: 'yellow',
    },
    Z: {
      shapes: [
        [[1, 1, 0], [0, 1, 1]],
        [[0, 1], [1, 1], [1, 0]],
      ],
      color: 'red',
    },
    S: {
      shapes: [
        [[0, 1, 1], [1, 1, 0]],
        [[1, 0], [1, 1], [0, 1]],
      ],
      color: 'green',
    },
    T: {
      shapes: [
        [[0, 1, 0], [1, 1, 1]],
        [[1, 0], [1, 1], [1, 0]],
        [[1, 1, 1], [0, 1, 0]],
        [[0, 1], [1, 1], [0, 1]]
      ],
      color: 'purple',
    },
  };
   
  export const getRandomTetromino = () => {
    const tetrominos = "ILJOSTZ";
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return { ...TETROMINOS[randTetromino], rotationIndex: 0 }; // Incluye un índice de rotación inicial
  };
  export default TETROMINOS