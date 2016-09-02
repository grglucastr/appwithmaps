function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(52.231164, -3.015747),
    zoom: 10
  };
  
  var initialCenter = mapOptions.center;
  var initialZoom = mapOptions.zoom;
  
  var map = new google.maps.Map(document.getElementById('mapDiv'), mapOptions);
  
  addShowCoords(map);
  drawMarkers(map);
  addGoToInitialExtent(map, initialCenter, initialZoom);
  drawPolyline(map);
  drawEditablePolygon(map);
  drawDraggableRectangle(map);
  drawCircle(map);
}

google.maps.event.addDomListener(window, 'load', initialize);


function addShowCoords(map){
  google.maps.event.addListener(map, 'center_changed', function(){
    var newCenter = map.getCenter();
    var zoom = map.getZoom();
    document.getElementById('coordsDiv').innerHTML = "Center: " + newCenter.toString() + "<br>Zoom: "+zoom;
  });
}

function addGoToInitialExtent(map, initialCenter, initialZoom){
  google.maps.event.addListener(map, 'rightclick', function(){
    map.setCenter(initialCenter);
    map.setZoom(initialZoom);
  });
};

function drawMarkers(map) {
  var centerMarker = new google.maps.Marker({
    position: new google.maps.LatLng(52.345860, -3.051817),
    map: map,
    title: `The Offa's Dyke Center, Knighton, Powys`
  });

  var pubMarker = new google.maps.Marker({
    position: new google.maps.LatLng(52.343866, -3.0492420),
    map: map,
    title: `The Knighton Hotel`
  });
}

function drawPolyline(map) {
  var pathCoordinates = [
    new google.maps.LatLng(52.343808, -3.049318),
    new google.maps.LatLng(52.343880, -3.049468),
    new google.maps.LatLng(52.344064, -3.049146),
    new google.maps.LatLng(52.344261, -3.049682),
    new google.maps.LatLng(52.345126, -3.050551),
    new google.maps.LatLng(52.345493, -3.051034),
    new google.maps.LatLng(52.345663, -3.051388),
    new google.maps.LatLng(52.345716, -3.051742),
    new google.maps.LatLng(52.345801, -3.051796),
    new google.maps.LatLng(52.345860, -3.051935),
    new google.maps.LatLng(52.345945, -3.051903),
  ];

  var pathToCenter = new google.maps.Polyline({
    path: pathCoordinates,
    geodesic: false,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeigth: 2,
    map: map
  });

  //pathToCenter.setMap(map);
};

function drawEditablePolygon(map) {
  var natureCoords = [
    new google.maps.LatLng(52.347295, -3.059607),
    new google.maps.LatLng(52.347138, -3.061066),
    new google.maps.LatLng(52.346351, -3.060465),
    new google.maps.LatLng(52.345460, -3.060465),
    new google.maps.LatLng(52.344569, -3.059864),
    new google.maps.LatLng(52.344726, -3.058748)
  ];

  var natureArea = new google.maps.Polygon({
    path: natureCoords,
    strokeColor: '#FFFFFF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#00FF00',
    fillOpacity: 0.6,
    editable: true,
    map: map
  });
};

function drawDraggableRectangle(map) {
  var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(52.340308, -3.052557),
    new google.maps.LatLng(52.340799, -3.050647)
  );

  var rectangle = new google.maps.Rectangle({
    bounds: bounds,
    map: map,
    fillColor: '#00FF00',
    fillOpacity: 0.6,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    draggable: true
  });
};

function drawCircle(map) {
  var circle = new google.maps.Circle({
    map: map,
    radius: 58.222737,
    center: new google.maps.LatLng(52.341049, -3.053942),
    fillColor: '#FF33FF',
    fillOpacity: 0.6,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2
  });
};