import React from 'react'
import Footer from '../component/Footer'
import Navigation from '../component/Navigation';
import { NavLink } from 'react-router-dom';

const BlogView = () => {
    return (
        <div>
            <Navigation/>
            <div className="breadcrumb-box">
  <div className="container">
    <ul className="breadcrumb">
      <li><NavLink to="/">Home</NavLink> </li>
      <li><a href="http://template.progressive.itembridge.com/blog-view.html">Our Blog</a> </li>
      <li className="active">Excepteur Sint Occaecat</li>
    </ul>	
  </div>
</div>
{/* <!-- .breadcrumb-box --> */}

<section id="main">
  <header className="page-header">
    <div className="container">
      <h1 className="title">Excepteur Sint Occaecat </h1>
    </div>	
  </header>
  <div className="container">
    <div className="row">
      <div className="content blog blog-post col-sm-9 col-md-9">
		<article className="post">
		  <div className="entry-content">
			<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis, eros a suscipit sodales, tortor nibh rhoncus est, vel vestibulum velit metus id erat. Duis eu nibh nunc, non dapibus velit. Pellentesque hendrerit orci dolor. Ut et risus nisi. Mauris nisi quam, aliquam sed tristique in, euismod eu urna. Integer tincidunt condimentum odio, a consequat nibh tempus et. Nulla vulputate felis ut leo varius vehicula. </p>
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <a href="#">Sports</a>, <a href="#">Movies</a></span>
			<span className="comments-link pull-right">
			  <a href="#"><i className="fa fa-comment"></i> 3 comment(s)</a>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
	
		<h3 className="title slim">Comments</h3>
		<ul className="commentlist">
		  <li>
			<img className="replace-2x avatar" width="84" height="84" src="content/img/avatar-1.jpg" alt=""/>
			<div className="meta">
			  <span>Mike Example</span>, 
			  <span className="time">03.11.2013, 10:45:</span>
			</div>
			<p className="description">
			  Suspendisse at placerat turpis. Duis luctus erat vel magna pharetra aliquet. Maecenas tincidunt feugiat ultricies. Phasellus et dui risus. Vestibulum adipiscing, eros quis lobortis dictum.  It enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		  </li>
		  <li>
			<img className="replace-2x avatar" width="84" height="84" src="content/img/avatar-2.jpg" alt=""/>
			<div className="meta">
			  <span>Mike Example</span>, 
			  <span className="time">03.11.2013, 10:45:</span>
			</div>
			<p className="description">
			  Etiam mollis volutpat odio, id euismod justo gravida a. Aliquam erat volutpat. Phasellus faucibus venenatis lorem, vitae commodo elit pretium et. Duis rhoncus lobortis congue. Vestibulum et purus dui, vel porta lectus. Sed vulputate pulvinar adipiscing. It enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		  </li>
		  <li>
			<img className="replace-2x avatar" width="84" height="84" src="content/img/avatar-3.jpg" alt=""/>
			<div className="meta">
			  <span>Mike Example</span>, 
			  <span className="time">03.11.2013, 10:45:</span>
			</div>
			<p className="description">
			  Etiam mollis volutpat odio, id euismod justo gravida a. Aliquam erat volutpat. Phasellus faucibus venenatis lorem, vitae commodo elit pretium et. Duis rhoncus lobortis congue. Vestibulum et purus dui, vel porta lectus. Sed vulputate pulvinar adipiscing. It enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
			</p>
		  </li>
		</ul>
		
		<h3 className="title slim">Leave a Reaply</h3>
		
		<form className="comments-form">
		  <label>Name: <span className="required">*</span></label>
		  <div className="row">
			<div className="col-sm-6 col-md-6">
			  <input className="form-control" type="text"/>
			</div>
		  </div>
		  
		  <label>Email Adress: <span className="required">*</span></label>
		  <div className="row">
			<div className="col-sm-6 col-md-6">
			  <input className="form-control" type="email"/>
			</div>
		  </div>

		  <label>Comment: </label>
		  <div className="row">
			<div className="comment-box col-sm-10 col-md-10">
			  <textarea className="form-control"></textarea>
			  <i>Note: HTML is not translated!</i>
			</div>
		  </div>

		  <div className="clearfix"></div>
		  <div className="button-set">
			<span className="required pull-right"><b>*</b> Required Field</span>
			<button className="btn btn-default">Submit</button>
		  </div>
		</form>
      </div>
      {/* <!-- .content --> */}
	  
      <div id="sidebar" className="sidebar col-sm-3 col-md-3">
		<aside className="widget list">
		  <header>
			<h3 className="title">Blog Categories</h3>
		  </header>
		  <ul>
			<li><a href="#">Entertainment</a></li>
			<li><a href="#">Fashion</a></li>
			<li><a href="#">Sports</a></li>
			<li><a href="#">Vacation</a></li>
			<li><a href="#">Movies</a></li>
			<li><a href="#">Food</a></li>
		  </ul>
		</aside>
        {/* <!-- .list --> */}
		
		<aside className="widget list">
		  <header>
			<h3 className="title">Archives</h3>
		  </header>
		  <ul>
			<li><a href="#">August 2012</a></li>
			<li><a href="#">September 2012</a></li>
			<li><a href="#">October 2012</a></li>
			<li><a href="#">November 2012</a></li>
			<li><a href="#">December 2012</a></li>
		  </ul>
		</aside>
        {/* <!-- .list --> */}
		
		<aside className="widget tags">
		  <header>
			<h3 className="title">Tags</h3>
		  </header>
		  <ul className="clearfix">
			<li><a href="#">california</a></li>
			<li><a href="#">canada</a></li>
			<li><a href="#">canon</a></li>
			<li><a href="#">cat</a></li>
			<li><a href="#">chicago</a></li>
			<li><a href="#">christmas</a></li>
			<li><a href="#">mars</a></li>
			<li><a href="#">church</a></li>
			<li><a href="#">city</a></li>
			<li><a href="#">clouds</a></li>
			<li><a href="#">color</a></li>
			<li><a href="#">concert</a></li>
			<li><a href="#">dance</a></li>
			<li><a href="#">day</a></li>
			<li><a href="#">dog</a></li>
			<li><a href="#">travels</a></li>
		  </ul>
		</aside>
        {/* <!-- .tags --> */}
	  </div>
      {/* <!-- .sidebar --> */}
    </div>
  </div>
  {/* <!-- .container --> */}
</section>
{/* <!-- #main --> */}
<Footer/>
</div>
            
        
    )
}

export default BlogView;
