"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
    console.log(`${players.length} goals were scored`);
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final);

// const { team1: team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

game.printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

game.printGoals(...game.scored);

console.log(game.odds.team1 || game.odds.team2);

team1 < team2 && console.log("Team 1 is more likely to win");

team1 > team2 && console.log("Team 2 is more likely to win");
