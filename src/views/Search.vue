<template>
  <div>
    <v-container>
      <v-row>
        <h2>This is search function with show limit</h2>
      </v-row>

      <v-text-field
          label="Search items"
          prepend-inner-icon="mdi-magnify"
          v-model="search"
          outlined
      >
      </v-text-field>

      <v-row>
        <v-flex md3 mt-10 v-for="(game, game_index) in gamefilter" :key="game_index">
            <h3>{{ game.title }}</h3>
            <p>{{ game.desc }}</p>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    gamefilter () {
      return this.games.filter((item, index) => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      }).splice(0,this.limit)
    }
  },
  data () {
    return {
      search: '',
      limit: 10,
      games: [
        {
          title: 'Game1',
          desc: 'adasdasasd'
        },
        {
          title: 'Game2',
          desc: 'adasdasasd'
        },
        {
          title: 'Game3',
          desc: 'adasdasasd'
        },
        {
          title: 'Game4',
          desc: 'adasdasasd'
        },
        {
          title: 'Game5',
          desc: 'adasdasasd'
        },
        {
          title: 'Game6',
          desc: 'adasdasasd'
        },
        {
          title: 'Game7',
          desc: 'adasdasasd'
        },
        {
          title: 'Game8',
          desc: 'adasdasasd'
        },
        {
          title: 'Game9',
          desc: 'adasdasasd'
        },
        {
          title: 'Game10',
          desc: 'adasdasasd'
        },
        {
          title: 'Game11',
          desc: 'adasdasasd'
        },
        {
          title: 'Game12',
          desc: 'adasdasasd'
        },
        {
          title: 'Game13',
          desc: 'adasdasasd'
        },
        {
          title: 'Game14',
          desc: 'adasdasasd'
        },
        {
          title: 'Game15',
          desc: 'adasdasasd'
        },
        {
          title: 'Game16',
          desc: 'adasdasasd'
        },
        {
          title: 'Game17',
          desc: 'adasdasasd'
        },
        {
          title: 'Game18',
          desc: 'adasdasasd'
        },
        {
          title: 'Game19',
          desc: 'adasdasasd'
        },
        {
          title: 'Game20',
          desc: 'adasdasasd'
        },
        {
          title: 'Game21',
          desc: 'adasdasasd'
        },
        {
          title: 'Game22',
          desc: 'adasdasasd'
        },
        {
          title: 'Game23',
          desc: 'adasdasasd'
        },
        {
          title: 'Game24',
          desc: 'adasdasasd'
        }
      ]
    }
  }
}
</script>
