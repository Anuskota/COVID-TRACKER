import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tracker0 from "../pages/Tracker0";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";
import Tracker4 from "../pages/Tracker4";
import Tracker7 from "../pages/Tracker7";


function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tracker" element={<Tracker0/>}></Route>
        <Route path="/tracker2" element={<Tracker2/>}></Route>
        <Route path="/tracker3" element={<Tracker3/>}></Route>
        <Route path="/tracker4" element={<Tracker4/>}></Route>
        <Route path="/tracker5" element={<Tracker4/>}></Route>
        <Route path="/tracker6" element={<Tracker4/>}></Route>
        <Route path="/tracker7" element={<Tracker7/>}></Route>
    </Routes>
</BrowserRouter>
  )
}

export default Router