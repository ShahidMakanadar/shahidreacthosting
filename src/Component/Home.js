import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1400x600/?technology " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to Shahid.code</h2>
                            <p>Tchnology,Computer,Python,Code</p>
                            <button className="btn btn-success btn-sm">Tchnology</button >  .
                            <button className="btn btn-danger btn-sm">Computer</button >  .
                            <button className="btn btn-warning btn-sm">Python</button >
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x600/?code " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to Shahid.code</h2>
                            <p>Tchnology,Computer,Python,Code</p>
                            <button className="btn btn-success btn-sm">Tchnology</button > .
                            <button className="btn btn-danger  btn-sm">Computer</button > .
                            <button className="btn btn-warning btn-sm">Python</button >
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x600/?laptop " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to Shahid.code</h2>
                            <p>Tchnology,Computer,Python,Code</p>
                            <button className="btn btn-success btn-sm">Tchnology</button > .
                            <button className="btn btn-danger btn-sm">Computer</button > .
                            <button className="btn btn-warning btn-sm">Python</button >
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x600/?i-phone " className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Welcome to Shahid.code</h2>
                            <p>Tchnology,Computer,Python,Code</p>
                            <button className="btn btn-success btn-sm">Tchnology</button > .
                            <button className="btn btn-danger btn-sm">Computer</button > .
                            <button className="btn btn-warning btn-sm">Python</button >
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-lg my-3">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UI</strong>
                                <h3 className="mb-0">User-interface</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ui" width="200" height="250" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UX</strong>
                                <h3 className="mb-0">Server-sid</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ux" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UI</strong>
                                <h3 className="mb-0">User-interface</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?tab" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UX</strong>
                                <h3 className="mb-0">Server-sid</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UI</strong>
                                <h3 className="mb-0">User-interface</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ui" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UX</strong>
                                <h3 className="mb-0">Server-sid</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ux" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UI</strong>
                                <h3 className="mb-0">User-interface</h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ui" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">UX</strong>
                                <h3 className="mb-0">Server-sid</h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="stretched-link">Continue reading</a>
                            </div>
                            <div className="col-auto  d-lg-block">
                                <img src="https://source.unsplash.com/200x260/?ux" width="200" height="250" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="row row-cols-5 py-5  border-top bg-dark text-white">
                <div className="col">
                    <Link href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        <img src="https://source.unsplash.com/100x100/?ux" class="bi me-2 " ></img>
                    </Link>
                    <p className="text-white"> © 2021</p>
                </div>

                <div className="col">

                </div>

                <div className="col">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>Section</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
