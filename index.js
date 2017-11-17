<!doctype html>
    var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Phonelite IT</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">




        <!--For Plugins external css-->
        <link rel="stylesheet" href="assets/css/plugins.css" />

        <!--Theme custom css -->
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/colors/maron.css">

        <!--Theme Responsive css-->

        <!-- Place favicon.ico in the root directory -->
            <link rel="stylesheet" href="css/bootstrap.css"/>
    <link rel="stylesheet" href="assets/css/stylesheet.css"/>
    <link rel="stylesheet" href="css/mdi.css"/>
  
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300,100,100italic,300italic,400italic,500,500italic,700italic,900' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/owl.carousel.css">
        <link rel="stylesheet" href="css/owl.theme.css">
        <link rel="stylesheet" href="css/magnific-popup.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Navbar content here -->
        <nav id="navbar" class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="img/Logo.png" alt=""></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#homescreen" class="smoothScroll"><i class="navbar-icon ion-home"></i>home<span class="sr-only">(current)</span></a></li>
                        <li><a href="#about-us" class="smoothScroll"><i class="navbar-icon ion-android-bookmark"></i>about</a></li>
                        <li><a href="#latest-work" class="smoothScroll"><i class="navbar-icon ion-android-image"></i>porfolio</a></li>
                        <li><a href="#services" class="smoothScroll"><i class="navbar-icon ion-android-bus"></i>services</a></li>
                        <li><a href="#blog" class="smoothScroll"><i class="navbar-icon ion-ios-compose-outline"></i>blog</a></li>
                        <li><a href="#testimonial" class="smoothScroll"><i class="navbar-icon ion-android-hangout"></i>testimonial</a></li>
                        <li><a href="#contact" class="smoothScroll"><i class="navbar-icon ion-android-contacts"></i>contact</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        
        <!-- Navbar content end -->
        
        <!-- Homescreen content here -->
        <section id="homescreen">
            <div class="video-container">
                <video volume="0" poster="video/PC-Typing.jpg" autoplay="autoplay"  preload  loop>
                    <source src="video/PC-Typing.mp4" type="video/mp4">
                    <source src="video/PC-Typing.webm" type="video/webm">
                    <source src="video/PC-Typing.ogv" type="video/ogg">
                </video>   
            </div>
            <div class="hero-content-wraper">
                <div class="container">
                    <div class="hero-content-inner">
                        <h2>Phonelite IT</h2>
                        <h3>choose a easy way.</h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- Homescreen content end -->
        
        
        <!-- About-us section end -->
         <section id="about-us" class="section bg-white">
            <section id="team" class="team bg-grey fix">
                <div class="container">
                    <div class="main_team roomy-80">
                        <div class="head_title text-center fix">
                            <h2 class="text-uppercase">Our Team</h2>
                            <h5>We have a talent with amazing skill</h5>
                        </div>

                        <div id="team-slid" class="carousel slide carousel-fade" data-ride="carousel">
                            <!-- Indicators -->
                            <ol class="carousel-indicators">
                                <li data-target="#team-slid" data-slide-to="0" class="active"></li>
                                <li data-target="#team-slid" data-slide-to="1"></li>
                                <li data-target="#team-slid" data-slide-to="2"></li>
                            </ol>

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="team_item team_skill">
                                                    <div class="team_author">
                                                        <h4>Lucian Buica</h4>
                                                        <p>CEO & FOunder</p>
                                                    </div>

                                                    <div class="team_skill_title fix m-top-40 m-bottom-40">
                                                        <h5>Best Skill</h5>
                                                    </div>

                                                    <div class="skill_bar sm-m-top-50 m-top-20"> 
                                                        <div class="teamskillbar clearfix m-top-20" data-percent="100%">
                                                            <h6 class="text-uppercase">Photoshop</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">WEB DESIGN</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="90%">
                                                            <h6 class="text-uppercase">LOGO Design</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">Wordpress</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->
                                                    </div><!-- End off skill bar -->

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item xs-m-top-30">
                                                    <div class="port_img">
                                                        <img src="assets/images/2.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item team_content xs-m-top-30">
                                                    <h4>Failure will never overtake me if my
                                                        determination to succeed is strong enough.</h4>
                                                    <h5 class="m-top-40">- Og Mandino</h5>

                                                    <div class="divider"></div>

                                                    <div class="team_socail">
                                                        <h5>Get In Touch</h5>
                                                        <ul class="list-inline m-top-20">
                                                            <li><a href="https://www.facebook.com/lucian.luccii"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                                            <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                                            <li><a href=""><i class="fa fa-behance"></i></a></li>
                                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                        </div><!-- End off row -->
                                    </div>
                                </div><!-- End off team -->

                                <div class="item">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="team_item team_skill">
                                                    <div class="team_author">
                                                        <h4>Lucian Dumitru</h4>
                                                        <p>CEO & FOunder</p>
                                                    </div>

                                                    <div class="team_skill_title fix m-top-40 m-bottom-40">
                                                        <h5>Best Skill</h5>
                                                    </div>

                                                    <div class="skill_bar sm-m-top-50 m-top-20"> 
                                                        <div class="teamskillbar clearfix m-top-20" data-percent="80%">
                                                            <h6 class="text-uppercase">Photoshop</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">WEB DESIGN</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="90%">
                                                            <h6 class="text-uppercase">LOGO Design</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">Wordpress</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->
                                                    </div><!-- End off skill bar -->

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item xs-m-top-30">
                                                    <div class="port_img">
                                                        <img src="assets/images/1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item team_content xs-m-top-30">
                                                    <h4>Failure will never overtake me if my
                                                        determination to succeed is strong enough.</h4>
                                                    <h5 class="m-top-40">- Og Mandino</h5>

                                                    <div class="divider"></div>

                                                    <div class="team_socail">
                                                        <h5>Get In Touch</h5>
                                                        <ul class="list-inline m-top-20">
                                                            <li><a href="https://www.facebook.com/dumitrul2?ref=bookmarks"><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                                            <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                                            <li><a href=""><i class="fa fa-behance"></i></a></li>
                                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                        </div><!-- End off row -->
                                    </div>
                                </div><!-- End off team -->

                                <div class="item">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="team_item team_skill">
                                                    <div class="team_author">
                                                        <h4>John Doe</h4>
                                                        <p>CEO & FOunder</p>
                                                    </div>

                                                    <div class="team_skill_title fix m-top-40 m-bottom-40">
                                                        <h5>Best Skill</h5>
                                                    </div>

                                                    <div class="skill_bar sm-m-top-50 m-top-20"> 
                                                        <div class="teamskillbar clearfix m-top-20" data-percent="80%">
                                                            <h6 class="text-uppercase">Photoshop</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">WEB DESIGN</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="90%">
                                                            <h6 class="text-uppercase">LOGO Design</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->

                                                        <div class="teamskillbar clearfix m-top-50" data-percent="75%">
                                                            <h6 class="text-uppercase">Wordpress</h6>
                                                            <div class="teamskillbar-bar"></div>
                                                        </div> <!-- End Skill Bar -->
                                                    </div><!-- End off skill bar -->

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item xs-m-top-30">
                                                    <div class="port_img">
                                                        <img src="assets/images/team-img1.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                            <div class="col-sm-4">
                                                <div class="team_item team_content xs-m-top-30">
                                                    <h4>Failure will never overtake me if my
                                                        determination to succeed is strong enough.</h4>
                                                    <h5 class="m-top-40">- Og Mandino</h5>

                                                    <div class="divider"></div>

                                                    <div class="team_socail">
                                                        <h5>Get In Touch</h5>
                                                        <ul class="list-inline m-top-20">
                                                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                                                            <li><a href=""><i class="fa fa-google-plus"></i></a></li>
                                                            <li><a href=""><i class="fa fa-behance"></i></a></li>
                                                            <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div><!-- End off col-sm-4 -->

                                        </div><!-- End off row -->
                                    </div>
                                </div><!-- End off team -->

                            </div>

                        </div>
                    </div><!-- End off row -->
                </div><!-- End off container -->
            </section>
        </section>
        <!-- About-us section end -->
        
        <!-- Counter section  -->
        <section id="counter" class="section" style="background:url(img/counter-bg.jpg)">
            <div class="counter-overlay"></div>
            <div class="container counter-content-container">
                <h3 class="counter-heading">Why will you love our theme?</h3>
                <div class="row">
                    <div class="col-md-3 text-center col-sm-6 col-xs-6">
                        <div class="counter-inner">
                            <h1><span class="counter">173</span></h1>
                            <p>Homepage</p>
                        </div>
                    </div>
                    <div class="col-md-3 text-center col-sm-6 col-xs-6">
                        <div class="counter-inner">
                            <h1><span class="counter">200</span>+</h1>
                            <p>Shortcodes & items</p>
                        </div>
                    </div>
                    <div class="col-md-3 text-center col-sm-6 col-xs-6">
                        <div class="counter-inner">
                            <h1><span class="counter">9518</span></h1>
                            <p>happy client</p>
                        </div>
                    </div>
                    <div class="col-md-3 text-center col-sm-6 col-xs-6">
                        <div class="counter-inner">
                            <h1><span class="counter">21</span></h1>
                            <p>different pages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Counter section  end-->
        
        <!-- LatestWork section -->
        <section id="latest-work" class="section bg-white">
            <div class="container">
                <div class="row section-heading">
                    <div class="col-md-12 heading-wraper">
                        <h2>
                            <span class="title">Our latest works</span>
                            <span class="separetor">|||</span>
                            <span class="subtitle">Make sure you know about us</span>
                            <a href="" class="btn btn-default btn-view-more pull-right">view all</a>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-1.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-2.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-3.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-4.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-5.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 col-portfolio-wiget">
                        <div class="portfolio-wiget">
                            <img class="img-responsive" src="img/portfolio-6.jpg" alt="">
                            <div class="hover-caption">
                                <p><i class="portfolio-caption-icon ion-thumbsup"></i>30 Appreciate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- LatestWork section  end-->
        
        <!-- Services section -->
         <section class="section section-lg bg-white text-center" id="services"> 
        <div class="shell-wide">
          <div class="text-center">
            <h3>Our Services</h3>
            <div class="divider divider-default"></div>
          </div>
          <div class="range range-50 range-xs-center offset-custom-2">
            <div class="cell-xs-10 cell-md-4 cell-lg-3">
              <div class="thumbnail-classic unit unit-sm-horizontal unit-md-vertical thumbnail-classic-primary">
                <div class="thumbnail-classic-icon unit-left"><span class="icon mdi mdi-cellphone-android"></span></div>
                <div class="thumbnail-classic-caption unit-body">
                  <h6 class="thumbnail-classic-title">Mobile Apps Development</h6>
                  <hr class="divider divider-default divider-sm"/>
                  <p class="thumbnail-classic-text">At Effective, we work for our customers every day to deliver the best mobile applications for any purposes. We work both with individual and corporate customers.</p>
                </div>
              </div>
            </div>
            <div class="cell-xs-10 cell-md-4 cell-lg-3">
              <div class="thumbnail-classic unit unit-sm-horizontal unit-md-vertical thumbnail-classic-primary">
                <div class="thumbnail-classic-icon unit-left"><span class="icon mdi mdi-television-guide"></span></div>
                <div class="thumbnail-classic-caption unit-body">
                  <h6 class="thumbnail-classic-title">Website Design</h6>
                  <hr class="divider divider-default divider-sm"/>
                  <p class="thumbnail-classic-text">Our expert team can design a website of any complexity, from a landing page to a corporate multipage website. Everything depends on what you are looking for.</p>
                </div>
              </div>
            </div>
            <div class="cell-xs-10 cell-md-4 cell-lg-3">
              <div class="thumbnail-classic unit unit-sm-horizontal unit-md-vertical thumbnail-classic-primary">
                <div class="thumbnail-classic-icon unit-left"><span class="icon mdi mdi-headset"></span></div>
                <div class="thumbnail-classic-caption unit-body">
                  <h6 class="thumbnail-classic-title">IT Consulting</h6>
                  <hr class="divider divider-default divider-sm"/>
                  <p class="thumbnail-classic-text">Our team is glad to provide you with professional IT consulting services 24/7. We have been helping lots of companies since our establishment.</p>
                </div>
              </div>
            </div>
            <div class="cell-xs-10 cell-md-4 cell-lg-3">
              <div class="thumbnail-classic unit unit-sm-horizontal unit-md-vertical thumbnail-classic-primary">
                <div class="thumbnail-classic-icon unit-left"><span class="icon mdi mdi-web"></span></div>
                <div class="thumbnail-classic-caption unit-body">
                  <h6 class="thumbnail-classic-title">Internet Marketing</h6>
                  <hr class="divider divider-default divider-sm"/>
                  <p class="thumbnail-classic-text">In the modern world of rapid web development, internet marketing plays a vital role in your company’s promotion. We are happy to assist you with it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
        <!-- Services section end-->
        
        <!-- Video section-->
        <section id="video" class="section">
            <div class="container video-section-container">
                <div class="row clearfix video-section-wraper">
                    <div class="col-md-5 video-heading">
                        <h3>Watch our Video instruction</h3>
                    </div>
                    <div class="col-md-2 video-button">
                        <div class="rounded-video-button">
                            <div class="rounded-icon-box-inner-video-button">
                                <a class="show-video" title="Test title" href="https://www.youtube.com/watch?v=Fjo20qYsXqc"><i class="ion-ios-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 video-list-item-wraper">
                        <ul class="video-ul">
                            <li><i class="icon-on-list ion-checkmark"></i>Follow our video instruction</li>
                            <li><i class="icon-on-list ion-checkmark"></i>Read our text Documentation</li>
                            <li><i class="icon-on-list ion-checkmark"></i>Install our theme</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Video section end-->
        <!-- Feature section -->
        <section id="feature" class="section bg-white">
            <div class="container feature-container">
                <div class="row section-heading">
                    <div class="col-md-12 heading-wraper">
                        <h2>
                            <span class="title">Our Products Features</span>
                            <span class="separetor">|||</span>
                            <span class="subtitle">A little about what we do</span>
                        </h2>
                    </div>
                </div>
                <div class="row feature-list-wraper">
                    <div class="col-md-3 list-col">
                        <ul class="list-group" role="tablist">
                            <li class="list-group-item active" data-slide="webdesign" role="presentation">Website Design</li>
                            <li class="list-group-item" data-slide="branding" role="presentation">Branding</li>
                            <li class="list-group-item" data-slide="retina-ready" role="presentation">Retina Ready</li>
                            <li class="list-group-item" data-slide="customer-support" role="presentation">Customer Support</li>
                            <li class="list-group-item" data-slide="user-interface" role="presentation">User Interface</li>
                            <li class="list-group-item" data-slide="web-development" role="presentation">Web Development</li>
                        </ul>
                    </div>
                    <div class="col-md-9 content-col">
                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" data-slide="webdesign">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-1.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>Website Design</h3>
                                        Web content can make or break a website – no matter how good the design is. Most designers know this from first-hand experience.

