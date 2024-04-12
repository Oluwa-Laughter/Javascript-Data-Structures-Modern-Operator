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

const scored = game.scored;
for (const [i, score] of scored.entries()) {
  console.log(` Goal ${i + 1} : ${score}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Bonus
// const scorers = Object.entries(game.scored);
// for (const [key, values] of scorers) {
//   console.log(`${key} : ${values}`);
// }

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

///////////////////
//

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(
  `an event happened on an avearge of ${time / gameEvents.size} minutes`
);

// for (const [i, event] of events) {
//   if (i >= 9) console.log(`a ${event} happened on an avearge of ${i / 9}`);
// }

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}:${event}`);
}

// for (const [i, event] of gameEvents) {
//   if (i <= 45) {
//     console.log(`FIRST HALF ${i}:${event}`);
//   } else {
//     console.log(`SECOND HALF ${i}:${event}`);
//   }
// }
