var serNoChecked1 = "";
var choosed1 = "";
function changeCheckBox1() {
    try {
        var max = document.formulaire.choix1.length;
        var count = 0;
        for (var i = 0; i < max; i++) {
            if (document.formulaire.choix1[i].checked == true) {
                count++;
                serNoChecked1 = i;
            }
        }
        if (count == 1) {
            for (var i = 0; i < max; i++) {
                if (document.formulaire.choix1[i].checked == false) {
                    document.formulaire.choix1[i].disabled = true;
                }
                if (document.formulaire.choix1[i].checked == true) {
                    choosed1 = document.formulaire.choix1[i].value
                }
            }
        }
        else if (count == 0) {
            for (var i = 0; i < max; i++) {
                document.formulaire.choix1[i].disabled = false;
            }
        }
        if (null == max) return false;
        if (count == 0) {
            return true;
        }
        else if (count > 0) {
            return false;
        }
    }
    catch (e) {
        alert(e.message);
    }
}

var serNoChecked2 = "";
var choosed2 = "";
function changeCheckBox2() {
    try {
        var max = document.formulaire.choix2.length;
        var count = 0;
        for (var i = 0; i < max; i++) {
            if (document.formulaire.choix2[i].checked == true) {
                count++;
                serNoChecked2 = i;
            }
        }
        if (count == 1) {
            for (var i = 0; i < max; i++) {
                if (document.formulaire.choix2[i].checked == false) {
                    document.formulaire.choix2[i].disabled = true;
                }
                if (document.formulaire.choix2[i].checked == true) {
                    choosed2 = document.formulaire.choix2[i].value
                }
            }
        }
        else if (count == 0) {
            for (var i = 0; i < max; i++) {
                document.formulaire.choix2[i].disabled = false;
            }
        }
        if (null == max) return false;
        if (count == 0) {
            return true;
        }
        else if (count > 0) {
            return false;
        }
    }
    catch (e) {
        alert(e.message);
    }
}

var serNoChecked3 = "";
var choosed3
function changeCheckBox3() {
    try {
        var max = document.formulaire.choix3.length;
        var count = 0;
        for (var i = 0; i < max; i++) {
            if (document.formulaire.choix3[i].checked == true) {
                count++;
                serNoChecked = i;
            }
        }
        if (count == 1) {
            for (var i = 0; i < max; i++) {
                if (document.formulaire.choix3[i].checked == false) {
                    document.formulaire.choix3[i].disabled = true;
                }
                if (document.formulaire.choix3[i].checked == true) {
                    choosed3 = document.formulaire.choix3[i].value
                }
            }
        }
        else if (count == 0) {
            for (var i = 0; i < max; i++) {
                document.formulaire.choix3[i].disabled = false;
            }
        }
        if (null == max) return false;
        if (count == 0) {
            return true;
        }
        else if (count > 0) {
            return false;
        }
    }
    catch (e) {
        alert(e.message);
    }
}

var serNoChecked4 = "";
var choosed4 = "";
function changeCheckBox4() {
    try {
        var max = document.formulaire.choix4.length;
        var count = 0;
        for (var i = 0; i < max; i++) {
            if (document.formulaire.choix4[i].checked == true) {
                count++;
                serNoChecked4 = i;
            }
        }
        if (count == 1) {
            for (var i = 0; i < max; i++) {
                if (document.formulaire.choix4[i].checked == false) {
                    document.formulaire.choix4[i].disabled = true;
                }
                if (document.formulaire.choix4[i].checked == true) {
                    choosed4 = document.formulaire.choix4[i].value
                }
            }
        }
        else if (count == 0) {
            for (var i = 0; i < max; i++) {
                document.formulaire.choix4[i].disabled = false;
            }
        }
        if (null == max) return false;
        if (count == 0) {
            return true;
        }
        else if (count > 0) {
            return false;
        }
    }
    catch (e) {
        alert(e.message);
    }
}