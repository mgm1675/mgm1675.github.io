const Navigation = {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<button
			  class="navbar-toggler"
			  type="button"
			  data-mdb-toggle="collapse"
			  data-mdb-target="#navbarNavAltMarkup"
			  aria-controls="navbarNavAltMarkup"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
				<i class="fas fa-bars"></i>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<a class="nav-link" href="#"><router-link class="nav-link" to="/">Home</router-link></a>
					<a class="nav-link" href="#"><router-link class="nav-link" to="/contact">Contact</router-link></a>
					<a class="nav-link" href="#"><router-link class="nav-link" to="/resume">Resume</router-link></a>
				</div>
			</div>
		 </div>
	</nav>
  `,
};