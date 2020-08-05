<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from '@/utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    fetchData() {
      console.log('hello');
    },
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);

    // .env 파일에서 내용을 사용하고 싶을때
    console.log(process.env.VUE_APP_TITLE);
  },
  beforeDestroy() {
    // 컴포넌트의 역할을 끝난후  evetbus기능 을 꺼준다.
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #405e34;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
/* .page-leave-active below version 2.1.8 */
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
