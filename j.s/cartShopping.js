$(document).ready(function() {


    $(".additem .fa-plus").one('click', function() {
        var newItem = $("<div class='additem1'> <div>");
        var img = $(this).parents('.additem').find('img').attr('src');
        var newImg = $('<img>').attr('src', img);
        newItem.append(newImg);


        var newP = $('<p class="newp"></p>');
        var p = $(this).parents('.addicon').siblings('p').text();
        newP.append(p);



        var newicon = $('<span class="delete">Delete</span>');
        newicon.css("color", 'white').css('background', 'red').css('border-radius', '10px').css('display', 'inline-block').css('width', '45px').css('line-height', '20px').css('height', '20px').css('padding', '10px').css('margin', '5px').css('margin-top', '20px').css('cursor', 'pointer');
        var icon = $('.addicon div').html();

        var newAddIcon = $('<div></div>');
        newAddIcon.append(icon);
        newAddIcon.children().remove();
        newAddIcon.append(newicon);


        var caption = $("<div class='caption'></div>");
        caption.append(newP);
        caption.append(newAddIcon);
        newItem.append(caption);

        $('#cartsec').append(newItem);


        calcAll();
        newicon.on('click', function() {
            /* var del = $(this).parent();
     var del1 = del.parent();
      del1.parent().remove();
 */
            $(this).parents('.additem1').fadeOut(2000).detach();
            calcAll();

        });

        function calcAll() {
            var count = $('.countitem').text($("#cartsec .additem1").length);
        }


        warn();

    });
});