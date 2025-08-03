import React from 'react';

// ListofPlayers Component
const ListofPlayers = () => {
  // Declare an array with 11 players and store details using ES6 features
  const players = [
    { name: "Virat Kohli", score: 89 },
    { name: "Rohit Sharma", score: 45 },
    { name: "KL Rahul", score: 76 },
    { name: "Hardik Pandya", score: 62 },
    { name: "Rishabh Pant", score: 91 },
    { name: "Ravindra Jadeja", score: 34 },
    { name: "Jasprit Bumrah", score: 12 },
    { name: "Mohammed Shami", score: 28 },
    { name: "Yuzvendra Chahal", score: 55 },
    { name: "Bhuvneshwar Kumar", score: 42 },
    { name: "Shikhar Dhawan", score: 78 }
  ];

  // Using map() method of ES6 to display all players
  const playersList = players.map((player, index) => (
    <div key={index} className="player-card bg-blue-100 p-4 m-2 rounded-lg shadow-md border border-blue-200">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-blue-800">{player.name}</span>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {player.score} runs
        </span>
      </div>
    </div>
  ));

  // Filter players with scores below 70 using arrow functions of ES6
  const lowScorePlayers = players
    .filter(player => player.score < 70) // Arrow function for filtering
    .map((player, index) => (
      <div key={index} className="player-card bg-red-100 p-4 m-2 rounded-lg shadow-md border border-red-200">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-red-800">{player.name}</span>
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
            {player.score} runs
          </span>
        </div>
        <div className="text-xs text-red-600 mt-1">Below 70 runs</div>
      </div>
    ));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        List of Players
      </h2>
      
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-green-700 border-b-2 border-green-300 pb-2">
          All Players (Using map() method of ES6):
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {playersList}
        </div>
        <div className="mt-4 text-center">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            Total Players: {players.length}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-red-700 border-b-2 border-red-300 pb-2">
          Players with scores below 70 (Using arrow functions of ES6):
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lowScorePlayers}
        </div>
        <div className="mt-4 text-center">
          <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            Low Score Players: {players.filter(player => player.score < 70).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListofPlayers;
