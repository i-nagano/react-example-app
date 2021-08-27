import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/weather">Weather</Link> | 
            <Link to="/news"> News</Link> | 
            <Link to="/"> Todo List</Link>
        </div>
    )
};

export default Header;
