
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PageHome from './pages/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
  },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
