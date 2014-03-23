<?php
// $string = file_get_contents("sampleData.json");
//echo $string;
//$data = json_decode($string, true);

$jsonData = file_get_contents("sampleData.json");
$phpArray = json_decode($jsonData, true);
//foreach ($phpArray as $key => $value) { 
//    echo "<h2>$key</h2>";
//    foreach ($value as $k => $v) { 
//        echo "$k | $v <br />"; 
//    }
//}
echo $jsonData;
$json = '{ "provider":{ "id":"1982660171", "display_name":"Stephen R Guy, MD", "last_name":"Guy", "first_name":"Stephen", "middle_name":"Russell", "master_name":"Stephen_Guy", "degree_types":"MD", "familiar_name":"Stephen", "years_experience":"27", "birth_year":"1956", "birth_month":"5", "birth_day":"23", "gender":"M", "is_limited":"false", "url_deep":"http:\\/\\/www.vitals.com\\/doctor\\/profile\\/1982660171\\/Stephen_Guy", "url_public":"http:\\/\\/www.vitals.com\\/doctors\\/Dr_Stephen_Guy.html", "status_code":"A", "client_ids":"1", "quality_indicator_set":[ { "type":"quality-indicator\\/consumer-feedback", "count":"2", "suboverall_set":[ { "name_short":"Promptness", "overall":"3" }, { "name_short":"Courteous Staff", "overall":"4" }, { "name_short":"Bedside Manner", "overall":"4" }, { "name_short":"Spends Time with Me", "overall":"4" }, { "name_short":"Follow Up", "overall":"4" } ], "name":"Consumer Reviews", "overall":"4.0", "measure_set":[ { "feedback_response_id":"1756185", "input_source_ids":"{0}", "date":"1301544000", "value":"4", "scale":{ "best":"1", "worst":"4" }, "review":{ "type":"review\\/consumer", "comment":"I will never birth with another dr. Granted that\'s not saying much as I don\'t like dr\'s but I actually find him as valuable as the midwives who I adore. I liked Horlacher but when Kitty left I followed the midwives and then followed again....Dr. Guy is GREAT. I honestly don\'t know who I\'d rather support me at my birth; Margie and Lisa or Dr. Guy. ....I wonder if I can just get all of them.Guy\'s great. Know what you want. Tell him. Be strong and he\'ll support you.I give him 10 stars. Oh...my baby\'s 3 years old now. He\'s GREAT! ", "date":"1301544000" }, "sub_measure":[ { "name":"Waiting time during a visit", "name_short":"Promptness", "value":"3", "scale":{ "best":"4", "worst":"1" } }, { "name":"Courtesy and professionalism of office staff ", "name_short":"Courteous Staff", "value":"4", "scale":{ "best":"4", "worst":"1" } }, { "name":"Bedside manner (caring)", "name_short":"Bedside Manner", "value":"4", "scale":{ "best":"4", "worst":"1" } }, { "name":"Spending enough time with me", "name_short":"Spends Time with Me", "value":"4", "scale":{ "best":"4", "worst":"1" } }, { "name":"Following up as needed after my visit", "name_short":"Follow Up", "value":"4", "scale":{ "best":"4", "worst":"1" } } ] }, { "feedback_response_id":"420734", "input_source_ids":"{76}", "link":"http:\\/\\/local.yahoo.com\\/info-15826842-guy-stephen-r-md-university-women-s-health-center-dayton", "date":"1142398800", "value":"4", "scale":{ "best":"1", "worst":"4" }, "review":{ "type":"review\\/consumer", "comment":"Excellent Doctor: I really like going to this office. They are truely down to earth people and talk my \\"non-medical\\" language. I have been using thier office since 1997 and they have seen me through 2 premature pregnancies!", "date":"1142398800" } } ], "wait_time":"50" } ] } } ';

$obj = json_decode($json);

//This is how you can retrieve data 
print $obj->{'provider'}->{'id'};
?>
	
	
	<div class="project_page clearfix">
	    <div class="flexslider clearfix">
		<ul class="slides">
		    <li><img src="images/flexslider1.jpg"></li>
		    <li><img src="images/flexslider2.jpg"></li>
		    <li><img src="images/flexslider3.jpg"></li>
		</ul>
	    </div>

	    <div class="project_content clearfix">
		<div class="three_fourth">
		    <h4 class="black mb">Overview</h4>

		    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus tellus, auctor eget vestibulum consectetur, euismod et nisi. Suspendisse malesuada pellentesque justo, at molestie dui convallis in. Fusce sollicitudin est ut arcu auctor posuere. In ut urna vel velit condimentum placerat. Proin tortor dolor, porta pharetra blandit non, dictum at risus. Suspendisse at cursus dolor. Etiam nec tincidunt erat.<br>
		    <br>
		    Etiam volutpat feugiat massa non pretium. Integer risus sem, consequat id feugiat ac, placerat tristique sem. Donec vitae felis id lorem imperdiet vestibulum bibendum in mauris. Nullam id sem ligula. Donec tincidunt rhoncus turpis, et pharetra nunc volutpat quis. Curabitur porttitor odio quis velit condimentum dapibus.</p><a class="btn-small" href="#">Launch website</a>
		</div>

		<div class="one_fourth last">
		    <h4 class="black mb">What we did</h4>

		    <ul class="categories">
			<div style="color: #ff0000;">
			    
			    
			Animal selected : <?php  print $phpArray->{'u1'}->{'user'}; ?>
			<?php echo $_GET["animal"]; ?>
</div>
			<li><a href="#">eCommerce</a></li>

			<li><a href="#">Flash Animation &amp; Ads</a></li>

			<li><a href="#">TV Advertising</a></li>

			<li><a href="#">Online Magazines</a></li>

			<li><a href="#">Email marketing</a></li>
		    </ul>
		</div>
	    </div>
	</div>
