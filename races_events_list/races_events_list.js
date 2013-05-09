// JavaScript Document
$(document).ready(function() 
{
        var table = '';
        var tempTable = '';
        var outside_list = '';
        var clicked_race_id = '';
        //$('#example').dataTable();
		$.ajax(
        {
            url:            'http://localhost/php/races_events_list.php',//+ encodeURI(qsParm['key']),
            type:           'GET',
            async:          true,
            data:           null,
            crossDomain: false,
        //dataType: 'json',
            contentType:    "application/x-www-form-urlencoded; application/json",
            success: function(json) 
            {
                var obj = jQuery.parseJSON(json);
                $.each(obj.reg, function(i, reg)
                {
                    outside_list +=  '<a rel="external" href="http://localhost/races_events_display/races_events_display.html">' + '<li class="inside_list" id="' + reg.race_id + '">' + reg.race_title + '</li>' + '</a>';
                    //alert("Hi");
                    /*tempTable += '<tr class="odd gradeX" id="' + reg.race_id +'">' +
                                 '<td>' + reg.race_id +'</td>' +
                                 '<td>' + reg.race_title +'</td>' +
                                 '<td>' + reg.race_date +'</td>' +
                                 '<td>' + reg.race_location +'</td>' +
                                 '<td>' + reg.race_distances +'</td>' +
                                 '<td>' + reg.race_photo +'</td>' +
                                 '</tr>';*/
                
                });
                $('#outside_list').append(outside_list);
                $('.inside_list').mouseenter(function(){
                    $(this).css('background', '#B0E2FF');
                });
                $('.inside_list').mouseleave(function(){
                    $(this).css('background', '#EEEEEE');
                });
                
                $('.inside_list').click(function(){
                    clicked_race_id=$(this).attr('id');
                    postEvent(clicked_race_id);
                });
                
                
                
            //$.jStorage.set(key, json.token)
            //$.mobile.changePage("html/main0101.html?"+json.token);
                /*$('#tb').append(tempTable);
                $('#example').dataTable();*/
            },
            error: function(err) 
            {
                alert("Database cannot be accessed.");
            
            }
        }, 'jsonp');
        
		
});

function postEvent(clicked_race_id)
{

    $.ajax(
    {
        url:            'http://localhost/php/races_events_display.php?events_race_id='clicked_race_id'',//+ encodeURI(qsParm['key']),
        type:           'POST',
        async:          true,
        data:           null,
        crossDomain: false,
        //dataType: 'json',
        contentType:    "application/x-www-form-urlencoded; application/json",
        //$(this).apppend('<a href = "http://facebook.com"></a>');
        //alert(clicked_id);
        success: function(json) 
        {
            alert(clicked_race_id);
        },
        error: function(err) 
        {
             alert("There are no details for the event.");
        }
    }, 'jsonp');
}
