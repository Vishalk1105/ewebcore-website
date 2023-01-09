import Image from "next/image"


export default function Header() {
    return (
        <div className="content-wrapper">
            <header className="wrapper bg-light 1">

                <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
                    <div className="container flex-lg-row flex-nowrap align-items-center">
                        <div className="navbar-brand w-100">
                            <a href="/">
                                <Image src="/logo1.jpg" width="1000" height="59">

                                </Image>
                            </a>
                        </div>
                        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start mx-2">
                            <div className="offcanvas-header d-lg-none">
                                <h3 className="text-white fs-30 mb-0">Ewebcore</h3>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/" ><b>Home</b></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/career/" ><b>Career</b></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/career/" ><b>Services</b></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="/about/" ><b>About us</b></a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                        <div className="navbar-other w-100 d-flex ms-auto">
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                        
                                <li className="nav-item d-none d-md-block">
                                    <a href="./contact.html" className="btn btn-sm btn-primary rounded-pill">Contact</a>
                                </li>
                                <li className="nav-item d-lg-none">
                                    <button className="hamburger offcanvas-nav-btn"><span></span></button>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </header>
        </div>

    )
}