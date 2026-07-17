import { AppRouter } from "./router";
import { AuthProvider } from "./core/providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
