import React from 'react'

export default function Contact() {
    return (
        <div className=''>
            <div className='container my-5'>
                <h2>Contact us:</h2>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <br></br>
                    <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone number" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Are you a Member
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        New User
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Elaborate your concern</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    <br></br>
                    <button className='btn btn-primary '>Submit</button>
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
