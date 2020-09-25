<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-item
        v-for="(link,i) in links"
        :key="i"
        :to="link.url">
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="isUserLoggedIn"
          @click="onLogout">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="'Logout'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click="sideNav=!sideNav"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link
        to="/"
        tag="span"
        class="pointer"
        >My First</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link,i) in links"
          :key="i"
          :to="link.url"
          >
            <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}</v-btn>
        <v-btn
          text
          v-if="isUserLoggedIn"
          @click="onLogout"
        >
          <v-icon left>mdi-exit-to-app</v-icon>
          Logout</v-btn>

      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- --><h2>footer</h2>
    </v-footer>
  </div>

</template>

<script>
    export default {
        data () {
            return  {
                sideNav: false,
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('logoutUser')
                this.$router.push('/')
            }
        },
        computed: {
            isUserLoggedIn () {
                return this.$store.getters.isUserLoggedIn
            },
            links () {
                if (this.isUserLoggedIn){
                    return [
                        {title: 'Cart', icon: 'mdi-shopping-cart', url:'/checkout'},
                        {title: 'New Product', icon: 'mdi-add', url:'/new'},
                        {title: 'My Products', icon: 'mdi-list', url:'/list'},
                    ]
                }
                return [
                    {title: 'Login', icon: 'mdi-account-box', url:'/login'},
                    {title: 'Register', icon: 'mdi-face', url:'/register'},
                ]
            }
        }
    }
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
