<template>
    <a-menu
      @click="handleClick"
      :defaultSelectedKeys="['1']"
      :openKeys.sync="openKeys"
      mode="horizontal"
      class='mb-4'
    >
     <a-menu-item key="1">
        <router-link to="/">
            <a-icon type="home"/> Home
        </router-link>
      </a-menu-item>

      <a-menu-item key="2">
        <router-link to="/todos">
        <a-icon type="ordered-list" /> Todos</router-link>
      </a-menu-item>
      
      <a-menu-item key="3">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      
      <a-menu-item key="4">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>

    </a-menu>     
</template>
<script>
export default {
    data() {
      return {
        current: ['mail'],
        openKeys: ['sub1'],
      };
    },
    methods: {
      handleClick(e) {
        console.log('click', e);
      },
      titleClick(e) {
        console.log('titleClick', e);
      },
    },
    watch: {
      openKeys(val) {
        console.log('openKeys', val);
      },
    }
}
</script>