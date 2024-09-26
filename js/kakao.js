//지도를 생성할 프레임요소 변수에 할당
const mapContainer = document.querySelector("#map");

//지도에 적용할 옵션값을 객체로 묶어서 할당
const mapOption = {
	center: new kakao.maps.LatLng(37.5444107, 127.0437792), //출력할 지도의 위도, 경도
	level: 1 //지도의 확대 정도
};

//new 연산자로 카카오 지도 인스턴스를 생성 (지도를 출력한 DOM, 지도옵션객체)
const map = new kakao.maps.Map(mapContainer, mapOption);

// 지도위치에 관한 인스턴스 생성
const markerPosition = new kakao.maps.LatLng(37.5444107, 127.0437792);

// 마커에 대한 인스턴스 생성 (인수로 위에서 생성된 지도위치 인스턴스 필요)
const marker = new kakao.maps.Marker({
	position: markerPosition
});

// 마커인스턴스에 setMap함수를 호출해서 인수로 지도 인스턴스 집어넣음
//지도에 마커가 출력
marker.setMap(map);
