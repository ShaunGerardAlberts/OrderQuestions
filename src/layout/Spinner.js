import React from 'react'
import spinner from '../resources/spinner.gif'

export default () => {
  return (
    <div>
      <img src={spinner} alt="Loading..." style={{ width: '50px', margin: 'auto', marginTop: '10%', display: 'block' }} />
    </div>
  )
}
