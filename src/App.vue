<template>
  <v-app>
    <!-- nav drawer -->
    <v-navigation-drawer app></v-navigation-drawer>

    <!-- header -->
    <Header>
      <!-- 导航 tabs -->
      <v-tabs color="#df4438" grow hide-slider v-model="tabs">
        <v-tab :key="0">
          <span class="tab-class">推荐</span>
        </v-tab>
        <v-tab :key="1">
          <span class="tab-class">朋友</span>
        </v-tab>
        <v-tab :key="2">
          <span class="tab-class">电台</span>
        </v-tab>
      </v-tabs>
    </Header>

    <!-- content -->
    <v-content>
      <v-container fluid>
        <v-tabs-items v-model="tabs">
          <v-tab-item :key="0">
            <div style="height: 1000px">推荐页</div>
          </v-tab-item>

          <v-tab-item :key="1">
            <div style="height: 1000px">朋友页</div>
          </v-tab-item>

          <v-tab-item :key="2">
            <div style="height: 1000px">电台页</div>
          </v-tab-item>
        </v-tabs-items>
        <!-- <router-view></router-view> -->
      </v-container>
    </v-content>

    <!-- footer -->
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from './compnents/Header'
import Footer from './compnents/Footer'

export default {
  components: {
    Header,
    Footer
  },

  data() {
    return {
      tabs: null
    }
  }
}
</script>

<style>
</style>
