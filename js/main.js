var links =
    [
        'js/json-files/r_earth-porn.json',
        'js/json-files/r_pic.json'
    ];

$.each(links, function(link) {
    $.getJSON(links[link], function(response) {
        displayImage(response);
    });
});

var counter = 0;

function displayImage(response) {
    $.each(response.data.children, function(item) {

        counter += 1;

        let post = response.data.children[item].data;
        let picture = post.url;
        let title = post.title;
        let author = post.author;
        let permalink = post.permalink;

        if(picture.substring(picture.length-4, picture.length) != '.jpg') {
            picture = picture.concat('.jpg');
        }

        $('#photos').append("<div class='image-container image-container-" + counter +"'></div>");
        $('.image-container-' + counter).append("<img class='image-thumbnail' src='" + picture + "'>");
        $('.image-container-' + counter).append("<div class='author-details'><p>" + title + "</p></div>");
        $('.image-container-' + counter + ' .author-details').append("<p>by " + author  + "</p>");
        $('.image-container-' + counter + ' .author-details').append("<div class='author-links'></div>");
        $('.image-container-' + counter + ' .author-links').append("<a class='reddit-link' target='_blank' href='https://www.reddit.com" + permalink + "'><span class='glyphicon glyphicon-comment'></span></a>");
        $('.image-container-' + counter + ' .author-links').append("<a class='full-screen-link' target='_blank' href='" + picture + "'><span class='glyphicon glyphicon-resize-full'></span></a>");


    });
}


function togglePhotoDetails(item) {
    $('.' + item).toggleClass('image-container-fade');
    $('.' + item + ' img').toggleClass('image-thumbnail-fade');
    $('.' + item + ' .author-details').fadeToggle('fast');

}

$(document).ready(function() {
    $('.image-container').click(function() {
        let clickedImageText = $(this).attr('class').split(' ')[1];
        togglePhotoDetails(clickedImageText);
    })
});

// TEST on Local
// 
// counter = 0;
//
// function displayImage(response) {
//     $.each(response.data.children, function(item) {
//
//         counter += 1;
//
//         let post = response.data.children[item].data;
//         let picture = post.url;
//         let title = post.title;
//         let author = post.author;
//         let permalink = post.permalink;
//
//         if(picture.substring(picture.length-4, picture.length) != '.jpg') {
//             picture = picture.concat('.jpg');
//         }
//
//         $('#photos').append("<div class='image-container image-container-" + counter +"'></div>");
//         $('.image-container-' + counter).append("<img class='image-thumbnail' src='" + picture + "'>");
//         $('.image-container-' + counter).append("<div class='author-details'><p>" + title + "</p></div>");
//         $('.image-container-' + counter + ' .author-details').append("<p>by " + author  + "</p>");
//         $('.image-container-' + counter + ' .author-details').append("<div class='author-links'></div>");
//         $('.image-container-' + counter + ' .author-links').append("<a class='reddit-link' target='_blank' href='https://www.reddit.com" + permalink + "'><span class='glyphicon glyphicon-comment'></span></a>");
//         $('.image-container-' + counter + ' .author-links').append("<a class='full-screen-link' target='_blank' href='" + picture + "'><span class='glyphicon glyphicon-resize-full'></span></a>");
//
//
//     });
// }