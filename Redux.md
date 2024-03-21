Redux - это библиотека управления состоянием
● ● Централизованный объект состояния (store), легко доступным из любой части приложения
● ● изменения состояния происходят только через actions, через чистые функции - редюсеры. Это делает код более предсказуемым
● ● Redux DevTools Extension: расширение для браузера, через него можно визуально отслеживать изменения состояния, и воспроизводить предыдущие состояния, для поиска багов

Store - Обьект, содержит методы getState, dispatch/изменить состояние и useSelector/подписаться на изменения и получить их, создается через createStore, принимает редьюсер

Reducer - функция, принимает state, action, внутри switch case, в котором определяется какая будет выполнена операция, по дефолту возвращаем неизмененное состояние, если нет совпадений в switch case

action - js обьект с обязательным полем type, по которому определяется как состояние будет изменяться и полем payload (можно назвать как угодно) - нагрузкой

state - обьект, массив или примитивное значение

Есть диспатч в него передаем экшн, как этот экшн будет менять стейт определено в редюсере, редюсер всегда принимает стейт и экшн и возвращает обновленный стейт, далее сам редьюсер передаем в стор, стор в провайдер

Есть еще комбайн редюсерс для обьединения двух,,,,, или более рельюсеров нужен для модульности и масштабируемости

import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
todos: todosReducer,
user: userReducer,
});

export default rootReducer;

VUE

<script>
    //в корне
import { createApp } from 'vue';
import { Provider } from 'react-redux'; // обертка Provider из react-redux
import store from './store';
import App from './App.vue';

createApp(App).use(store).mount('#app');

    //в компоненте
import { useStore } from '@vue/reactivity';

export default {
  name: 'MyComponent',
  setup() {
    const store = useStore();

    const count = computed(() => store.state.app.count);

    function increment() {
      store.dispatch({ type: 'INCREMENT' });
    }

    return { count, increment };
  }
};
</script>
