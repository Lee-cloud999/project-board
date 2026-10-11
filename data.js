// 이 파일만 고치면 홈페이지 내용이 바뀝니다. (세션이 끝날 때마다 Claude에게 업데이트를 요청하세요)
// tool: "ChatGPT" | "Claude" | "미확인"
// status: "진행중" | "대기" | "완료" | "확인 필요"
// todo: 다음에 할 일 목록 / log: 지금까지 한 일 (최신 항목이 위로)
window.PROJECTS = [
  {
    id: "mongle-forest",
    name: "코순이의 몽글숲 모험",
    tool: "미확인",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "writing-app",
    name: "글맛노트 (글쓰기 앱)",
    tool: "Claude",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["노트별 글꼴 변경 기능 점검"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "match3",
    name: "3매치 퍼즐 게임",
    tool: "미확인",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["목표·보상 요소 보강"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "yeobaek",
    name: "여백",
    tool: "ChatGPT",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "night-wake",
    name: "포근소리 (밤중에 깼을 때 앱)",
    tool: "미확인",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "merge-game",
    name: "머지 게임",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "banana-game",
    name: "바나나 키우기",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "banana-idle",
    name: "바나나 방치형 키우기",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "elephant-game",
    name: "코끼리 키우기",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "dressup-game",
    name: "옷 입히기 게임",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "cleaning-game",
    name: "청소 시뮬레이션 게임",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "allowance-book",
    name: "용돈 기록장",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "emotion-diary",
    name: "감정 다이어리 (마음편지)",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "daily-priority",
    name: "Daily Priority",
    tool: "ChatGPT",
    status: "진행중",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "start-homepage",
    name: "시작 홈페이지",
    tool: "미확인",
    status: "대기",
    updated: "2026-10-11",
    todo: ["다음 할 일을 여기에 적어 주세요"],
    log: [{ date: "2026-10-11", text: "프로젝트 현황 홈페이지에 등록" }]
  },
  {
    id: "record-note",
    name: "기록노트",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "my-record-app",
    name: "나의 기록 앱 (My-record-app)",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "maeum-jogak-2",
    name: "마음 조각 2",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "weekly-check",
    name: "Weekly Check",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "pulitzer-note",
    name: "퓰리처 읽기·글쓰기 노트",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "mindmap",
    name: "마인드맵",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  },
  {
    id: "coloring-play",
    name: "색칠놀이",
    tool: "ChatGPT",
    status: "확인 필요",
    updated: "2026-10-11",
    todo: ["현재 상태 확인하기"],
    log: [{ date: "2026-10-11", text: "ChatGPT로 만든 앱을 현황판에 등록" }]
  }
];
