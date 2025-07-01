// components/SemesterCard.jsx
import React from 'react'

function SemesterCard({ title, img }) {
  const handleEnroll = () => {
    alert(`You clicked Enroll on ${title}`)
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '200px',
      padding: '10px',
      boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img src={img} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <button onClick={handleEnroll} style={{
        background: '#28a745',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Enroll
      </button>
    </div>
  )
}

export default SemesterCard
