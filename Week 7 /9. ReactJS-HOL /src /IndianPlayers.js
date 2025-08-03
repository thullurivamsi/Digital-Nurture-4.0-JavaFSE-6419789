import React from 'react';

// IndianPlayers Component
const IndianPlayers = () => {
  // Team arrays for destructuring demonstration
  const teamPlayers = [
    "Virat Kohli",      // Position 1 (Odd)
    "Rohit Sharma",     // Position 2 (Even)
    "KL Rahul",         // Position 3 (Odd)
    "Hardik Pandya",    // Position 4 (Even)
    "Rishabh Pant",     // Position 5 (Odd)
    "Ravindra Jadeja",  // Position 6 (Even)
    "Jasprit Bumrah",   // Position 7 (Odd)
    "Mohammed Shami"    // Position 8 (Even)
  ];

  // Using ES6 destructuring to extract players
  const [first, second, third, fourth, fifth, sixth, seventh, eighth] = teamPlayers;
  
  // Odd positioned players (1st, 3rd, 5th, 7th positions)
  const oddTeamPlayers = [first, third, fifth, seventh];
  
  // Even positioned players (2nd, 4th, 6th, 8th positions)
  const evenTeamPlayers = [second, fourth, sixth, eighth];

  // T20 players array
  const T20players = [
    "Virat Kohli",
    "Rohit Sharma", 
    "KL Rahul",
    "Hardik Pandya",
    "Rishabh Pant",
    "Ravindra Jadeja",
    "Jasprit Bumrah",
    "Mohammed Shami",
    "Yuzvendra Chahal",
    "Bhuvneshwar Kumar"
  ];

  // Ranji Trophy players array
  const RanjiTrophyPlayers = [
    "Prithvi Shaw",
    "Ajinkya Rahane", 
    "Cheteshwar Pujara",
    "Mayank Agarwal",
    "Wriddhiman Saha",
    "Hanuma Vihari",
    "Jayant Yadav",
    "Umesh Yadav",
    "Ishant Sharma",
    "Mohammed Siraj"
  ];

  // Merge arrays using ES6 spread operator (Merge feature of ES6)
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Remove duplicates from merged array using Set and spread
  const uniqueMergedPlayers = [...new Set(mergedPlayers)];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">
        Indian Players
      </h2>

      {/* Destructuring Section */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-700 border-b-2 border-indigo-300 pb-2">
          Team Players using Destructuring features of ES6:
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Odd Team Players */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200">
            <h4 className="text-xl font-semibold mb-4 text-blue-600 text-center">
              Odd Team Players
            </h4>
            <div className="space-y-3">
              {oddTeamPlayers.map((player, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-blue-800">{player}</span>
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                      Position {(index * 2) + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Even Team Players */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
            <h4 className="text-xl font-semibold mb-4 text-green-600 text-center">
              Even Team Players
            </h4>
            <div className="space-y-3">
              {evenTeamPlayers.map((player, index) => (
                <div key={index} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-green-800">{player}</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                      Position {(index * 2) + 2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Merge Arrays Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200">
        <h3 className="text-2xl font-semibold mb-6 text-orange-700 border-b-2 border-orange-300 pb-2">
          Merged Players (T20 + Ranji Trophy using ES6 Spread Operator):
        </h3>
        
        {/* Individual Arrays Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-blue-600">T20 Players:</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-2">
                {T20players.map((player, index) => (
                  <span key={index} className="text-blue-800 text-sm">
                    {index + 1}. {player}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-600">Ranji Trophy Players:</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 gap-2">
                {RanjiTrophyPlayers.map((player, index) => (
                  <span key={index} className="text-green-800 text-sm">
                    {index + 1}. {player}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Merged Array Display */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-orange-600">
            Merged Array (Unique Players Only):
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {uniqueMergedPlayers.map((player, index) => (
              <div key={index} className="bg-orange-100 p-3 rounded-lg shadow border border-orange-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-orange-800">{player}</span>
                  <span className="text-xs text-gray-600">
                    {T20players.includes(player) && RanjiTrophyPlayers.includes(player) 
                      ? "Both" 
                      : T20players.includes(player) 
                        ? "T20" 
                        : "Ranji"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center space-x-6 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              T20 Players: {T20players.length}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Ranji Players: {RanjiTrophyPlayers.length}
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              Unique Total: {uniqueMergedPlayers.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianPlayers;
