
import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

import {ThemeProvider} from './store/ThemeContext'
import Counts from './component/Counts'
import LoadItems from './component/LoadItems'

function App() {

 

  return (
    <>
      <ThemeProvider>
        <center>
          <AppName />
          <AddTodo />
          <TodoItems />
          <LoadItems />
          <Counts />
          
        </center>

       
      </ThemeProvider>
      
    </>
  )
}

export default App
