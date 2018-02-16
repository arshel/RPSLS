var keuze = ['steen', 'papier', 'schaar', 'lizard', 'spock'];
var gebr = 0;
var cpu = 0;

function spel(val) {
    var comp = Math.floor(Math.random() * 5);

    switch (val) {
        case "steen":
            switch (comp) {
                case 0:
                    document.getElementById("resultaat").innerHTML = " jij koos " + val + " en computer koos " + keuze[comp] + "  het is een gelijkspel";
                    break;
                case 1:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML = gebr;

                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + "  jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 4:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + "  jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cp
            }
            break;
        case "papier":
            switch (comp) {
                case 0:
                    document.getElementById("resultaat").innerHTML = " jij koos " + val + " en computer koos " + keuze[comp] + "  jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 1:
                    document.getElementById("resultaat").innerHTML = " jij koos " + val + " en computer koos " + keuze[comp] + "  het is een gelijkspel ";
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 4:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
            }
            break;
        case "schaar":
            switch (comp) {
                case 0:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 1:
                    document.getElementById("resultaat").innerHTML = " jij koos " + val + " en computer koos " + keuze[comp] + "  jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " het is een gelijkspel";
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 4:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;

            }
            break;
        case "lizard":
            switch (comp) {
                case 0:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 1:
                    document.getElementById("resultaat").innerHTML = " jij koos " + val + " en computer koos " + keuze[comp] + "  jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " het is een gelijkspel";
                    break;
                case 4:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
            }
            break;
        case "spock":
            switch (comp) {
                case 0:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                    gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 1:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =  cpu;
                    break;
                case 2:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt gewonnen";
                   gebr += 1;
                    document.getElementById('score').innerHTML =  gebr;
                    break;
                case 3:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " jij hebt verloren";
                    cpu += 1;
                    document.getElementById('score2').innerHTML =        cpu;
                    break;
                case 4:
                    document.getElementById("resultaat").innerHTML = "jij koos " + val + " en computer koos " + keuze[comp] + " het is een gelijkspel";
                    break;

            }

    }
    // if(gebr === 3) alert("jij hebt gewonnen");
    // if (cpu === 3 ) alert("jij hebt verloren");

}
