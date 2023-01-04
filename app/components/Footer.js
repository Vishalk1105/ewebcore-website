import Image from "next/image"


export const Footer =()=>{
        return(
            <>
            <footer className="bg-light">
        <div className="container py-13 py-md-15">
          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
              <Image  src="/logo1.jpg" width="134" height="31" ></Image>
                <p className="mb-4" style={{ marginTop: '15px' }} >© 2022 Ewebcore Pvt. Ltd. <br className="d-none d-lg-block"  />All rights reserved.</p>
                <nav className="nav social ">
                  <a href="#"><i className="uil uil-twitter"></i></a>
                  <a href="#"><i className="uil uil-facebook-f"></i></a>
                  <a href="#"><i className="uil uil-dribbble"></i></a>
                  <a href="#"><i className="uil uil-instagram"></i></a>
                  <a href="#"><i className="uil uil-youtube"></i></a>
                </nav>
              
              </div>
            
            </div>
            
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title  mb-3">Get in Touch</h4>
                <address className="pe-xl-15 pe-xxl-17">2402, G-Square Business Park, Vashi, Navi Mumbai, Maharashtra,  India</address>
                <a href="/cdn-cgi/l/email-protection#1c75727a735c796b797e7f736e7932727968" className="link-body"><span className="__cf_email__" data-cfemail="2940474f46694c5e4c4b4a465b4c07474c5d">info@ewebcore.net</span></a><br /> +91-22-49232326
              </div>
              
            </div>
            
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title  mb-3">Learn More</h4>
                <ul className="list-unstyled text-reset mb-0">
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
              
            </div>
           
            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title  mb-3">Our Newsletter</h4>
                <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
                <div className="newsletter-wrapper">
                 
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
                      
                        <div style={{position: 'absolute', left: '-5000px', ariaHidden:"true"}}>
                            <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex="-1" value=""/></div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </>
        )
    }