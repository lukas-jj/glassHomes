import React, {useState, useEffect} from 'react'

// state for sort key ie rating const and set sprt key = state
//state set for increment or decrement - 
//function in actions with details below if sort by decen then b,a or accen a,b

function AvgScore (){  

  const sortKey = avg_score
  return properties.sort((b,a)=> a [sortKey]-b[sortKey] )
}

<select>
  <option>Average Rating - Highest to Lowest</option>
  <option>Average Rating - Lowest to Highest</option>
</select>



export default connect(mapStateToProps)(AvgScore)

console.log(properties.sort((b,a)=> a [sortKey]-b[sortKey] ))