var editSaveBtn10 = document.querySelector("#button-addon-09");
var userEntrySpan10 = document.querySelector("#user-entry-09");
var editSaveBtn11 = document.querySelector("#button-addon-10");
var userEntrySpan11 = document.querySelector("#user-entry-10");
var editSaveBtn12 = document.querySelector("#button-addon-11");
var userEntrySpan12 = document.querySelector("#user-entry-11");
var editSaveBtn13 = document.querySelector("#button-addon-12");
var userEntrySpan13 = document.querySelector("#user-entry-12");
var editSaveBtn14 = document.querySelector("#button-addon-13");
var userEntrySpan14 = document.querySelector("#user-entry-13");
var editSaveBtn15 = document.querySelector("#button-addon-14");
var userEntrySpan15 = document.querySelector("#user-entry-14");
var editSaveBtn16 = document.querySelector("#button-addon-15");
var userEntrySpan16 = document.querySelector("#user-entry-15");
var editSaveBtn17 = document.querySelector("#button-addon-16");
var userEntrySpan17 = document.querySelector("#user-entry-16");
var editSaveBtn18 = document.querySelector("#button-addon-17");
var userEntrySpan18 = document.querySelector("#user-entry-17");
var currentHour = moment().hour();
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDay);

currentDayDisplay();
callCurrentHour();
renderEntry10();
renderEntry11();
renderEntry12();
renderEntry13();
renderEntry14();
renderEntry15();
renderEntry16();
renderEntry17();
renderEntry18();

function currentDayDisplay() {
    document.getElementById('displayCurrent').innerText = currentDay;
}

function callCurrentHour() {
    $("a").each(function() {
        var hourId = parseInt($(this).attr("id"));
        console.log(hourId);

        if(currentHour !== hourId) {
            console.log("hour not match")
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
    }
)};

function renderEntry10() {
    var input10 = localStorage.getItem("input-09");

    if (!input10) {
        return;
    }

    userEntrySpan10.textContent = input10;
}

editSaveBtn10.addEventListener("click", function(event) {
    event.preventDefault();

    var input10 = document.querySelector("#input-09").value;

    localStorage.setItem("input-09", input10);
    renderEntry10();
});

function renderEntry11() {
    var input11 = localStorage.getItem("input-10");

    if (!input11) {
        return;
    }

    userEntrySpan11.textContent = input11;
}

editSaveBtn11.addEventListener("click", function(event) {
    event.preventDefault();

    var input11 = document.querySelector("#input-10").value;

    localStorage.setItem("input-10", input11);
    renderEntry11();
});

function renderEntry12() {
    var input12 = localStorage.getItem("input-11");

    if (!input12) {
        return;
    }

    userEntrySpan12.textContent = input12;
}

editSaveBtn12.addEventListener("click", function(event) {
    event.preventDefault();

    var input12 = document.querySelector("#input-11").value;

    localStorage.setItem("input-11", input12);
    renderEntry12();
});

function renderEntry13() {
    var input13 = localStorage.getItem("input-12");

    if (!input13) {
        return;
    }

    userEntrySpan13.textContent = input13;
}

editSaveBtn13.addEventListener("click", function(event) {
    event.preventDefault();

    var input13 = document.querySelector("#input-12").value;

    localStorage.setItem("input-12", input13);
    renderEntry13();
});

function renderEntry14() {
    var input14 = localStorage.getItem("input-13");

    if (!input14) {
        return;
    }

    userEntrySpan14.textContent = input14;
}

editSaveBtn14.addEventListener("click", function(event) {
    event.preventDefault();

    var input14 = document.querySelector("#input-13").value;

    localStorage.setItem("input-13", input14);
    renderEntry14();
});

function renderEntry15() {
    var input15 = localStorage.getItem("input-14");

    if (!input15) {
        return;
    }

    userEntrySpan15.textContent = input15;
}

editSaveBtn15.addEventListener("click", function(event) {
    event.preventDefault();

    var input15 = document.querySelector("#input-14").value;

    localStorage.setItem("input-14", input15);
    renderEntry15();
});

function renderEntry16() {
    var input16 = localStorage.getItem("input-15");

    if (!input16) {
        return;
    }

    userEntrySpan16.textContent = input16;
}

editSaveBtn16.addEventListener("click", function(event) {
    event.preventDefault();

    var input16 = document.querySelector("#input-15").value;

    localStorage.setItem("input-15", input16);
    renderEntry16();
});

function renderEntry17() {
    var input17 = localStorage.getItem("input-16");

    if (!input17) {
        return;
    }

    userEntrySpan17.textContent = input17;
}

editSaveBtn17.addEventListener("click", function(event) {
    event.preventDefault();

    var input17 = document.querySelector("#input-16").value;

    localStorage.setItem("input-16", input17);
    renderEntry17();
});

function renderEntry18() {
    var input18 = localStorage.getItem("input-17");

    if (!input18) {
        return;
    }

    userEntrySpan18.textContent = input18;
}

editSaveBtn18.addEventListener("click", function(event) {
    event.preventDefault();

    var input18 = document.querySelector("#input-17").value;

    localStorage.setItem("input-17", input18);
    renderEntry18();
});