So it wasn’t surprising when WDD visitors who read How to spot and avoid web copy that kills websites demanded a follow-up showcasing good web content.
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" data-slide="branding" class="tab-pane">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-2.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>Branding</h3>
                                        Here's the thing about resumes and cover letters: No matter how unique you try to make your own, for the most part, they tend to read dry. And there's a good reason for it: It's supposed to be a single, no-frills page that documents your work experience. And while being concise is good, there's very little opportunity to convey your uniqueness, or for your personality to shine through at all for that matter.
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" data-slide="retina-ready">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-3.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>Retina Ready</h3>
                                        Apple’s latest screens (like iPhone, iPad, etc) show more pixels per square inch, resulting in sharper view. However, the normal images might look dull on these devices. In order to showcase sharper images on these screens, it is necessary to use images in higher resolution.
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" data-slide="customer-support">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-4.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>Customer Support</h3>
                                        A customer service representative, or CSR, will act as a liaison, provide product/services information and resolve any emerging problems that our customer accounts might face with accuracy and efficiency.
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" data-slide="user-interface">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-5.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>User Interface</h3>
                                        The user interface (UI), in the industrial design field of human–computer interaction, is the space where interactions between humans and machines occur. The goal of this interaction is to allow effective operation and control of the machine from the human end, whilst the machine simultaneously feeds back information that aids the operators' decision-making process.
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" data-slide="web-development">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img class="media-object" src="img/feature-1.png" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body  media-middle feature-list-media-body">
                                       <h3>Web Development</h3>
                                        Web Developer Skills and Qualifications:

