import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./routes/Index";
import { MainLayout } from "./components/layouts/MainLayout";
import { ROUTES } from "./constants/ROUTES";
import { CoursePreview } from "./routes/CoursePreview";

export const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path={ROUTES.INDEX.href} Component={() => <Index />} />
            <Route
              path={ROUTES.COURSE_PREVIEW.href}
              Component={() => <CoursePreview />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
