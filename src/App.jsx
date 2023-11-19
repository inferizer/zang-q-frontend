import AuthContextProvider from "./context/auth_context";
import Router from "./router/Route";
import { useAuth } from "./hook/useAuthContext";
import Loading from "./component/loading";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function App() {
  const { initLoading } = useAuth();
  if (initLoading) return <Loading />;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router />
    </LocalizationProvider>
  );
}

export default App;
