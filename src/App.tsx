import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogsPage from "./Pages/BlogsPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </div>
  );
}
