import { Routes, Route } from "react-router-dom";
import First from "./First";
import Second from "./Second";

const Routing = () => {
    return ( 
        <Routes>
            <Route path="/" element={<First/>}/>
            <Route path="/second" element={<Second/>}/>
        </Routes>
     );
}
 
export default Routing
