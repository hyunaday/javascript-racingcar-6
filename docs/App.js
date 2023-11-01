### 미션 - 자동차 경주

**기능 요구 사항**

자동차에 이름 부여하기

- [ ] 화면에 _"경주할 자동차 이름을 입력하세요. (이름은 쉼표( , ) 기준으로 구분)"_을 출력한다.
- [ ] 자동차 이름은 5자 이하만 가능하다.
- [ ] 자동차 이름은 쉼표(,)로 구분한다.
- [ ] 자동차의 개수는 N개로 쉼표로 구분된다.
- [ ] 전진하는 자동차를 출력할 때, 설정한 자동차의 이름을 같이 출력한다.


자동차 이동 횟수 부여하기

- [ ] 화면에 "시도할 횟수는 몇 회인가요?"를 출력한다.
- [ ] 자동차는 전진 또는 멈출 수 있다.
- [ ] 주어진 횟수동안만 이동이 가능하다.
- [ ] 사용자는 몇 번의 이동을 할 것인지 입력할 수 있어야 한다.
- [ ] 전진 조건은 0에서 9 사이에서 구한 무작위 값이 4이상인 경우이다.
- [ ] 0에서 9사이의 무작위 값을 구한다.
- [ ] 무작위 값>= 4 인 경우 전진한다. (4, 5, 6, 7, 8, 9)
- [ ] 무작위 값< 4 인 경우 전진하지 않는다. (0, 1, 2, 3)

자동차 게임 우승자 부여하기

- [ ] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.
- [ ] 우승자는 한 명 이상이다.
- [ ] 우승자가 여러 명일 경우 쉼표(,)로 구분한다.

사용자가 잘못된 값을 입력한 경우

- [ ] throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨다.
- [ ] 예외를 발생시킨 후 애플리케이션을 종료시킨다.
