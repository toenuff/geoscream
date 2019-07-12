var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  //map.setCenter({lat: -12.397, lng: 100.644})
};

//var socket = new WebSocket("", "protocolOne");

//socket.onmessage = function(event){
//	var msg = JSON.parse(event.data);
//};

NAMES = [
'@Emmaline', 
'@Leroy',
'@Eneida',
'@Tammy',
'@Santana',
'@Manuel',
'@Melodi',
'@Kasi',
'@Katheryn',
'@Sterling',
'@Almeta',
'@Ara',
'@Moses',
'@Heidy',
'@Elease',
'@Monroe',
'@Jannet',
'@Miesha',
'@Keri',
'@Jina',
'@Naoma',
'@Jeffery',
'@Temple',
'@Marjory',
'@Berniece',
'@Chandra',
'@Chan',
'@Lin',
'@Seymour',
'@Meridith'
];

MESSAGES = [
' Oh no, there is a disaster happening at ',
' Please save us! We need rescuing at ',
' We need emergency support at ',
' Could someone bring emergency aid to ',
' Big disaster @ ',
' A tree fell on my house at ',
' There is a flood right now @ ',
' EARTHQUAKE happening now @ ',
' FOREST FIRE happening now @ '
]

window.setInterval(function(){
  myCallback();
}, 3000);

function myCallback() {
	//console.log("I'm running!");
	latitude = Math.floor(Math.random() * 20) + 30;
	longitude = Math.floor(Math.random() * 40) + 80;

	var node = document.createElement("LI");
	var textnode = document.createTextNode(NAMES[Math.floor(Math.random() * 21)] + " says:" +  MESSAGES[Math.floor(Math.random() * 8)] + latitude.toString() + " -" + longitude.toString());
	//textnode.data = latitude.toString() + " " + longitude.toString();
	node.appendChild(textnode);
	node.addEventListener("click", function(){
		//console.log("Clicked!");
		vals = node.innerHTML.replace('-', '').split(" ").slice(1).slice(-2);
		map.setCenter({lat: parseInt(vals[0]), lng: -1 * parseInt(vals[1])});
	});
	eventlist = document.getElementById("feedlist")
	eventlist.insertBefore(node, eventlist.childNodes[0]);
}