import React from 'react'
import Footer from '../component/Footer'
import Navigation from '../component/Navigation';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <div>
        <Navigation/>
            <div className="breadcrumb-box">
  <div className="container">
    <ul className="breadcrumb">
      <li><NavLink to="/">Home</NavLink> </li>
      <li className="active">Services</li>
    </ul>	
  </div>
</div>
{/* <!-- .breadcrumb-box --> */}

<section id="main">
  <header className="page-header">
    <div className="container">
      <h1 className="title">Services</h1>
    </div>	
  </header>
  
  <article className="content">
	<div className="container">
	  <div className="row bottom-padding-mini">
		<div className="big-services-box col-sm-4 col-md-4">
		  <NavLink to="#">
			<div className="big-icon border border-info">
			  <span className="livicon" data-n="brush" data-s="62" data-c="#0098ca" data-hc="#0098ca"></span>
			</div>
			<h4 className="title">Web Design</h4>
			<div className="text-small">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</div>
		  </NavLink>
		</div>
        {/* <!-- .services-box-two --> */}
		
		<div className="big-services-box col-sm-4 col-md-4">
		  <NavLink to="#">
			<div className="big-icon border border-info">
			  <span className="livicon" data-n="cellphone" data-s="62" data-c="#0098ca" data-hc="#0098ca"></span>
			</div>
			<h4 className="title">Responsive & Retina-Ready</h4>
			<div className="text-small">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those intereste. It is a long established fact that a reader.</div>
		  </NavLink>
		</div>
        {/* <!-- .services-box-two --> */}
		
		<div className="big-services-box col-sm-4 col-md-4">
		  <NavLink to="#">
			<div className="big-icon border border-info">
			  <span className="livicon" data-n="linechart" data-s="62" data-c="#0098ca" data-hc="#0098ca"></span>
			</div>
			<h4 className="title">Internet Marketing</h4>
			<div className="text-small">The readable content of a page when looking at its layout. The point of using. Duis aute irure dolor reprehenderit in voluptate velit esse cillum.</div>
		  </NavLink>
		</div>
        {/* <!-- .services-box-two --> */}
	  </div>
	</div>
	
	<div className="full-width-box bottom-padding cm-padding-bottom-36">
	  <div className="fwb-bg fwb-blur" data-blur-image="content/img/band-5.jpg" data-blur-amount="3">
		<div className="overlay"></div>
	  </div>
	  
	  <div className="container">
		<div className="title-box text-center title-white">
		  <h2 className="h1 title">Other Services</h2>
		</div>
	  
		<p className="text-center white">Proin vel ultrices erat. Etiam et enim libero. Duis sollicitudin auctor faucibus. Duis tristique feugiat velit quis lobortis. Phasellus dignissim lobortis dignissim.</p>
	  
		<div className="row services white">
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInLeft">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="tablet" data-s="42" data-c="#fff" data-hc="0"></div>
			  </div>
			  <h6 className="title">Web Design</h6>
			  <div className="text-small">Content management systens Virtual shops and ecommerce Presentation websites Online catalogues</div>
			</NavLink>
		  </div>
		  
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInDown">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="brush" data-s="42" data-c="#fff" data-hc="0"></div>
			  </div>
			  <h6 className="title">Graphic Design</h6>
			  <div className="text-small">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those intereste.</div>
			</NavLink>
		  </div>
		  
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInRight">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="responsive" data-s="42" data-c="#fff" data-hc="0" data-d="1600"></div>
			  </div>
			  <h6 className="title">Internet Marketing</h6>
			  <div className="text-small">Content management systens Virtual shops and ecommerce Presentation websites Online catalogues</div>
			</NavLink>
		  </div>
		  
		  <div className="clearfix"></div>
		  
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInLeft">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="piggybank" data-s="42" data-c="#fff" data-hc="0"></div>
			  </div>
			  <h6 className="title">Graphic Design</h6>
			  <div className="text-small">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those intereste.</div>
			</NavLink>
		  </div>
		  
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInUp">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="users" data-s="42" data-c="#fff" data-hc="0" data-d="1600"></div>
			  </div>
			  <h6 className="title">Internet Marketing</h6>
			  <div className="text-small">Content management systens Virtual shops and ecommerce Presentation websites Online catalogues</div>
			</NavLink>
		  </div>
		  
		  <div className="service col-sm-4 col-md-4" data-appear-animation="bounceInRight">
			<NavLink to="#">
			  <div className="icon border">
				<div className="livicon" data-n="thumbs-up" data-s="42" data-c="#fff" data-hc="0"></div>
			  </div>
			  <h6 className="title">Graphic Design</h6>
			  <div className="text-small">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those intereste.</div>
			</NavLink>
		  </div>
		</div>
		<div className="clearfix"></div>
	  </div>
	</div>
    {/* <!-- .full-width-box --> */}
		
	<div className="container">
	  <div className="title-box">
		<h2 className="h1 title">Extra Services</h2>
	  </div>
	  
	  <p>Proin vel ultrices erat. Etiam et enim libero. Duis sollicitudin auctor faucibus. Duis tristique feugiat velit quis lobortis. Phasellus dignissim lobortis dignissim. Vestibulum aliquet.</p>
	  
	  <div className="row">
		<div className="col-sm-4 bottom-padding">
		  <p className="text-center"><img className="replace-2x img-rounded" src="content/img/office-1.jpg" width="370" height="185" alt=""/></p>
		  <h5><NavLink to="#" className="no-border">Lorem ipsum dolor.</NavLink></h5>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur molestiae illum cum facere deserunt a enim harum eaque fugit.</p>
		</div>
		
		<div className="col-sm-4 bottom-padding">
		  <p className="text-center"><img className="replace-2x img-rounded" src="content/img/office-2.jpg" width="370" height="185" alt=""/></p>
		  <h5><NavLink to="#" className="no-border">Lorem ipsum dolor.</NavLink></h5>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur molestiae illum cum facere deserunt a enim harum eaque fugit.</p>
		</div>
		
		<div className="col-sm-4 bottom-padding">
		  <p className="text-center"><img className="replace-2x img-rounded" src="content/img/office-3.jpg" width="370" height="185" alt=""/></p>
		  <h5><NavLink to="#" className="no-border">Lorem ipsum dolor.</NavLink></h5>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur molestiae illum cum facere deserunt a enim harum eaque fugit.</p>
		</div>
	  </div>
	  
	  <div className="row">
		<div className="col-sm-8">
			<h5>Interested in working with us? Or got a question?<br/>Maybe just want to say hello?</h5>
		</div>
		<div className="col-sm-4 text-right text-center-mobile">
		  <NavLink to="#" className="btn btn-default btn-lg">Contact Us Now</NavLink>
		</div>
	  </div>
	</div>
    {/* <!-- .container --> */}
  </article>
  {/* <!-- .content --> */}
</section>
{/* <!-- #main --> */}
<Footer/>
</div>
    )
}

export default Services;
