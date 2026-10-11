# 프로젝트 현황판

프로젝트별 "다음 할 일"과 "지금까지 한 일"을 한 곳에서 보는 홈페이지입니다.

## 파일
- `index.html` : 화면 (거의 고칠 일 없음)
- `data.js` : 내용 (프로젝트, 할 일, 기록) — **이 파일만 업데이트하면 됩니다**

## 올리는 방법 (GitHub Pages)
1. GitHub에 새 저장소 만들기 (예: `project-board`)
2. `index.html`, `data.js`, `README.md` 업로드
3. Settings → Pages → Branch를 `main` / `(root)`로 선택 → Save
4. 잠시 후 `https://<아이디>.github.io/project-board/` 에서 확인

Vercel을 쓴다면 같은 저장소를 Import 하면 끝입니다. (빌드 설정 없음)

## 세션 끝날 때 업데이트하는 법
Claude에게 이렇게 말하세요.

> 오늘 한 일을 data.js에 반영해 줘. (프로젝트: ○○ / 한 일: ... / 다음 할 일: ...)

Claude가 해당 프로젝트의 `todo`, `log`, `updated`를 고쳐 주면, 그 파일을 저장소에 덮어쓰면 됩니다.

## 참고
- 저장소를 Public으로 두면 누구나 볼 수 있으니, 공개하기 싫은 내용은 적지 마세요. (Vercel의 비밀번호 보호나 Private 저장소 이용도 가능)
