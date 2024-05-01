import { BrowserRouter, Route, Routes } from "react-router-dom";
import Editor from "./views/Editor";
import FullScreenPreview from "./views/FullScreenPreview";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Editor />} />
                <Route path="/preview" element={<FullScreenPreview />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;