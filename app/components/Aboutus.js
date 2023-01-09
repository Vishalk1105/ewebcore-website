import Image from "next/image"

const Aboutus = () => {
    return (
      <>
        <div>
        <section class="wrapper bg-gray">
      <div class="container pt-10 pt-md-14 text-center">
        <div class="row">
          <div class="col-xl-6 mx-auto">
            <h1 class="display-1 mb-4">Digital at heart</h1>
            <p class="lead fs-lg mb-0">Innovation is in our DNA, Building digital transformation solutions.</p>
          </div>
          
        </div>
        
      </div>
          <figure class="position-absoute" style={{bottom: '0', left: '0', zIndex:'2'}}><Image src="/bg12.jpg" width="1000" height="59"></Image></figure>
    </section>
    <section class="wrapper bg-light angled upper-end lower-end">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          <div class="col-lg-6 position-relative order-lg-2">
            <div class="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1" style={{top: '3rem', left: '5.5rem'}}></div>
            <div class="overlap-grid overlap-grid-2">
              <div class="item">
                <figure class="rounded shadow"><Image src="/about2.jpg" width="1000" height="59"></Image></figure>
              </div>
              <div class="item">
                <figure class="rounded shadow"><Image src="/about3.jpg" width="1000" height="59"></Image></figure>
              </div>
            </div>
          </div>
         
          <div class="col-lg-6">
          <Image  src="/megaphone.svg" width="1000" height="59" style={{marginLeft:"-470px", marginTop: '-100px',height: '50px'}}></Image>
            <h2 class="display-4 mb-3">Who Are We?</h2>
            <p class="lead fs-lg">We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
            <p class="mb-6">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            <div class="row gy-3 gx-xl-8">
              <div class="col-xl-6">
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i class="uil uil-check"></i></span><span>Aenean eu leo quam ornare curabitur blandit tempus.</span></li>
                  <li class="mt-3"><span><i class="uil uil-check"></i></span><span>Nullam quis risus eget urna mollis ornare donec elit.</span></li>
                </ul>
              </div>
            
              <div class="col-xl-6">
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i class="uil uil-check"></i></span><span>Etiam porta sem malesuada magna mollis euismod.</span></li>
                  <li class="mt-3"><span><i class="uil uil-check"></i></span><span>Fermentum massa vivamus faucibus amet euismod.</span></li>
                </ul>
              </div>
              
            </div>
           
          </div>
         
        </div>
       
        <div class="row mb-5">
          <div class="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <Image  src="/list.svg" width="1000" height="59" style={{width: '2.6rem',height: '2.6rem'}}></Image>
            <h2 class="display-4 mb-4 px-lg-14" style={{marginBottom: '1rem'}}>Here are 3 working steps to organize our business projects.</h2>
          </div>
          
        </div>
      
        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="card me-lg-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">01</span></span>
                  </div>
                  <div>
                    <h4 class="mb-1">Collect Ideas</h4>
                    <p class="mb-0">Nulla vitae elit libero pharetra augue dapibus.</p>
                  </div>
                </div>
              </div>
              
            </div>
          
            <div class="card ms-lg-13 mt-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">02</span></span>
                  </div>
                  <div>
                    <h4 class="mb-1">Data Analysis</h4>
                    <p class="mb-0">Vivamus sagittis lacus vel augue laoreet.</p>
                  </div>
                </div>
              </div>
             
            </div>
           
            <div class="card mx-lg-6 mt-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"><span class="number">03</span></span>
                  </div>
                  <div>
                    <h4 class="mb-1">Finalize Product</h4>
                    <p class="mb-0">Cras mattis consectetur purus sit amet.</p>
                  </div>
                </div>
              </div>
             
            </div>
           
          </div>
        
          <div class="col-lg-6">
            <h2 class="display-6 mb-3">How It Works?</h2>
            <p class="lead fs-lg pe-lg-5">Find out everything you need to know and more about how we create our business process models.</p>
            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare.</p>
            <p class="mb-6">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis.</p>
            <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
          </div>
          
        </div>
        
      </div>
      
    </section>
        </div>
      </>
    )
  }
  
  export default Aboutus