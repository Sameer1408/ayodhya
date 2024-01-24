import { useEffect } from "react";
import './LoadingPage.css'

const LoadingPage = ({loadingRef})=>{
    return (
        <div ref={loadingRef} className="loadingDiv">
            <h1>Loading Banner</h1>            
        </div>
    )
}
export default LoadingPage;