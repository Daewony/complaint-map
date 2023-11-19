// 행정동으로 나눔
const GoyangCity_WasteComplaints = {
  덕양구: {
    주교동: 100,
    원신동: 80,
    효자동: 120,
    삼송1동: 110,
    삼송2동: 90,
    흥도동: 70,
    "성사1~2동": 130,
    창릉동: 110,
    고양동: 95,
    관산동: 105,
    능곡동: 115,
    행주동: 120,
    "화정1~2동": 140,
    "행신1, 3~4동": 160,
    행신2동: 135,
    화전동: 125,
    대덕동: 110,
  },
  일산동구: {
    고봉동: 95,
    "마두1~2동": 120,
    "백석1~2동": 100,
    "장항1~2동": 110,
    식사동: 130,
    정발산동: 140,
    "중산1~2동": 155,
    풍산동: 125,
  },
  일산서구: {
    대화동: 120,
    송포동: 135,
    가좌동: 110,
    덕이동: 95,
    "일산1~3동": 130,
    "주엽1~2동": 140,
    "탄현1~2동": 115,
  },
};

// 데이터를 HTML에 추가하는 함수
function addDataToHTML(data) {
  const menuLinks = document.querySelector(".menu-links"); // 동적 데이터를 추가할 부모 요소 선택

  // 데이터 배열을 순회하며 HTML 요소를 생성하고 추가
  data.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.className = "nav-link";
    listItem.innerHTML = `
      <a href="#">
        <span class="topRank">${index + 1}</span>
        <strong class="city">${item.city}</strong>
        <strong class="ward">${item.ward}</strong>
        <div class="rankInfo">
          <span class="count">${item.complaints} 건</span>
        </div>
      </a>
    `;
    menuLinks.appendChild(listItem);
  });
}

// 데이터를 추출하여 HTML에 추가
const data = [];

for (const city in GoyangCity_WasteComplaints) {
  for (const ward in GoyangCity_WasteComplaints[city]) {
    data.push({
      city: city,
      ward: ward,
      complaints: GoyangCity_WasteComplaints[city][ward],
    });
  }
}

// 민원 수(complaints)로 내림차순으로 정렬
data.sort((a, b) => b.complaints - a.complaints);

// 데이터를 HTML에 추가
addDataToHTML(data);
