import { NavLink } from 'react-router-dom';
const Heading = () => {
    return ( 
        <div className="Heading">
            <nav>
            <NavLink to="/Filter">Search Filter</NavLink>
            <NavLink to="/Quote">Quote</NavLink>
          
            </nav>
        </div>
     );
}
 
export default Heading;