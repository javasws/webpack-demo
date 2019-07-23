import _ from 'lodash';
import $ from 'jquery';
import './style.css';

$(document).ready(function () {

    console.log("测试");

});

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
