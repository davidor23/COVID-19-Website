// Code goes here

function render(data) {
    var html =
        "<div class='commentBox'><div class='rightPanel'><span>" +
        data.name +
        "</span><div class='date'>" +
        data.date +
        '</div><p>' +
        data.body +
        "</p></div><div class='clear'></div></div>";
    $('#container').append(html);
}

$(document).ready(function() {
    var comment = [
        {
            name: 'Cian Scarborough',
            date: '2020-05-01',
            body: 'Welcome to our site, please leave a comment if you would like to ask a question.',
        },
		{
            name: "Dave O'Reilly",
            date: '2020-05-10',
            body: "Please don't hesitate to get in touch via email or phone with any queries and we'll respond in due course.",
        },
    ];

    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
    }

    $('#addComent').click(function() {
        var addObj = {
            name: $('#name').val(),
            date: $('#date').val(),
            body: $('#bodyText').val(),
        };

        comment.push(addObj);
        render(addObj);
        $('#name').val('');
        $('#date').val('dd/mm/yyyy');
        $('#bodyText').val('');
    });
});
