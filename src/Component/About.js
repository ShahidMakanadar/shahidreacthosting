import React from 'react'


export default function About() {
  return (
    <div className="">
      <div className='container  my-4'>
        <div className="row featurette d-flex justify-content-center align-items-center ">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img className='img-fluid' src="https://source.unsplash.com/400x300/?technology" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center my-4">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img className='img-fluid' src="https://source.unsplash.com/400x300/?code" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center my-4">
          <div className="col-md-7 ">
            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img className='img-fluid' src="https://source.unsplash.com/400x300/?computer" alt="" />
          </div>
        </div>
        <div className="row featurette d-flex justify-content-center align-items-center my-4">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img className='img-fluid' src="https://source.unsplash.com/400x300/?smartphome" alt="" />
          </div>
        </div>

      </div>
      <div className="">
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3   border-top bg-dark">
          <h6 className='text-white' >© 2021 Shahid.code, Inc</h6>
        </footer>
      </div>

    </div>
  )
}

