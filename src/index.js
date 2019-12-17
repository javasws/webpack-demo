import _ from 'lodash';
import $ from 'jquery';

$(document).ready(function () {

    console.log("测试");

});

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], '');

    return element;
}

document.body.appendChild(component());
