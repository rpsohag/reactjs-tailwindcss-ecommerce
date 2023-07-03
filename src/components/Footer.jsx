import React from 'react'
import rpsoftwares from './../img/rpsoftwares.png'

const Footer = () => {
  return (
    <>
     <footer className="text-center bg-blue-100 flex flex-col px-4 py-12 sm:text-left lg:px-16 md:px-8 xl:px-24 xxl:px-40">
    <div className="sm:flex flex-wrap">
      <div className="sm:w-1/2 lg:w-1/5">
        <h6 className="text-sm text-gray-600 font-bold uppercase">Contact</h6>

        <div className="mt-4">
          <a href="#" className="block text-md text-gray-900">support@rpsoftwares.com</a>
          <a href="#" className="block text-md text-gray-900 mt-2">+880 11 22 33 44</a>
        </div>
      </div>

      <div className="mt-8 sm:w-1/2 sm:mt-0 lg:w-1/5 lg:mt-0">
        <h6 className="text-sm text-gray-600 font-bold uppercase">Company</h6>
        <ul className="mt-4">
          <li><a href="#">Resources</a></li>
          <li className="mt-2"><a href="#">Careers</a></li>
          <li className="mt-2"><a href="#">Projects</a></li>
          <li className="mt-2"><a href="#">About Us</a></li>
        </ul>
      </div>

      <div className="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
        <h6 className="text-sm text-gray-600 font-bold uppercase">Legal</h6>
        <ul className="mt-4">
          <li><a href="#">Terms and Conditions</a></li>
          <li className="mt-2"><a href="#">Privacy Policy</a></li>
          <li className="mt-2"><a href="#">Refund &amp; Cancellation</a></li>
          <li className="mt-2"><a href="#">Core Values</a></li>
        </ul>
      </div>

      <div className="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">

    <div className="mb-2 sm:mb-0 flex flex-row
      ">
        <div>
          <a href="https://rpsoftwares.com/" className="text-3xl no-underline text-gray-500 font-sans font-bold uppercase">
                <img className='w-[200px]' src={rpsoftwares} alt="" />
            </a><br />
          <span className="text-xs text-grey-dark">Have A Web App!</span>
        </div>
      </div>

        <p className="text-base text-gray-600 mt-4">RPSOFTWARES is one of the leading IT Solution provider companies aims to create next-generation applications/websites. Our main motto is to Design, Build and Deliver the best quality service.</p>
      </div>
    </div>

    <div className="mt-12">
      <p className="text-sm text-gray-600">© <script>document.write(new Date().getFullYear())</script>2023 rpsoftwares.com. All rights reserved.</p>
    </div>
  </footer>
    </>
  )
}

export default Footer