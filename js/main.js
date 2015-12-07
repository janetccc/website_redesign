/*
1. All project titles should have an ID
ex 1: 
Title: Project 1 -> id = project1
ex 2:
Title: HealthBoard -> id = healthboard

2. All project_preview divs should have an ID that is the project title + _highlight
ex. 1:
project1_highlight
ex 2:
healthboard_highlight

3. CSS style of selected project can be changed at .current_page
*/

var current_project = $('.project_title').attr('id'); //identifies current pages
console.log('current page: ' + current_project);

var highlight_project = '#' + current_project + '_highlight'; //modifies id to match corresponding link id in bottom nav section
console.log('new id: ' + highlight_project);

$(highlight_project).addClass('current_page') //adds class to corresponding link id in nav