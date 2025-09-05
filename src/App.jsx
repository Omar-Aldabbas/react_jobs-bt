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
import { addJobAction, editJobAction } from "./components/JobActions";
import { EditJobPage } from "./pages/EditJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={JobLoader} />
      <Route path="/jobs/edit/:id" element={<EditJobPage />} loader={JobLoader} action={editJobAction} />
      <Route path="/add-job" element={<AddJobPage />} action={addJobAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

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
