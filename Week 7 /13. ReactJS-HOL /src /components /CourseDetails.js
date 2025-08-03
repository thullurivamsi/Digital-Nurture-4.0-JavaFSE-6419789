import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 101, title: 'React Fundamentals', duration: '4 weeks', level: 'Beginner' },
    { id: 102, title: 'Advanced React Patterns', duration: '6 weeks', level: 'Intermediate' },
    { id: 103, title: 'React Performance', duration: '3 weeks', level: 'Advanced' }
  ];

  // Method 4: Element variables
  const courseItems = courses.map(course => (
    <li key={course.id} className="item-card">
      <h3>{course.title}</h3>
      <p>Duration: {course.duration}</p>
      <p>Level: {course.level}</p>
    </li>
  ));

  return (
    <div className="content-container">
      <h2>Course Details</h2>
      <ul className="item-list">
        {courseItems.length > 0 ? courseItems : <p>No courses available</p>}
      </ul>
    </div>
  );
};

export default CourseDetails;
