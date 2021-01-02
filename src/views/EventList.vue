<template>
  <div>
    <h1>Events Listing for {{userMdl.user.name}}</h1>

    <EventCard v-for="event in eventMdl.events" :key="event.id" :event="event"/>
        <template v-if="page != 1">
          <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">Prev Page</router-link> | 
        </template>
        <router-link :to="{ name: 'event-list', query: { page: page + 1 } }">Next Page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
   // console.log(this.$store.state.userMdl.user);
    // Namespaced
    this.$store.dispatch("eventMdl/fetchEvents", {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['eventMdl', 'userMdl'])
  }
}
</script>
