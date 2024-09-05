const visitedCountries = [
    { name: "加拿大", date: "2018-07-13", endDate: "2018-08-15", lat: 51.1784, lng: -115.5708, description: "参加UBC温哥华暑期项目并游览落基山脉，访问了温哥华、列治文、班夫和卡尔加里。资金来源：父母和大学奖学金。停留时间：1个月。", imageUrl: "Photo/加拿大.jpeg" },
    { name: "新加坡", date: "2020-01-10", endDate: "2020-05-18", lat: 1.3521, lng: 103.8198, description: "在新加坡国立大学(NUS)交换学习并在新加坡旅行，参观了市中心和环球影城。资金来源：父母和大学奖学金。停留时间：5个月。", imageUrl: "Photo/新加坡鱼尾狮夜景.png" },
    { name: "沙特阿拉伯", date: "2020-01-18", endDate: "2020-01-24", lat: 22.3964, lng: 39.5079, description: "受邀参加KAUST本科生海报竞赛，参观了吉达和图瓦尔。停留时间：6天。", imageUrl: "Photo/沙特阿拉伯传统服饰聚会场景.png" },
    { name: "泰国", date: "2020-02-22", endDate: "2020-02-26", lat: 13.7563, lng: 100.5018, description: "旅行参观了清迈、曼谷和芭提雅。资金来源：父母。���留时间：5天。", imageUrl: "Photo/泰国双人高空跳伞体验.png" },
    { name: "巴林", date: "2021-09-23", endDate: "2021-09-25", lat: 26.2285, lng: 50.5860, description: "旅行和娱乐，参观了麦纳麦。自费。停留时间：3天。", imageUrl: "Photo/巴林.jpg" },
    { name: "阿联酋", date: "2021-12-10", endDate: "2021-12-14", lat: 25.2048, lng: 55.2708, description: "旅行并参观2020年世博会，游览了迪拜。自费。停留时间：5天。", imageUrl: "Photo/阿联酋驾驶游艇的男子.png" },
    { name: "约旦", date: "2021-12-18", endDate: "2021-12-25", lat: 31.9454, lng: 35.9284, description: "旅行，参观了亚喀巴、佩特拉和安曼。自费。停留时间：1周。", imageUrl: "Photo/约旦佩特拉卡兹尼神殿.png" },
    { name: "波斯尼亚和黑塞哥维那", date: "2022-03-18", endDate: "2022-03-25", lat: 43.8564, lng: 18.4131, description: "旅行和滑雪，参观了萨拉热窝、雅霍里纳和维谢格拉德。自费。停留时间：1周。", imageUrl: "Photo/波斯尼亚和黑塞哥维那四人在滑雪场合影.png" },
    { name: "塞尔维亚", date: "2022-03-23", endDate: "2022-03-25", lat: 44.7866, lng: 20.4489, description: "在维谢格拉德旅行后访问塞尔维亚，之后返回萨拉热窝。参观了贝��格莱德。自费。停留：3天。", imageUrl: "Photo/塞尔维亚木头城风景.png" },
    { name: "格鲁吉亚", date: "2022-05-01", endDate: "2022-05-06", lat: 41.7151, lng: 44.8271, description: "旅行，参观了第比利斯和巴统。自费。停留时间：6天。", imageUrl: "Photo/格鲁吉亚男子在民宿前竖大拇指.png" },
    { name: "土耳其", date: "2022-06-01", endDate: "2022-06-07", lat: 38.9637, lng: 35.2433, description: "探索土耳其的文化和历史，参观了伊斯坦布尔和卡帕多西亚。", imageUrl: "Photo/土耳其圣索菲亚大教堂外景.png" },
    { name: "北马其顿", date: "2022-06-10", endDate: "2022-06-14", lat: 41.6086, lng: 21.7453, description: "游览斯科普里和奥赫里德湖，体验巴尔干半岛的魅力。", imageUrl: "Photo/北马其顿.jpeg" },
    { name: "阿尔巴尼亚", date: "2022-06-15", endDate: "2022-06-19", lat: 41.1533, lng: 20.1683, description: "探索地拉那和杜勒斯，感受阿尔巴尼亚的独特文化。", imageUrl: "Photo/阿尔巴尼亚.jpeg" },
    { name: "卡塔尔", date: "2022-07-01", endDate: "2022-07-02", lat: 25.3548, lng: 51.1839, description: "参观多哈现代建筑和传统市体验中东文化。", imageUrl: "Photo/卡塔尔多哈国家博物馆.png" },
    { name: "英国", date: "2022-07-10", endDate: "2022-07-20", lat: 55.3781, lng: -3.4360, description: "游览伦敦、爱丁堡等城市，感受英伦风情。", imageUrl: "Photo/英国剑桥暑期学校.png" },
    { name: "美国", date: "2022-09-01", endDate: "2022-08-15", lat: 37.0902, lng: -95.7129, description: "横跨美国东西海岸，参观纽约、旧金山等城市。", imageUrl: "Photo/美国橡树庄园拍照.png" },
    { name: "黎巴嫩", date: "2022-10-15", endDate: "2022-09-15", lat: 33.8547, lng: 35.8623, description: "参观贝鲁特和巴勒贝克，了解黎巴嫩的历史文化。", imageUrl: "Photo/黎巴嫩安加尔难民学校.png" },
    { name: "亚美尼亚", date: "2023-01-15", endDate: "2022-10-15", lat: 40.0691, lng: 45.0382, description: "探索埃里温，参观古老的修道院和教堂。", imageUrl: "Photo/亚美尼亚传统服饰.png" },
    { name: "乌兹别克斯坦", date: "2023-02-18", endDate: "2022-11-07", lat: 41.3775, lng: 64.5853, description: "游览撒马尔罕和布哈拉，感受丝绸之路的魅力。", imageUrl: "Photo/乌兹别克斯坦.jpeg" },
    { name: "哈萨克斯坦", date: "2023-02-23", endDate: "2022-11-15", lat: 48.0196, lng: 66.9237, description: "参观阿拉木图和努尔苏丹，了解中亚文化。", imageUrl: "Photo/哈萨克斯坦.jpeg" },
    { name: "阿曼", date: "2023-03-01", endDate: "2022-12-05", lat: 21.4735, lng: 55.9754, description: "探索马斯喀特，体验阿拉伯半岛的传统文化。", imageUrl: "Photo/阿曼四人在餐厅合影.png" },
    { name: "阿塞拜疆", date: "2023-06-06", endDate: "2022-12-15", lat: 40.1431, lng: 47.5769, description: "游览巴库，感受里海沿岸的独特魅力。", imageUrl: "Photo/阿塞拜疆巴库古城街景.png" },
    { name: "埃及", date: "2023-06-13", endDate: "2023-01-10", lat: 26.8206, lng: 30.8025, description: "参观金字塔和卢克索神庙，探古埃及文明。", imageUrl: "Photo/埃及吉萨金字塔及游客.png" },
    { name: "德国", date: "2023-08-21", endDate: "2023-03-10", lat: 51.1657, lng: 10.4515, description: "探索柏林、慕尼黑等城市，感受德国的文化与历史。", imageUrl: "Photo/德国柏林佩加蒙博物馆.png" },
    { name: "希腊", date: "2023-09-15", endDate: "2023-04-10", lat: 39.0742, lng: 21.8243, description: "游览雅典和圣托尼，领略古希腊文明的魅力。", imageUrl: "Photo/希腊.jpeg" },
    { name: "日本", date: "2024-06-28", endDate: "2023-05-15", lat: 36.2048, lng: 138.2529, description: "探索东京、京都等城市，体验日本的传统与现代。", imageUrl: "Photo/日本.jpg" }
];

