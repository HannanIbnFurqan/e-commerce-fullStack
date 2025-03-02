import React from 'react'

function Review({obj}) {
    const {rating, comment} = obj
  return (
    <div>
        <h1>Rating: {rating}</h1>
        <p>comment: {comment}</p>
    </div>
  )
}

export default Review