import JobPosition from "./JobPosition"

export default function Career(){
    return(
        <div>
        <section className="wrapper bg-light">
      <div className="container pb-23 pb-md-25">
        <div className="row mb-14">
          <div className="col-12 mt-n18 mt-md-n20 mt-lg-n21 position-relative">
            <div className="shape bg-dot red rellax w-16 h-18" data-rellax-speed="1" style={{top: '1rem', left: '-3.2rem'}}></div>
            <div className="shape pale-primary w-19 h-19 rellax" data-rellax-speed="1" style={{bottom: '2rem', right: '-3rem'}}><img src="./assets/img/svg/hex.svg" className="svg-inject icon-svg w-100 h-100" alt="" /></div>
            <figure className="rounded">
                <img src="./assets/img/photos/about18.jpg" srcSet="./assets/img/photos/about18@2x.jpg 2x" alt="" /></figure>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row gx-lg-8 gx-xl-12 gy-8">
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/target.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Career Growth</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/video-chat.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Work From Anywhere</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/wallet.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Smart Salary</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/building.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Medical Insurance</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/alarm.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Flexible Hours</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex flex-row">
              <div>
                <img src="./assets/img/icons/solid/employees.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Amazing Work Culture</h4>
                <p className="mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.</p>
              </div>
            </div>
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
        <div className="text-center mt-10"><a href="/" className="btn btn-primary rounded-pill">Join Our Team</a></div>
      </div>
      {/* <!-- /.container --> */}
    </section>
    {/* <!-- /section --> */}
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-17">
        <div className="row mt-md-n25 position-relative">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-primary mb-3">Happy Team</h2>
            <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">Don't take our word for it. See what our team members say about us.</h3>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="grid">
          <div className="row isotope gy-6">
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te1.jpg" srcSet="./assets/img/avatars/te1@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Coriss Ambady</h5>
                        <p className="mb-0">Financial Analyst</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te2.jpg" srcSet="./assets/img/avatars/te2@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Cory Zamora</h5>
                        <p className="mb-0">Marketing Specialist</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te3.jpg" srcSet="./assets/img/avatars/te3@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Nikolas Brooten</h5>
                        <p className="mb-0">Sales Manager</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te4.jpg" srcSet="./assets/img/avatars/te4@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Coriss Ambady</h5>
                        <p className="mb-0">Financial Analyst</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te5.jpg" srcSet="./assets/img/avatars/te5@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Jackie Sanders</h5>
                        <p className="mb-0">Investment Planner</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
            <div className="item col-md-6 col-xl-4">
              <div className="card shadow-lg">
                <div className="card-body">
                  <span className="ratings five mb-3"></span>
                  <blockquote className="icon mb-0">
                    <p>“Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient.”</p>
                    <div className="blockquote-details">
                      <img className="rounded-circle w-12" src="./assets/img/avatars/te6.jpg" srcSet="./assets/img/avatars/te6@2x.jpg 2x" alt="" />
                      <div className="info">
                        <h5 className="mb-1">Laura Widerski</h5>
                        <p className="mb-0">Sales Specialist</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                {/* <!-- /.card-body --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/column --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.grid-view --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    {/* <!-- /section --> */}
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row text-center">
          <div className="col-xl-10 mx-auto">
            <h2 className="fs-15 text-uppercase text-primary mb-3">Job Positions</h2>
            <h3 className="display-4 mb-10 px-xxl-15">We’re always searching for amazing people to join our team. Take a look at our current openings.</h3>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row gy-6">
          <div className="col-md-6 col-lg-4">
            <a href="/" className="card shadow-lg lift h-100">
              <div className="card-body p-5 d-flex flex-row">
                <div>
                  <span className="avatar bg-red text-white w-11 h-11 fs-20 me-4">SD</span>
                </div>
                <div>
                  <span className="badge bg-pale-blue text-blue rounded py-1 mb-2">Full Time</span>
                  <h4 className="mb-1">Senior Graphic Designer</h4>
                  <p className="mb-0 text-body">San Francisco, US</p>
                </div>
              </div>
            </a>
          </div>
          {/* <!--/column --> */}
          <JobPosition/>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <a href="/" className="card shadow-lg lift h-100">
              <div className="card-body p-5 d-flex flex-row">
                <div>
                  <span className="avatar bg-yellow text-white w-11 h-11 fs-20 me-4">AN</span>
                </div>
                <div>
                  <span className="badge bg-pale-blue text-blue rounded py-1 mb-2">Full Time</span>
                  <h4 className="mb-1">Multimedia Artist &amp; Animator</h4>
                  <p className="mb-0 text-body">Birmingham, UK</p>
                </div>
              </div>
            </a>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <a href="/" className="card shadow-lg lift h-100">
              <div className="card-body p-5 d-flex flex-row">
                <div>
                  <span className="avatar bg-purple text-white w-11 h-11 fs-20 me-4">FD</span>
                </div>
                <div>
                  <span className="badge bg-pale-violet text-violet rounded py-1 mb-2">Part Time</span>
                  <h4 className="mb-1">Front End Developer</h4>
                  <p className="mb-0 text-body">Sydney, AU</p>
                </div>
              </div>
            </a>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <a href="/" className="card shadow-lg lift h-100">
              <div className="card-body p-5 d-flex flex-row">
                <div>
                  <span className="avatar bg-orange text-white w-11 h-11 fs-20 me-4">MD</span>
                </div>
                <div>
                  <span className="badge bg-pale-blue text-blue rounded py-1 mb-2">Full Time</span>
                  <h4 className="mb-1">Mobile Developer</h4>
                  <p className="mb-0 text-body">San Francisco, US</p>
                </div>
              </div>
            </a>
          </div>
          {/* <!--/column --> */}
          <div className="col-md-6 col-lg-4">
            <a href="/" className="card shadow-lg lift h-100">
              <div className="card-body p-5 d-flex flex-row">
                <div>
                  <span className="avatar bg-pink text-white w-11 h-11 fs-20 me-4">ND</span>
                </div>
                <div>
                  <span className="badge bg-pale-blue text-blue rounded py-1 mb-2">Full Time</span>
                  <h4 className="mb-1">.NET Developer</h4>
                  <p className="mb-0 text-body">Manchester, UK</p>
                </div>
              </div>
            </a>
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
        <div className="row mt-11">
          <div className="col-lg-6 col-xl-5 mx-auto text-center">
            <h2 className="display-6 mb-3">Can't find the right position?</h2>
            <p className="lead mb-5 px-md-16 px-lg-3">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.</p>
            <a href="/" className="btn btn-primary rounded-pill">Get in Touch</a>
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    {/* <!-- /section --> */}
    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-11 col-xxl-10 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-primary mb-3">FAQ</h2>
            <h3 className="display-4 mb-10 px-lg-12 px-xl-10 px-xxl-15">If you don't see an answer to your question, you can send us an email from our contact form.</h3>
          </div>
          {/* <!--/column --> */}
        </div>
        {/* <!--/.row --> */}
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div id="accordion-3" className="accordion-wrapper">
              <div className="card accordion-item shadow-lg">
                <div className="card-header" id="accordion-heading-3-1">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-3-1" aria-expanded="false" aria-controls="accordion-collapse-3-1">How do I get my subscription receipt?</button>
                </div>
                {/* <!-- /.card-header --> */}
                <div id="accordion-collapse-3-1" className="collapse" aria-labelledby="accordion-heading-3-1" data-bs-target="#accordion-3">
                  <div className="card-body">
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                  </div>
                  {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.collapse --> */}
              </div>
              {/* <!-- /.card --> */}
              <div className="card accordion-item shadow-lg">
                <div className="card-header" id="accordion-heading-3-2">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-3-2" aria-expanded="false" aria-controls="accordion-collapse-3-2">Are there any discounts for people in need?</button>
                </div>
                {/* <!-- /.card-header --> */}
                <div id="accordion-collapse-3-2" className="collapse" aria-labelledby="accordion-heading-3-2" data-bs-target="#accordion-3">
                  <div className="card-body">
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                  </div>
                  {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.collapse --> */}
              </div>
              {/* <!-- /.card --> */}
              <div className="card accordion-item shadow-lg">
                <div className="card-header" id="accordion-heading-3-3">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-3-3" aria-expanded="false" aria-controls="accordion-collapse-3-3">Do you offer a free trial edit?</button>
                </div>
                {/* <!-- /.card-header --> */}
                <div id="accordion-collapse-3-3" className="collapse" aria-labelledby="accordion-heading-3-3" data-bs-target="#accordion-3">
                  <div className="card-body">
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                  </div>
                  {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.collapse --> */}
              </div>
              {/* <!-- /.card --> */}
              <div className="card accordion-item shadow-lg">
                <div className="card-header" id="accordion-heading-3-4">
                  <button className="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-3-4" aria-expanded="false" aria-controls="accordion-collapse-3-4">How do I reset my Account password?</button>
                </div>
                {/* <!-- /.card-header --> */}
                <div id="accordion-collapse-3-4" className="collapse" aria-labelledby="accordion-heading-3-4" data-bs-target="#accordion-3">
                  <div className="card-body">
                    <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.</p>
                  </div>
                  {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.collapse --> */}
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!-- /.accordion-wrapper --> */}
          </div>
          {/* <!-- /column --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    {/* <!-- /section --> */}
   {/* <!-- /.content-wrapper --> */}
  </div>
    )
}