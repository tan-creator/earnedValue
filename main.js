const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const calculate = $('#calculate');
const result = $('.result');
//----------------------------------------- Handle data -----------------------------------------
function formatNumber(num) {
    if(num >= 0) {
        if (num / 1000000000 >= 1) {
            return `${(num/1000000000).toFixed(2)} billion $`;
        } else if (num / 1000000 >= 1) {
            return `${(num/1000000).toFixed(2)} million $`
        } else if (num / 1000 >= 1) {
            return `${(num/1000).toFixed(2)} thousand $`
        } else {
            return num;
        }
    }else if(num < 0) {
        if (((num * -1) / 1000000000) >= 1) {
            return `-${((num * -1) / 1000000000).toFixed(2)} billion $`;
        } else if ((num * -1) / 1000000 >= 1) {
            return `-${((num * -1) / 1000000).toFixed(2)} million $`
        } else if ((num * -1) / 1000 >= 1) {
            return `-${((num * -1) / 1000).toFixed(2)} thousand $`
        } else {
            return num;
        }
    }
}

function _cv(cv) {
    if (cv < 0) {
        const resultItem = {
            name : 'CV :',
            value : formatNumber(cv),
            color : 'bad-color',
            comment : `${formatNumber(cv)} over budget.`,
        }
        return resultItem;
    }else if (cv == 0) {
        const resultItem = {
            name : 'CV :',
            value : formatNumber(cv),
            color : 'good-color',
            comment : `Equal budget.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'CV :',
            value : formatNumber(cv),
            color : 'good-color',
            comment : `${formatNumber(cv)} under budget.`,
        }
        return resultItem;
    }
}

function _cpi(cpi) {
    if (cpi < 1) {
        const resultItem = {
            name : 'CPI:',
            value : cpi.toFixed(2),
            color : 'bad-color',
            comment : `We are getting ${(cpi).toFixed(2)}$ out of every dollar we put into the project.`,
        }
        return resultItem;
    }else if (cpi == 1) {
        const resultItem = {
            name : 'CPI:',
            value : cpi.toFixed(2),
            color : 'bad-color',
            comment : `We are getting ${(cpi).toFixed(2)}$ out of every dollar we put into the project.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'CPI:',
            value : cpi.toFixed(2),
            color : 'good-color',
            comment : `We are getting ${(cpi).toFixed(2)}$ out of every dollar we put into the project.`,
        }
        return resultItem;
    }
}

function _sv(sv) {
    if (sv < 0) {
        const resultItem = {
            name : 'SV :',
            value : formatNumber(sv),
            color : 'bad-color',
            comment : `Behind schedule.`,
        }
        return resultItem;
    }else if (sv == 0) {
        const resultItem = {
            name : 'SV :',
            value : formatNumber(sv),
            color : 'good-color',
            comment : `On schedule.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'SV :',
            value : formatNumber(sv),
            color : 'good-color',
            comment : `Ahead of schedule.`,
        }
        return resultItem;
    }
}

function _spi(spi) {
    if (spi < 1) {
        const resultItem = {
            name : 'SPI:',
            value : spi.toFixed(2),
            color : 'bad-color',
            comment : `We are progressing at ${(spi*100).toFixed()}% of the rate planned.`,
        }
        return resultItem;
    }else if (spi == 1) {
        const resultItem = {
            name : 'SPI:',
            value : spi.toFixed(2),
            color : 'bad-color',
            comment : `We are progressing at ${(spi*100).toFixed()}% of the rate planned.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'SPI:',
            value : spi.toFixed(2),
            color : 'good-color',
            comment : `We are progressing at ${(spi*100).toFixed()}% of the rate planned.`,
        }
        return resultItem;
    }
}

function _eac(eac,bac) {
    if (eac > bac) {
        const resultItem = {
            name : 'EAC :',
            value : formatNumber(eac.toFixed(2)),
            color : 'bad-color',
            comment : `We currently estimate that the total project will cost ${formatNumber(eac.toFixed(2))}$.`,
        }
        return resultItem;
    }else if (eac == bac) {
        const resultItem = {
            name : 'EAC :',
            value : formatNumber(eac.toFixed(2)),
            color : 'good-color',
            comment : `We currently estimate that the total project will cost ${formatNumber(eac.toFixed(2))}$.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'EAC :',
            value : formatNumber(eac.toFixed(2)),
            color : 'good-color',
            comment : `We currently estimate that the total project will cost ${formatNumber(eac.toFixed(2))}$.`,
        }
        return resultItem;
    }
}

function _etc(etc) {
    if (etc > 0) {
        const resultItem = {
            name : 'ETC :',
            value : formatNumber(etc.toFixed(2)),
            color : 'bad-color',
            comment : `We need to spend ${formatNumber(etc.toFixed(2))}$ to finish the project.`,
        }
        return resultItem;
    }else if (etc <= 0) {
        const resultItem = {
            name : 'ETC :',
            value : formatNumber(etc.toFixed(2)),
            color : 'good-color',
            comment : `We need to spend 0$ to finish the project.`,
        }
        return resultItem;
    }
}

function _vac(vac) {
    if (vac < 0) {
        const resultItem = {
            name : 'VAC :',
            value : formatNumber(vac.toFixed(2)),
            color : 'bad-color',
            comment : `We currently expect to be ${formatNumber(vac.toFixed(2))} over budget when the project is completed.`,
        }
        return resultItem;
    }else if (vac == 0) {
        const resultItem = {
            name : 'VAC :',
            value : formatNumber(vac.toFixed(2)),
            color : 'good-color',
            comment : `We currently expect to be $0 under budget when the project is completed.`,
        }
        return resultItem;
    }else {
        const resultItem = {
            name : 'VAC :',
            value : formatNumber(vac.toFixed(2)),
            color : 'good-color',
            comment : `We currently expect to be ${formatNumber(vac.toFixed(2))} under budget when the project is completed.`,
        }
        return resultItem;
    }
}
//----------------------------------------- Handle Event -----------------------------------------



function ev_cal () {
    calculate.onclick = () => {
        const ac = $('#ac').value;
        const ev = $('#ev').value;
        const pv = $('#pv').value;
        const bac = $('#bac').value;
        
        const cv = ev - ac;
        const cpi = ev/ac;
        const sv = ev - pv;
        const spi = ev/pv;
        const eac = bac/cpi;
        const etc = eac - ac;
        const vac = bac - eac;

        const resultItems = [];

        resultItems.push(_cv(cv));
        resultItems.push(_cpi(cpi));
        resultItems.push(_sv(sv));
        resultItems.push(_spi(spi));
        resultItems.push(_eac(eac, bac));
        resultItems.push(_etc(etc));
        resultItems.push(_vac(vac));

        //render result
        const htmls = resultItems.map((item) => {
            return `
                <div class="result-item">
                <div class="result-item-number">
                    <div class="result-item-title">${item.name}</div>
                    <div class="result-item-output ${item.color}">${item.value}</div>
                </div>
                <div class="result-item-comment">${item.comment}</div>
                </div>
            `
        })

        result.innerHTML = htmls.join(" ");
    }
}

//----------------------------------------- Run -----------------------------------------
function start () {
    ev_cal();
}

start();