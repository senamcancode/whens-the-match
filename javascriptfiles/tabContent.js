document.getElementById("defaultOpen").click();


function showTabInfo(event, infoType) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(infoType).style.display = "block";
    document.getElementById(infoType).style.display = "flex";
    document.getElementById(infoType).style.alignItems = "center";

    if (infoType === 'highlights') {
        document.getElementById(infoType).style.flexDirection = "column";

    }
    else {
        document.getElementById(infoType).style.flexDirection = "row";
        document.getElementById(infoType).style.justifyContent = "center";
    }


    event.currentTarget.className += " active";
}


