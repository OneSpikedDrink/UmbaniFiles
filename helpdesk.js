
let isEntryPage = window.location.pathname.toLowerCase().includes('hdrentry');
let isHomePage = window.location.pathname.toLowerCase().includes('default');
let isLoginPage = window.location.pathname.toLowerCase().includes('login');
let isCreatePage = window.location.pathname.toLowerCase().includes('addnew');
let isReportPage = window.location.pathname.toLowerCase().includes('reports');

let hdrDetails = document.querySelector('#upHDRDetails > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)');

if (hdrDetails != null) {
    document.querySelector('#upHDRDetails > div:nth-child(2) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1)')
        .innerHTML = hdrDetails.innerHTML.replaceAll('------------', '_____________________________________________')
}



function setHdrGridRowClick() {

    document.querySelectorAll('.dxgvDataRow_MetropolisBlue').forEach(row => {
        row.addEventListener('click', () => {
            window.location.href = row.cells[0].getElementsByTagName('a')[0].href;
            //window.open(row.cells[0].getElementsByTagName('a')[0].href, '_blank');
        });
    });
}

function setHdrGridColors() {
    $('td').filter(function () {
        let isRed = $(this).css('background-color') === 'rgb(255, 26, 26)';
        if (isRed) {
            $(this).css('background-color', 'pink');
            $(this).css('color', 'red');
        }

        let isGreen = $(this).css('background-color') === 'rgb(154, 205, 50)';
        if (isGreen) {
            $(this).css('background-color', '#d4edda');
            $(this).css('color', '#155724');
        }

        let isOrange = $(this).css('background-color') === 'rgb(255, 165, 0)';
        if (isOrange) {
            $(this).css('background-color', '#fff3cd');
            $(this).css('color', '#856404');
        }

    });
}

function addCustomNavBar() {
    try {
        let nav = document.createElement('ul');

        let homeLi = document.createElement('li');
        let homeA = document.createElement('a');
        homeA.innerHTML = 'Home';
        homeA.href = 'http://hawkeye.multotec.co.za/HelpDesk/Default.aspx';
        homeLi.appendChild(homeA);

        let reportLi = document.createElement('li');
        let reportA = document.createElement('a');
        reportA.innerHTML = 'Reports';
        reportA.href = 'http://hawkeye.multotec.co.za/HelpDesk/Reports/Reports-Home.aspx';
        reportLi.appendChild(reportA);

        let createLi = document.createElement('li');
        let createA = document.createElement('a');
        createA.innerHTML = 'Create';
        createA.href = 'http://hawkeye.multotec.co.za/HelpDesk/AddNew.aspx';
        createLi.appendChild(createA);

        if (isHomePage) {
            let logoutLi = document.createElement('li');
            let logoutA = document.createElement('a');
            logoutA.innerHTML = 'Logout';
            logoutA.href = "javascript:__doPostBack('ctl00$LoginStatus2$ctl00','')";
            logoutLi.appendChild(logoutA);

            nav.appendChild(homeLi);
            nav.appendChild(reportLi);
            nav.appendChild(createLi);
            nav.appendChild(logoutLi);
        }
        else {
            nav.appendChild(homeLi);
            nav.appendChild(reportLi);
            nav.appendChild(createLi);
        }

        var first = document.body.children[0];
        document.body.insertBefore(nav, first);
        hideClassicNavbar();
    } catch {
        addCustomNavbarErrorFallback();
    }


}

function addCustomNavbarErrorFallback() {
    if (isHomePage) {
        $('#aspnetForm > div:nth-child(8) > table:nth-child(1)').css('display', 'block');
    }
    if (isCreatePage) {
        $('#aspnetForm > div:nth-child(20) > table:nth-child(1)').css('display', 'block');
    }
    if (isReportPage) {
        $('#aspnetForm > div:nth-child(5) > table:nth-child(1)').css('display', 'block');
    }
}

function hideClassicNavbar() {
    if (isHomePage) {
        $('#aspnetForm > div:nth-child(8) > table:nth-child(1)').css('display', 'none');
    }

    if (isCreatePage) {
        $('#aspnetForm > div:nth-child(20) > table:nth-child(1)').css('display', 'none');
    }

    if (isReportPage) {
        $('#aspnetForm > div:nth-child(5) > table:nth-child(1)').css('display', 'none');
    }
}

//window.onload = initCustomJs;

function initCustomJs() {
    document.getElementsByTagName('html')[0].classList.remove('loading-in-progress');

    if (isLoginPage) return;

    setHdrGridColors();
    setHdrGridRowClick();
    addCustomNavBar();

}

function importJquery() {
    let script = document.createElement('script');
    let head = document.getElementsByTagName('head')[0];
    script.src = "https://code.jquery.com/jquery-3.3.1.min.js";
    script.onload = script.onreadystatechange = initCustomJs;
    head.appendChild(script);
}

importJquery();