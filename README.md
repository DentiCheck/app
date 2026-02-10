# Denticheck App

덴티체크 모바일 애플리케이션 프로젝트입니다.

## 🛠️ 기술 스택 (Tech Stack)
- **Framework**: Expo SDK 54 (React Native 0.76)
- **Language**: TypeScript
- **Styling**: NativeWind v2 (TailwindCSS)
- **Navigation**: React Navigation

---

## 팀원 협업 가이드 (For Team Members)

이 문서는 프로젝트를 처음 세팅하는 팀원들이 **순서대로 따라하면 바로 실행할 수 있도록** 작성되었습니다.

### 1. 사전 준비 사항 (Prerequisites)
*   **Node.js**: [Node.js 공식 홈페이지](https://nodejs.org/)에서 LTS 버전(v18 또는 v20) 설치.
*   **Git**: 소스 코드 버전 관리 도구.
*   **Expo Go 앱**: 본인의 스마트폰(iOS/Android)에 설치.
    *   [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
    *   [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)

### 💻 안드로이드 에뮬레이터 설정 (Windows)
PC에서 모바일 환경을 테스트하려면 에뮬레이터 설정이 필요합니다.
자세한 설정 방법은 [📖 ANDROID_SETUP.md](docs/ANDROID_SETUP.md) 문서를 참고하세요.

**간편 실행 스크립트:**
```powershell
./scripts/start-emulator.ps1
```

---

### 2. 프로젝트 설치 및 세팅 (Setup)

터미널(VS Code 터미널 권장)을 열고 아래 명령어를 순서대로 실행하세요.

#### 2-1. 저장소 가져오기 및 이동
*(이미 소스를 받았다면 생략)*
```bash
git clone https://github.com/DentiCheck/denticheck-app.git
cd denticheck-app
```

#### 2-2. 패키지 설치
이 프로젝트는 `npm`을 사용합니다.
```bash
npm install
```

#### 2-3. 환경 변수 설정 (중요!)
프로젝트 실행을 위한 환경 변수 파일을 생성합니다.
```bash
# Windows (PowerShell)
copy .env.example .env

# Mac/Linux
cp .env.example .env
```
> **Note**: `.env` 파일이 생성되었는지 확인해주세요. API URL 등이 여기에 포함됩니다.

---

### 3. 앱 실행 (How to Run)

팀원 간 원격 협업 시(서로 다른 와이파이 사용 시) **Tunnel 모드**를 강력 권장합니다.

#### ✅ 옵션 A: 터널 모드로 실행 (권장)
네트워크 환경에 구애받지 않고 가장 안정적으로 연결됩니다.
```bash
npx expo start --tunnel
```
1.  명령어 실행 후 터미널에 **QR 코드**가 나타날 때까지 기다립니다.
2.  스마트폰 카메라(iOS) 또는 Expo Go 앱(Android)으로 QR 코드를 스캔하세요.

#### 옵션 B: 로컬 실행 (같은 와이파이)
```bash
npx expo start
```

---

### 4. 자주 묻는 질문 & 문제 해결 (Troubleshooting)

#### Q1. "SDK version issue" 경고가 떠요.
*   현재 프로젝트는 **Expo SDK 52** 버전에 맞춰져 있습니다.
*   `package.json`의 버전을 임의로 수정하지 마세요. (호환성 문제가 발생할 수 있습니다.)
*   expo go 버전이 sdk 54에 맞춰져 있을 경우, 앱에서 나오는 안내 사항에 따라 52버전 재설치 요망

#### Q2. 스타일이 깨지거나 적용이 안 돼요. (NativeWind)
*   스타일링 라이브러리(NativeWind) 캐시 문제일 수 있습니다. 캐시를 지우고 다시 시작하세요.
    ```bash
    npx expo start --clear
    ```

#### Q3. `env` 관련 에러가 발생해요.
*   `2-3` 단계에서 `.env` 파일을 올바르게 생성했는지 확인하세요.
*   `.env` 파일 내용이 비어있지 않은지 확인하세요.

#### Q4. 앱이 켜지다가 바로 꺼져요.
*   터미널을 종료(`Ctrl + C`)하고 다시 실행해보세요.
*   그래도 안 되면 `node_modules` 폴더를 삭제하고 다시 설치해보세요.
    ```bash
    rm -rf node_modules
    npm install
    ```
