$(function() {
    $.ajax({
        url: 'https://www.codeschool.com/users/AnnetteSund.json',
        dataType: 'jsonp',
        success: function(response) {
            var completed = response.courses.completed;
            $.each(completed, function(index, item) {
                $('#badges').append('<div class="course">' +
                    '<h3>' +
                    item.title +
                    '</h3>' +
                    '<img src="' +
                    item.badge +
                    '"/>' +
                    '<a class="btn btn-primary" href="' +
                    item.url +
                    '" target="_blank">See Course</a>' +
                    '</div>');
            });
        }
    });
    

});
