function layout() {
before='<div style="padding-top: 46px; margin-left: -10px;"><div class="navbar no-border"><div class="navbar-inner no-border" style="border:0;"><div class="logoname"><a href="index.html"><div>United Tennis</div><div class="logoname_gap"></div><div>Academy</div></a></div><div class="container adjust-container"><div class="arrow-left"></div><ul class="nav pull-left nav-left-margin"><li><a href="index.html" style="color: white;">Home</a></li>                  <li class="dropdown"><a href="about_index.html" class="dropdown-toggle" style="color: white;">About Us</a><!-- <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"><li><a href="about_objective.html">Academy Objectives</a></li>  <li><a href="about_vision.html">Our Vision: Mission</a></li><li><a href="about_profile.html">Academy Profile</a></li></ul> --><li><a href="events.html" style="color: white;">Upcoming Events</a></li><li class="dropdown"><a href="facilities.html" class="dropdown-toggle" style="color: white;">Facilities</a><!--  <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel"><li><a href="facilities_coachingpro.html">Coaching programmes</a></li>  <li><a href="facilities_enrpro.html">Enrollment process</a></li></ul> --><li><a href="enquiry.html" style="color: white;">Enquiries</a></li><li><a href="contactus.html" style="color: white;">Contact Us</a></li></ul></div><!--end inner container--></div><!-- end navbar-inner--></div><!-- end navbar--><div class="logo"> <!-- Company Logo --><a href="index.html"><img src="images/logo.png" width="160px"/></a></div>  <!-- end span3 --></div>';
$(before).insertBefore($('#content'));

if ($('#video-link-exist').length)
{$('html,body').animate( {scrollTop: $(document).height()}, 'slow');}
}

$(document).ready(function(){
  layout();
  // $('#content').removeClass('hide');
});
