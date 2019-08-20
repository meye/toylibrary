<!-- <template>
  <v-card
    class="mx-auto"
  >
    <v-system-bar color="indigo darken-2"></v-system-bar>

    <v-toolbar
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container
      fluid
      grid-list-md
      pa-2
    >
      <v-layout
        wrap
      >
        <masonry :cols="3" :gutter="30">
          <v-flex
            v-for="card in items"
            :key="card.title"
          >
            <v-card>
              <v-img
                :src="card.image"
                class="white--text"
                gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.2)"
              >
                <v-card-title
                  class="fill-height align-end"
                  v-text="card.title"
                ></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </masonry>
      </v-layout>
    </v-container>
  </v-card>
</template> -->
    
<template>
</template>

<script>
import Items from '@/items';

export default {
    data() {
        return {
            headers: [
              { value: 'image' },
              { value: 'title' }
            ],
            items: Items
        }
    },
    created() {
        window.console.log(this.items[0]);
    }
}
</script>
