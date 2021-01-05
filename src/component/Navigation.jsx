import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="page-box">
<div className="page-box-content">

<header className="header header-two">
  <div className="header-wrapper">
	<div className="container">
	  <div className="row">
		<div className="col-xs-6 col-md-2 col-lg-3 logo-box">
		  <div className="logo">
				<NavLink to="/">
					<img src="img/logo.svg" className="logo-img" alt="logo"/>
				</NavLink>
		  </div>
		</div>
        {/* <!-- .logo-box --> */}
		
		<div className="col-xs-6 col-md-10 col-lg-9 right-box">
		  <div className="right-box-wrapper">
			<div className="header-icons">
			  <div className="search-header hidden-600">
				<a href="#">
				  <svg x="0" y="0" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve">
					<path d="M12.001,10l-0.5,0.5l-0.79-0.79c0.806-1.021,1.29-2.308,1.29-3.71c0-3.313-2.687-6-6-6C2.687,0,0,2.687,0,6
					s2.687,6,6,6c1.402,0,2.688-0.484,3.71-1.29l0.79,0.79l-0.5,0.5l4,4l2-2L12.001,10z M6,10c-2.206,0-4-1.794-4-4s1.794-4,4-4
					s4,1.794,4,4S8.206,10,6,10z"></path>
					<image src="img/png-icons/search-icon.png" alt="" width="16" height="16" style={{verticalAlign: "top"}} />
				  </svg>
				</a>
			  </div>
              {/* <!-- .search-header--> */}
              <div className="phone-header hidden-600">
				<a href="#">
				  <svg x="0" y="0" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve">
					<path d="M11.001,0H5C3.896,0,3,0.896,3,2c0,0.273,0,11.727,0,12c0,1.104,0.896,2,2,2h6c1.104,0,2-0.896,2-2
					c0-0.273,0-11.727,0-12C13.001,0.896,12.105,0,11.001,0z M8,15c-0.552,0-1-0.447-1-1s0.448-1,1-1s1,0.447,1,1S8.553,15,8,15z
					M11.001,12H5V2h6V12z"></path>
					{/* <image src="img/png-icons/phone-icon.png" alt="" width="16" height="16" style="vertical-align: top;" > */}
				  </svg>
				</a>
			  </div>
              {/* <!-- .phone-header --> */}
			</div>
            {/* <!-- .header-icons --> */}
			
			<div className="primary">
			  <div className="navbar navbar-default" role="navigation">
				<button type="button" className="navbar-toggle btn-navbar collapsed" data-toggle="collapse" data-target=".primary .navbar-collapse">
				  <span className="text">Menu</span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				  <span className="icon-bar"></span>
				</button>
	  
				<nav className="collapse collapsing navbar-collapse">
				  <ul className="nav navbar-nav navbar-center">
					<li >
					  <NavLink to="/">Home<span className="item-new">New</span></NavLink>
					  
					</li>
					<li >
					  <NavLink to="/about">About<span className="item-new">New</span></NavLink>
					  
					</li>
					<li >
					  <NavLink to="/contact">Contact</NavLink>
					  
					</li>
					<li >
					  <NavLink to="/blog">Blog</NavLink>
					  
					</li>
					<li >
					  <NavLink to="/services">Services</NavLink>
					  
					</li>
					<li >
					  <NavLink to="/career">Career</NavLink>
					  
					</li>
				  </ul>
				</nav>
			  </div>
			</div>
            {/* <!-- .primary --> */}
		  </div>
		</div>
		
		<div className="phone-active col-sm-9 col-md-9">
		  <a href="#" className="close"><span>close</span>×</a>
		  <span className="title">Call Us</span> <strong>+1 (777) 123 45 67</strong>
		</div>
		<div className="search-active col-sm-9 col-md-9">
		  <a href="#" className="close"><span>close</span>×</a>
		  <form name="search-form" className="search-form">
			<input className="search-string form-control" type="search" placeholder="Search here" name="search-string"/>
			<button className="search-submit">
			  <svg x="0" y="0" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xmlSpace="preserve">
				<path fill="#231F20" d="M12.001,10l-0.5,0.5l-0.79-0.79c0.806-1.021,1.29-2.308,1.29-3.71c0-3.313-2.687-6-6-6C2.687,0,0,2.687,0,6
				s2.687,6,6,6c1.402,0,2.688-0.484,3.71-1.29l0.79,0.79l-0.5,0.5l4,4l2-2L12.001,10z M6,10c-2.206,0-4-1.794-4-4s1.794-4,4-4
				s4,1.794,4,4S8.206,10,6,10z"></path>
				<image src="img/png-icons/search-icon.png" alt="" width="16" height="16" style={{verticalAlign: "top"}}/>
			  </svg>
			</button>
		  </form>
		</div>
	  </div>
      {/* <!--.row --> */}
	</div>
  </div>
  {/* <!-- .header-wrapper --> */}
</header>
{/* <!-- .header --> */}




        </div>
        </div>
        </div>
    )
}

export default Navigation;
