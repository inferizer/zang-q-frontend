import AuthContextProvider from "./context/auth_context";
import Router from "./router/Route";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
