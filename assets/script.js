var editSaveBtn = document.querySelector("#button-addon-00");
var entryInput = document.querySelector("#input-00");
var userEntrySpan = document.querySelector("#user-entry-00");
var editSaveBtn2 = document.querySelector("#button-addon-01");
var entryInput2 = document.querySelector("#input-01");
var userEntrySpan2 = document.querySelector("#user-entry-01");
var editSaveBtn3 = document.querySelector("#button-addon-02");
var entryInput3 = document.querySelector("#input-02");
var userEntrySpan3 = document.querySelector("#user-entry-02");
var editSaveBtn4 = document.querySelector("#button-addon-03");
var entryInput4 = document.querySelector("#input-03");
var userEntrySpan4 = document.querySelector("#user-entry-03");
var editSaveBtn5 = document.querySelector("#button-addon-04");
var entryInput5 = document.querySelector("#input-04");
var userEntrySpan5 = document.querySelector("#user-entry-04");
var editSaveBtn6 = document.querySelector("#button-addon-05");
var entryInput6 = document.querySelector("#input-05");
var userEntrySpan6 = document.querySelector("#user-entry-05");
var editSaveBtn7 = document.querySelector("#button-addon-06");
var entryInput7 = document.querySelector("#input-06");
var userEntrySpan7 = document.querySelector("#user-entry-06");
var editSaveBtn8 = document.querySelector("#button-addon-07");
var entryInput8 = document.querySelector("#input-07");
var userEntrySpan8 = document.querySelector("#user-entry-07");
var editSaveBtn9 = document.querySelector("#button-addon-08");
var entryInput9 = document.querySelector("#input-08");
var userEntrySpan9 = document.querySelector("#user-entry-08");
var editSaveBtn10 = document.querySelector("#button-addon-09");
var entryInput10 = document.querySelector("#input-09");
var userEntrySpan10 = document.querySelector("#user-entry-09");
var editSaveBtn11 = document.querySelector("#button-addon-10");
var entryInput11 = document.querySelector("#input-10");
var userEntrySpan11 = document.querySelector("#user-entry-10");
var editSaveBtn12 = document.querySelector("#button-addon-11");
var entryInput12 = document.querySelector("#input-11");
var userEntrySpan12 = document.querySelector("#user-entry-11");
var editSaveBtn13 = document.querySelector("#button-addon-12");
var entryInput13 = document.querySelector("#input-12");
var userEntrySpan13 = document.querySelector("#user-entry-12");
var editSaveBtn14 = document.querySelector("#button-addon-13");
var entryInput14 = document.querySelector("#input-13");
var userEntrySpan14 = document.querySelector("#user-entry-13");
var editSaveBtn15 = document.querySelector("#button-addon-14");
var entryInput15 = document.querySelector("#input-14");
var userEntrySpan15 = document.querySelector("#user-entry-14");
var editSaveBtn16 = document.querySelector("#button-addon-15");
var entryInput16 = document.querySelector("#input-15");
var userEntrySpan16 = document.querySelector("#user-entry-15");
var editSaveBtn17 = document.querySelector("#button-addon-16");
var entryInput17 = document.querySelector("#input-16");
var userEntrySpan17 = document.querySelector("#user-entry-16");
var editSaveBtn18 = document.querySelector("#button-addon-17");
var entryInput18 = document.querySelector("#input-17");
var userEntrySpan18 = document.querySelector("#user-entry-17");
var editSaveBtn19 = document.querySelector("#button-addon-18");
var entryInput19 = document.querySelector("#input-18");
var userEntrySpan19 = document.querySelector("#user-entry-18");
var editSaveBtn20 = document.querySelector("#button-addon-19");
var entryInput20 = document.querySelector("#input-19");
var userEntrySpan20 = document.querySelector("#user-entry-19");
var editSaveBtn21 = document.querySelector("#button-addon-20");
var entryInput21 = document.querySelector("#input-20");
var userEntrySpan21 = document.querySelector("#user-entry-20");
var editSaveBtn22 = document.querySelector("#button-addon-21");
var entryInput22 = document.querySelector("#input-21");
var userEntrySpan22 = document.querySelector("#user-entry-21");
var editSaveBtn23 = document.querySelector("#button-addon-22");
var entryInput23 = document.querySelector("#input-22");
var userEntrySpan23 = document.querySelector("#user-entry-22");
var editSaveBtn24 = document.querySelector("#button-addon-23");
var entryInput24 = document.querySelector("#input-23");
var userEntrySpan24 = document.querySelector("#user-entry-23");

renderEntry();
renderEntry2();
renderEntry3();
renderEntry4();
renderEntry5();
renderEntry6();
renderEntry7();
renderEntry8();
renderEntry9();
renderEntry10();
renderEntry11();
renderEntry12();
renderEntry13();
renderEntry14();
renderEntry15();
renderEntry16();
renderEntry17();
renderEntry18();
renderEntry19();
renderEntry20();
renderEntry21();
renderEntry22();
renderEntry23();
renderEntry24();

function renderEntry() {
    var input = localStorage.getItem("input-00");

    if (!input) {
        return;
    }

    userEntrySpan.textContent = input;
}

editSaveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var input = document.querySelector("#input-00").value;

    localStorage.setItem("input-00", input);
    renderEntry();
});

