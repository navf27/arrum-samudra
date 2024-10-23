import MobileContainer from "./components/layouts/MobileContainer";
import News from "./pages/News";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FindProduct from "./pages/FindProduct";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product-detail",
      element: <ProductDetail />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/find",
      element: <FindProduct />,
    },
  ]);

  return (
    <>
      <MobileContainer>
        <RouterProvider router={router} />
      </MobileContainer>
    </>
  );
}
