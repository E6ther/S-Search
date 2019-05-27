let url_bd_ss = 'https://www.baidu.com/s?wd=';
let url_bd_fy = 'https://fanyi.baidu.com/?#';
let url_bd_bk = 'https://baike.baidu.com/item/';


window.onload = function () {
    $('.s-button').on('click', function (s) {
        search(s);
    });

    $('#ss').on('submit', function () {
        console.log('ss');
        let s = {};
        s.target = {};
        s.target.id = 'bd-ss';
        search(s);
    });
}

function isChinese(str) {
    if (/^[\u3220-\uFA29]+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}

function search(s) {
    let kw = document.getElementById('kw').value;
    let typeid = s.target.id;
    if (typeid === 'bd-ss') {
        window.location.href = url_bd_ss + kw;
    } else if (typeid === 'bd-fy') {
        if (isChinese(kw)) {
            window.location.href = url_bd_fy + 'zh/en/' + kw;
        } else {
            window.location.href = url_bd_fy + 'en/zh/' + kw;
        }
    } else if (typeid === 'bd-bk') {
        window.location.href = url_bd_bk + kw;
    }
    window.event.returnValue = false;

}