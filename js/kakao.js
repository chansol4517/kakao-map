const mapContainer = document.querySelector("#map");

const mapOption = {
	center: new kakao.maps.LatLng(37.54445506191197, 127.04430086252265),
	level: 3
};

const map = new kakao.maps.Map(mapContainer, mapOption);
const marker = new kakao.maps.Marker({ position: mapOption.center });
marker.setMap(map);

//맵위에 올릴 타입 컨트롤 인스턴스 생성
const mapTypeControl = new kakao.maps.MapTypeControl();

//타입컨트롤러의 위치값 지정하는 함수
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//맵 위에 올릴 줌 컨트롤 인스턴스 생성
const zoomControl = new kakao.maps.ZoomControl();
//줌 컨트롤러의 위치값 지정하는 함수
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
