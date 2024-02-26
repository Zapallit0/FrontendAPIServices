import React from 'react'
import Alert from '@mui/material/Alert'
function SuccessAlert({type}) {
  return (
    <Alert variant="filled" severity="success">
        {type} created successfully
    </Alert>
  )
}

export default SuccessAlert