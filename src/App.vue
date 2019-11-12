<template>
  <div id="app">
   
    <!-- Start Navbar -->
    <nav class="navbar navbar-expand-lg navbar-default navbar-custom navbar-light">
        <div class="container">
            <a class="navbar-brand logo" href="index.html">Time Tracker</a>

            <div class="navbar-header">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="mdi mdi-menu"></span>
            </button>
            </div>

            <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/activities">Activities</router-link>
                    </li>

                    <li class="nav-item">
                      <router-link class="nav-link" to="/results">Record</router-link>
                    </li>

                    <li class="nav-item">
                      <router-link class="nav-link" to="/graph">Graph</router-link>
                    </li>


                    <li class="nav-item">
                      <router-link class="nav-link" to="/donut">Donut</router-link>
                    </li>
    
                </ul>
            </div>


            <div class="dropdown show">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Get Connected
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="/Login">Login</a>
                <a class="dropdown-item" href="/Logout">Logout</a>
                <a class="dropdown-item" href="/Signup">Signup</a>
              </div>
            </div>

        </div>
    </nav>
    <!-- End Navbar -->
 
   

    <router-view/>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">



          <div class="row">
            <div class="col-lg-12">
              <div class="text-center">
                <div class="logo center-block"><img src="images/logo.png" alt="" class=""></div>

                <div class="text-center">Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a>
                </div>

                  <p class="text-muted m-b-0 copyright-txt"> © Eagle 2017 - 2019 Zoyothemes</p>

             

              </div>
            </div>
          </div>
          <!-- end row -->

        </div>
    </footer>
    <!-- END FOOTER --> 
  </div>
</template>

<style>



body {
  
  background-image: url('/images/background/weather.png');
}

</style>

