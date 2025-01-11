let Navbar = () => {
    return (
        <div className="navbar bg-slate-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-black">Mood Mart</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="text-black">Cart</a></li>
                    <li><a className="text-black">Profile</a></li>
                    <li><a className="text-black">Theme</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
