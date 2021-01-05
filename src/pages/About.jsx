import React from 'react'
import Footer from '../component/Footer'
import Navigation from '../component/Navigation';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
        <Navigation/>
            <div className="breadcrumb-box">
  <div className="container">
    <ul className="breadcrumb">
      <li><NavLink to="/">Home</NavLink> </li>
      <li className="active">About Us</li>
    </ul>	
  </div>
</div>
{/* <!-- .breadcrumb-box --> */}

<section id="main">
  <header className="page-header">
    <div className="container">
      <h1 className="title">About Us</h1>
    </div>	
  </header>
  <div className="container">
    <div className="row">
      <article className="content col-sm-12 col-md-12">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quisquam, culpa, soluta hic aperiam porro ipsum nisi optio necessitatibus commodi dolorum sapiente voluptatem officiis similique maiores! Quaerat, quisquam quibusdam quam iure vel accusamus nisi velit est at et temporibus sunt delectus dolorem. Reprehenderit, possimus aperiam iste hic repudiandae tempora sit laborum ut velit id! Obcaecati at architecto in vitae porro.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, similique nostrum perspiciatis cumque deleniti eaque odio temporibus accusantium necessitatibus? Perferendis, pariatur, ea, laborum ullam sit enim non odio fugiat in quas minima explicabo esse distinctio blanditiis doloremque eum eius repudiandae voluptatem aspernatur accusantium praesentium doloribus ratione aliquam inventore laudantium maiores aperiam minus quisquam unde. At asperiores voluptatem qui molestiae libero.</p>
		<div className="row">
		  <div className="clearfix"></div>
		  <div className="bottom-padding col-sm-6 col-md-6">
			<div className="title-box">
			  <h2 className="title">Who Is Infostyle</h2>
			</div>
			<div className="panel-group one-open" id="accordion">
			  <div className="panel panel-default panel-bg active">
				<div className="panel-heading">
				  <div className="panel-title">
					<NavLink data-toggle="collapse" data-parent="#accordion" to="#collapse1">
					  Portfolio Pages
					</NavLink>
				  </div>
				</div>
				<div id="collapse1" className="panel-collapse collapse in">
				  <div className="panel-body">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis quas ullam pariatur earum dignissimos consequatur velit nemo libero?
				  </div>
				</div>
			  </div>
			  
			  <div className="panel panel-default panel-bg">
				<div className="panel-heading">
				  <div className="panel-title">
					<NavLink data-toggle="collapse" data-parent="#accordion" to="#collapse2">
					  Gallery Pages
					</NavLink>
				  </div>
				</div>
				<div id="collapse2" className="panel-collapse collapse">
				  <div className="panel-body">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque natus quaerat voluptate? Asperiores hic dolore voluptate corporis obcaecati reiciendis sunt ipsam iste. Eligendi inventore voluptatibus quia saepe odit deserunt nam?
				  </div>
				</div>
			  </div>
			  
			  <div className="panel panel-default panel-bg">
				<div className="panel-heading">
				  <div className="panel-title">
					<NavLink data-toggle="collapse" data-parent="#accordion" to="#collapse3">
					  Styles Pages
					</NavLink>
				  </div>
				</div>
				<div id="collapse3" className="panel-collapse collapse">
				  <div className="panel-body">
					<img className="replace-2x" src="content/img/animations.png" className="alignleft" width="100" height="62" alt=""/>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa esse obcaecati repudiandae veniam amet modi recusandae optio earum sequi accusantium culpa vitae iste sit commodi eaque voluptatem officia quam. Molestiae nobis quidem atque explicabo eum facilis libero porro in fugiat pariatur molestias maiores voluptates rerum ipsa architecto quae assumenda harum fuga modi accusantium nihil dolor consequatur totam commodi quam quas neque dolorem veritatis unde adipisci ad illo excepturi quia facere reprehenderit non alias cum minima labore quo repudiandae perferendis?
				  </div>
				</div>
			  </div>
			  
			  <div className="panel panel-default panel-bg">
				<div className="panel-heading">
				  <div className="panel-title">
					<NavLink data-toggle="collapse" data-parent="#accordion" to="#collapse4">
					  Shop Pages
					</NavLink>
				  </div>
				</div>
				<div id="collapse4" className="panel-collapse collapse">
				  <div className="panel-body">
					<img className="replace-2x" src="content/img/animations.png" className="alignleft" width="100" height="62" alt=""/>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ipsa esse obcaecati repudiandae veniam amet modi recusandae optio earum sequi accusantium culpa vitae iste sit commodi eaque voluptatem officia quam. Molestiae nobis quidem atque explicabo eum facilis libero porro in fugiat pariatur molestias maiores voluptates rerum ipsa architecto quae assumenda harum fuga modi accusantium nihil dolor consequatur totam commodi quam quas neque dolorem veritatis unde adipisci ad illo excepturi quia facere reprehenderit non alias cum minima labore quo repudiandae perferendis?
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div className="bottom-padding col-sm-6 col-md-6">
			<div className="title-box">
			  <h2 className="title">Our Crazy Skills</h2>
			</div>
			<div className="progress progress-striped active" data-appear-progress-animation="80%">
			  <div className="progress-bar progress-bar-warning">Web Design 80%</div>
			</div>
			
			<div className="progress progress-striped" data-appear-progress-animation="70%">
			  <div className="progress-bar progress-bar-danger">HTML/CSS 70%</div>
			</div>
			
			<div className="progress progress-striped hover" data-appear-progress-animation="40%">
			  <div className="progress-bar progress-bar-success">Opencart 40%</div>
			</div>

			<div className="progress progress-striped active hover" data-appear-progress-animation="58%">
			  <div className="progress-bar progress-bar-info">WordPress 58%</div>
			</div>
		  </div>
		</div>
		  
		<div className="clearfix"></div>
		  
		<div className="carousel-box bottom-padding bottom-padding-mini load" data-autoplay-disable="true">
		  <div className="title-box no-margin">
			<NavLink className="next" to="#">
			  <svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xmlSpace="preserve">
				<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="1,0.001 0,1.001 7,8 0,14.999 1,15.999 9,8 "></polygon>
			  </svg>
			</NavLink>
			<NavLink className="prev" to="#">
			  <svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xmlSpace="preserve">
				<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="8,15.999 9,14.999 2,8 9,1.001 8,0.001 0,8 "></polygon>
			  </svg>
			</NavLink>
			<h2 className="title">Meet Our Team</h2>
		  </div>
		  
		  <div className="clearfix"></div>
		  
		  <div className="row">
			<div className="carousel">
			  <div className="col-sm-3 col-md-3 employee rotation">
				<div className="default">
				  <div className="image">
					<img className="replace-2x" src="content/img/team-1.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div className="description">
					<div className="vertical">
					  <h3 className="name">Mett Rayan</h3>
					  <div className="role">Manager</div>	
					</div>
				  </div>
				</div>
				<div className="employee-hover">
				  <h3 className="name">Mett Rayan</h3>
				  <div className="role">Manager</div>
				  <div className="image">
					<img className="replace-2x" src="content/img/team-1.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div>
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					<div className="contact"><b>Email: </b>mett@itembridge.com</div>
					<div className="contact"><b>Phone: </b>11 555 333 77</div>
				  </div>
				  <div className="social">
					<NavLink className="icon rounded" to="#"><span className="icon-facebook"><i className="fa fa-facebook"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-twitter"><i className="fa fa-twitter"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-google"><i className="fa fa-google"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-linkedin"><i className="fa fa-linkedin"></i></span></NavLink>
				  </div>
				</div>
                {/* <!-- .employee-hover --> */}
			  </div>
              {/* <!-- .employee--> */}
			  
			  <div className="col-sm-3 col-md-3 employee rotation">
				<div className="default">
				  <div className="image">
					<img className="replace-2x" src="content/img/team-2.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div className="description">
					<div className="vertical">
					  <h3 className="name">Jon O. Example</h3>
					  <div className="role">Web designer</div>	
					</div>
				  </div>
				</div>
				<div className="employee-hover">
				  <h3 className="name">Jon O. Example</h3>
				  <div className="role">Web designer</div>
				  <div className="image">
					<img className="replace-2x" src="content/img/team-2.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div>
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					<div className="contact"><b>Email: </b>mett@itembridge.com</div>
					<div className="contact"><b>Phone: </b>11 555 333 77</div>
				  </div>
				  <div className="social">
					<NavLink className="icon rounded" to="#"><span className="icon-facebook"><i className="fa fa-facebook"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-twitter"><i className="fa fa-twitter"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-google"><i className="fa fa-google"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-linkedin"><i className="fa fa-linkedin"></i></span></NavLink>
				  </div>
				</div>
                {/* <!-- .employee-hover --> */}
			  </div>
              {/* <!-- .employee--> */}

              <div className="col-sm-3 col-md-3 employee rotation">
				<div className="default">
				  <div className="image">
					<img className="replace-2x" src="content/img/team-3.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div className="description">
					<div className="vertical">
					  <h3 className="name">Turanga Leela</h3>
					  <div className="role">Graphic designer</div>	
					</div>
				  </div>
				</div>
				<div className="employee-hover">
				  <h3 className="name">Turanga Leela</h3>
				  <div className="role">Graphic designer</div>
				  <div className="image">
					<img className="replace-2x" src="content/img/team-3.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div>
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					<div className="contact"><b>Email: </b>mett@itembridge.com</div>
					<div className="contact"><b>Phone: </b>11 555 333 77</div>
				  </div>
				  <div className="social">
					<NavLink className="icon rounded" to="#"><span className="icon-facebook"><i className="fa fa-facebook"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-twitter"><i className="fa fa-twitter"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-google"><i className="fa fa-google"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-linkedin"><i className="fa fa-linkedin"></i></span></NavLink>
				  </div>
				</div>
                {/* <!-- .employee-hover --> */}
			  </div>
              {/* <!-- .employee -->*/}
			  
			  <div className="col-sm-3 col-md-3 employee rotation">
				<div className="default">
				  <div className="image">
					<img className="replace-2x" src="content/img/team-4.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div className="description">
					<div className="vertical">
					  <h3 className="name">David X. Cohen</h3>
					  <div className="role">Developer</div>	
					</div>
				  </div>
				</div>
				<div className="employee-hover">
				  <h3 className="name">David X. Cohen</h3>
				  <div className="role">Developer</div>
				  <div className="image">
					<img className="replace-2x" src="content/img/team-4.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div>
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					<div className="contact"><b>Email: </b>mett@itembridge.com</div>
					<div className="contact"><b>Phone: </b>11 555 333 77</div>
				  </div>
				  <div className="social">
					<NavLink className="icon rounded" to="#"><span className="icon-facebook"><i className="fa fa-facebook"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-twitter"><i className="fa fa-twitter"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-google"><i className="fa fa-google"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-linkedin"><i className="fa fa-linkedin"></i></span></NavLink>
				  </div>
				</div>
                {/* <!-- .employee-hover --> */}
			  </div>
              {/* <!-- .employee--> */}
			  
			  <div className="col-sm-3 col-md-3 employee rotation">
				<div className="default">
				  <div className="image">
					<img className="replace-2x" src="content/img/team-5.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div className="description">
					<div className="vertical">
					  <h3 className="name">Philip Fry</h3>
					  <div className="role">Creative director</div>	
					</div>
				  </div>
				</div>
				<div className="employee-hover">
				  <h3 className="name">Philip Fry</h3>
				  <div className="role">Creative director</div>
				  <div className="image">
					<img className="replace-2x" src="content/img/team-5.jpg" alt="" title="" width="270" height="270"/>
				  </div>
				  <div>
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					<div className="contact"><b>Email: </b>mett@itembridge.com</div>
					<div className="contact"><b>Phone: </b>11 555 333 77</div>
				  </div>
				  <div className="social">
					<NavLink className="icon rounded" to="#"><span className="icon-facebook"><i className="fa fa-facebook"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-twitter"><i className="fa fa-twitter"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-google"><i className="fa fa-google"></i></span></NavLink>
					<NavLink className="icon rounded" to="#"><span className="icon-linkedin"><i className="fa fa-linkedin"></i></span></NavLink>
				  </div>
				</div>
                {/* <!-- .employee-hover --> */}
			  </div>
              {/* <!-- .employee --> */}
			</div>
		  </div>
		</div>

		<div className="carousel-box load overflow" data-autoplay-disable="true">
		  <div className="title-box">
			<NavLink className="next" to="#">
			  <svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xmlSpace="preserve">
				<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="1,0.001 0,1.001 7,8 0,14.999 1,15.999 9,8 "></polygon>
			  </svg>
			</NavLink>
			<NavLink className="prev" to="#">
			  <svg x="0" y="0" width="9px" height="16px" viewBox="0 0 9 16" enable-background="new 0 0 9 16" xmlSpace="preserve">
				<polygon fill-rule="evenodd" clip-rule="evenodd" fill="#fcfcfc" points="8,15.999 9,14.999 2,8 9,1.001 8,0.001 0,8 "></polygon>
			  </svg>
			</NavLink>
			<h2 className="title">Our Happy Clients</h2>
		  </div>
		  
		  <div className="clearfix"></div>
		  
		  <div className="row">
			<div className="carousel carousel-links">
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-5.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-2.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-3.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-4.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-1.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-6.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			  
			  <div className="col-sm-3 col-md-2">
				<NavLink to="#">
				  <img className="replace-2x" src="content/img/team-7.jpg" className="img-rounded" width="170" height="170" alt=""/>
				</NavLink>
			  </div>
			</div>
		  </div>
		</div>
      </article>
      {/* <!-- .content --> */}
    </div>
  </div>
  {/* <!-- .container --> */}
</section>
{/* <!-- #main --> */}
<Footer/>

</div>
    )
}

export default About;
