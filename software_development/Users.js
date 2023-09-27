import React, { useCallback, useEffect, useReducer, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  return (
    <div>
      <h3>Consulta à API JSONPlaceholder</h3>
      <Users />
    </div>
  )
}

const Users = () => {
  const [{ loading, data, error }, reduc] = useReducer((prev, data) => ({ ...prev, ...data }), { loading: true, data: [], error: false })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(({ data }) => reduc({ data: data, loading: false, error: false })).catch((error) => reduc({ loading: false, error: true }))
  }, [])

  return <div style={{ height: "700px" }}>
    <ul>
      {loading && <Loading />}
      {data && data?.map?.(item => (
        <li key={item.id}>
          {item.username}: {item.name}
        </li>
      ))}
    </ul>
    {error && <Error />}
  </div>
}

const Error = () => {
  return <div> Erro! </div>
}

const Loading = () => {
  return <div> Carregando... </div>
}

export default App
