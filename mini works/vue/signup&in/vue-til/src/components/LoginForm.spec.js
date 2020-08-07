import { shallowMount } from '@vue/test-utils';
//import Vue from 'vue';
import LoginForm from './LoginForm.vue';

describe('LoginFrom.vue ', () => {
  // test('ID는 이메일 형식아니면 경고 메세지가 출력된다', () => {
  //   const wrapper = shallowMount(LoginForm, {
  //     data() {
  //       return {
  //         username: 'test',
  //       };
  //     },
  //   });

  // 3
  // const warnigText = wrapper.find('.warning');
  // //console.log(warnigText.html());
  // expect(warnigText.exists()).toBeTruthy();

  // 2
  // const idInput = wrapper.find('#username');
  // idInput.element.value;
  // console.log(idInput.html());
  // console.log('인풋 박스의 값', idInput.element.value);
  // console.log(wrapper.vm.isUsernameValid);
  // });
  // 1
  // test('컴포넌트가 마운팅되면 username이 존재하고 초기 값으로 설정되어 있어야 한다.', () => {
  //   // const instance = new Vue(LoginForm).$mount();
  //   const wrapper = shallowMount(LoginForm);
  //   console.log(wrapper.vm.username);
  //   expect(wrapper.vm.username).toBe('');
  // });

  // 4
  test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', () => {
    const wrapper = shallowMount(LoginForm, {
      data() {
        return {
          username: 'a',
          passward: '1234',
        };
      },
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBeTruthy();
    // toBeTruthy () :앞에 있는 값은 true일 것이다 라는 함수
  });
});

// import { sum } from './math.js';

// //sum(10, 20); //30

// // describe() : 연관된 테스트 케이스를 그룹화하는 API
// describe('math.js', () => {
//   // test() : 하나의 테스트 케이스를 검증하는 API
//   test('10 + 20 = 30', () => {
//     const result = sum(10, 20);
//     expect(result).not.toBe(30);
//   });
// });
