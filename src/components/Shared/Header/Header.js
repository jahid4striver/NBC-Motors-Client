import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import honda from '../../../images/honda.png'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
const handleSignOut=()=>{
    signOut(auth);
}
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
            <div className="container-fluid">
                <img className='h-10' src={honda} alt="" />
                <Link className="navbar-brand text-danger fw-bolder" to="/">NBC Motors</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/allsales">Recent Sales</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/requirements">Requirements</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-danger" aria-current="page" to="/blogs">Blogs</Link>
                        </li>
                        {
                            user? <li className="nav-item">
                            <Link className="nav-link text-danger" to="/manageinventory">Manage Bikes</Link>
                        </li>:''
                        }
                        {
                            user? <li className="nav-item">
                            <Link className="nav-link text-danger" to="/additem">Add Bike</Link>
                        </li> : ''
                        }
                        {
                            user? <li className="nav-item">
                            <Link className="nav-link text-danger" to="/addsales">Add Sales</Link>
                        </li> : ''
                        }
                        {
                            user ? <li className="nav-item">
                                <Link onClick={handleSignOut} className="nav-link text-danger" to="">Sign Out</Link>
                            </li> : <li className="nav-item">
                                <Link className="nav-link text-danger" to="/login">Login</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;