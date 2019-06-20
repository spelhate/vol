<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-if="posts && posts.length">
          <v-list-tile v-for="post of posts" avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{post.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{post.body}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import axios from 'axios';

export default {
  name: "eData",
  data() {
    return {
      posts: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      console.lo(e)
    })

  }
}
</script>

