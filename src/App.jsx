import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./routes/Index";
import { MainLayout } from "./components/layouts/MainLayout";

export const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path="/" Component={() => <Index />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
