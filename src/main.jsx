import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  AddPostPage,
  AllPostPage,
  EditPostPage,
  HomePage,
  LoginPage,
  PostPage,
  SignupPage,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthLayout } from "./components/index.js";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<HomePage />} />
//       <Route
//         path="login"
//         element={
//           <AuthLayout authentication={false}>
//             <LoginPage />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/signup"
//         element={
//           <AuthLayout authentication={false}>
//             <SignupPage />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="/all-posts"
//         element={
//           <AuthLayout authentication>
//             <AllPostPage />
//           </AuthLayout>
//         }
//       />
//       <Route
//         path="add-post"
//         element={
//           <AuthLayout authentication>
//             <AddPostPage />
//           </AuthLayout>
//         }
//       ></Route>
//       <Route
//         path="edit-post/:slug"
//         element={
//           <AuthLayout authentication>
//             <EditPostPage />
//           </AuthLayout>
//         }
//       ></Route>
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post/post/:slug",
        element: <PostPage />,
      },
      {
        path: "/all-posts/post/:slug",
        element: <PostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
