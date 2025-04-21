import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: '#91b5ff',
        borderLeft: '6px solid #f59e0b',
        padding: '20px',
        borderRadius: '8px',
        fontFamily: "'Montserrat', sans-serif",  // Unique font family
        color: '#78350f',
        maxWidth: '900px',
        margin: '20px auto',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>🔔 Admin can:</h2>
          <p>
            - Add, edit, and delete blog posts
            <br />
            - Manage all content in the system
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>👤 User can:</h2>
          <p>
            - Log in to read blogs only
            <br />
            - Access a clean and responsive reading interface
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
