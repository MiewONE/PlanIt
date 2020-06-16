마크다운 사용법 : https://gist.github.com/ihoneymon/652be052a0727ad59601

## 캡스톤 디자인 코로나 대비 연구실 인원 조절용
리액트 공부하면서 만들어볼려고합니다.

## 로컬서버에서 데이터 주고 받기

## RDS에서 자료 읽어오기


## 설치필요한 모듈들
<<<<<<< HEAD
    react-scripts  - 스트립트 실행하기 
    @material-ui/core - UI 구성 라이브러리
    express - 서버와 통신하기 위해
    fs - ??
    body-parser - 통신해서 받은 값들 구분? 추후 작성
    axios - get,post로 통신
    react-calendar - 캘린더 UI
    nodemon 서버구동을 위함
    router 여러페이지를 보여주기위해 (npm i react-router-dom)
    react-font-size-changer 폰트 사이즈 변경 (npm install --save react-font-size-changer)
 
    ec2에 옮긴후 설치해야 할것
    nodejs - curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    npm -sudo apt-get install npm
    yarn - sudo apt-get install yarn

    서버와 클라이언트 구동을 위한 파일이 있는곳에서
    sudo npm run (filename)을 입력해야했다.

## DB접속오류시 계정권한 확인.

## 20-06-16 AWS EC2를 이용하여 사이트개설 완료. - 외부에서도 접속 가능
    1. aws에서 ec2의 인스턴스를 생성하고 생성과정에서 보안 그룹에서 접속가능한 IP를 선택해줘야한다.
    2. ssh로 접속한다음 git에 올려둔 프로젝트를 clone에서 가져온다.
    3. clone한다고 끝이 아니라. .gitignore로 제외된 DATABASE.JSON을 생성해줘야하며 다시한번 주소,아이디,비번,디비를 확인해야한다.
    4. server과 client에 필요한 모듈들을 다시 설치해야함. 위의 설치필요한 모듈들 참고.

## 전제 흐름
    Client(요청자) - AWS ec2로 만들어진 서버에 접속 날짜 또는 예약 - AWS RDS로 POST,GET을 통해 정보를 읽어옴 - Client(요청자)
                                                        ↑ react 프로젝트가 있음

## 참고 사이트
    react
        동빈 나 - https://www.youtube.com/watch?v=s2knmog2j1U&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB
    
    ec2로 배포
        푸른양귀비 -  https://leejungyeoul.tistory.com/85?category=649936
    
    rds 
        동빈 나 - https://www.youtube.com/watch?v=s2knmog2j1U&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB


## 기능 추가
    시간표 형식으로 보이게. - 라우팅 기능을 넣어 버튼형식으로 고르게 할거임.
=======
1. react-scripts  - 스트립트 실행하기 
2. @material-ui/core - UI 구성 라이브러리
3. express - 서버와 통신하기 위해
4. fs - ??
5. body-parser - 통신해서 받은 값들 구분? 추후 작성
6. axios - get,post로 통신
7. react-calendar - 캘린더 UI

## DB접속오류시 계정권한 확인.
>>>>>>> adce621ae2c4e15c46983f252716f38c6f1cc2bb