function renderEntry2() {
    var input2 = localStorage.getItem("input-01");

    if (!input2) {
        return;
    }

    userEntrySpan2.textContent = input2;
}

editSaveBtn2.addEventListener("click", function(event) {
    event.preventDefault();

    var input2 = document.querySelector("#input-01").value;

    localStorage.setItem("input-01", input2);
    renderEntry2();
});

function renderEntry3() {
    var input3 = localStorage.getItem("input-02");

    if (!input3) {
        return;
    }

    userEntrySpan3.textContent = input3;
}

editSaveBtn3.addEventListener("click", function(event) {
    event.preventDefault();

    var input3 = document.querySelector("#input-02").value;

    localStorage.setItem("input-02", input3);
    renderEntry3();
});

function renderEntry4() {
    var input4 = localStorage.getItem("input-03");

    if (!input4) {
        return;
    }

    userEntrySpan4.textContent = input4;
}

editSaveBtn4.addEventListener("click", function(event) {
    event.preventDefault();

    var input4 = document.querySelector("#input-03").value;

    localStorage.setItem("input-03", input4);
    renderEntry4();
});

function renderEntry5() {
    var input5 = localStorage.getItem("input-04");

    if (!input5) {
        return;
    }

    userEntrySpan5.textContent = input5;
}

editSaveBtn5.addEventListener("click", function(event) {
    event.preventDefault();

    var input5 = document.querySelector("#input-04").value;

    localStorage.setItem("input-04", input5);
    renderEntry5();
});

function renderEntry6() {
    var input6 = localStorage.getItem("input-05");

    if (!input6) {
        return;
    }

    userEntrySpan6.textContent = input6;
}

editSaveBtn6.addEventListener("click", function(event) {
    event.preventDefault();

    var input6 = document.querySelector("#input-05").value;

    localStorage.setItem("input-05", input6);
    renderEntry6();
});

function renderEntry7() {
    var input7 = localStorage.getItem("input-06");

    if (!input7) {
        return;
    }

    userEntrySpan7.textContent = input7;
}

editSaveBtn7.addEventListener("click", function(event) {
    event.preventDefault();

    var input7 = document.querySelector("#input-06").value;

    localStorage.setItem("input-06", input7);
    renderEntry7();
});

function renderEntry8() {
    var input8 = localStorage.getItem("input-07");

    if (!input8) {
        return;
    }

    userEntrySpan8.textContent = input8;
}

editSaveBtn8.addEventListener("click", function(event) {
    event.preventDefault();

    var input8 = document.querySelector("#input-07").value;

    localStorage.setItem("input-07", input8);
    renderEntry8();
});

function renderEntry9() {
    var input9 = localStorage.getItem("input-08");

    if (!input9) {
        return;
    }

    userEntrySpan9.textContent = input9;
}

editSaveBtn9.addEventListener("click", function(event) {
    event.preventDefault();

    var input9 = document.querySelector("#input-08").value;

    localStorage.setItem("input-08", input9);
    renderEntry9();
});

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

function renderEntry19() {
    var input19 = localStorage.getItem("input-18");

    if (!input19) {
        return;
    }

    userEntrySpan19.textContent = input19;
}

editSaveBtn19.addEventListener("click", function(event) {
    event.preventDefault();

    var input19 = document.querySelector("#input-18").value;

    localStorage.setItem("input-18", input19);
    renderEntry19();
});

function renderEntry20() {
    var input20 = localStorage.getItem("input-19");

    if (!input20) {
        return;
    }

    userEntrySpan20.textContent = input20;
}

editSaveBtn20.addEventListener("click", function(event) {
    event.preventDefault();

    var input20 = document.querySelector("#input-19").value;

    localStorage.setItem("input-19", input20);
    renderEntry20();
});

function renderEntry21() {
    var input21 = localStorage.getItem("input-20");

    if (!input21) {
        return;
    }

    userEntrySpan21.textContent = input21;
}

editSaveBtn21.addEventListener("click", function(event) {
    event.preventDefault();

    var input21 = document.querySelector("#input-20").value;

    localStorage.setItem("input-20", input21);
    renderEntry21();
});

function renderEntry22() {
    var input22 = localStorage.getItem("input-21");

    if (!input22) {
        return;
    }

    userEntrySpan22.textContent = input22;
}

editSaveBtn22.addEventListener("click", function(event) {
    event.preventDefault();

    var input22 = document.querySelector("#input-21").value;

    localStorage.setItem("input-21", input22);
    renderEntry22();
});

function renderEntry23() {
    var input23 = localStorage.getItem("input-22");

    if (!input23) {
        return;
    }

    userEntrySpan23.textContent = input23;
}

editSaveBtn23.addEventListener("click", function(event) {
    event.preventDefault();

    var input23 = document.querySelector("#input-22").value;

    localStorage.setItem("input-22", input23);
    renderEntry23();
});

function renderEntry24() {
    var input24 = localStorage.getItem("input-23");

    if (!input24) {
        return;
    }

    userEntrySpan24.textContent = input24;
}

editSaveBtn24.addEventListener("click", function(event) {
    event.preventDefault();

    var input24 = document.querySelector("#input-23").value;

    localStorage.setItem("input-23", input24);
    renderEntry24();
});