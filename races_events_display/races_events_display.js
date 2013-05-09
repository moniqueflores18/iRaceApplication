// JavaScript Document
$(document).ready(function() 
{
        var table = '';
        var tempTable = '';
        var clicked_id = '';
        var event_title = '';
        var event_photo = '';
        var event_status = '';
        var event_distances = '';
        var event_reg = '';
        var event_desc = '';
        var event_orgnizer = '';
        var event_contact = '';
        //$('#example').dataTable();
		$.ajax(
        {
            url:            'http://localhost/php/races_events_display.php',//+ encodeURI(qsParm['key']),
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
                    event_title = '<h1>' + reg.race_title + '</h1>' +
                                  '<h4>' + reg.race_date + ' ' + '.' + ' ' + reg.race_location + '</h4>';
                    event_photo = '<img id="mainphoto" src="' + reg.race_photo + '"/>';
                    event_status = '<p class="infobody">' + reg.race_status + '</p>';
                    event_distances = '<p class="infobody">' + reg.race_distances + '</p>';
                    event_desc = '<p class="infobody1">' + reg.race_description + '</p>';
                    event_reg = '<p class="infobody1">' + reg.race_how_to_register + '</p>';
                    event_organizer = '<p class="infobody1">' + reg.race_organizer + '</p>';
                    event_contact = '<p class="infobody1">' + reg.race_contact + '</p>';
                    
                    
                    //outside_list +=  '<a href="http://localhost/php/races_events_list.php">' + '<li class="inside_list" id="' + reg.race_id + '">' + reg.race_title + '</li>' + '</a>';
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
                
                $('#event_title').append(event_title);
                $('#top_left').append(event_photo);
                $('#status').append(event_status);
                $('#distances').append(event_distances);
                $('#description').append(event_desc);
                $('#registration').append(event_reg);
                $('#organizer').append(event_organizer);
                $('#contact').append(event_contact);
                
                
                /*$('#outside_list').append(outside_list);
                $('.inside_list').mouseenter(function(){
                    $(this).css('background', '#B0E2FF');
                });
                $('.inside_list').mouseleave(function(){
                    $(this).css('background', '#EEEEEE');
                });
                
                $('.inside_list').click(function(){
                    clicked_id=$(this).attr('id');
                    //$(this).apppend('<a href = "http://facebook.com"></a>');
                    //alert(clicked_id);
                });*/
                
                
                
            //$.jStorage.set(key, json.token)
            //$.mobile.changePage("html/main0101.html?"+json.token);
                /*$('#tb').append(tempTable);
                $('#example').dataTable();*/
            },
            error: function(err) 
            {
                alert("Invalid username/password");
            
            }
        }, 'jsonp');
        
		
});
