import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layout/MainLayout";
import { JobsPage } from "./pages/JobsPage";
import { NotFound } from "./pages/NotFound";
import { AddJobPage } from "./pages/AddJobPage";
import { JobLoader, JobPage } from "./pages/JobPage";

// const router = createBrowserRouter([
//   {
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <HomePage /> },
//       { path: "/jobs", element: <JobsPage /> },
//       { path: "/add-job", element: ""},
//       {path: "*" , element: <NotFound/>}
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage /> } loader={JobLoader}/>
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
