import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Loader} from "@/components/ui/loader/index.jsx";

export const withRouter = (component) => () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Loader centered/>}
      >
        {component()}
      </Suspense>
    </BrowserRouter>
  )
}