import AuthContextProvider from "./context/auth_context";
import Router from "./router/Route";
import { useAuth } from "./hook/useAuthContext";
import Loading from "./component/loading";
function App() {
  const { initLoading} = useAuth()
 if(initLoading) return < Loading />
  return      <Router />
      
  
}

export default App;
