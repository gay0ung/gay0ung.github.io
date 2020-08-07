<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <!-- 상위 컴포넌트에서 정의할 영역 -->
      <slot name="username"></slot>
      <div class="time">
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>

  <!-- slot 으로 정의해준이유는 각각 데이터들이 달라서.
      ItmeView -> info.user
      UserView -> info.id
   -->
</template>

<script>
export default {
  props: {
    // 부모에게 props로 데이터를 받는다.
    info: Object,
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
