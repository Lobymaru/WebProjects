import React from 'react'
import ReactDOM from "react-dom";
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {

  return (
    <>
      <TaskList />
      <TaskForm />
    </>
  )
}

export default App
