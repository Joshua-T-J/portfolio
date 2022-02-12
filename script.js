//  typewritting letters in name
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid var(--font-color)}";
    document.body.appendChild(css);
};


// active li

$(document).ready(function(){
  $('.resume-li').click(function(){
    $('.resume-li').removeClass("active");
    $(this).addClass("active");
}),

//   Click reveal for Education
$('.edu').click(
  function() {
    $('#skills, #certification, #more').hide();
    $('#education').show();
  }
),

//   Click reveal for Skills
$('.ski').click(
  function() {
    $('#education, #certification, #more').hide();
    $('#skills').show();

    // progress-bar animation
    
    var delay = 500;
    $(".progress-bar").each(function(i){
        $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now)+'%');
            }
        });
    });
  }
),

//   Click reveal for Certifications
$('.cer').click(
  function() {
    $('#education, #skills, #more').hide();
    $('#certification').show();
  }
),

//   Click reveal for more
$('.more').click(
  function() {
    $('#education, #skills, #certification').hide();
    $('#more').show();
  }
)
});


// scroll to top button
//Get the button
var mybutton = document.getElementById("goto-top");
var sidediv = document.getElementById("side-bar")

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
    sidediv.style.display = "block"
  } else {
    mybutton.style.display = "none";
    sidediv.style.display = "none";
  }
}

// contact form script

$("#contact-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyiKZHZFjZqnStPsv6KY-NlLlnLn5tPhCH8hfoq3MDfvP5ReEOLDcqN0368X7mUIkyS/exec",
            data:$("#contact-form").serialize(),
            method:"post",
            success:function (response){
                alert("Message Send Successfully! Thankyou For Your Feedback")
                window.location.reload()
                //window.location.href="https://google.com"
            },
        error:function (err){
        alert("An Error Occured")

        }
    })
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
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
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// side socialbar toggele
$(document).ready(function(){
  $("#show-sidebar").click(()=>{
    $("#icon-side").show(),
    $("#show-sidebar").hide()
  });

  $("#hide-sidebar").click(()=>{
    $("#icon-side").hide(),
    $("#show-sidebar").show()
  });
})