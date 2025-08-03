import React, { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import ContentSelector from './components/ContentSelector';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [showContent, setShowContent] = useState(true);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="app">
      <h1>Blogger App</h1>
      
      <ContentSelector activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <button onClick={toggleContent} className="toggle-button">
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Method 1: Ternary operator */}
      {showContent ? (
        <div className="content-area">
          {/* Method 2: && operator */}
          {activeTab === 'books' && <BookDetails />}
          {activeTab === 'blogs' && <BlogDetails />}
          {activeTab === 'courses' && <CourseDetails />}
        </div>
      ) : (
        <div className="empty-state">Content is currently hidden</div>
      )}
    </div>
  );
}

export default App;
