import AppContextProvider from "./AppContext";
import AppRouter from "./AppRouter";

const App = () => {
  return <AppContextProvider>
    <AppRouter />
  </AppContextProvider>;
};

export default App;