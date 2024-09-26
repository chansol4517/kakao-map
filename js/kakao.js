const mapContainer = document.querySelector("#map");
const btnToggle = document.querySelector(".trafficToggle");

const mapOption = {
	center: new kakao.maps.LatLng(37.54445506191197, 127.04430086252265),
	level: 3
};

//스크립트가 처음 로드되 ㄴ시점에 mapOption안에 포함되어 있는 위치값을 기준으로 지도 인스턴스가 생상되고 끝
//이슈사항 : 지도 인스턴스가 처음 생성된 시점에서 위치값이 고정되어 있기 때문에 브라우저 리사이즈시 위치 중앙이 틀어짐
//해결방법 : 브라우저 리사이즈 할 때 마다 지도 인스턴스를 생성

//브라우저 리사이즈 될때마다 map변수에 변경된 값을 재반영해야 되므로 let방식으로 변수 선언
let map = new kakao.maps.Map(mapContainer, mapOption);
let marker = new kakao.maps.Marker({ position: mapOption.center });
const mapTypeControl = new kakao.maps.MapTypeControl();
const zoomControl = new kakao.maps.ZoomControl();
marker.setMap(map);
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

//브라우저 리사이즈 이벤트가 발생할때마다
window.addEventListener("resize", () => {
	//리사이즈 될떄마다 중첩되는 엘리먼트 요소들을 일단은 지워서 초기화
	mapContainer.innerHTML = "";
	//기존 map, marker변수에 변경된 인스턴스 정보값을 덮어쓰기 처리
	map = new kakao.maps.Map(mapContainer, mapOption);
	marker.setMap(map);
	//리사이즈 될때마다 컨트롤 패널 다시 추가
	map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	//리사이즈시 강제 토글버튼 초기화
	btnToggle.classList.remove("on");
});

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
