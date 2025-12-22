// navbar.js
// 모든 게임 페이지에서 공통으로 사용할 내비게이션 바를 생성합니다.
(function injectNavbar() {
    // 1. CSS 스타일 정의
    const style = `
        .global-nav {
            width: 100%; height: 60px; background-color: #333;
            display: flex; justify-content: center; align-items: center;
            position: fixed; top: 0; left: 0; z-index: 1000;
        }
        .nav-container {
            width: 400px; display: flex; justify-content: space-between; align-items: center;
        }
        .nav-logo { color: white; font-weight: bold; text-decoration: none; font-size: 18px; }
        .nav-select { padding: 5px 10px; border-radius: 5px; border: none; font-size: 14px; cursor: pointer; }
        body { padding-top: 60px !important; }
    `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    // 2. HTML 구조 생성 (준비 안 된 게임에 data-ready="false" 추가)
    // 경로가 root 기준이 되도록 설정 (상황에 맞춰 "./" 등으로 변경 가능)
    const rootPath = "../"; 
    const navHTML = `
        <nav class="global-nav">
            <div class="nav-container">
                <a href="${rootPath}" class="nav-logo">🏠 HOME</a>
                <select id="common-nav-select" class="nav-select">
                    <option value="">다른 게임 선택</option>
                    <option value="${rootPath}2048/index.html">2048 퍼즐</option>
                    <option value="${rootPath}snake/index.html">뱀 게임</option>
                    <option value="${rootPath}flappy/index.html" data-ready="false">플래피 버드 (준비중)</option>
                </select>
            </div>
        </nav>
    `;

    // 3. Body 맨 앞에 삽입
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // 4. 이동 제어 로직 추가
    const navSelect = document.getElementById('common-nav-select');
    navSelect.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const isReady = selectedOption.getAttribute('data-ready') !== "false";
        const targetUrl = this.value;

        if (targetUrl === "") return; // 기본 옵션 선택 시 아무것도 안 함

        if (isReady) {
            // 준비된 게임이면 이동
            location.href = targetUrl;
        } else {
            // 준비 안 된 게임이면 경고 후 선택 초기화
            alert("이 게임은 현재 준비 중입니다. 조금만 기다려 주세요!");
            this.value = ""; // 드롭다운을 다시 '다른 게임 선택'으로 되돌림
        }
    });
})();
