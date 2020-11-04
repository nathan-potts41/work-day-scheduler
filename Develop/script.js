var currentDate = new Date();
document.getElementById("currentDay").innerHTML = currentDate.toDateString();

var currentTime = moment();
var eCounter = 1;

for (i = 8; i < 18; i++) {
    var tEntry = '#text-input' + eCounter;
    var hour = currentTime.hour();
    if (i < hour) {
        $(tEntry).addClass('past');
    } else if (i > hour) {
        $(tEntry).addClass('future');
    } else {
        $(tEntry).addClass('present');
    }
    eCounter++;
};

var checkHistory = function () {
    $('#text-input1').val(localStorage.getItem('text-input1'));
    $('#text-input2').val(localStorage.getItem('text-input2'));
    $('#text-input3').val(localStorage.getItem('text-input3'));
    $('#text-input4').val(localStorage.getItem('text-input4'));
    $('#text-input5').val(localStorage.getItem('text-input5'));
    $('#text-input6').val(localStorage.getItem('text-input6'));
    $('#text-input7').val(localStorage.getItem('text-input7'));
    $('#text-input8').val(localStorage.getItem('text-input8'));
    $('#text-input9').val(localStorage.getItem('text-input9'));
};

checkHistory();

$("button").click(function () {
    textInput = $(this).siblings('textarea').val();
    weekDay = $(this).siblings('textarea').attr('id');

    localStorage.setItem(weekDay, textInput);
});




