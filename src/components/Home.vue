<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(prod,i) in promoProducts"
              :key="i"
              :src="prod.imageSrc"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="(prod,i) in products"
          :key="i"
          >
          <router-link
          :aria-label="prod.title"
          :to="'/product/' + prod.id"
          >
            <v-img
                height="350px"
                :src="prod.imageSrc"
              >
              </v-img>
          </router-link>
          <v-card
          class="mx-auto"
            max-width="400"
          >

            <v-card-title primary-title>
              <div>
                <h3 class="card_heading heding">{{ prod.title }}</h3>
                <div class="card_describe">
                  <p class="subheading">{{ prod.description.substring(0,60) }}...</p>
                  <p class="subheading card_price"><span class="title">Price:  </span>${{ prod.price }}</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                dark color="light-blue darken-4"
                rounded
                outlined
                :to="'/product/' + prod.id"
              >
                Description
              </v-btn>

              <v-btn
                dark color="light-blue darken-4"
                rounded
              >
                Add to Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          ></v-progress-circular>

        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
    export default {
       computed: {
         promoProducts () {
           return this.$store.getters.promoProducts
         },
         products () {
           return this.$store.getters.products
         },
           loading () {return this.$store.getters.loading}
       }
    }
</script>

<style scoped>
  .card_heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price {
    color: #c00f1b;
    font-size: 18px;
  }
</style>
