$('#loader > img').css('width',$(window).width()*95/100+'px');
if($(window).width()<1000){
		$('#loader > img').css('width',$(window).width()*95/100+'px');

}
		else{
			$('#loader > img').css('width',$(window).width()*0/100+'px');

		}

function play(x)
{
if(x.paused)
	{x.play();
		$('#play').attr('src','pause.png');}
else{
	x.pause();
$('#play').attr('src','play.png');}
};
function next(){
var c=$('#audio').attr('class');
if(c=='8')
c=0
$('#audio').attr('src',parseInt(c)+1+'a.mp3');
$('#audio').attr('class',parseInt(c)+1);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src',parseInt(c)+1+'.jpg');
var x=$('#audio')[0];
x.play();
};
function previous(){
var c=$('#audio').attr('class');
if(c=='1')
c=9
$('#audio').attr('src',parseInt(c)-1+'a.mp3');
$('#audio').attr('class',parseInt(c)-1);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src',parseInt(c)-1+'.jpg');
var x=$('#audio')[0];
x.play();

};
function playing(x)
{
$('#lp').css('width',(x.currentTime/x.duration)*100+'%');
}
function forward()
{
	var x=$('#audio')[0];//$('') is always a array also for id so [] is used to access the element
	x.currentTime=x.currentTime+5;
};
function backward()
{
	var x=$('#audio')[0];//$('') is always a array also for id so [] is used to access the element
	x.currentTime=x.currentTime-5;
}
$(document).ready(function()
	{
		var top=50;
		for(i=1;i<=8;i++)
		{
			$('#list').append('<div id="'+i+'" class="listitem" onmouseover="mouseover(this)" onmouseout="mouseout(this)" onclick="change(this);" ><img src="'+i+'.jpg" width="150"><p style="position:absolute;top:'+top+'px;" id="'+i+'" class="text">'+$('#'+i).html()+'</p></div>');
			top=top+250;
	}
	});
function change(x)
{
	var i=parseInt(x.id);
$('#audio').attr('src',i+'a.mp3');
$('#audio').attr('class',i);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src',i+'.jpg');
var x=$('#audio')[0];
x.play();
};
function mouseover(x)
	{
	var i=parseInt(x.id);
	$('#'+i+'> img').css('filter','brightness(50%)');
	$('#'+i+'> p').css('opacity','100%');

	};
function mouseout(x)
	{
var i=parseInt(x.id);
	$('#'+i+'> img').css('filter','brightness(100%)');
	$('#'+i+'> p').css('opacity','0%');
	};
	$('#home').mousemove(function()
	{
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');
	});
$('#about').mousemove(function()
{
	$('#underline').css('left','120px');
	$('#underline').css('width','80px');
});
$('#writeto').mousemove(function()
{
	$('#underline').css('left','222px');
	$('#underline').css('width','110px');
});
$(document).ready(function()
	{
		if($(window).width()<1000){
		$('#playing').css('bottom','18%');

		$('#desc > img').css('width',$(window).width()*60/100+"px");
}
		else{
		$('#playing').css('bottom','25%');	

				$('#desc > img').css('height',$(window).height()*40/100+"px");
				$('#desc > img').css('width',$(window).width()*10/100+"px");
		}});
$(window).ready(function()
	{ 
		$('#loader').css('width',$(window).width()+"px");
		$('#loader').css('height',$(window).height()+"px");
		setTimeout(function(){
			$('#loader').css('opacity','0%');
			$('#loader').css('z-index','-1');
		},5000);
	});
$(window).resize(function()
	{
		if($(window).width()<1000)
		$('#playing').css('bottom','18%');
		else
		$('#playing').css('bottom','25%');	
});
$(window).load(function()
{
$('#loader').css('width',$(window).width()+"px");
		$('#loader').css('height',$(window).height()+"px");
	});
