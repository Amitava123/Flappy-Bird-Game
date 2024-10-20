# Flappy Bird Game

Welcome to the Flappy Bird game! This is a simple web-based game where you control a bird and navigate it through pipes. The game is built using **HTML**, **CSS**, and **JavaScript**. The bird is controlled using the keyboard, and your goal is to avoid hitting pipes while achieving the highest score possible.

## Features:

- **Responsive gameplay**: The game works well on both desktop and mobile screens.
- **Gravity and collision detection**: The bird is affected by gravity, and pipes move horizontally. The game ends when the bird hits the pipes or the ground.
- **Score system**: Your score increases as you pass pipes. Every time a pipe is successfully avoided, the score increments.
- **Game over screen**: After a collision, a "Game Over" screen will appear with the option to restart the game by pressing the **Enter** key.

---

## How to Play

1. **Start the game**: Press **Enter** to start the game.
2. **Control the bird**: Press the **Up Arrow** key or the **Spacebar** to make the bird flap and ascend. The bird will naturally fall due to gravity when not flapping.
3. **Avoid pipes**: Navigate through the pipes, which appear at random heights. Colliding with a pipe or the ground will end the game.
4. **Restart the game**: Once the game is over, press **Enter** again to restart and try for a higher score.

---

## Installation Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Amitava123/flappy-bird-game.git
   ```

2. **Open the game in a browser**:

   - Navigate to the project folder and open the `index.html` file in your preferred browser.

   ```bash
   cd flappy-bird-game
   open index.html
   ```

---

## Files and Structure

```
flappy-bird-game/
│
├── index.html         # The main HTML file
├── style.css          # The CSS for styling the game elements
├── script.js          # The JavaScript for game logic
├── assets/
│   ├── sounds/
│   │   ├── point.mp3  # Sound played when a score is increased
│   │   └── die.mp3    # Sound played when the game ends
│   └── images/
│       └── Bird.png   # Bird image used in the game
└── README.md          # This README file
```

---

## Technologies Used

- **HTML5**: For the structure and layout of the game.
- **CSS3**: For styling and positioning the game elements.
- **JavaScript (ES6)**: For game logic, including handling bird movement, pipe generation, collision detection, and scoring.

---

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## Contributing

Feel free to fork the repository and submit pull requests! Any suggestions or improvements are welcome.
