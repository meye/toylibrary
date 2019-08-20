<template>
  <v-app>
    <v-app-bar flat dark dense app>
      <v-toolbar-title class="headline text-uppercase">
        <span>장난감도서관</span>
        <span class="font-weight-light"> 서초구</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field class="mt-5" v-model="search" label="Search" bottom></v-text-field>
    </v-app-bar>

    <v-content>
      <v-data-table
        :headers="headers"
        :items="toys"
        :search="search"
        :items-per-page="50"
        hide-default-header
        class="elevation-1"
        :loading="toys.length <= 0"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.code">
              <td>
                <v-card class="my-4">
                  <v-list-item three-line>
                    <v-list-item-content class="align-self-start">
                      <v-list-item-title class="mb-2">
                        {{ item.title }}
                        <v-btn text icon :href="item.url" target="_blank" small>
                          <v-icon small>mdi-link</v-icon>
                        </v-btn>
                      </v-list-item-title>
                      <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
                      <v-list-item-subtitle class="mt-2">
                        <v-chip label small class="mx-1">
                          <v-icon small>mdi-map-marker</v-icon>
                          {{ item.branch }}
                        </v-chip>
                        <v-chip label small class="mx-1">
                          <v-icon small>mdi-inbox-multiple</v-icon>
                          {{ item.items.length }}개
                        </v-chip>
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar size="125" tile>
                      <v-img :src="item.image" lazy-src="http://placehold.it/150x150x/eeeeee/ffffff?text=">
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    search: '',
    headers: [
      { text: 'title', value: 'title' },
    ]
  }),
  computed: {
    toys() {
      return this.$store.getters.data
    }
  },
  methods: {
    init() {
      if (this.$store.getters.data.length <= 0) {
        this.fetchData()
      }
    },
    fetchData() {
      this.$store.dispatch('fetch')
    }
  },
  created() {
    this.init()
  }
};
</script>

<style scoped>
.v-data-table table * {
  border: none !important;
}
</style>