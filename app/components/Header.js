import Image from "next/image"


export default function Header() {
    return (
        <div className="content-wrapper">
            <header className="wrapper bg-light 1">

                <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
                    <div className="container flex-lg-row flex-nowrap align-items-center">
                        <div className="navbar-brand w-100">
                            <a href="/">
                                <Image src="/logo1.jpg" width="250" height="59">

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
                                        <a className="nav-link " href="/about-us/" ><b>About us</b></a>
                                    </li>
                                </ul>

                                <div className="offcanvas-footer d-lg-none">
                                    <div>
                                        <a href="/cdn-cgi/l/email-protection#6006091213144e0c01131420050d01090c4e030f0d" className="link-inverse"><span className="__cf_email__" data-cfemail="c2abaca4ad82a7afa3abaeeca1adaf">[email&#160;protected]</span></a>
                                        <br /> 00 (123) 456 78 90 <br />
                                        <nav className="nav social social-white mt-4">
                                            <a href="#"><i className="uil uil-twitter"></i></a>
                                            <a href="#"><i className="uil uil-facebook-f"></i></a>
                                            <a href="#"><i className="uil uil-dribbble"></i></a>
                                            <a href="#"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i className="uil uil-youtube"></i></a>
                                        </nav>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="navbar-other w-100 d-flex ms-auto">
                            <ul className="navbar-nav flex-row align-items-center ms-auto">
                                <li className="nav-item dropdown language-select text-uppercase">
                                    <a className="nav-link dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">En</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="dropdown-item" href="#">En</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="#">De</a></li>
                                        <li className="nav-item"><a className="dropdown-item" href="#">Es</a></li>
                                    </ul>
                                </li>
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