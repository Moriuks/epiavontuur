import './Working.scss';
import NavBar from '../../components/NavBar';
const art = require("../../assets/images/coming-soon.png")


function Working() {

  var endDate = new Date().getTime() + 1000800000;

  var x = setInterval(function() {
  
      var now =  new Date().getTime();
  
      var timeRemaining = endDate - now;
  
      var daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
      var minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / (1000));
  
      document.getElementById("days").innerHTML = daysRemaining;
      document.getElementById("hours").innerHTML = hoursRemaining;
      document.getElementById("minutes").innerHTML = minutesRemaining;
      document.getElementById("seconds").innerHTML = secondsRemaining; 
  
      if (timeRemaining < 0) { 
          clearInterval(x);
          document.getElementById("days").innerHTML ='0'; 
          document.getElementById("hours").innerHTML ='0'; 
          document.getElementById("minutes").innerHTML ='0' ; 
          document.getElementById("seconds").innerHTML = '0';
          alert("Thank you for your patience");
      }
  
  },1000);


  return (
    <div className="App">
      {/* <NavBar/> */}
      <body class="min-vh-100 d-flex flex-column">
    <main class="my-auto">
        <div class="container">
            <div class="row">
                <div class="col-md-6 section-left">
                    <h1 class="page-title">Estaremos Pronto contigo</h1>
                    <div id="timer" class="bd-cd-timer">
                        <div class="time-card">
                            <span class="time-count" id="days"></span>
                            <span class="time-label">DIAS</span>
                        </div>
                        <div class="time-card">
                            <span class="time-count" id="hours"></span>
                            <span class="time-label">HORAS</span>
                        </div>
                        <div class="time-card">
                            <span class="time-count" id="minutes"></span>
                            <span class="time-label">MINUTOS</span>
                        </div>
                        <div class="time-card">
                            <span class="time-count" id="seconds"></span>
                            <span class="time-label">SEGUNDOS</span>
                        </div>
                    </div>
                    {/* <form class="form-subscribe">
                        <div class="form-group">
                            <label for="email" class="sr-only">email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="email address"/>
                        </div>
                        <button type="submit" class="btn btn-subscribe">Te avisamos cuando la tengamos</button>
                    </form> */}
                </div>
                <div class="col-md-6 d-none d-md-flex align-items-center">
                    <img src={art} alt="coming soon" class="img-fluid"/>
                </div>
            </div>
        </div>
    </main>

    <footer class="text-center">
        <nav class="footer-social-links">
            <a href="#!" class="social-link"><i class="mdi mdi-facebook-box"></i></a>
            <a href="#!" class="social-link"><i class="mdi mdi-twitter"></i></a>
            <a href="#!" class="social-link"><i class="mdi mdi-google"></i></a>
        </nav>
        <p class="footer-text mb-0">
            Copyright 2022
        </p>
    </footer>

    <script src="assets/js/bd-timer.js"></script>
</body>
    </div>
  );
}

export default Working;
