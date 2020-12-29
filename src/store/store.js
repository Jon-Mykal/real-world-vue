import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
import * as userMdl from '@/store/modules/user.js'
import * as eventMdl from '@/store/modules/event.js'
import * as notificationMdl from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userMdl,
    eventMdl,
    notificationMdl
  },
  state: {

    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  }
})
