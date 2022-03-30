<template>
  <footer v-show="isFooterBarVisible" class="bg-white py-2 px-6 dark:bg-gray-900">
    <level>
      <div class="text-center md:text-left">
        <b>&copy; {{ year }}, <a href="#" target="_blank">Gajayana Digital Printing Malang</a>.</b>
      </div>
      <div class="md:py-2">
      </div>
    </level>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level.vue'

export default {
  name: 'FooterBar',
  components: {
    Level
  },
  setup () {
    const store = useStore()

    const year = computed(() => new Date().getFullYear())

    const isFooterBarVisible = computed(() => !store.state.isFullScreen)

    return {
      year,
      isFooterBarVisible
    }
  }
}
</script>
