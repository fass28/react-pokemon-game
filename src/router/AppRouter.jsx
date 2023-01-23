import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../pages/HomePage";
import { S1Kanto } from "../pages/S1-Kanto";
import { S2Johto } from "../pages/S2-Johto";
import { S3Hoenn } from "../pages/S3-Hoenn";

export const AppRouter = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/s1-kanto" element={<S1Kanto />} />
        <Route path="/s2-johto" element={<S2Johto />} />
        <Route path="/s3-hoenn" element={<S3Hoenn />} />

        <Route
          path="/*"
          element={
            <HomePage />
          }
        />
      </Routes>
    </>
  );
};
