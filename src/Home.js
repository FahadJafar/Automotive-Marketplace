import { useNavigate } from 'react-router-dom';
import img1 from "./c2.png"

const Home = () => {
    const NAV = useNavigate();
    const guide = ()=>{
       NAV('/new');
    }
    
    return (
        <div className="Home">   
       
           <img src={img1} alt="car"></img>
           <div className="HomeT">
           <h2>Get Your Dream Car By Visting US</h2>
           <button onClick={guide}>Explore Cars</button>
           </div>
        </div>
      );
}
 
export default Home;
