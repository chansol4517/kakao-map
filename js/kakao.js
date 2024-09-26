const mapContainer = document.querySelector("#map");
const btnToggle = document.querySelector(".trafficToggle");

const mapOption = {
	center: new kakao.maps.LatLng(37.54445506191197, 127.04430086252265),
	level: 3
};

const map = new kakao.maps.Map(mapContainer, mapOption);
const marker = new kakao.maps.Marker({ position: mapOption.center });
marker.setMap(map);

const mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

const zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//btnOn.addEventListener("click", () => map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC));
//btnOff.addEventListener("click", () => map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC));

btnToggle.addEventListener("click", e => {
	e.target.classList.toggle("on");

	if (e.target.classList.contains("on")) {
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "traffic OFF";
	} else {
		map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		e.target.innerText = "trafiic ON";
	}
});
