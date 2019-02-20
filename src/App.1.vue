<template>
  <v-app class=".app">
    <!-- header -->
    <v-toolbar color="#df4438" dark>
      <v-container style="padding: 0" text-xs-center>
        <v-layout row wrap>
          <v-flex text-xs-left xs2>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
          </v-flex>
          <v-flex xs8>
            <v-btn icon>
              <v-icon>ondemand_video</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>music_note</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>book</v-icon>
            </v-btn>
          </v-flex>
          <v-flex text-xs-right xs2>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-toolbar>

    <v-tabs color="#df4438" dark fixed-tabs hide-slider tabs v-model="tabs">
      <v-tab :key="0">推荐</v-tab>
      <v-tab :key="1">朋友</v-tab>
      <v-tab :key="2">电台</v-tab>

      <v-tab-item :key="0">
        <v-card color="#df4438" height="100px" style="border-radius: 0; margin-bottom: 110px; padding: 5px">
          <v-carousel dark height="190px" style="border-radius: 5px;">
            <v-carousel-item :key="i" :src="item.src" v-for="(item,i) in items"></v-carousel-item>
          </v-carousel>
        </v-card>

        <v-container style="padding: 0;" text-xs-center>
          <v-layout row wrap>
            <v-flex text-xs-center xs3>
              <v-btn color="#df4438" dark fab>
                <v-icon dark>label_off</v-icon>
              </v-btn>
              <p>私人FM</p>
            </v-flex>
            <v-flex text-xs-center xs3>
              <v-btn color="#df4438" dark fab>
                <v-icon dark>flip_to_front</v-icon>
              </v-btn>
              <p>每日推荐</p>
            </v-flex>
            <v-flex text-xs-center xs3>
              <v-btn color="#df4438" dark fab>
                <v-icon dark>queue_music</v-icon>
              </v-btn>
              <p>歌单</p>
            </v-flex>
            <v-flex text-xs-center xs3>
              <v-btn color="#df4438" dark fab>
                <v-icon dark>bar_chart</v-icon>
              </v-btn>
              <p>排行榜</p>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider></v-divider>

        <p>这里是歌单、推荐、排行榜</p>
        <p>这里是推荐歌单></p>
        <p>这里是LOOK直播? 为什么还有直播?></p>
        <p>这里是最新音乐</p>
        <p>这里是主播电台</p>
        <p>这里是会员中心</p>
        <p>剩下的一大堆乱七八糟的...</p>
      </v-tab-item>
      <v-tab-item :key="1">好残酷</v-tab-item>
      <v-tab-item :key="2">好绚丽</v-tab-item>
    </v-tabs>

    <v-footer app>
      <v-bottom-nav absolute app color="transparent" style="bottom: 56px; height: 56px;">
        <v-btn color="teal" flat>
          <span>Recents</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn color="teal" flat>
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn color="teal" flat>
          <span>Nearby</span>
          <v-icon>place</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-footer>

    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="./assets/image/TIM截图20190220165811.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>close.</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list class="pt-0" dense>
        <v-list-tile :key="item.title" v-for="item in items">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--  -->
    <!-- <v-carousel dark height="200px">
      <v-carousel-item :key="i" :src="item.src" v-for="(item,i) in items"></v-carousel-item>
    </v-carousel>-->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,

      bottomNav: 3,

      tabs: null,

      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return '#df4438'
        case 1:
          return '#df4438'
        case 2:
          return '#df4438'
        case 3:
          return '#df4438'
        default:
          return '#df4438'
      }
    }
  }
}
</script>

<style>
#app .v-carousel__controls {
  background: rgba(0, 0, 0, 0.1);
  height: 30px;
}
</style>