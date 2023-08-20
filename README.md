# Rock-Paper-Scissors-Lizard-Spock Game

### Features
- Players can play against the computer.
- Option for a computer vs. computer game.
- The interface adjusts to the user's system theme preference.
- Ability to save and replay games.
- Beautiful SVG representation of each choice.
- Jest testing suite integrated for code reliability.
- Device Optimization: For PCs, tablets, and mobiles.

### Getting Started

#### Prerequisites
- Make sure you have a modern web browser that supports ES6 features. (e.g. Chrome)
- Node.js and npm installed on your machine. (v16.17.0)
- Docker installed for containerized deployment.

#### Installation

1. Clone the repository:
   ```shell
    git clone <repository-link>
    ```

2. Navigate to the project directory:
   ```shell
    cd path/to/directory
    ```

3. Install the required packages for testing:
   ```shell
    npm install
    ```

4. Docker Setup:
   - Use the provided Dockerfile to run the game using Nginx.
     Build the Docker image and run the container:
   ```shell
   docker build -t rock-paper-scissors-game .
   docker run -p 8080:8080 rock-paper-scissors-game
   ```
   Once the container is up, you can access the game in your web browser by navigating to http://localhost:8080.

5. Local Setup:
   ```shell
    npm start
    ```

### Usage
1. For Player vs. Computer:
   - Select your choice by clicking on one of the choices.
     The computer's choice will be generated and the winner will be displayed.
2. For Computer vs. Computer:
   - Click on the "Computer vs. Computer" button.
     Watch as both computers make their choices and the winner is revealed.

3. Saving a Game:
   - After a game ends, click on the "Save Result" button to save the game.
     View saved games in the "Saved Games" section.

4. Replaying a Game:
   - In the "Saved Games" section, click on the replay icon next to a game to replay it.

### Testing
This project uses Jest for testing. Run the following command to execute the tests:
```shell
npm test
```

### Acknowledgments
SVG icons by Font Awesome.