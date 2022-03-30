<script>
import { useRouter } from 'vue-router'
import { mdiGithub } from '@mdi/js'
// import TitledSection from '@/components/TitledSection.vue'
// import Icon from '@/components/Icon.vue'

export default {
  name: 'BottomOtherPagesSection',
  // components: {
  //   TitledSection
  // },
  setup () {
    const router = useRouter()

    const routes = router.getRoutes()

    const screens = []

    for (const routeIndex in routes) {
      const path = routes[routeIndex].path
      const title = routes[routeIndex].meta && routes[routeIndex].meta.title ? routes[routeIndex].meta.title : null

      if (title) {
        screens.push({
          path,
          title
        })
      }
    }

    return {
      screens,
      mdiGithub
    }
  }
}
</script>
