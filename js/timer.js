
$(function(){
	
    $("#ida1").click(function() {
   
 $('#div1').hide(slow); 
var idd = $("#id1").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				});
});

function trylng2(){  $(document).ready(function() { $('#div2').hide(slow); }); 
var idd = $("#id2").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				});
				
				
				}
function trylng3(){  $(document).ready(function() { $('#div3').hide(slow); });
var idd = $("#id3").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				}); }
function trylng4(){  $(document).ready(function() { $('#div4').hide(); });
var idd = $("#id4").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				}); }
function trylng5(){  $(document).ready(function() { $('#div5').hide(); }); 
var idd = $("#id5").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				});}
function trylng6(){  $(document).ready(function() { $('#div6').hide(); }); 
var idd = $("#id6").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				});}
function trylng7(){  $(document).ready(function() { $('#div7').hide(); });
var idd = $("#id7").val();
				
				$.ajax({
					url: "php/updatereport.php",
					type: "POST",
					data: {"idd":idd},
					success:function(data){
						$("#show1").html(data);		
					}
				}); }
function trylng8(){  $(document).ready(function() { $('#div8').hide(); }); }
function trylng9(){  $(document).ready(function() { $('#div9').hide(); }); }
function trylng10(){  $(document).ready(function() { $('#div10').hide(); }); }
function trylng11(){  $(document).ready(function() { $('#div11').hide(); }); }
function trylng12(){  $(document).ready(function() { $('#div12').hide(); }); }
function trylng13(){  $(document).ready(function() { $('#div13').hide(); }); }
function trylng14(){  $(document).ready(function() { $('#div14').hide(); }); }
function trylng15(){  $(document).ready(function() { $('#div15').hide(); }); }

