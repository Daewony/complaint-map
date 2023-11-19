var mapOptions = {
  // (고양시)위도, 경도 설정
  center: new naver.maps.LatLng(37.6583599, 126.8320201),
  zoom: 13, // 1~21 설정 가능, 수치가 클수록 확대

  // 확대, 축소 버튼
  zoomControl: true,
  zoomControlOptions: {
    style: naver.maps.ZoomControlStyle.SMALL,
    position: naver.maps.Position.TOP_RIGHT,
  },
  //  초록색 네이버 로고 표시 여부, 로고 제거
  logoControl: false,
  logoControlOptions: {
    position: naver.maps.Position.TOP_LEFT,
  },
  // 지도 정보 문구, 네이버 문구 표시 여부, 네이버 문구 제거
  mapDataControl: false,
  mapDataControlOptions: {
    position: naver.maps.Position.BOTTOM_LEFT,
  },
};

// 지도 설정
var map = new naver.maps.Map(document.getElementById("map"), mapOptions);

// 마커 위치 정보 배열
var markerPositions = [
  { lat: 37.6583599, lon: 126.8320201 },
  { lat: 37.651506, lon: 126.874176 },
  { lat: 37.6582368641021, lon: 126.837878358259 },
  { lat: 37.6843594104788, lon: 126.752777764763 },
  { lat: 37.6145221200212, lon: 126.851655221389 },
  { lat: 37.61726673, lon: 126.8332155 },
  { lat: 37.6764, lon: 126.81438 },
  { lat: 37.68553, lon: 126.77011 },
  { lat: 37.60685, lon: 126.84335 },
  { lat: 37.6950255128289, lon: 126.724548044273 },
  { lat: 37.67222, lon: 126.77411 },
  { lat: 37.6694182016653, lon: 126.698210327392 },
  { lat: 37.6694182016653, lon: 126.698210327392 },
  { lat: 37.6926300161334, lon: 126.747222994 },
  { lat: 37.67962, lon: 126.75599 },
  { lat: 37.70496158, lon: 126.8983877 },
  { lat: 37.71135165, lon: 126.9035938 },
  { lat: 37.71135165, lon: 126.9035938 },
  { lat: 37.64380424, lon: 126.8064873 },
  { lat: 37.6642289486656, lon: 126.797587222168 },
  { lat: 37.68526038, lon: 126.7724664 },
  // 추가 위치들을 계속해서 입력해주세요...
];

// 마커 배열
var markers = [];

var contents_html =
  '<div style="padding:5px; background-color:white; color:black; text-align:center; border:1px solid #a09b07; border-radius:14px; opacity:0.9;" onmouseover="javascript:overCrime(\'trash3\');" onmouseout="javascript:outCrime(\'trash3\');">' +
  '<div style="font-weight: bold; font-size:14px;">쓰레기</div>' +
  '<div id="trash3" style="font-weight: normal; font-size:13px; margin-top:3px; display:block">2021-7-21<br/>13시 11분</div>' +
  '<div><img src="images/trashDetect.png" alt="Trash Image" style="width: 100%; height: 100%; margin-top: 5px;"></div>' +
  "</div>";

// 마커 생성과 지도에 추가하는 함수
// for (var i = 0; i < markerPositions.length; i++) {
for (var i = 0; i < 1; i++) {
  var position = markerPositions[i];
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(position.lat, position.lon),
    map: map,
    title: "쓰레기",
    icon: {
      content: contents_html,
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    },
  });
  markers.push(marker);
}

function overCrime(childID) {
  // $("#" + childID).show();
  // console.log("hi");
  var element = document.getElementById(childID);
  if (element) {
    element.style.display = "block";
    console.log("hi");
  } else {
    console.log("Element with id " + childID + " not found");
  }
}

function outCrime(childID) {
  $("#" + childID).hide();
  console.log("bye");
}

// 클러스팅 이미지 적용
$(document).ready(function () {
  var htmlMarker1 = {
      content:
        '<div style="cursor:pointer;width:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/marker-tools.js/marker-clustering/images/cluster-marker-1.png);background-size:contain;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    },
    htmlMarker2 = {
      content:
        '<div style="cursor:pointer;width:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/marker-tools.js/marker-clustering/images/cluster-marker-2.png);background-size:contain;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    },
    htmlMarker3 = {
      content:
        '<div style="cursor:pointer;width:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/marker-tools.js/marker-clustering/images/cluster-marker-3.png);background-size:contain;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    },
    htmlMarker4 = {
      content:
        '<div style="cursor:pointer;width:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/marker-tools.js/marker-clustering/images/cluster-marker-4.png);background-size:contain;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    },
    htmlMarker5 = {
      content:
        '<div style="cursor:pointer;width:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/marker-tools.js/marker-clustering/images/cluster-marker-5.png);background-size:contain;"></div>',
      size: N.Size(40, 40),
      anchor: N.Point(20, 20),
    };
  // 기존 height:40px가 있는데 이거때문에 이미지가 넘치는 효과 발생 -> css 건드려야할듯
  //   content: '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url('+ HOME_PATH +'/img/cluster-marker-5.png);background-size:contain;"></div>',

  var markerClustering = new MarkerClustering({
    minClusterSize: 2,
    maxZoom: 17, // 클러스터 마커로 표현할 최대 줌 레벨입니다. 해당 줌 레벨보다 높으면, 클러스터를 구성하고 있는 마커를 노출합니다.
    map: map,
    markers: markers,
    disableClickZoom: false,
    gridSize: 120,
    icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4, htmlMarker5],
    indexGenerator: [10, 100, 200, 500, 1000],
    stylingFunction: function (clusterMarker, count) {
      $(clusterMarker.getElement()).find("div:first-child").text(count);
    },
  });
});
