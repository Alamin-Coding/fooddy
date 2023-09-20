import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import NotFound from "./routes/NotFound.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<App />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

const theme = {
  color: {
    bg: "#fefefe",
    text: "#1e1e1e",
  },
  responsive: {
    mobile: "768px",
    laptop: "992px",
    desktop: "1200px",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);
