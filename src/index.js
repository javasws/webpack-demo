import _ from 'lodash';
import $ from 'jquery';

$(document).ready(function () {

    console.log("test")

})

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], '');

    return element;
}

document.body.appendChild(component());
