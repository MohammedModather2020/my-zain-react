export default function Sidebar() {
  return (
    // <div className='page-sidebar'>
    //   <div className='logo'>
    //     <a className='logo-img' href='index.html'>
    //       <img className='desktop-logo' src='assets/images/logo.png' alt='' />
    //       <img
    //         className='small-logo'
    //         src='assets/images/small-logo.png'
    //         alt=''
    //       />
    //     </a>
    //     <i className='ion-ios-close-empty' id='sidebar-toggle-button-close'></i>
    //   </div>

    //   <div
    //     className='slimScrollDiv'
    //     style={{
    //       position: 'relative',
    //       overflow: 'hidden',
    //       width: 'auto',
    //       height: '100%',
    //     }}
    //   >
    //     <div
    //       className='page-sidebar-inner'
    //       style={{ overflow: 'hidden', width: 'auto', height: '100%' }}
    //     >
    //       <div className='page-sidebar-menu'>
    //         <ul className='accordion-menu'>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-home'
    //               >
    //                 <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
    //                 <polyline points='9 22 9 12 15 12 15 22'></polyline>
    //               </svg>
    //               <span>Dashboard</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='index.html'>Sales</a>
    //               </li>
    //               <li>
    //                 <a href='index2.html'>Analytics</a>
    //               </li>
    //               <li>
    //                 <a href='index3.html'>Cryptocurrency</a>
    //               </li>
    //               <li>
    //                 <a href='index4.html'>Helpdesk</a>
    //               </li>
    //               <li>
    //                 <a href='index5.html'>Project</a>
    //               </li>
    //               <li>
    //                 <a href='index6.html'>Ecommerce</a>
    //               </li>
    //               <li>
    //                 <a href='index7.html'>Server</a>
    //               </li>
    //               <li>
    //                 <a href='index8.html'>Education</a>
    //               </li>
    //               <li>
    //                 <a href='index9.html'>Event</a>
    //               </li>
    //               <li>
    //                 <a href='index10.html'>Social</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-mail'
    //               >
    //                 <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    //                 <polyline points='22,6 12,13 2,6'></polyline>
    //               </svg>
    //               <span>Mailbox</span>
    //               <span className='badge badge-warning ft-right'>10+</span>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='mailbox.html'>Inbox</a>
    //               </li>
    //               <li>
    //                 <a href='mailbox-message.html'>View Mail</a>
    //               </li>
    //               <li>
    //                 <a href='mailbox-compose.html'>Compose Mail</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href='widgets.html'>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-layout'
    //               >
    //                 <rect
    //                   x='3'
    //                   y='3'
    //                   width='18'
    //                   height='18'
    //                   rx='2'
    //                   ry='2'
    //                 ></rect>
    //                 <line x1='3' y1='9' x2='21' y2='9'></line>
    //                 <line x1='9' y1='21' x2='9' y2='9'></line>
    //               </svg>
    //               <span>Widgets</span>
    //               <span className='badge badge-info ft-right'>Hot</span>
    //             </a>
    //           </li>
    //           <li className='menu-divider mg-y-20-force'></li>
    //           <li className='mg-20-force menu-elements'>Elements</li>
    //           <li className='open active'>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-grid'
    //               >
    //                 <rect x='3' y='3' width='7' height='7'></rect>
    //                 <rect x='14' y='3' width='7' height='7'></rect>
    //                 <rect x='14' y='14' width='7' height='7'></rect>
    //                 <rect x='3' y='14' width='7' height='7'></rect>
    //               </svg>
    //               <span>UI Elements</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'block' }}>
    //               <li>
    //                 <a href='ui-card.html'>Card</a>
    //               </li>
    //               <li>
    //                 <a href='ui-alert.html'>Alerts</a>
    //               </li>
    //               <li>
    //                 <a href='ui-button.html'>Buttons</a>
    //               </li>
    //               <li>
    //                 <a href='ui-badge.html'>Badges</a>
    //               </li>

    //               <li className='active'>
    //                 <a href='ui-typography.html'>Typography</a>
    //               </li>
    //               <li>
    //                 <a href='ui-notification.html'>Notifications</a>
    //               </li>
    //               <li>
    //                 <a href='ui-modal.html'>Modals</a>
    //               </li>
    //               <li>
    //                 <a href='ui-tooltip.html'>Tooltips</a>
    //               </li>
    //               <li>
    //                 <a href='ui-progress.html'>Progress</a>
    //               </li>
    //               <li>
    //                 <a href='ui-spinner.html'>Spinners</a>
    //               </li>
    //               <li>
    //                 <a href='ui-accordion.html'>Accordions</a>
    //               </li>
    //               <li>
    //                 <a href='ui-pagination.html'>Pagination</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-gift'
    //               >
    //                 <polyline points='20 12 20 22 4 22 4 12'></polyline>
    //                 <rect x='2' y='7' width='20' height='5'></rect>
    //                 <line x1='12' y1='22' x2='12' y2='7'></line>
    //                 <path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'></path>
    //                 <path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'></path>
    //               </svg>
    //               <span>Icons</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='icon-font-awesome.html'>Font Awesome</a>
    //               </li>
    //               <li>
    //                 <a href='icon-feather.html'>Feather Icons</a>
    //               </li>
    //               <li>
    //                 <a href='icon-mdi.html'>Mdi icons</a>
    //               </li>
    //               <li>
    //                 <a href='icon-flag.html'>Flag icons</a>
    //               </li>
    //               <li>
    //                 <a href='icon-simple-line.html'>Simple line icons</a>
    //               </li>
    //               <li>
    //                 <a href='icon-themify.html'>Themify icons</a>
    //               </li>
    //               <li>
    //                 <a href='icon-weather.html'>Weather Icons</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-command'
    //               >
    //                 <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
    //               </svg>
    //               <span>Components</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='com-datepicker.html'>Date Picker</a>
    //               </li>
    //               <li>
    //                 <a href='com-timepicker.html'>Time Picker</a>
    //               </li>
    //               <li>
    //                 <a href='com-colorpicker.html'>Color Picker</a>
    //               </li>
    //               <li>
    //                 <a href='com-bootselect.html'>Bootstrap Select</a>
    //               </li>
    //               <li>
    //                 <a href='com-codeeditor.html'>Code Editor</a>
    //               </li>
    //               <li>
    //                 <a href='com-wysiwyg.html'>WYSIWYG Editor</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-calendar'
    //               >
    //                 <rect
    //                   x='3'
    //                   y='4'
    //                   width='18'
    //                   height='18'
    //                   rx='2'
    //                   ry='2'
    //                 ></rect>
    //                 <line x1='16' y1='2' x2='16' y2='6'></line>
    //                 <line x1='8' y1='2' x2='8' y2='6'></line>
    //                 <line x1='3' y1='10' x2='21' y2='10'></line>
    //               </svg>
    //               <span>Forms</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='form-element.html'>Form Elements</a>
    //               </li>
    //               <li>
    //                 <a href='form-layout.html'>Form Layouts</a>
    //               </li>
    //               <li>
    //                 <a href='form-wizard.html'>Form Wizard</a>
    //               </li>
    //               <li>
    //                 <a href='form-validation.html'>Form Validation</a>
    //               </li>
    //               <li>
    //                 <a href='form-upload.html'>File Upload</a>
    //               </li>
    //               <li>
    //                 <a href='form-publisher.html'>Form Publishers</a>
    //               </li>
    //               <li>
    //                 <a href='form-formatter.html'>Form Formatter </a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-database'
    //               >
    //                 <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
    //                 <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
    //                 <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
    //               </svg>
    //               <span>Tables</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='table-static.html'>Static</a>
    //               </li>
    //               <li>
    //                 <a href='table-responsive.html'>Responsive</a>
    //               </li>
    //               <li>
    //                 <a href='table-datatable.html'>Data Tables</a>
    //               </li>
    //               <li>
    //                 <a href='table-footable.html'>Foo Tables</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-pie-chart'
    //               >
    //                 <path d='M21.21 15.89A10 10 0 1 1 8 2.83'></path>
    //                 <path d='M22 12A10 10 0 0 0 12 2v10z'></path>
    //               </svg>
    //               <span>Charts</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='chart-apex.html'>Apex</a>
    //               </li>
    //               <li>
    //                 <a href='chart-google.html'>Google</a>
    //               </li>
    //               <li>
    //                 <a href='chart-morris.html'>Morris</a>
    //               </li>
    //               <li>
    //                 <a href='chart-chartjs.html'>ChartJS</a>
    //               </li>
    //               <li>
    //                 <a href='chart-flot.html'>Flot</a>
    //               </li>
    //               <li>
    //                 <a href='chart-chartlist.html'>Chartlist</a>
    //               </li>
    //               <li>
    //                 <a href='chart-sparkline.html'>Sparkline</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-map'
    //               >
    //                 <polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'></polygon>
    //                 <line x1='8' y1='2' x2='8' y2='18'></line>
    //                 <line x1='16' y1='6' x2='16' y2='22'></line>
    //               </svg>
    //               <span>Maps</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='map-google.html'>Google Maps</a>
    //               </li>
    //               <li>
    //                 <a href='map-vector.html'>Vector Maps</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className='menu-divider mg-y-20-force'></li>
    //           <li className='mg-20-force menu-extras'>Extras</li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-cpu'
    //               >
    //                 <rect
    //                   x='4'
    //                   y='4'
    //                   width='16'
    //                   height='16'
    //                   rx='2'
    //                   ry='2'
    //                 ></rect>
    //                 <rect x='9' y='9' width='6' height='6'></rect>
    //                 <line x1='9' y1='1' x2='9' y2='4'></line>
    //                 <line x1='15' y1='1' x2='15' y2='4'></line>
    //                 <line x1='9' y1='20' x2='9' y2='23'></line>
    //                 <line x1='15' y1='20' x2='15' y2='23'></line>
    //                 <line x1='20' y1='9' x2='23' y2='9'></line>
    //                 <line x1='20' y1='14' x2='23' y2='14'></line>
    //                 <line x1='1' y1='9' x2='4' y2='9'></line>
    //                 <line x1='1' y1='14' x2='4' y2='14'></line>
    //               </svg>
    //               <span>App View</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='app-chatroom.html'>Chat Room</a>
    //               </li>
    //               <li>
    //                 <a href='app-calendar.html'>Calendar</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-codepen'
    //               >
    //                 <polygon points='12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2'></polygon>
    //                 <line x1='12' y1='22' x2='12' y2='15.5'></line>
    //                 <polyline points='22 8.5 12 15.5 2 8.5'></polyline>
    //                 <polyline points='2 15.5 12 8.5 22 15.5'></polyline>
    //                 <line x1='12' y1='2' x2='12' y2='8.5'></line>
    //               </svg>
    //               <span>Pages</span>
    //               <i className='accordion-icon fa fa-angle-left'></i>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='page-invoice.html'>Invoice</a>
    //               </li>
    //               <li>
    //                 <a href='page-error404.html'>404 Page</a>
    //               </li>
    //               <li>
    //                 <a href='page-error500.html'>500 Page</a>
    //               </li>
    //               <li>
    //                 <a href='page-profile.html'>Profile</a>
    //               </li>
    //               <li>
    //                 <a href='page-singin.html'>Login</a>
    //               </li>
    //               <li>
    //                 <a href='page-singup.html'>Register</a>
    //               </li>
    //               <li>
    //                 <a href='page-unlock.html'>Lockscreen</a>
    //               </li>
    //               <li>
    //                 <a href='page-password.html'>password Reset</a>
    //               </li>
    //               <li>
    //                 <a href='page-search.html'>Search Result</a>
    //               </li>
    //               <li>
    //                 <a href='page-gallery.html'>Gallery</a>
    //               </li>
    //               <li>
    //                 <a href='page-pricing.html'>Pricing Tables</a>
    //               </li>
    //               <li>
    //                 <a href='page-treeview.html'>Tree View</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href='email-template.html'>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-printer'
    //               >
    //                 <polyline points='6 9 6 2 18 2 18 9'></polyline>
    //                 <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'></path>
    //                 <rect x='6' y='14' width='12' height='8'></rect>
    //               </svg>
    //               <span>Mail Template</span>
    //               <span className='badge badge-warning ft-right'>Hot</span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href=''>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-monitor'
    //               >
    //                 <rect
    //                   x='2'
    //                   y='3'
    //                   width='20'
    //                   height='14'
    //                   rx='2'
    //                   ry='2'
    //                 ></rect>
    //                 <line x1='8' y1='21' x2='16' y2='21'></line>
    //                 <line x1='12' y1='17' x2='12' y2='21'></line>
    //               </svg>
    //               <span>Frontend</span>
    //               <span className='badge badge-danger ft-right'>Very Hot</span>
    //             </a>
    //             <ul className='sub-menu' style={{ display: 'none' }}>
    //               <li>
    //                 <a href='../templates/ecommerce/index.html' target='_blank'>
    //                   Ecommerce
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   href='../templates/cryptocurrency/index.html'
    //                   target='_blank'
    //                 >
    //                   Cryptocurrency
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/helpdesk/index.html' target='_blank'>
    //                   Helpdesk
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/project/index.html' target='_blank'>
    //                   project
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/server/index.html' target='_blank'>
    //                   server
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/education/index.html' target='_blank'>
    //                   education
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/event/index.html' target='_blank'>
    //                   event
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href='../templates/social/index.html' target='_blank'>
    //                   social
    //                 </a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className='menu-divider mg-y-20-force'></li>
    //           <li className='mg-20-force menu-others'>Others</li>
    //           <li>
    //             <a href='../documentation/documentation.html'>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-life-buoy'
    //               >
    //                 <circle cx='12' cy='12' r='10'></circle>
    //                 <circle cx='12' cy='12' r='4'></circle>
    //                 <line x1='4.93' y1='4.93' x2='9.17' y2='9.17'></line>
    //                 <line x1='14.83' y1='14.83' x2='19.07' y2='19.07'></line>
    //                 <line x1='14.83' y1='9.17' x2='19.07' y2='4.93'></line>
    //                 <line x1='14.83' y1='9.17' x2='18.36' y2='5.64'></line>
    //                 <line x1='4.93' y1='19.07' x2='9.17' y2='14.83'></line>
    //               </svg>
    //               <span>Documentation</span>
    //             </a>
    //           </li>
    //           <li>
    //             <a href='../documentation/changelog.html'>
    //               <svg
    //                 xmlns='http://www.w3.org/2000/svg'
    //                 width='24'
    //                 height='24'
    //                 viewBox='0 0 24 24'
    //                 fill='none'
    //                 stroke='currentColor'
    //                 strokeWidth='2'
    //                 strokeLinecap='round'
    //                 strokeLinejoin='round'
    //                 className='feather feather-coffee'
    //               >
    //                 <path d='M18 8h1a4 4 0 0 1 0 8h-1'></path>
    //                 <path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'></path>
    //                 <line x1='6' y1='1' x2='6' y2='4'></line>
    //                 <line x1='10' y1='1' x2='10' y2='4'></line>
    //                 <line x1='14' y1='1' x2='14' y2='4'></line>
    //               </svg>
    //               <span>Changelog</span>
    //               <span className='badge badge-primary ft-right'>1.7</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div
    //       className='slimScrollBar'
    //       style={{
    //         background: 'rgb(255, 255, 255)',
    //         width: '3px',
    //         position: 'absolute',
    //         top: '0px',
    //         opacity: '0.4',
    //         display: 'none',
    //         borderRadius: '50px',
    //         zIndex: '99',
    //         right: '1px',
    //         height: '1325px',
    //       }}
    //     ></div>
    //     <div
    //       className='slimScrollRail'
    //       style={{
    //         width: '3px',
    //         height: '100',
    //         position: 'absolute',
    //         top: '0px',
    //         display: 'none',
    //         borderRadius: '50px',
    //         background: 'rgb(51, 51, 51)',
    //         opacity: '0.2',
    //         zIndex: '90',
    //         right: '1px',
    //       }}
    //     ></div>
    //   </div>

    //   <div className='sidebar-footer'>
    //     <a
    //       className='pull-left'
    //       href='page-profile.html'
    //       data-toggle='tooltip'
    //       data-placement='top'
    //       data-original-title='Profile'
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         width='24'
    //         height='24'
    //         viewBox='0 0 24 24'
    //         fill='none'
    //         stroke='currentColor'
    //         strokeWidth='2'
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         className='feather feather-user ht-15'
    //       >
    //         <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
    //         <circle cx='12' cy='7' r='4'></circle>
    //       </svg>
    //     </a>
    //     <a
    //       className='pull-left '
    //       href='mailbox.html'
    //       data-toggle='tooltip'
    //       data-placement='top'
    //       data-original-title='Mailbox'
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         width='24'
    //         height='24'
    //         viewBox='0 0 24 24'
    //         fill='none'
    //         stroke='currentColor'
    //         strokeWidth='2'
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         className='feather feather-mail ht-15'
    //       >
    //         <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    //         <polyline points='22,6 12,13 2,6'></polyline>
    //       </svg>
    //     </a>
    //     <a
    //       className='pull-left'
    //       href='page-unlock.html'
    //       data-toggle='tooltip'
    //       data-placement='top'
    //       data-original-title='Lockscreen'
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         width='24'
    //         height='24'
    //         viewBox='0 0 24 24'
    //         fill='none'
    //         stroke='currentColor'
    //         strokeWidth='2'
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         className='feather feather-lock ht-15'
    //       >
    //         <rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
    //         <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
    //       </svg>
    //     </a>
    //     <a
    //       className='pull-left'
    //       href='page-singin.html'
    //       data-toggle='tooltip'
    //       data-placement='top'
    //       data-original-title='Sing Out'
    //     >
    //       <svg
    //         xmlns='http://www.w3.org/2000/svg'
    //         width='24'
    //         height='24'
    //         viewBox='0 0 24 24'
    //         fill='none'
    //         stroke='currentColor'
    //         strokeWidth='2'
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         className='feather feather-log-out ht-15'
    //       >
    //         <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
    //         <polyline points='16 17 21 12 16 7'></polyline>
    //         <line x1='21' y1='12' x2='9' y2='12'></line>
    //       </svg>
    //     </a>
    //   </div>
    // </div>
    <div className='page-sidebar'>
      <div className='logo'>
        <a className='logo-img' href='index.html'>
          <img className='desktop-logo' src='./assets/images/logo.png' alt='' />
          <img
            className='small-logo'
            src='./assets/images/small-logo.png'
            alt=''
          />
        </a>
        <i className='ion-ios-close-empty' id='sidebar-toggle-button-close'></i>
      </div>

      <div className='page-sidebar-inner'>
        <div className='page-sidebar-menu'>
          <ul className='accordion-menu'>
            <li>
              <a href=''>
                <i data-feather='home'></i>
                <span>Dashboard</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='index.html'>Sales</a>
                </li>
                <li>
                  <a href='index2.html'>Analytics</a>
                </li>
                <li>
                  <a href='index3.html'>Cryptocurrency</a>
                </li>
                <li>
                  <a href='index4.html'>Helpdesk</a>
                </li>
                <li>
                  <a href='index5.html'>Project</a>
                </li>
                <li>
                  <a href='index6.html'>Ecommerce</a>
                </li>
                <li>
                  <a href='index7.html'>Server</a>
                </li>
                <li>
                  <a href='index8.html'>Education</a>
                </li>
                <li>
                  <a href='index9.html'>Event</a>
                </li>
                <li>
                  <a href='index10.html'>Social</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='mail'></i>
                <span>Mailbox</span>
                <span className='badge badge-warning ft-right'>10+</span>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='mailbox.html'>Inbox</a>
                </li>
                <li>
                  <a href='mailbox-message.html'>View Mail</a>
                </li>
                <li>
                  <a href='mailbox-compose.html'>Compose Mail</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='widgets.html'>
                <i data-feather='layout'></i>
                <span>Widgets</span>
                <span className='badge badge-info ft-right'>Hot</span>
              </a>
            </li>
            <li className='menu-divider mg-y-20-force'></li>
            <li className='mg-20-force menu-elements'>Elements</li>
            <li className='open active'>
              <a href=''>
                <i data-feather='grid'></i>
                <span>UI Elements</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu' style={{ display: 'block' }}>
                <li>
                  <a href='ui-card.html'>Card</a>
                </li>
                <li>
                  <a href='ui-alert.html'>Alerts</a>
                </li>
                <li>
                  <a href='ui-button.html'>Buttons</a>
                </li>
                <li>
                  <a href='ui-badge.html'>Badges</a>
                </li>
                <li className='active'>
                  <a href='ui-typography.html'>Typography</a>
                </li>
                <li>
                  <a href='ui-notification.html'>Notifications</a>
                </li>
                <li>
                  <a href='ui-modal.html'>Modals</a>
                </li>
                <li>
                  <a href='ui-tooltip.html'>Tooltips</a>
                </li>
                <li>
                  <a href='ui-progress.html'>Progress</a>
                </li>
                <li>
                  <a href='ui-spinner.html'>Spinners</a>
                </li>
                <li>
                  <a href='ui-accordion.html'>Accordions</a>
                </li>
                <li>
                  <a href='ui-pagination.html'>Pagination</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='gift'></i>
                <span>Icons</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='icon-font-awesome.html'>Font Awesome</a>
                </li>
                <li>
                  <a href='icon-feather.html'>Feather Icons</a>
                </li>
                <li>
                  <a href='icon-mdi.html'>Mdi icons</a>
                </li>
                <li>
                  <a href='icon-flag.html'>Flag icons</a>
                </li>
                <li>
                  <a href='icon-simple-line.html'>Simple line icons</a>
                </li>
                <li>
                  <a href='icon-themify.html'>Themify icons</a>
                </li>
                <li>
                  <a href='icon-weather.html'>Weather Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='command'></i>
                <span>Components</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='com-datepicker.html'>Date Picker</a>
                </li>
                <li>
                  <a href='com-timepicker.html'>Time Picker</a>
                </li>
                <li>
                  <a href='com-colorpicker.html'>Color Picker</a>
                </li>
                <li>
                  <a href='com-bootselect.html'>Bootstrap Select</a>
                </li>
                <li>
                  <a href='com-codeeditor.html'>Code Editor</a>
                </li>
                <li>
                  <a href='com-wysiwyg.html'>WYSIWYG Editor</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='calendar'></i>
                <span>Forms</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='form-element.html'>Form Elements</a>
                </li>
                <li>
                  <a href='form-layout.html'>Form Layouts</a>
                </li>
                <li>
                  <a href='form-wizard.html'>Form Wizard</a>
                </li>
                <li>
                  <a href='form-validation.html'>Form Validation</a>
                </li>
                <li>
                  <a href='form-upload.html'>File Upload</a>
                </li>
                <li>
                  <a href='form-publisher.html'>Form Publishers</a>
                </li>
                <li>
                  <a href='form-formatter.html'>Form Formatter </a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='database'></i>
                <span>Tables</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='table-static.html'>Static</a>
                </li>
                <li>
                  <a href='table-responsive.html'>Responsive</a>
                </li>
                <li>
                  <a href='table-datatable.html'>Data Tables</a>
                </li>
                <li>
                  <a href='table-footable.html'>Foo Tables</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='pie-chart'></i>
                <span>Charts</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='chart-apex.html'>Apex</a>
                </li>
                <li>
                  <a href='chart-google.html'>Google</a>
                </li>
                <li>
                  <a href='chart-morris.html'>Morris</a>
                </li>
                <li>
                  <a href='chart-chartjs.html'>ChartJS</a>
                </li>
                <li>
                  <a href='chart-flot.html'>Flot</a>
                </li>
                <li>
                  <a href='chart-chartlist.html'>Chartlist</a>
                </li>
                <li>
                  <a href='chart-sparkline.html'>Sparkline</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='map'></i>
                <span>Maps</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='map-google.html'>Google Maps</a>
                </li>
                <li>
                  <a href='map-vector.html'>Vector Maps</a>
                </li>
              </ul>
            </li>
            <li className='menu-divider mg-y-20-force'></li>
            <li className='mg-20-force menu-extras'>Extras</li>
            <li>
              <a href=''>
                <i data-feather='cpu'></i>
                <span>App View</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='app-chatroom.html'>Chat Room</a>
                </li>
                <li>
                  <a href='app-calendar.html'>Calendar</a>
                </li>
              </ul>
            </li>
            <li>
              <a href=''>
                <i data-feather='codepen'></i>
                <span>Pages</span>
                <i className='accordion-icon fa fa-angle-left'></i>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='page-invoice.html'>Invoice</a>
                </li>
                <li>
                  <a href='page-error404.html'>404 Page</a>
                </li>
                <li>
                  <a href='page-error500.html'>500 Page</a>
                </li>
                <li>
                  <a href='page-profile.html'>Profile</a>
                </li>
                <li>
                  <a href='page-singin.html'>Login</a>
                </li>
                <li>
                  <a href='page-singup.html'>Register</a>
                </li>
                <li>
                  <a href='page-unlock.html'>Lockscreen</a>
                </li>
                <li>
                  <a href='page-password.html'>password Reset</a>
                </li>
                <li>
                  <a href='page-search.html'>Search Result</a>
                </li>
                <li>
                  <a href='page-gallery.html'>Gallery</a>
                </li>
                <li>
                  <a href='page-pricing.html'>Pricing Tables</a>
                </li>
                <li>
                  <a href='page-treeview.html'>Tree View</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='email-template.html'>
                <i data-feather='printer'></i>
                <span>Mail Template</span>
                <span className='badge badge-warning ft-right'>Hot</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i data-feather='monitor'></i>
                <span>Frontend</span>
                <span className='badge badge-danger ft-right'>Very Hot</span>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='../templates/ecommerce/index.html' target='_blank'>
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a
                    href='../templates/cryptocurrency/index.html'
                    target='_blank'
                  >
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a href='../templates/helpdesk/index.html' target='_blank'>
                    Helpdesk
                  </a>
                </li>
                <li>
                  <a href='../templates/project/index.html' target='_blank'>
                    project
                  </a>
                </li>
                <li>
                  <a href='../templates/server/index.html' target='_blank'>
                    server
                  </a>
                </li>
                <li>
                  <a href='../templates/education/index.html' target='_blank'>
                    education
                  </a>
                </li>
                <li>
                  <a href='../templates/event/index.html' target='_blank'>
                    event
                  </a>
                </li>
                <li>
                  <a href='../templates/social/index.html' target='_blank'>
                    social
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-divider mg-y-20-force'></li>
            <li className='mg-20-force menu-others'>Others</li>
            <li>
              <a href='../documentation/documentation.html'>
                <i data-feather='life-buoy'></i>
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href='../documentation/changelog.html'>
                <i data-feather='coffee'></i>
                <span>Changelog</span>
                <span className='badge badge-primary ft-right'>1.7</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='sidebar-footer'>
        <a
          className='pull-left'
          href='page-profile.html'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Profile'
        >
          <i data-feather='user' className='ht-15'></i>
        </a>
        <a
          className='pull-left '
          href='mailbox.html'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Mailbox'
        >
          <i data-feather='mail' className='ht-15'></i>
        </a>
        <a
          className='pull-left'
          href='page-unlock.html'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Lockscreen'
        >
          <i data-feather='lock' className='ht-15'></i>
        </a>
        <a
          className='pull-left'
          href='page-singin.html'
          data-toggle='tooltip'
          data-placement='top'
          data-original-title='Sing Out'
        >
          <i data-feather='log-out' className='ht-15'></i>
        </a>
      </div>
    </div>
  );
}
