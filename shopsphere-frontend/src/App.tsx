import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import PageLoader from "./components/common/PageLoader";
import PageTransition from "./components/common/PageTransition";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) return <PageLoader onComplete={() => setLoaded(true)} />;

  return (
    <PageTransition>
      <AppRoutes />
    </PageTransition>
  );
}
