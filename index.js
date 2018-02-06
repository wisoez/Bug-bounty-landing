function initMap() {
  var gdl = {
    lat: 20.6698553,
    lng: -103.3824093
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: gdl,
    streetViewControl: false,
    fullscreenControl: true,
    mapTypeControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  });
  var marker = new google.maps.Marker({
    position: gdl,
    map: map
  });
};