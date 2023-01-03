import Image from 'next/image'

export default function Home (){
return (
    <div>
     <Image   width={400}  height={200}
      src="/assets
     /img/demos/mi2.jpg" srcSet="/assets
     /img/demos/mi2@2x.jpg 2x" alt=""/>   

  <div className="content-wrapper">
    <header className="wrapper bg-light">
      <div className="bg-primary text-white fw-bold fs-15 mb-2">
        <div className="container py-2 d-md-flex flex-md-row">
          <div className="d-flex flex-row align-items-center">
            <div className="icon text-white fs-22 mt-1 me-2"> <i className="uil uil-location-pin-alt"></i></div>
            <address className="mb-0">Moonshine St. 14/05 Light City</address>
          </div>
          <div className="d-flex flex-row align-items-center me-6 ms-auto">
            <div className="icon text-white fs-22 mt-1 me-2"> <i className="uil uil-phone-volume"></i></div>
            <p className="mb-0">00 (123) 456 78 90</p>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className="icon text-white fs-22 mt-1 me-2"> <i className="uil uil-message"></i></div>
            <p className="mb-0"><a href="mailto:sandbox@email.com" className="link-white hover">sandbox@email.com</a></p>
          </div>
        </div>
        {/* <!-- /.container --> */}
      </div>
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="./index.html">
              <Image   width={400}  height={200}
      src="/assets
     /img/logo.png" srcSet="/assets
     /img/logo@2x.png 2x" alt="" />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">Sandbox</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-mega">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Demos</a>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content mega-menu-scroll">
                      <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                        <li className="col"><a className="dropdown-item" href="./demo1.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi1.jpg" srcSet="/assets
     /img/demos/mi1@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo I</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo2.html">
                            <figure className="rounded lift d-none d-lg-block">
                                <Image   width={400}  height={200}
      src="/assets
     /img/demos/mi2.jpg" srcSet="/assets
     /img/demos/mi2@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo II</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo3.html">
                            <figure className="rounded lift d-none d-lg-block">
                                <Image   width={400}  height={200}
      src="/assets
     /img/demos/mi3.jpg" srcSet="/assets
     /img/demos/mi3@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo III</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo4.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi4.jpg" srcSet="/assets
     /img/demos/mi4@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo IV</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo5.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi5.jpg" srcSet="/assets
     /img/demos/mi5@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo V</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo6.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi6.jpg" srcSet="/assets
     /img/demos/mi6@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo VI</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo7.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi7.jpg" srcSet="/assets
     /img/demos/mi7@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo VII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo8.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi8.jpg" srcSet="/assets
     /img/demos/mi8@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo VIII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo9.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi9.jpg" srcSet="/assets
     /img/demos/mi9@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo IX</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo10.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi10.jpg" srcSet="/assets
     /img/demos/mi10@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo X</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo11.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi11.jpg" srcSet="/assets
     /img/demos/mi11@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XI</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo12.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi12.jpg" srcSet="/assets
     /img/demos/mi12@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo13.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi13.jpg" srcSet="/assets
     /img/demos/mi13@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XIII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo14.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi14.jpg" srcSet="/assets
     /img/demos/mi14@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XIV</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo15.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi15.jpg" srcSet="/assets
     /img/demos/mi15@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XV</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo16.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi16.jpg" srcSet="/assets
     /img/demos/mi16@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XVI</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo17.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi17.jpg" srcSet="/assets
     /img/demos/mi17@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XVII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo18.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi18.jpg" srcSet="/assets
     /img/demos/mi18@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XVIII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo19.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi19.jpg" srcSet="/assets
     /img/demos/mi19@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XIX</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo20.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi20.jpg" srcSet="/assets
     /img/demos/mi20@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XX</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo21.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi21.jpg" srcSet="/assets
     /img/demos/mi21@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXI</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo22.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi22.jpg" srcSet="/assets
     /img/demos/mi22@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo23.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi23.jpg" srcSet="/assets
     /img/demos/mi23@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXIII</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo24.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi24.jpg" srcSet="/assets
     /img/demos/mi24@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXIV</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo25.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi25.jpg" srcSet="/assets
     /img/demos/mi25@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXV</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo26.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi26.jpg" srcSet="/assets
     /img/demos/mi26@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXVI</span>
                          </a></li>
                        <li className="col"><a className="dropdown-item" href="./demo27.html">
                            <figure className="rounded lift d-none d-lg-block"><Image   width={400}  height={200}
      src="/assets
     /img/demos/mi27.jpg" srcSet="/assets
     /img/demos/mi27@2x.jpg 2x" alt=""/></figure>
                            <span className="d-lg-none">Demo XXVII</span>
                          </a></li>
                      </ul>
                      {/* <!--/.row --> */}
                      <span className="d-none d-lg-flex"><i className="uil uil-direction"></i><strong>Scroll to view more</strong></span>
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Pages</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Services</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./services.html">Services I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./services2.html">Services II</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">About</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./about.html">About I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./about2.html">About II</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Shop</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./shop.html">Shop I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./shop2.html">Shop II</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./shop-product.html">Product Page</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./shop-cart.html">Shopping Cart</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./shop-checkout.html">Checkout</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Contact</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./contact.html">Contact I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./contact2.html">Contact II</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./contact3.html">Contact III</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Career</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./career.html">Job Listing I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./career2.html">Job Listing II</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./career-job.html">Job Description</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Utility</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./404.html">404 Not Found</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./page-loader.html">Page Loader</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./signin.html">Sign In I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./signin2.html">Sign In II</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./signup.html">Sign Up I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./signup2.html">Sign Up II</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./terms.html">Terms</a></li>
                      </ul>
                    </li>
                    <li className="nav-item"><a className="dropdown-item" href="./pricing.html">Pricing</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="./onepage.html">One Page</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Projects</a>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header">Project Pages</h6>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="./projects.html">Projects I</a></li>
                          <li><a className="dropdown-item" href="./projects2.html">Projects II</a></li>
                          <li><a className="dropdown-item" href="./projects3.html">Projects III</a></li>
                          <li><a className="dropdown-item" href="./projects4.html">Projects IV</a></li>
                        </ul>
                      </div>
                      {/* <!-- /.column --> */}
                      <div>
                        <h6 className="dropdown-header">Single Projects</h6>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="./single-project.html">Single Project I</a></li>
                          <li><a className="dropdown-item" href="./single-project2.html">Single Project II</a></li>
                          <li><a className="dropdown-item" href="./single-project3.html">Single Project III</a></li>
                          <li><a className="dropdown-item" href="./single-project4.html">Single Project IV</a></li>
                        </ul>
                      </div>
                      {/* <!-- /.column --> */}
                    </div>
                    {/* <!-- /auto-column --> */}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Blog</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="dropdown-item" href="./blog.html">Blog without Sidebar</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="./blog2.html">Blog with Sidebar</a></li>
                    <li className="nav-item"><a className="dropdown-item" href="./blog3.html">Blog with Left Sidebar</a></li>
                    <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">Blog Posts</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./blog-post.html">Post without Sidebar</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./blog-post2.html">Post with Sidebar</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./blog-post3.html">Post with Left Sidebar</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Blocks</a>
                  <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                    <li className="mega-menu-content">
                      <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/about.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block1.svg" alt=""/></div>
                            <span>About</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/blog.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block2.svg" alt=""/></div>
                            <span>Blog</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/call-to-action.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block3.svg" alt=""/></div>
                            <span>Call to Action</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/clients.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block4.svg" alt=""/></div>
                            <span>Clients</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/contact.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block5.svg" alt=""/></div>
                            <span>Contact</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/facts.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block6.svg" alt=""/></div>
                            <span>Facts</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/faq.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block7.svg" alt=""/></div>
                            <span>FAQ</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/features.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block8.svg" alt=""/></div>
                            <span>Features</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/footer.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block9.svg" alt=""/></div>
                            <span>Footer</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/hero.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block10.svg" alt=""/></div>
                            <span>Hero</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/misc.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block17.svg" alt=""/></div>
                            <span>Misc</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/navbar.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block11.svg" alt=""/></div>
                            <span>Navbar</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/portfolio.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block12.svg" alt=""/></div>
                            <span>Portfolio</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/pricing.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block13.svg" alt=""/></div>
                            <span>Pricing</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/process.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block14.svg" alt=""/></div>
                            <span>Process</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/team.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block15.svg" alt=""/></div>
                            <span>Team</span>
                          </a>
                        </li>
                        <li className="col"><a className="dropdown-item" href="./docs/blocks/testimonials.html">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><Image   width={400}  height={200}
      className="rounded-0" src="/assets
     /img/demos/block16.svg" alt=""/></div>
                            <span>Testimonials</span>
                          </a>
                        </li>
                      </ul>
                      {/* <!--/.row --> */}
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Documentation</a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="mega-menu-content">
                      <div className="row gx-0 gx-lg-3">
                        <div className="col-lg-4">
                          <h6 className="dropdown-header">Usage</h6>
                          <ul className="list-unstyled cc-2 pb-lg-1">
                            <li><a className="dropdown-item" href="./docs/index.html">Get Started</a></li>
                            <li><a className="dropdown-item" href="./docs/forms.html">Forms</a></li>
                            <li><a className="dropdown-item" href="./docs/faq.html">FAQ</a></li>
                            <li><a className="dropdown-item" href="./docs/changelog.html">Changelog</a></li>
                            <li><a className="dropdown-item" href="./docs/credits.html">Credits</a></li>
                          </ul>
                          <h6 className="dropdown-header mt-lg-6">Styleguide</h6>
                          <ul className="list-unstyled cc-2">
                            <li><a className="dropdown-item" href="./docs/styleguide/colors.html">Colors</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/fonts.html">Fonts</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/icons-svg.html">SVG Icons</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/icons-font.html">Font Icons</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/illustrations.html">Illustrations</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/backgrounds.html">Backgrounds</a></li>
                            <li><a className="dropdown-item" href="./docs/styleguide/misc.html">Misc</a></li>
                          </ul>
                        </div>
                        {/* {/*<!--/column -->*/} 
                        <div className="col-lg-8">
                          <h6 className="dropdown-header">Elements</h6>
                          <ul className="list-unstyled cc-3">
                            <li><a className="dropdown-item" href="./docs/elements/accordion.html">Accordion</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/alerts.html">Alerts</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/animations.html">Animations</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/avatars.html">Avatars</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/background.html">Background</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/badges.html">Badges</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/buttons.html">Buttons</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/card.html">Card</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/carousel.html">Carousel</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/dividers.html">Dividers</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/form-elements.html">Form Elements</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/image-hover.html">Image Hover</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/image-mask.html">Image Mask</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/lightbox.html">Lightbox</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/player.html">Media Player</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/modal.html">Modal</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/pagination.html">Pagination</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/progressbar.html">Progressbar</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/shadows.html">Shadows</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/shapes.html">Shapes</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/tables.html">Tables</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/tabs.html">Tabs</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/text-animations.html">Text Animations</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/text-highlight.html">Text Highlight</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/tiles.html">Tiles</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/tooltips-popovers.html">Tooltips & Popovers</a></li>
                            <li><a className="dropdown-item" href="./docs/elements/typography.html">Typography</a></li>
                          </ul>
                        </div>
                        {/* {/*<!--/column -->*/} 
                      </div>
                      {/* <!--/.row --> */}
                    </li>
                    {/* <!--/.mega-menu-content--> */}
                  </ul>
                  {/* <!--/.dropdown-menu --> */}
                </li>
              </ul>
              {/* <!-- /.navbar-nav --> */}
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
                  <br /> 00 (123) 456 78 90 <br />
                  <nav className="nav social social-white mt-4">
                    <a href="/"><i className="uil uil-twitter"></i></a>
                    <a href="/"><i className="uil uil-facebook-f"></i></a>
                    <a href="/"><i className="uil uil-dribbble"></i></a>
                    <a href="/"><i className="uil uil-instagram"></i></a>
                    <a href="/"><i className="uil uil-youtube"></i></a>
                  </nav>
                  {/* <!-- /.social --> */}
                </div>
              </div>
              {/* <!-- /.offcanvas-footer --> */}
            </div>
            {/* <!-- /.offcanvas-body --> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item dropdown language-select text-uppercase">
                <a className="nav-link dropdown-item dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">En</a>
                <ul className="dropdown-menu">
                  <li className="nav-item"><a className="dropdown-item" href="/">En</a></li>
                  <li className="nav-item"><a className="dropdown-item" href="/">De</a></li>
                  <li className="nav-item"><a className="dropdown-item" href="/">Es</a></li>
                </ul>
              </li>
              <li className="nav-item d-none d-md-block">
                <a href="./contact.html" className="btn btn-sm btn-primary rounded-pill">Contact</a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            {/* <!-- /.navbar-nav --> */}
          </div>
          {/* <!-- /.navbar-other --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
      {/* <!-- /.navbar --> */}
    </header>
    {/* <!-- /header --> */}
    <section className="wrapper bg-light">
      <div className="container pt-8 pt-md-14">
        <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2" data-cue="zoomIn">
            <div className="shape bg-dot primary rellax w-17 h-19" data-rellax-speed="1" style={{top: '-1.7rem', left: '-1.5rem'}}></div>
            <div className="shape rounded bg-soft-primary rellax d-md-block" data-rellax-speed="0" style={{bottom: '-1.8rem', right: '-0.8rem', width:'85%', height: '90%'}}></div>
            <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/about7.jpg" srcSet="/assets
     /img/photos/about7@2x.jpg 2x" alt="" /></figure>
          </div>
          {/* {/*<!--/column -->*/} 
          <div className="col-lg-5 mt-lg-n10 text-center text-lg-start" data-cues="slideInDown" data-group="page-title" data-delay="600">
            <h1 className="display-1 mb-5">We bring solutions to make life easier for our customers.</h1>
            <p className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">We have considered our solutions to support every stage of your growth.</p>
            <div className="d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900">
              <span><a href="/" className="btn btn-lg btn-primary rounded-pill me-2">Explore Now</a></span>
              <span><a href="/" className="btn btn-lg btn-outline-primary rounded-pill">Free Trial</a></span>
            </div>
          </div>
          {/* {/*<!--/column -->*/} 
        </div>
        {/* <!-- /.row --> */}
        <div className="px-lg-5 mb-14 mb-md-17">
          <div className="row gx-0 gx-md-8 gx-xl-12 gy-8 align-items-center">
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c1.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c2.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c3.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c4.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c5.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
            <div className="col-4 col-md-2">
              <figure className="px-5 px-md-0 px-lg-2 px-xl-3 px-xxl-4"><Image   width={400}  height={200}
      src="/assets
     /img/brands/c6.png" alt="" /></figure>
            </div>
            {/* {/*<!--/column -->*/} 
          </div>
          {/* <!--/.row --> */}
        </div>
        {/* <!-- /div --> */}
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
            <h3 className="display-4 mb-10">The service we offer is specifically designed to meet your needs.</h3>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row gx-md-8 gy-8 text-center mb-14 mb-md-17">
          <div className="col-md-6 col-lg-3">
            <div className="icon btn btn-circle btn-lg btn-primary pe-none mb-5"> <i className="uil uil-phone-volume"></i> </div>
            <h4>24/7 Support</h4>
            <p className="mb-3">Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <a href="/" className="more hover">Learn More</a>
          </div>
          {/* {/*<!--/column -->*/} 
          <div className="col-md-6 col-lg-3">
            <div className="icon btn btn-circle btn-lg btn-primary pe-none mb-5"> <i className="uil uil-shield-exclamation"></i> </div>
            <h4>Secure Payments</h4>
            <p className="mb-3">Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <a href="/" className="more hover">Learn More</a>
          </div>
          {/* {/*<!--/column -->*/} 
          <div className="col-md-6 col-lg-3">
            <div className="icon btn btn-circle btn-lg btn-primary pe-none mb-5"> <i className="uil uil-laptop-cloud"></i> </div>
            <h4>Daily Updates</h4>
            <p className="mb-3">Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <a href="/" className="more hover">Learn More</a>
          </div>
          {/*<!--/column -->*/}
          <div className="col-md-6 col-lg-3">
            <div className="icon btn btn-circle btn-lg btn-primary pe-none mb-5"> <i className="uil uil-chart-line"></i> </div>
            <h4>Market Research</h4>
            <p className="mb-3">Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <a href="/" className="more hover">Learn More</a>
          </div>
          {/*<!--/column -->*/}
        </div>
        {/* <!--/.row --> */}
        <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
          <div className="col-md-8 col-lg-6 position-relative">
            <div className="shape bg-line red rounded-circle rellax w-18 h-18" data-rellax-speed="1" style={{top: '-2.2rem', left: '-2.4rem'}}></div>
            <div className="shape rounded bg-soft-primary rellax d-md-block" data-rellax-speed="0" style={{bottom: '-1.8rem', right: '-1.5rem', width: '85%', height: '90%'}}></div>
            <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/about9.jpg" srcSet="/assets
     /img/photos/about9@2x.jpg 2x" alt="" /></figure>
          </div>
          {/*<!--/column -->*/}
          <div className="col-lg-5 col-xl-4 offset-lg-1">
            <h2 className="display-4 mb-3">How It Works?</h2>
            <p className="lead fs-lg mb-6">So here are three working steps why our valued customers choose us.</p>
            <div className="d-flex flex-row mb-6">
              <div>
                <span className="icon btn btn-circle btn-primary pe-none me-5"><span className="number fs-18">1</span></span>
              </div>
              <div>
                <h4 className="mb-1">Collect Ideas</h4>
                <p className="mb-0">Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.</p>
              </div>
            </div>
            <div className="d-flex flex-row mb-6">
              <div>
                <span className="icon btn btn-circle btn-primary pe-none me-5"><span className="number fs-18">2</span></span>
              </div>
              <div>
                <h4 className="mb-1">Data Analysis</h4>
                <p className="mb-0">Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.</p>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div>
                <span className="icon btn btn-circle btn-primary pe-none me-5"><span className="number fs-18">3</span></span>
              </div>
              <div>
                <h4 className="mb-1">Finalize Product</h4>
                <p className="mb-0">Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.</p>
              </div>
            </div>
          </div>
          {/*<!--/column -->*/}
        </div>
        {/* <!--/.row --> */}
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Latest Projects</h2>
            <h3 className="display-4 mb-10">Check out some of our awesome projects with creative ideas and great design.</h3>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
      <div className="container-fluid px-md-6">
        <div className="swiper-container blog grid-view mb-17 mb-md-19" data-margin="30" data-nav="true" data-dots="true" data-items-xxl="3" data-items-md="2" data-items-xs="1">
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp10.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp11.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp12.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp13.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp14.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp15.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
              <div className="swiper-slide">
                <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/pp16.jpg" alt="" /></figure>
              </div>
              {/* <!--/.swiper-slide --> */}
            </div>
            {/* <!--/.swiper-wrapper --> */}
          </div>
          {/* <!-- /.swiper --> */}
        </div>
        {/* <!-- /.swiper-container --> */}
      </div>
      {/* <!-- /.container-fluid --> */}
      <div className="container">
        <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
          <div className="col-md-8 col-lg-6 position-relative">
            <a href="/assets
     /media/movie.mp4" className="btn btn-circle btn-primary btn-play ripple mx-auto mb-5 position-absolute" style={{top:'50%', left:' 50%', transform: 'translate(-50%,-50%)', zIndex:'3'}} data-glightbox><i className="icn-caret-right"></i></a>
            <div className="shape rounded bg-soft-primary rellax d-md-block" data-rellax-speed="0" style={{bottom: '-1.8rem', right: '-1.5rem', width: '85%', height: '90%'}}></div>
            <figure className="rounded"><Image   width={400}  height={200}
      src="/assets
     /img/photos/about12.jpg" srcSet="/assets
     /img/photos/about12@2x.jpg 2x" alt=""/></figure>
          </div>
          {/*<!--/column -->*/}
          <div className="col-lg-5 offset-lg-1">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Who Are We?</h2>
            <h3 className="display-4 mb-6">Company that believes in the power of creative strategy.</h3>
            <p className="mb-6">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <div className="row gy-3 gx-xl-8">
              <div className="col-xl-6">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i className="uil uil-check"></i></span><span>Aenean eu leo quam ornare curabitur blandit tempus.</span></li>
                  <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare donec elit.</span></li>
                </ul>
              </div>
              {/*<!--/column -->*/}
              <div className="col-xl-6">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i className="uil uil-check"></i></span><span>Etiam porta sem malesuada magna mollis euismod.</span></li>
                  <li className="mt-3"><span><i className="uil uil-check"></i></span><span>Fermentum massa vivamus faucibus amet euismod.</span></li>
                </ul>
              </div>
              {/*<!--/column -->*/}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/*<!--/column -->*/}
        </div>
        {/* <!--/.row --> */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-16 mb-md-17 mb-xl-20 align-items-center">
          <div className="col-lg-4">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Meet the Team</h2>
            <h3 className="display-5 mb-5">Save your time and money by choosing our professional team.</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros tempus porttitor.</p>
            <a href="/" className="btn btn-primary rounded-pill mt-3">See All Members</a>
          </div>
          {/*<!--/column -->*/}
          <div className="col-lg-8">
            <div className="swiper-container text-center mb-6" data-margin="30" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Image   width={400}  height={200}
      className="rounded-circle w-20 mx-auto mb-4" src="/assets
     /img/avatars/t1.jpg" srcSet="/assets
     /img/avatars/t1@2x.jpg 2x" alt="" />
                    <h4 className="mb-1">Cory Zamora</h4>
                    <div className="meta mb-2">Marketing Specialist</div>
                    <p className="mb-2">Etiam porta sem magna malesuada mollis.</p>
                    <nav className="nav social justify-content-center text-center mb-0">
                      <a href="/"><i className="uil uil-twitter"></i></a>
                      <a href="/"><i className="uil uil-slack"></i></a>
                      <a href="/"><i className="uil uil-linkedin"></i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <Image   width={400}  height={200}
      className="rounded-circle w-20 mx-auto mb-4" src="/assets
     /img/avatars/t2.jpg" srcSet="/assets
     /img/avatars/t2@2x.jpg 2x" alt="" />
                    <h4 className="mb-1">Coriss Ambady</h4>
                    <div className="meta mb-2">Financial Analyst</div>
                    <p className="mb-2">Aenean eu leo quam. Pellentesque ornare lacinia.</p>
                    <nav className="nav social justify-content-center text-center mb-0">
                      <a href="/"><i className="uil uil-youtube"></i></a>
                      <a href="/"><i className="uil uil-facebook-f"></i></a>
                      <a href="/"><i className="uil uil-dribbble"></i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <Image   width={400}  height={200}
      className="rounded-circle w-20 mx-auto mb-4" src="/assets
     /img/avatars/t3.jpg" srcSet="/assets
     /img/avatars/t3@2x.jpg 2x" alt="" />
                    <h4 className="mb-1">Nikolas Brooten</h4>
                    <div className="meta mb-2">Sales Manager</div>
                    <p className="mb-2">Donec ornare elit quam porta gravida at eget.</p>
                    <nav className="nav social justify-content-center text-center mb-0">
                      <a href="/"><i className="uil uil-linkedin"></i></a>
                      <a href="/"><i className="uil uil-tumblr-square"></i></a>
                      <a href="/"><i className="uil uil-facebook-f"></i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <Image   width={400}  height={200}
      className="rounded-circle w-20 mx-auto mb-4" src="/assets
     /img/avatars/t4.jpg" srcSet="/assets
     /img/avatars/t4@2x.jpg 2x" alt="" />
                    <h4 className="mb-1">Jackie Sanders</h4>
                    <div className="meta mb-2">Investment Planner</div>
                    <p className="mb-2">Nullam risus eget urna mollis ornare vel eu leo.</p>
                    <nav className="nav social justify-content-center text-center mb-0">
                      <a href="/"><i className="uil uil-twitter"></i></a>
                      <a href="/"><i className="uil uil-facebook-f"></i></a>
                      <a href="/"><i className="uil uil-dribbble"></i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                  <div className="swiper-slide">
                    <Image   width={400}  height={200}
      className="rounded-circle w-20 mx-auto mb-4" src="/assets
     /img/avatars/t5.jpg" srcSet="/assets
     /img/avatars/t5@2x.jpg 2x" alt="" />
                    <h4 className="mb-1">Tina Geller</h4>
                    <div className="meta mb-2">Assistant Buyer</div>
                    <p className="mb-2">Vivamus sagittis lacus vel augue laoreet rutrum.</p>
                    <nav className="nav social justify-content-center text-center mb-0">
                      <a href="/"><i className="uil uil-facebook-f"></i></a>
                      <a href="/"><i className="uil uil-slack"></i></a>
                      <a href="/"><i className="uil uil-dribbble"></i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                  </div>
                  {/* <!--/.swiper-slide --> */}
                </div>
                {/* <!--/.swiper-wrapper --> */}
              </div>
              {/* <!-- /.swiper --> */}
            </div>
            {/* <!-- /.swiper-container --> */}
          </div>
          {/*<!--/column -->*/}
        </div>
        {/* <!--/.row --> */}
        <div className="card bg-soft-primary">
          <div className="card-body p-md-10 py-xxl-16 position-relative">
            <div className="position-absolute d-none d-lg-block" style={{bottom:'0', left:'10%', width: '28%', zIndex:'2'}}>
              <figure><Image   width={400}  height={200}
      src="/assets
     /img/photos/co2.png" srcSet="/assets
     /img/photos/co2@2x.png 2x" alt=""/></figure>
            </div>
            <div className="row gx-md-0 gx-xl-12 text-center">
              <div className="col-lg-7 offset-lg-5 col-xl-6">
                <span className="ratings five mb-3"></span>
                <blockquote className="border-0 fs-lg mb-0">
                  <p>“Fusce dapibus tellus ac cursus commodo, tortor mauris condimentum nibh ut fermentum massa, justo sit amet vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed”</p>
                  <div className="blockquote-details justify-content-center text-center">
                    <div className="info p-0">
                      <h5 className="mb-1">Coriss Ambady</h5>
                      <div className="meta mb-0">Financial Analyst</div>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!--/.card-body --> */}
        </div>
        {/* <!--/.card --> */}
      </div>
      {/* <!--/.container --> */}
    </section>
    {/* <!-- /section --> */}
  </div>
  {/* <!-- /.content-wrapper --> */}
  <footer className="bg-light">
    <div className="container py-13 py-md-15">
      <div className="row gy-6 gy-lg-0">
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <Image   width={400}  height={200}
      className="mb-4" src="/assets
     /img/logo-dark.png" srcSet="/assets
     /img/logo-dark@2x.png 2x" alt="" />
            <p className="mb-4">© 2022 Sandbox. <br className="d-none d-lg-block" />All rights reserved.</p>
            <nav className="nav social ">
              <a href="/"><i className="uil uil-twitter"></i></a>
              <a href="/"><i className="uil uil-facebook-f"></i></a>
              <a href="/"><i className="uil uil-dribbble"></i></a>
              <a href="/"><i className="uil uil-instagram"></i></a>
              <a href="/"><i className="uil uil-youtube"></i></a>
            </nav>
            {/* <!-- /.social --> */}
          </div>
          {/* <!-- /.widget --> */}
        </div>
        {/* <!-- /column --> */}
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title  mb-3">Get in Touch</h4>
            <address className="pe-xl-15 pe-xxl-17">Moonshine St. 14/05 Light City, London, United Kingdom</address>
            <a href="mailto:#" className="link-body">info@email.com</a><br /> 00 (123) 456 78 90
          </div>
          {/* <!-- /.widget --> */}
        </div>
        {/* <!-- /column --> */}
        <div className="col-md-4 col-lg-3">
          <div className="widget">
            <h4 className="widget-title  mb-3">Learn More</h4>
            <ul className="list-unstyled text-reset mb-0">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Our Story</a></li>
              <li><a href="/">Projects</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>
          {/* <!-- /.widget --> */}
        </div>
        {/* <!-- /column --> */}
        <div className="col-md-12 col-lg-3">
          <div className="widget">
            <h4 className="widget-title  mb-3">Our Newsletter</h4>
            <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <div className="newsletter-wrapper">
              {/* <!-- Begin Mailchimp Signup Form --> */}
              <div id="mc_embed_signup2">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate " target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll2">
                    <div className="mc-field-group input-group form-floating">
                      <input type="email" value="" name="EMAIL" className="required email form-control" placeholder="Email Address" id="mce-EMAIL2"/>
                      <label htmlFor="mce-EMAIL2">Email Address</label>
                      <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe2" className="btn btn-primary "/>
                    </div>
                    <div id="mce-responses2" className="clear">
                      <div className="response" id="mce-error-response2" style={{display:"none"}}></div>
                      <div className="response" id="mce-success-response2" style={{display:"none"}}></div>
                    </div> 
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                        <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex="-1" value=""/></div>
                    <div className="clear"></div>
                  </div>
                </form>
              </div>
              {/* <!--End mc_embed_signup--> */}
            </div>
            {/* <!-- /.newsletter-wrapper --> */}
          </div>
          {/* <!-- /.widget --> */}
        </div>
        {/* <!-- /column --> */}
      </div>
      {/* <!--/.row --> */}
    </div>
    {/* <!-- /.container --> */}
  </footer>
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <script src="/assets
     /js/plugins.js"></script>
  <script src="/assets
     /js/theme.js"></script>
    </div>
)
}