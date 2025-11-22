import { Routes , Route } from "react-router-dom"
import Auth from "./pages/Auth"
import CommonLayout from "./components/CommonLayout"
import Tasks from "./pages/Tasks"
import ScrumBoard from "./pages/ScrumBoard"

function App() {


  return (
    <Routes>
      <Route path="/auth" element={<Auth />}/>
      <Route path="/tasks" element={<CommonLayout />}>
        <Route path="list" element={<Tasks />} />
        <Route path="scrum-board" element={<ScrumBoard />} />
      </Route>
    </Routes>
  )
}

export default App
