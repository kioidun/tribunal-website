import React from 'react'

const SectionHead = ({title,className}) => {
    return (
      <div className={`section_head ${className}`}>
    
      <h1>{title}</h1>
  </div>
    )
  }

export default SectionHead