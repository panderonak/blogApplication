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
        element: (
          <AuthLayout authentication>
            <PostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout authentication>
            <PostPage />
          </AuthLayout>
        ),
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

src / components / Header / LogoutButton.jsx;
src / components / Login / Login.jsx;
src / components / PostCard / PostCard.jsx;
src / components / PostForm / PostForm.jsx;
src / components / Signup / Signup.jsx;
src / index.css;
src / main.jsx;
src / pages / AllPostPage / AllPostPage.jsx;
src / pages / HomePage / HomePage.jsx;
src / pages / LoginPage / LoginPage.jsx;
src / pages / SignupPage / SignupPage.jsx;
src / store / store.js;