JavaScript, JQuery, HTML, HTML5, CSS, CSS3, Web Programming Skills, E-Commerce, Teamwork, Verbal Communication, cross-browser compatibility, Web User Interface Design (UI), Security Principles, Object-Oriented Design, Web Services (REST/SOAP), Multimedia Content Development, API's
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Feature section end-->
        
        <!-- Testimonial section-->
        <section id="testimonial" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="owl-carousel">
                            <div class="text-center">
                                <div class="testimonial-img-wraper text-center">
                                    <img class="img-responsive img-circle" src="img/meet_1.png" alt="">
                                    <p class="author">David Martin</p>
                                </div>
                                <div class="testimonial-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec diam elit consequat eget augue vitae aliquet sollicitudin.
                                </div>
                                
                            </div>
                            <div class="text-center">
                                <div class="testimonial-img-wraper text-center">
                                    <img class="img-responsive img-circle" src="img/meet_2.png" alt="">
                                    <p class="author">Casey Williams</p>
                                </div>
                                <div class="testimonial-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec diam elit consequat eget augue vitae aliquet sollicitudin.
                                </div>
                                
                            </div>
                            <div class="text-center">
                                <div class="testimonial-img-wraper text-center">
                                    <img class="img-responsive img-circle" src="img/meet_3.png" alt="">
                                    <p class="author">Dawn Edwin</p>
                                </div>
                                <div class="testimonial-content">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel lacus pretium rhoncus a quis nisly Ut vehicula gravida dui in pulvinar donec diam elit consequat eget augue vitae aliquet sollicitudin.
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Testimonial section end-->
        
        <!-- Blog section -->
        <section id="blog" class="section bg-white">
            <div class="container">
                <div class="row section-heading">
                    <div class="col-md-12 heading-wraper">
                        <h2>
                            <span class="title">Our Products Features</span>
                            <span class="separetor">|||</span>
                            <span class="subtitle">A little about what we do</span>
                        </h2>
                    </div>
                </div>
                <div class="row blog-wraper">
                    <div class="col-md-4 col-sm-6 blog-inner">
                        <img class="img-responsive" src="img/blog-1.jpg" alt="">
                        <div class="blog-content">
                            <h2 class="blog-title">Design Your Mind</h2>
                            <p class="blog-meta">3 Nov, 2014<span class="separetor">|</span><span class="blog-author-pre-tag"></span>Jone smith</p>
                            <p class="blog-content">Create a website that you are gonna be proud of. Be it Business, Portfolio, Photography, eCommerce & much more.</p>
                            <p class="blog-view-more-btn"><a href="" class="btn btn-default btn-blog-view-more">read more</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 blog-inner">
                        <img class="img-responsive" src="img/blog-2.jpg" alt="">
                        <div class="blog-content">
                            <h2 class="blog-title">Winter Is Comming</h2>
                            <p class="blog-meta">3 Nov, 2014<span class="separetor">|</span><span class="blog-author-pre-tag"></span>Jone smith</p>
                            <p class="blog-content">Create a website that you are gonna be proud of. Be it Business, Portfolio, Photography, eCommerce & much more.</p>
                            <p class="blog-view-more-btn"><a href="" class="btn btn-default btn-blog-view-more">read more</a></p>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 blog-inner">
                        <img class="img-responsive" src="img/blog-3.jpg" alt="">
                        <div class="blog-content">
                            <h2 class="blog-title">The Illustration</h2>
                            <p class="blog-meta">3 Nov, 2014<span class="separetor">|</span><span class="blog-author-pre-tag"></span>Jone smith</p>
                            <p class="blog-content">Create a website that you are gonna be proud of. Be it Business, Portfolio, Photography, eCommerce & much more.</p>
                            <p class="blog-view-more-btn"><a href="" class="btn btn-default btn-blog-view-more">read more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Blog section end-->
        
        <!-- Client section -->
        <section id="client" class="section" style="background:url(img/Clientsbg.png)">
            <div class="container">
                <div class="row clients-outer">
                    <div class="col-md-3">
                        <div class="client-section-title">
                            Millions Of Our Clients
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-2 col-sm-4 client-logo-wiget"><img class="img-responsive client-logo" src="img/client-logo-1.png" alt=""></div>
                            <div class="col-md-2 col-sm-4 client-logo-wiget"><img class="img-responsive client-logo" src="img/client-logo-2.png" alt=""></div>
                            <div class="col-md-2 col-sm-4 client-logo-wiget"><img class="img-responsive client-logo" src="img/client-logo-3.png" alt=""></div>
                            <div class="col-md-2 col-sm-4 client-logo-wiget"><img class="img-responsive client-logo" src="img/client-logo-4.png" alt=""></div>
                            <div class="col-md-2 col-sm-4 client-logo-wiget"><img class="img-responsive client-logo" src="img/client-logo-5.png" alt=""></div>   
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Client section end-->
        
        <!-- Contact section -->
        <section id="contact" class="section bg-white">
            <div class="container">
               <div class="row section-heading">
                    <div class="col-md-12 heading-wraper">
                        <h2>
                            <span class="title">Contact with us</span>
                            <span class="separetor">|||</span>
                            <span class="subtitle">Keep up with the latest happenings</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 contact-form-wraper">
                        <div id="response"></div>
                        <form id="contact_form" action="php/contact.php" method="post">
                            <div class="form-group">
                                 <div class="inner-addon right-addon">
                                    <i class="ion-ios-email-outline"></i>
                                    <input type="email" class="form-control ion-ios-email-outline" id="email" name="email" placeholder="Email" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                 <div class="inner-addon right-addon">
                                    <i class="ion-person"></i>
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                 <div class="inner-addon right-addon">
                                    <i class="ion-android-call"></i>
                                    <input type="text" class="form-control" id="contact" name="contact" placeholder="Contact No" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                 <div class="inner-addon right-addon">
                                    <i class="ion-ios-email-outline"></i>
                                    <textarea name="message" id="message" name="message" class="form-control" placeholder="Message" required></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" id="submit" value="Send Message" class='btn btn-default btn-block submit-btn'>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 google-map-wraper">
                        <div id="map"></div>
                         <script>
      function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.317889, lng: 23.791963},
          zoom: 8
        });
      }

    </script>

                    </div>
                </div>
            </div>
        </section>
        <!-- Contact section end-->
        
        <!-- Address section-->
        <section id="address" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="address-wraper text-center">
                            <div class="address-icon-wraper">
                                <i class="ion-ios-location"></i>
                            </div>
                            <div class="address">
                                <p class="address-heading">Address</p>
                                <p>Xoffman Carkway, P.O Box</p>
                                <p>312 Uountain View. United States of America.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address-wraper text-center">
                            <div class="address-icon-wraper">
                                <i class="ion-android-call"></i>
                            </div>
                            <div class="address">
                                <p class="address-heading">Phone</p>
                                <p>Local: 1-120-123-hello</p>
                                <p>Mobile: 1-200-123-hello</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="address-wraper text-center">
                            <div class="address-icon-wraper">
                                <i class="ion-email"></i>
                            </div>
                            <div class="address">
                                <p class="address-heading">Email Address</p>
                                <p>info@themewagon.com</p>
                                <p>www.themewagon.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Address section end-->
        
        <!-- Footer section -->
        <section id="footer">
            <div class="container">
                <div class="row footer-outer">
                    <div class="col-md-6 text-left footer-copyright">&copy; Copyright Boston 2016</div>
                    <div class="col-md-6 text-right footer-author">Theme by ThemeWagon</div>
                </div>
            </div>
        </section>
        <!-- Footer section end-->
        
        
        <!--  Fixed right social button -->
        <div class="social-media-wraper">
            <ul class="social-media-ul">
                <li class="social-media-li">
                    <a href="" class="social-icon ion-social-facebook"></a>
                </li>
                <li class="social-media-li">
                    <a href="" class="social-icon ion-social-twitter"></a>
                </li>
                <li class="social-media-li">
                    <a href="" class="social-icon ion-social-googleplus"></a>
                </li>
            </ul>
        </div>
        <!--  Fixed right social button End -->
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/bootstrap.min.js"></script>
        
        <!-- Counter script  -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>
        <script src="js/jquery.counterup.min.js"></script>
        <!-- Counter script  end-->
        
        <!-- OwlCarousal script  -->
        <script src="js/owl.carousel.min.js"></script>
        <!-- OwlCarousal  end-->
        
        <script src="js/main.js"></script>
        <script src="js/jquery.easing.1.3.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <!-- Google Map-->
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>   
        

        <script src="assets/js/vendor/jquery-1.11.2.min.js"></script>
        <!-- <script src="assets/js/vendor/bootstrap.min.js"></script> -->

        <script src="assets/js/jquery.magnific-popup.js"></script>
        <script src="assets/js/jquery.easing.1.3.js"></script>
        <script src="assets/js/bootsnav.js"></script>



        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/main.js"></script>

        <script src="assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
  
    </body>
</html>
