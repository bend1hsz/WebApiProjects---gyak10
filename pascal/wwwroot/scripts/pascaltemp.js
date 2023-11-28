window.onload = function () {

    drawPascal(10);
}

var drawPascal = function (sorSzam) {

    for (var sor = 0; sor < 10; sor++)
    {
        var ujSorDIv = document.createElement('div');
        ujSorDIv.classList.add(ujSorDiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++)
        {
            var ujElemDiv = document.createElement('div');
            ujElemDiv.classList.add('elem');
            ujElemDiv.innerText =
                faktorialis(sor) / faktorialis(oszlop) * faktorialis(sor - oszlop);
            ujSorDIv.appendChild(ujElemDiv);

        }
    }
}
/*
var ujElem = document.createElement('div');
ujElem.classList.add('ujOsztaly');
ujElem.id = 'ujID';
ujElem.innerText = '0';
ujElem.innerHTML = '<div>HEllo</div>';

var szuloElem = document.getElementById('szulo');
szuloElem.appendChild(ujElem);*/