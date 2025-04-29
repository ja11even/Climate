import { ThemeContextProvider } from "./context/ThemeContext";
import { UnitContextProvider } from "./context/UnitContext";
import AppLayout from "./pages/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
const queryClient = new QueryClient();
function App() {
  return (
    <ThemeContextProvider>
      <UnitContextProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <AppLayout />
        </QueryClientProvider>
      </UnitContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
