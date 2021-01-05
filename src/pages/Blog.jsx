import React from 'react'
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Navigation/>
            <div className="breadcrumb-box">
  <div className="container">
    <ul className="breadcrumb">
      <li><NavLink to="/">Home</NavLink> </li>
      <li className="active">Our Blog</li>
    </ul>	
  </div>
</div>
{/* <!-- .breadcrumb-box --> */}

<section id="main">
  <header className="page-header">
    <div className="container">
      <h1 className="title">Our Blog</h1>
    </div>	
  </header>
  <div className="container">
    <div className="row">
      <div className="content blog col-sm-9 col-md-9">
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Excepteur sint occaecat cupidatat</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Phasellus Vitae Vestibulum</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Excepteur sint occaecat cupidatat</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Phasellus Vitae Vestibulum</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Excepteur sint occaecat cupidatat</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Phasellus Vitae Vestibulum</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Excepteur sint occaecat cupidatat</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Phasellus Vitae Vestibulum</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Excepteur sint occaecat cupidatat</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}
		
		<article className="post">
		  <h2 className="entry-title"><NavLink to="/blogview">Phasellus Vitae Vestibulum</NavLink></h2>
		  <div className="entry-content">
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		  </div>
		  <footer className="entry-meta">
			<span className="autor-name">Mike Example</span>,
			<span className="time">03.11.2012</span>
			<span className="separator">|</span>
			<span className="meta">Posted in <NavLink to="#">Sports</NavLink>, <NavLink to="#">Movies</NavLink></span>
			<span className="comments-link pull-right">
			  <NavLink to="#"><i className="fa fa-comment"></i> 3 comment(s)</NavLink>
			</span>
		  </footer>
		</article>
        {/* <!-- .post --> */}

		<div className="pagination-box">
		  <ul className="pagination">
			<li className="disabled"><NavLink to="#"><i className="fa fa-angle-left"></i></NavLink></li>
			<li className="active"><span>1</span></li>
			<li><NavLink to="#">2</NavLink></li>
			<li><NavLink to="#">3</NavLink></li>
			<li className="disabled"><NavLink to="#">...</NavLink></li>
			<li><NavLink to="#">9</NavLink></li>
			<li><NavLink to="#"><i className="fa fa-angle-right"></i></NavLink></li>
		  </ul>
		  <i className="pagination-text">Displaying 1 to 10 (of 100 posts)</i>
		</div>
        {/* <!-- .pagination-box --> */}
      </div>
      {/* <!-- .content --> */}
	  
      <div id="sidebar" className="sidebar col-sm-3 col-md-3">
		<aside className="widget list">
		  <header>
			<h3 className="title">Blog Categories</h3>
		  </header>
		  <ul>
			<li><NavLink to="#">Entertainment</NavLink></li>
			<li><NavLink to="#">Fashion</NavLink></li>
			<li><NavLink to="#">Sports</NavLink></li>
			<li><NavLink to="#">Vacation</NavLink></li>
			<li><NavLink to="#">Movies</NavLink></li>
			<li><NavLink to="#">Food</NavLink></li>
		  </ul>
		</aside>
        {/* <!-- .list --> */}
		
		<aside className="widget list">
		  <header>
			<h3 className="title">Archives</h3>
		  </header>
		  <ul>
			<li><NavLink to="#">August 2012</NavLink></li>
			<li><NavLink to="#">September 2012</NavLink></li>
			<li><NavLink to="#">October 2012</NavLink></li>
			<li><NavLink to="#">November 2012</NavLink></li>
			<li><NavLink to="#">December 2012</NavLink></li>
		  </ul>
		</aside>
        {/* <!-- .list --> */}
		
		<aside className="widget tags">
		  <header>
			<h3 className="title">Tags</h3>
		  </header>
		  <ul className="clearfix">
			<li><NavLink to="#">california</NavLink></li>
			<li><NavLink to="#">canada</NavLink></li>
			<li><NavLink to="#">canon</NavLink></li>
			<li><NavLink to="#">cat</NavLink></li>
			<li><NavLink to="#">chicago</NavLink></li>
			<li><NavLink to="#">christmas</NavLink></li>
			<li><NavLink to="#">mars</NavLink></li>
			<li><NavLink to="#">church</NavLink></li>
			<li><NavLink to="#">city</NavLink></li>
			<li><NavLink to="#">clouds</NavLink></li>
			<li><NavLink to="#">color</NavLink></li>
			<li><NavLink to="#">concert</NavLink></li>
			<li><NavLink to="#">dance</NavLink></li>
			<li><NavLink to="#">day</NavLink></li>
			<li><NavLink to="#">dog</NavLink></li>
			<li><NavLink to="#">travels</NavLink></li>
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

export default Blog;
