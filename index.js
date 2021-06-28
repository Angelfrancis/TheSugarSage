$('#loader > img').css('width',$(window).width()*95/100+'px');
if($(window).width()<1000)
		$('#loader > img').css('width',$(window).width()*95/100+'px');
else
		$('#loader > img').css('width',$(window).width()*0/100+'px');
var homed="";
var aboutd="";
var homev=0;
var total='17'
const listOriginal=[
{
	header:"1",
	title:"Self Love",
	img:"self-love"
},
{
	header:"2",
	title:"PROBLEMS",
	img:"problems"
},
{

	header:"4 Part-1",
	title:"SCHOOL MEMORIES",
	img:"school-memories1"
},
{
	header:"4 Part-2",
	title:"SCHOOL MEMORIES",
	img:"school-memories2"
},
{
	header:"5",
	title:"lonliness",
	img:"lonliness"
},
{
	header:"6",
	title:"diary of middle class person",
	img:"diary-of-middle-class"
},
{
	header:"7",
	title:"heartbreaks",
	img:"heartbreaks"
},
{
	header:"8",
	title:"friendship",
	img:'friendship'
},
{
	header:'9',
	title:"that strong person",
	img:'strong-person'
},
{
	header:'10 Part-1',
	title:"depression",
	img:'depression1'
},
{
	header:'10 Part-2',
	title:"depression",
	img:'depression2'
},
{
	header:'10 Part-3',
	title:"depression",
	img:'depression3'
},
{
	header:'11',
	title:"unrealistic expectations",
	img:'unrealistic-expectations'
},
{
	header:'12',
	title:"death of a loved one",
	img:'death-of-a-loved-one'
},
{
	header:'13',
	title:"life",
	img:'life'
},
{
	header:'14',
	title:"one sided love",
	img:'one-side-love'
},
{
	header:'15',
	title:"haters",
	img:'haters'
},
{
	header:'16',
	title:'My dear ex best friend',
	img:'ex-best-friend'
}
,
{
	header:'17',
	title:'A bad day in my life',
	img:'bad-day'
},
{
	header:'18',
	title:'Suicide',
	img:'suicide'
},
{
	header:'19',
	title:'Partha mudhal naale [Epi 1]',
	img:'Partha-mudhal-naale-1'
},
{
	header:'20',
	title:'Partha mudhal naale [Epi 2]',
	img:'Partha-mudhal-naale-2'
},
{
	header:'21',
	title:'Random Karuthu -1',
	img:'random_karuthu_1'
},
{
	header:'22',
	title:'Random Karuthu -2',
	img:'random-karuthu-2'
},
{
	header:'23',
	title:'Random Karuthu -2',
	img:'rain'
},
{
	header:'24',
	title:'Colab with @eccentric_emotions',
	img:'death-love'
},
{
	header:'25',
	title:'Random Karuthu -4',
	img:'self-love-2'
},
{
	header:'26',
	title:'Random Karuthu -5',
	img:'society'
},
{
	header:'27',
	title:'Night Series (Episode-1)',
	img:'you-are-strong'
},
{
	header:'28',
	title:'Night Series (Episode 2)',
	img:'everything-is-okay'
},
{
	header:'29',
	title:'Night Series (Episode 3)',
	img:'better-future'
},
{
	header:'30',
	title:'Great things',
	img:'keep-trying'
}

]
var list=Object.assign({},listOriginal);
var listshuffle=Object.assign({},listOriginal);
$(window).on("load",function()
	{setTimeout(function(){
			$('#loader').css('opacity','0%');
			$('#loader').css('z-index','-1');
		},5000);	});
function shuffle()
{
	var count=listOriginal.length;
	var listindex, temp;
	while(count>0)
	{
		listindex=Math.floor(Math.random()*listOriginal.length);
		count--;
		temp=listshuffle[count];
		listshuffle[count]=listshuffle[listindex];
		listshuffle[listindex]=temp;
	}
	return listshuffle;

}
$('#shuffle').on('change',function(){
if(document.getElementById('shuffle').checked)
{
	list=shuffle();
	console.log(list)
	$('#shuffle-btn').css({'background-color':'#9ad5d5','filter':'brightness(50%)'})
}
else
{
	$('#audio').attr('src','audio/self-love.mp3');
	$('#audio').attr('class','0');
	$('#play').attr('src','pause.png');
	$('#desc > img').attr('src','image/self-love.jpg');
	var x=$('#audio')[0];
	x.play();
	list=listOriginal
	console.log(list)
	$('#shuffle-btn').css({'background-color':'transparent','filter':'brightness(100%)'})

}
})


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
console.log(listOriginal.indexOf(list[parseInt(c)]));
if(c==listOriginal.length-1)
c=-1
$('#audio').attr('src','audio/'+list[parseInt(c)+1].img+'.mp3');
$('#audio').attr('class',parseInt(c)+1);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src','image/'+list[parseInt(c)+1].img+'.jpg');
var x=$('#audio')[0];
x.play();
};


function previous(){
var c=$('#audio').attr('class');
if(c=='0')
c=listOriginal.length
console.log(c)
$('#audio').attr('src','audio/'+list[parseInt(c)-1].img+'.mp3');
$('#audio').attr('class',parseInt(c)-1);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src','image/'+list[parseInt(c)-1].img+'.jpg');
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
};

$(document).ready(function()
	{
		setTimeout(function()
			{
				$('#loader').remove();
			},5200);
		if($(window).width()<1000){
				$('#playing').css('bottom','18%');
				$('#desc > img').css('width',$(window).width()*60/100+"px");
		}
		else{
				$('#playing').css('bottom','25%');	
				$('#desc > img').css('height',$(window).height()*40/100+"px");
				$('#desc > img').css('width',$(window).width()*10/100+"px");
		}
		var top=50;
		for(i=0;i<listOriginal.length;i++)
		{
			$('#list').append('<div id="'+i+'" class="listitem" onmouseover="mouseover(this)" onmouseout="mouseout(this)" onclick="change(this);" ><img src="image/'+list[i].img+'.jpg" width="150"><p  id="'+i+'" class="text">'+(list[i].header==''?' ':'Episode '+list[i].header)+'<br><span style="color: pink;">'+list[i].title.toUpperCase()+'</span></p></div>');
			top=top+250;
	}
	});



function change(x)
{
	var i=parseInt(x.id);
$('#audio').attr('src','audio/'+list[i].img+'.mp3');
$('#audio').attr('class',i);
$('#play').attr('src','pause.png');
$('#desc > img').attr('src','image/'+list[i].img+'.jpg');
$('#desc  .title').text(list[i].title);
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


$('#menu').mouseout(function()
	{
		if(homev==0){
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');}
		else{
			$('#underline').css('left','120px');
	$('#underline').css('width','80px');}
	});

$(window).ready(function()
	{ 
		$('#loader').css('width',$(window).width()+"px");
		$('#loader').css('height',$(window).height()+"px");
		homed="<div id='homediv'>"+$('#homediv').html()+"</div>";
		aboutd="<div id='aboutdiv'>"+$('#aboutdiv').html();+"</div>";
		 homev=0
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


function about()
{	
	if(homev==0)
	{
	$('#homediv').remove();
	$('#audio').after(aboutd);	
	homev=1;
	$('body').css('overflow','auto');

}
};


function home()
{
	if(homev==1)
	{
	$("#aboutdiv").remove();
	$('#audio').after(homed);//homed is intialized in window ready because after 
	}
	homev=0;
};
