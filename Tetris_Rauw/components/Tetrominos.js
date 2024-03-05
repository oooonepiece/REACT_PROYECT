/**
 * Define los diferentes tipos de tetrominos disponibles en el juego, cada uno con sus formas y colores.
 */
export const TETROMINOS = {
    /**
     * Tetromino I: Forma lineal (I) de color cyan.
     */
    I: {
      shapes: [
        [[1, 1, 1, 1]],
        [[1], [1], [1], [1]]
      ],
      color: 'cyan',
    },
    /**
     * Tetromino L: Forma en L de color naranja.
     */
    L: {
      shapes: [
        [[0, 0, 1], [1, 1, 1]],
        [[1, 0], [1, 0], [1, 1]],
        [[1, 1, 1], [1, 0, 0]],
        [[1, 1], [0, 1], [0, 1]]
      ],
      color: 'orange',
    },
    /**
     * Tetromino J: Forma en J de color azul.
     */
    J: {
      shapes: [
        [[1, 0, 0], [1, 1, 1]],
        [[1, 1], [1, 0], [1, 0]],
        [[1, 1, 1], [0, 0, 1]],
        [[0, 1], [0, 1], [1, 1]]
      ],
      color: 'blue',
    },
    /**
     * Tetromino O: Forma en O de color amarillo.
     */
    O: {
      shapes: [
        [[1, 1], [1, 1]]
      ],
      color: 'yellow',
    },
    /**
     * Tetromino Z: Forma en Z de color rojo.
     */
    Z: {
      shapes: [
        [[1, 1, 0], [0, 1, 1]],
        [[0, 1], [1, 1], [1, 0]],
      ],
      color: 'red',
    },
    /**
     * Tetromino S: Forma en S de color verde.
     */
    S: {
      shapes: [
        [[0, 1, 1], [1, 1, 0]],
        [[1, 0], [1, 1], [0, 1]],
      ],
      color: 'green',
    },
    /**
     * Tetromino T: Forma en T de color morado.
     */
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
  
  /**
   * Devuelve un tetromino aleatorio con una forma y un color específicos.
   * 
   * @returns {Object} Tetromino aleatorio.
   */
  export const getRandomTetromino = () => {
    const tetrominos = "ILJOSTZ";
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return { ...TETROMINOS[randTetromino], rotationIndex: 0 }; // Incluye un índice de rotación inicial
  };