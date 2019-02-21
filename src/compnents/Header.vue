<template>
  <v-toolbar app color="#df4438" dark extended tabs>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>ondemand_video</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>music_note</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>book</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-toolbar-title class="toolbar-title" slot="extension">
      <slot></slot>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {}
</script>

<style>
.toolbar-title {
  width: 100vw;
  margin: 0 !important;
}

.tab-class:after {
  content: '';
  display: block;
  margin-top: 5px;
  height: 2px;
  background-color: transparent;
}

.v-tabs__item--active .tab-class:after {
  background-color: #e1e1e1;
}
</style>
