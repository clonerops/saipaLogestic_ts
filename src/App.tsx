import { SidebarContextProvider } from "./context/SidebarContext"
import MainRoutes from "./routes"

const App = () => {
  return <SidebarContextProvider>
    <MainRoutes />
  </SidebarContextProvider>
}

export default App