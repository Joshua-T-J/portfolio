//  typewriting letters in name
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML =
    '.typewrite > .wrap { border-right: 0.1em solid var(--font-color)}';
  document.body.appendChild(css);
  calcScrollValue();
};

//nav active toggle

// $(document).ready(function () {
//   $('.nav-item').click(function () {
//     $('.nav-item').removeClass('active');
//     $(this).addClass('active');
//   });
// });

// active li

$(document).ready(function () {
  $('.resume-li').click(function () {
    $('.resume-li').removeClass('active');
    $(this).addClass('active');
  }),
    //   Click reveal for Education
    $('.edu').click(function () {
      $('#skills, #certification, #more').hide();
      $('#education').show();
    }),
    //   Click reveal for Skills
    $('.ski').click(function () {
      $('#education, #certification, #more').hide();
      $('#skills').show();
    }),
    //   Click reveal for Certifications
    $('.cer').click(function () {
      $('#education, #skills, #more').hide();
      $('#certification').show();
    }),
    //   Click reveal for more
    $('.more').click(function () {
      $('#education, #skills, #certification').hide();
      $('#more').show();
    });
});

//scrollprogress on goto top button

let calcScrollValue = () => {
  let scrollProgress = document.getElementById('goto-top');
  let sidediv = document.getElementById('side-bar');
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 600) {
    scrollProgress.style.display = 'grid';
    sidediv.style.display = 'block';
  } else {
    scrollProgress.style.display = 'none';
    sidediv.style.display = 'none';
  }
  scrollProgress.style.background = `conic-gradient(var(--clr-primary) ${scrollValue}%, var(--bg-body) ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;

// contact form script

$('#contact-form').submit((e) => {
  e.preventDefault();
  $.ajax({
    url: 'https://script.google.com/macros/s/AKfycbzNuMr_Kw6oph17cndytP6y_3G3VTfaoOsHI2-qU-f9uXb5wblToqQ4P1PR-4d6YZM/exec',
    data: $('#contact-form').serialize(),
    method: 'post',
    beforeSend: function () {
      // Show image container
      $('#loading-wrapper').css('display', 'flex');
    },
    success: function (response) {
      $('#message-popup').css('display', 'flex');
      $('#reload').click(() => {
        window.location.reload();
      });
      // alert("Message Send Successfully! Thankyou For Your Feedback")
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    complete: function (data) {
      // Hide image container
      $('#loading-wrapper').hide();
    },
    error: function (err) {
      alert('An Error Occurred');
    },
  });
});

// theme toggle

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// side social-bar toggele
$(document).ready(function () {
  $('#show-sidebar').click(() => {
    $('#icon-side').show(), $('#show-sidebar').hide();
  });

  $('#hide-sidebar').click(() => {
    $('#icon-side').hide(), $('#show-sidebar').show();
  });
});

//project popup

$(document).ready(function () {
  $('.dic-card').click(() => {
    $('#popup-dic').show();
  });

  $('.ocym-card').click(() => {
    $('#popup-ocym').show();
  });

  $('.todo-card').click(() => {
    $('#popup-todo').show();
  });

  $('.close-btn').click(() => {
    $('#popup-dic').hide(), $('#popup-ocym').hide(), $('#popup-todo').hide();
  });
});
