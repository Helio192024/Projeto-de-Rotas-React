import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Watch from "./pages/Watch/watch";
import PageNotFound from "./pages/PageNotFound/page";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/watch/:id" element={<Watch />} ></Route>
                <Route path="*" element={<PageNotFound />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;