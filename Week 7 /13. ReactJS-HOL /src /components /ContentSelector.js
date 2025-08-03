import React from 'react';

const ContentSelector = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'books', label: 'Books' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'courses', label: 'Courses' }
  ];

  return (
    <div className="tab-selector">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ContentSelector;
