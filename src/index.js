import gameInfo from './gameInfo.js';
import cli from './cli.js';

export default (gameName, game) => {
  let gameRound = 0;
  const userName = cli();
  gameInfo(gameName);
  while (gameRound < 3) {
    const wonStatus = game();
    if (wonStatus === 'won') gameRound += 1;
    else {
      console.log(`Let's try again ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
