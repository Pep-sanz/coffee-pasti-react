import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="coffee-pasti">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
