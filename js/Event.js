$(document).ready(function () {

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });
});
const Mond = document.querySelector('.Mon10');
const InfoMass = [];
// const InfoMeet = {};

function InfoMeet(nameevent, names, day, time) {
    this.nameevent = nameevent;
    this.names = names;
    this.day = day;
    this.time = time;
};

const NameEvent = document.querySelector('.input')
NameEvent.addEventListener('input', function (e) {
    InfoMeet.nameevent = e.target.value;
    console.log(InfoMeet);
});

const Names = document.querySelector('.Names')
Names.addEventListener('change', function (e) {
    InfoMeet.names = e.target.value;
    console.log(InfoMeet);
});

const Days = document.querySelector('.Days')
Days.addEventListener('change', function (e) {
    InfoMeet.day = e.target.value;
    console.log(InfoMeet);
});

const Time = document.querySelector('.Time')
Time.addEventListener('change', function (e) {
    InfoMeet.time = e.target.value;
    console.log(InfoMeet);
});

// const FormSub = document.querySelector('.form')
// FormSub.addEventListener('submit', function (e) {
//     e.preventDefault();
//     InfoMass.push(new InfoMeet(NameEvent.value, Names.value, Days.value, Time.value));
//     setLocalStor();
// });
(function ($) {
    var object = {
        toggleButton: '.submit',
        formContainer: '.form'
    };

    $(object.toggleButton).on('click', function (e) {
        e.preventDefault();
        InfoMass.push(new InfoMeet(NameEvent.value, Names.value, Days.value, Time.value));
        setLocalStor();
        var form = $(object.formContainer);

        if (form.hasClass('active')) {
            form.fadeOut('slow').removeClass('active');
        } else {
            form.fadeIn('slow').addClass('active');
        }
        Mond.innerHTML = NameEvent.value;
    });
})(jQuery);

// document.querySelector('.submit').onclick = function (e) {
//     e.preventDefault();
// };
function setLocalStor() {
    localStorage.setItem('InfoMeet', JSON.stringify(InfoMeet));
};
function getLocalStor() {
    JSON.parse(localStorage.getItem('InfoMeet'));
};

