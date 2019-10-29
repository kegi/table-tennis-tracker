import React, { useState, useEffect } from 'react'

interface ServiceIndicatorProps {
  side: string,
}

const ServiceIndicator: React.FC<ServiceIndicatorProps> = ({ side }) => {
  const [initialPosition, setInitialPosition] = useState<boolean>(true)

  useEffect(() => {
    if (!initialPosition || side === 'left') {
      return
    }
    setInitialPosition(false)
  })

  return (
    <div
      className={`service-indicator ${side} ${initialPosition && 'initial'}`}>
      <i className="fa fa-table-tennis service-indicator-icon"/>
      Service
    </div>
  )
}

export default ServiceIndicator
