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
					<router-link class="nav-link" to="/">Home</router-link>
					<router-link class="nav-link" to="/contact">Contact</router-link>
					<router-link class="nav-link" to="/resume">Resume</router-link>
				</div>
			</div>
		 </div>
	</nav>
  `,
};