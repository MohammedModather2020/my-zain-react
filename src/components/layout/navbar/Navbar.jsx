export default function Navbar() {
  return (
    <div className='page-header'>
      <div className='search-form'>
        <form action='#' method='GET'>
          <div className='input-group'>
            <input
              className='form-control search-input'
              name='search'
              placeholder='Type something...'
              type='text'
            />
            <span className='input-group-btn'>
              <span id='close-search'>
                <i className='ion-ios-close-empty'></i>
              </span>
            </span>
          </div>
        </form>
      </div>

      <nav className='navbar navbar-expand-lg'>
        <ul className='list-inline list-unstyled mg-r-20'>
          <li className='list-inline-item align-text-top'>
            <a
              className='hidden-md hidden-lg'
              href='#'
              id='sidebar-toggle-button'
            >
              <i className='ion-navicon tx-20'></i>
            </a>
          </li>
          <li className='list-inline-item align-text-top'>
            <a
              className='hidden-xs hidden-sm'
              href='#'
              id='collapsed-sidebar-toggle-button'
            >
              <i className='ion-navicon tx-20'></i>
            </a>
          </li>
        </ul>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='dropdown mega-dropdown mg-t-5'>
              <a
                className='dropdown-toggle btn mg-r-10'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Features
              </a>
              <div className='dropdown-menu mega-menu pd-15'>
                <div className='row'>
                  <div className='col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Featured</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-arrow-right-circle pl-1 pr-2'></i>
                          Lorem ipsum dolor sit amet
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-arrow-right-circle pl-1 pr-2'></i>
                          Consectetur adipiscing elit
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-arrow-right-circle pl-1 pr-2'></i>
                          Sed do eiusmod tempor incididunt
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-arrow-right-circle pl-1 pr-2'></i>
                          Ut labore et dolore magna
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-arrow-right-circle pl-1 pr-2'></i>
                          Ut enim ad minim veniam
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Related</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-options pl-1 pr-2'></i>Screen
                          Protectors
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-options pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-options pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-options pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-options pl-1 pr-2'></i>Mobile Phone
                          Lenses
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Design</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Lenses
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Screen
                          Protectors
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 col-xl-3 sub-menu mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Programming</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Lenses
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Screen
                          Protectors
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='dropdown mega-dropdown mg-t-5'>
              <a
                className='dropdown-toggle btn mg-r-10'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Technology
              </a>
              <div className='dropdown-menu mega-menu pd-15'>
                <div className='row'>
                  <div className='col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Featured</h6>
                    <a href='' className='view overlay z-depth-1 p-0 mb-2'>
                      <img
                        src='assets/images/gallery/bg-big-1.jpg'
                        className='img-fluid wd-100p'
                        alt=''
                      />
                      <div className='mask rgba-white-slight'></div>
                    </a>
                    <a className='tx-13 tx-normal' href=''>
                      Lorem ipsum dolor sit ipsum dolor sit <br />
                      <span className='mb-0 tx-10 tx-gray-500'>
                        03-03-2019, 11:32AM
                      </span>
                    </a>
                  </div>
                  <div className='col-md-6 col-xl-4 sub-menu mb-md-0 mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Related</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Lenses
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Screen
                          Protectors
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-plus pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-md-6 col-xl-4 sub-menu mb-4'>
                    <h6 className='tx-dark tx-13 tx-semibold'>Design</h6>
                    <ul className='list-unstyled'>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Lenses
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Screen
                          Protectors
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Chargers
                        </a>
                      </li>
                      <li>
                        <a className='menu-item pl-0 tx-13 tx-normal' href=''>
                          <i className='icon-check pl-1 pr-2'></i>Mobile Phone
                          Cables
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className='dropdown mega-dropdown mg-t-5'>
              <a
                className='dropdown-toggle btn mg-r-10'
                data-toggle='dropdown'
                aria-haspopup='false'
                aria-expanded='false'
              >
                Ecommerce
              </a>
              <div className='dropdown-menu mega-menu pd-15'>
                <div className='row'>
                  <div className='col-sm-6 col-lg-3 mb-4 hidden-md'>
                    <h6 className='tx-dark tx-13 tx-semibold'>
                      Popular Categories
                    </h6>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc1.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Gaming <span className='tx-10'>(2412+)</span>
                      </span>
                    </a>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc2.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Smartphone <span className='tx-10'>(2412+)</span>
                      </span>
                    </a>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc3.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Smart Watch <span className='tx-10'>(1423+)</span>
                      </span>
                    </a>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc4.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Headphone <span className='tx-10'>(4852+)</span>
                      </span>
                    </a>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc5.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Shoes <span className='tx-10'>(3261+)</span>
                      </span>
                    </a>
                    <a
                      href=''
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc6.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Sunglasses <span className='tx-10'>(1245+)</span>
                      </span>
                    </a>
                    <a
                      href='#'
                      className='align-items-center d-flex bd py-2 mb-2'
                    >
                      <img
                        src='assets/images/products/pc7.jpg'
                        alt=''
                        className='d-block wd-40'
                      />
                      <span className='ml-2'>
                        Bags <span className='tx-10'>(2543+)</span>
                      </span>
                    </a>
                  </div>
                  <div className='col-6 col-lg-4 col-xl-3'>
                    <div className='row'>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Smartphone
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Octa Core
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Deca Core
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Single SIM
                              Card
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Dual SIM
                              Card
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>4GB RAM
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>5.5-inch
                              Display
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Networking
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Wireless
                              Routers
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Network
                              Cards
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>3G Modems
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Wireless
                              Routers
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>
                              Modem-Router Combos
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Networking
                              Tools
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 col-lg-4 col-xl-3'>
                    <div className='row no-gutters'>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Camera &amp; Photos
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Camera
                              &amp; Photo
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Digital
                              Cameras
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Camcorders
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Camera
                              Drones
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Action
                              Cameras
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Camera
                              &amp; Photo Accessories
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Laptop &amp; Tables
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Laptops
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Gaming
                              Laptops
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Tablets
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>2 in 1
                              Tablets
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Phone Call
                              Tablets
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>iPad
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 col-lg-4 col-xl-3'>
                    <div className='row no-gutters'>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Accessories
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Accessories
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Power Bank
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Screen
                              Protectors
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Cables
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Chargers
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Holders
                              &amp; Stands
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='col-12 sub-menu mb-4'>
                        <h6 className='tx-dark tx-13 tx-semibold'>
                          Laptop Accessories
                        </h6>
                        <ul className='list-unstyled'>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Accessories
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Power Bank
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Screen
                              Protectors
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Cables
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Mobile
                              Phone Chargers
                            </a>
                          </li>
                          <li>
                            <a
                              className='menu-item pl-0 tx-13 tx-normal'
                              href=''
                            >
                              <i className='icon-plus pl-1 pr-2'></i>Holders
                              &amp; Stands
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className='header-right pull-right'>
          <ul className='list-inline justify-content-end'>
            <li className='list-inline-item align-middle'>
              <a href='#' id='search-button'>
                <i className='ion-ios-search-strong tx-20'></i>
              </a>
            </li>

            <li className='list-inline-item align-middle dropdown hidden-xs'>
              <a
                href=''
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='flag-icon flag-icon-us'></i>
              </a>
              <ul className='dropdown-menu languages-dropdown shadow-2'>
                <li>
                  <a href='' data-lang='en'>
                    <i className='flag-icon flag-icon-us mr-2'></i>
                    <span>English-US</span>
                  </a>
                </li>
                <li>
                  <a href='' data-lang='es'>
                    <i className='flag-icon flag-icon-es mr-2'></i>
                    <span>Spanish</span>
                  </a>
                </li>
                <li>
                  <a href='' data-lang='fr'>
                    <i className='flag-icon flag-icon-fr mr-2'></i>
                    <span>French</span>
                  </a>
                </li>
                <li>
                  <a href='' data-lang='gr'>
                    <i className='flag-icon flag-icon-de mr-2'></i>
                    <span>German</span>
                  </a>
                </li>
                <li>
                  <a href='' data-lang='ru'>
                    <i className='flag-icon flag-icon-ru mr-2'></i>
                    <span>Russian</span>
                  </a>
                </li>
                <li>
                  <a href='' data-lang='ru'>
                    <i className='flag-icon flag-icon-gb mr-2'></i>
                    <span>English-UK</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className='list-inline-item dropdown hidden-xs'>
              <a
                className='notification-icon'
                href=''
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='icon-bell tx-16'></i>
                <span className='notification-count wave in'></span>
              </a>
              <div className='dropdown-menu dropdown-menu-right shadow-2'>
                <div className='top-notifications-area'>
                  <div className='notifications-heading'>
                    <div className='heading-title'>
                      <h6>Notifications</h6>
                    </div>
                    <span>5+ New Notifications</span>
                  </div>
                  <div
                    className='slimScrollDiv'
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: 'auto',
                      height: '260px',
                    }}
                  >
                    <div
                      className='notifications-box'
                      id='notificationsBox'
                      style={{
                        overflow: 'hidden',
                        width: 'auto',
                        height: '260px',
                      }}
                    >
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success'>
                            <i className='fa fa-smile-o tx-success tx-16'></i>
                          </div>
                          <div>
                            <span>Your order is placed</span>
                            <span className='small tx-gray-600 ft-right'>
                              Jun 10
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-warning'>
                            <i className='fa fa-bell tx-warning tx-16'></i>
                          </div>
                          <div>
                            <span>Your item is shipped</span>
                            <span className='small tx-gray-600 ft-right'>
                              Jun 05
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-success'>
                            <i className='fa fa-check tx-success tx-16'></i>
                          </div>
                          <div>
                            <span>New Message received</span>
                            <span className='small tx-gray-600 ft-right'>
                              Jun 02
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-danger'>
                            <i className='fa fa-heartbeat tx-danger tx-16'></i>
                          </div>
                          <div>
                            <span>Payment failed!</span>
                            <span className='small tx-gray-600 ft-right'>
                              May 29
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-primary'>
                            <i className='fa fa-info tx-info tx-16'></i>
                          </div>
                          <div>
                            <span>New document available</span>
                            <span className='small tx-gray-600 ft-right'>
                              May 25
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='wd-45 ht-38 mg-r-15 d-flex align-items-center justify-content-center rounded-circle card-icon-primary'>
                            <i className='fa fa-info tx-info tx-16'></i>
                          </div>
                          <div>
                            <span>New document available</span>
                            <span className='small tx-gray-600 ft-right'>
                              May 08
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry.
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className='slimScrollBar'
                      style={{
                        background: 'rgb(165, 167, 171)',
                        width: '2px',
                        position: 'absolute',
                        top: '0px',
                        opacity: '0.4',
                        display: 'block',
                        borderRadius: '50px',
                        zIndex: '99',
                        right: '0px',
                      }}
                    ></div>
                    <div
                      className='slimScrollRail'
                      style={{
                        width: '2px',
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        display: 'none',
                        borderRadius: '50px',
                        background: 'rgb(51, 51, 51)',
                        opacity: '0.2',
                        zIndex: '90',
                        right: '0px',
                      }}
                    ></div>
                  </div>
                  <div className='notifications-footer'>
                    <a href=''>View all Notifications</a>
                  </div>
                </div>
              </div>
            </li>

            <li className='list-inline-item dropdown hidden-xs'>
              <a
                className='message-icon'
                href=''
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='icon-envelope tx-16'></i>
                <span className='messages-count wave in'></span>
              </a>
              <div className='dropdown-menu dropdown-menu-right shadow-2'>
                <div className='top-message-area'>
                  <div className='top-message-heading'>
                    <div className='heading-title'>
                      <h6>Messages</h6>
                    </div>
                    <span>5+ New Messages</span>
                  </div>
                  <div
                    className='slimScrollDiv'
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: 'auto',
                      height: '260px',
                    }}
                  >
                    <div
                      className='message-box'
                      id='messageBox'
                      style={{
                        overflow: 'hidden',
                        width: 'auto',
                        height: '260px',
                      }}
                    >
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-online'>
                              <img
                                src='assets/images/avatar/avatar1.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Mary Adams</span>
                            <span className='small tx-gray-600 ft-right'>
                              30 minutes ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-online'>
                              <img
                                src='assets/images/avatar/avatar2.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Richards Caleb</span>
                            <span className='small tx-gray-600 ft-right'>
                              12 hours ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-busy'>
                              <img
                                src='assets/images/avatar/avatar3.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Lane Richards</span>
                            <span className='small tx-gray-600 ft-right'>
                              2 days ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-busy'>
                              <img
                                src='assets/images/avatar/avatar4.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Edward Lane</span>
                            <span className='small tx-gray-600 ft-right'>
                              3 days ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-offline'>
                              <img
                                src='assets/images/avatar/avatar5.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Lane Richards</span>
                            <span className='small tx-gray-600 ft-right'>
                              2 days ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                      <a
                        className='dropdown-item list-group-item'
                        // href='javascript:void(0)'
                      >
                        <div className='d-flex justify-content-between'>
                          <div className='pd-r-15'>
                            <span className='avatar avatar-offline'>
                              <img
                                src='assets/images/avatar/avatar6.png'
                                className='img-fluid'
                                alt=''
                              />
                              <i></i>
                            </span>
                          </div>
                          <div>
                            <span>Edward Lane</span>
                            <span className='small tx-gray-600 ft-right'>
                              3 days ago
                            </span>
                            <div className='tx-gray-600 tx-11'>
                              Dummy text of the printing and type setting
                              industry...
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className='slimScrollBar'
                      style={{
                        background: 'rgb(165, 167, 171)',
                        width: '2px',
                        position: 'absolute',
                        top: '0px',
                        opacity: '0.4',
                        display: 'block',
                        borderRadius: '50px',
                        zIndex: '99',
                        right: '0px',
                      }}
                    ></div>
                    <div
                      className='slimScrollRail'
                      style={{
                        width: '2px',
                        height: '100%',
                        position: 'absolute',
                        top: '0px',
                        display: 'none',
                        borderRadius: '50px',
                        background: 'rgb(51, 51, 51)',
                        opacity: '0.2',
                        zIndex: '90',
                        right: '0px',
                      }}
                    ></div>
                  </div>
                  <div className='top-message-footer'>
                    <a href=''>View all Messages</a>
                  </div>
                </div>
              </div>
            </li>

            <li className='list-inline-item dropdown'>
              <a
                href=''
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <span className='select-profile'>Hi, John!</span>
                <img
                  src='assets/images/avatar/avatar1.png'
                  className='img-fluid wd-35 ht-35 rounded-circle'
                  alt=''
                />
              </a>
              <div className='dropdown-menu dropdown-menu-right dropdown-profile shadow-2'>
                <div className='user-profile-area'>
                  <div className='user-profile-heading'>
                    <div className='profile-thumbnail'>
                      <img
                        src='assets/images/avatar/avatar1.png'
                        className='img-fluid wd-35 ht-35 rounded-circle'
                        alt=''
                      />
                    </div>
                    <div className='profile-text'>
                      <h6>John Deo</h6>
                      <span>email@example.com</span>
                    </div>
                  </div>
                  <a href='' className='dropdown-item'>
                    <i className='icon-user' aria-hidden='true'></i> My profile
                  </a>
                  <a href='' className='dropdown-item'>
                    <i className='icon-envelope' aria-hidden='true'></i>{' '}
                    Messages{' '}
                    <span className='badge badge-success ft-right mg-t-3'>
                      10+
                    </span>
                  </a>
                  <a href='' className='dropdown-item'>
                    <i className='icon-settings' aria-hidden='true'></i>{' '}
                    settings
                  </a>
                  <a href='' className='dropdown-item'>
                    <i className='icon-share' aria-hidden='true'></i> My
                    Activity{' '}
                    <span className='badge badge-warning ft-right mg-t-3'>
                      5+
                    </span>
                  </a>
                  <a href='' className='dropdown-item'>
                    <i className='icon-cloud-download' aria-hidden='true'></i>{' '}
                    My Download{' '}
                    <span className='badge badge-success ft-right mg-t-3'>
                      10+
                    </span>
                  </a>
                  <a href='' className='dropdown-item'>
                    <i className='icon-heart' aria-hidden='true'></i> Support
                  </a>
                  <a href='page-singin.html' className='dropdown-item'>
                    <i className='icon-power' aria-hidden='true'></i> Sign-out
                  </a>
                </div>
              </div>
            </li>

            <li className='list-inline-item dropdown hidden-xs'>
              <a
                className='settings-icon'
                id='settingSidebarTrigger'
                href=''
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <i className='icon-settings tx-16'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
