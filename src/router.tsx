import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/components/Layout";
import NotFound from "@/pages/404";
import Template1 from "@/pages/template1/index";
import Template2 from "@/pages/template2/index";
import Template3 from "@/pages/template3/index";
import Template4 from "@/pages/template4/index";
import Template5 from "@/pages/template5/index";
import Template6 from "@/pages/template6/index";
import Template7 from "@/pages/template7/index";
import Template8 from "@/pages/template8/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Template1 />} />
        <Route path="template1" element={<Template1 />} />
        <Route path="template2" element={<Template2 />} />
        <Route path="template3" element={<Template3 />} />
        <Route path="template4" element={<Template4 />} />
        <Route path="template5" element={<Template5 />} />
        <Route path="template6" element={<Template6 />} />
        <Route path="template7" element={<Template7 />} />
        <Route path="template8" element={<Template8 />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
