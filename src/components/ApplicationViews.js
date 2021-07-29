import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TasksProvider";
import { TaskList } from "./tasks/TasksList";
import { TasksForm } from "./tasks/TaskForm";

export const ApplicationViews = () => {
  return (
    <>
    <UserProvider>
       <TaskProvider>
          <Route exact path="/tasks">
                <TaskList />
         </Route>
          <Route exact path= "/tasks/create">
                <TasksForm />
             </Route>
        </TaskProvider> 
    </UserProvider>
    </>
  )
}