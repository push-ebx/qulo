import { Routes, Route } from "react-router";
import {lazy} from "react";

const Cannon = lazy(() => import("@/components/pages/canon"));
const Gallery = lazy(() => import("@/components/pages/gallery"));
const News = lazy(() => import("@/components/pages/news"));
const About = lazy(() => import("@/components/pages/about"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/cannon" element={<Cannon />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      {/*<Route path="*" element={<NotFoundPage />} />*/}
    </Routes>
  );
};