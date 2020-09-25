<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list two-line subheader>

            <v-list-item
              v-for="(order,i) in orders"
              :key="i"
              avatar>
                <v-list-item-action>
                  <v-checkbox
                    color="success"
                    :input-value="order.done"
                    @change="markDone(order)"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>
              <v-list-item-action>
                <v-btn

                  :to="'/product/' + order.productId"
                  class="primary">Open</v-btn>
              </v-list-item-action>
            </v-list-item>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data(){
            return{
                orders:[
                    {
                        id: 'test',
                        name: 'Andrey',
                        phone: '11-11-11',
                        productId: '1',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone(order){
                order.done=true
            },
            logS(o) {
                console.log(o)
            }
        }
    }
</script>

<style scoped>

</style>
