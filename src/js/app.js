import { load as load_template } from './templates';
import * as player from './player';
import * as playlist from './playlist';
import Mustache from 'mustache';

var template;
var page = {

};

export function show() {
    document.body.innerHTML = Mustache.render(template, page);
    player.init(document.getElementById('PlayerContainer'));
    playlist.init(document.getElementById('PlaylistContainer'));
}

export function init() {
    load_template('main.template.html').then(function(result) {
        template = result;
        Mustache.parse(template);
        show();
    }, function(error) {
        console.error('ERRROR loading main template', error);
    });
}