visitedCountries.sort((a, b) => new Date(a.date) - new Date(b.date));

let map;
let markers = [];
let currentIndex = 0;
let timeSlider;
let currentDateDisplay;
let travelPath;
let isPlaying = false;
let playInterval;

function getRandomImage(countryName) {
    // 使用 Picsum 获取随机图片
    return `https://picsum.photos/seed/${countryName}/400/300`;
}

function initMap() {
    map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    timeSlider = document.getElementById('time-slider');
    currentDateDisplay = document.getElementById('current-date');
    
    timeSlider.max = visitedCountries.length - 1;
    timeSlider.value = 0;
    
    timeSlider.addEventListener('input', updateMapBasedOnTime);
    
    // 添加播放/暂停按钮
    const playButton = document.createElement('button');
    playButton.textContent = '播放';
    playButton.onclick = togglePlay;
    document.getElementById('timeline-slider').appendChild(playButton);
    
    updateMapBasedOnTime();
    updateTimeline();
    addCountryMarkers(map, visitedCountries);
}

function updateMapBasedOnTime() {
    const index = parseInt(timeSlider.value);
    const country = visitedCountries[index];
    
    // 清除所有标记和路径
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    if (travelPath) {
        map.removeLayer(travelPath);
    }
    
    // 添加到当前时间点的所有标记
    const pathCoordinates = [];
    for (let i = 0; i <= index; i++) {
        const c = visitedCountries[i];
        const marker = L.marker([c.lat, c.lng]).addTo(map);
        marker.bindPopup(c.name);
        markers.push(marker);
        pathCoordinates.push([c.lat, c.lng]);
    }
    
    // 绘制旅行路径
    travelPath = L.polyline(pathCoordinates, {
        color: '#FF5733',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(map);
    
    // 添加平滑的地图移动效果
    if (pathCoordinates.length > 1) {
        map.flyToBounds(travelPath.getBounds(), {
            padding: [50, 50],
            duration: 1
        });
    } else {
        map.flyTo([country.lat, country.lng], 4, {
            duration: 1
        });
    }

    updateImage(country);
    
    currentDateDisplay.textContent = `当前日期: ${country.date}`;
    
    // ���新播放按钮文本
    const playButton = document.querySelector('#timeline-slider button');
    playButton.textContent = isPlaying ? '暂停' : '播放';
}

function updateTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    visitedCountries.forEach((country, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        item.innerHTML = `<strong>${country.name}</strong><br>${country.date} - ${country.endDate}`;
        item.onclick = () => showCountry(index);
        item.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
        timeline.appendChild(item);
    });
}

function showCountry(index) {
    timeSlider.value = index;
    updateMapBasedOnTime();
}

function togglePlay() {
    isPlaying = !isPlaying;
    const playButton = document.querySelector('#timeline-slider button');
    
    if (isPlaying) {
        playButton.textContent = '暂停';
        playInterval = setInterval(() => {
            if (parseInt(timeSlider.value) < visitedCountries.length - 1) {
                timeSlider.value = parseInt(timeSlider.value) + 1;
                updateMapBasedOnTime();
            } else {
                togglePlay(); // 停止播放当到达最后一个国家
            }
        }, 2000); // 每2秒更新一次
    } else {
        playButton.textContent = '播放';
        clearInterval(playInterval);
    }
}

function updateImage(country) {
    const img = document.getElementById('country-image');
    const newImg = new Image();
    newImg.onload = function() {
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = this.src;
            img.style.opacity = 1;
        }, 300);
    };
    newImg.onerror = function() {
        // 如果图片加载失败，使用备用图片
        this.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(country.name);
    };
    newImg.src = country.imageUrl;
    img.alt = country.name;

    const countryName = document.getElementById('country-name');
    countryName.style.opacity = 0;
    setTimeout(() => {
        countryName.textContent = country.name;
        countryName.style.opacity = 1;
    }, 300);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = country.description;
    descriptionElement.className = 'country-description';
    const infoPanel = document.getElementById('country-info');
    const existingDescription = infoPanel.querySelector('.country-description');
    if (existingDescription) {
        existingDescription.style.opacity = 0;
        setTimeout(() => {
            infoPanel.removeChild(existingDescription);
            infoPanel.appendChild(descriptionElement);
            descriptionElement.style.opacity = 1;
        }, 300);
    } else {
        infoPanel.appendChild(descriptionElement);
        setTimeout(() => {
            descriptionElement.style.opacity = 1;
        }, 10);
    }
}

function addCountryMarkers(map, countries) {
    countries.forEach(country => {
        const marker = L.marker([country.lat, country.lng], {
            icon: L.divIcon({
                className: 'country-label',
                html: `<span>${country.name}</span>`,
                iconSize: [100, 40],
                iconAnchor: [50, 20]
            })
        }).addTo(map);
    });
}

window.onload = initMap;