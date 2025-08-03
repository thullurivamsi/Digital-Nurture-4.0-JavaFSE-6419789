import React, { useState } from 'react';

const BlogDetails = () => {
  const [showExtendedInfo, setShowExtendedInfo] = useState(false);
  const blogs = [
    { id: 1, title: 'React Hooks Explained', author: 'Sarah Johnson', views: 1250 },
    { id: 2, title: 'State Management in 2023', author: 'Mike Chen', views: 980 },
    { id: 3, title: 'The Future of Frontend', author: 'Emma Wilson', views: 2100 }
  ];

  return (
    <div className="content-container">
      <h2>Blog Details</h2>
      <div className="toggle-container">
        <button onClick={() => setShowExtendedInfo(!showExtendedInfo)}>
          {showExtendedInfo ? 'Show Basic Info' : 'Show Extended Info'}
        </button>
      </div>
      <ul className="item-list">
        {blogs.map(blog => (
          <li key={blog.id} className="item-card">
            <h3>{blog.title}</h3>
            <p>Author: {blog.author}</p>
            {/* Method 3: Inline conditional rendering */}
            {showExtendedInfo && <p>Views: {blog.views.toLocaleString()}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
