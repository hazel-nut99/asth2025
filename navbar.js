// navbar.js
// 모든 게임 페이지에서 공통으로 사용할 내비게이션 바를 생성합니다.

(function injectNavbar() {
    // 1. CSS 스타일 정의 (문서의 head에 추가)
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
        .nav-select { padding: 5px 10px; border-radius: 5px; border: none; font-size: 14px; }
        body { padding-top: 60px !important; } /* 메뉴바 공간 확보 */
    `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);

    // 2. HTML 구조 생성
    // 경로 설정을 위해 root 변수를 활용 (필요 시 수정 가능)
    const rootPath = "/"; // 실제 서버나 로컬 환경에 맞춰 경로를 조정하세요.
    const navHTML = `
        <nav class="global-nav">
            <div class="nav-container">
                <a href="${rootPath}menu.html" class="nav-logo">🏠 HOME</a>
                <select class="nav-select" onchange="if(this.value) location.href=this.value">
                    <option value="">다른 게임 선택</option>
                    <option value="${rootPath}2048/index.html">2048 퍼즐</option>
                    <option value="${rootPath}snake/index.html">지렁이 게임 (준비중)</option>
                    <option value="${rootPath}flappy/index.html">플래피 버드 (준비중)</option>
                </select>
            </div>
        </nav>
    `;

    // 3. Body 맨 앞에 삽입
    document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
