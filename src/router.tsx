import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/components/Layout";
import NotFound from "@/pages/404";
import Template1 from "@/pages/template1/index";
import Template2 from "@/pages/template2/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Template1 />} />
        <Route path="template1" element={<Template1 />} />
        <Route path="template2" element={<Template2 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
