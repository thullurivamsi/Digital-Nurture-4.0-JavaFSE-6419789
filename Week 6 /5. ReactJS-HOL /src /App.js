import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'React Bootcamp',
      status: 'ongoing',
      startDate: '2025-07-15',
      endDate: '2025-08-15'
    },
    {
      name: 'Python for Data Science',
      status: 'completed',
      startDate: '2025-06-01',
      endDate: '2025-07-01'
    }
  ];

  return (
    <div>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
