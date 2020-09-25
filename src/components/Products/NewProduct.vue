<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary md-3"> Creater NewProduct</h1>
        <v-form
          class="mb-3"
          ref="form"
          v-model="valid"
          lazy-validation>
          <v-text-field
            label="Title"
            name="title"
            aria-required="true"
            required
            :rules="[v => !!v|| 'Title is require']"
            type="text"
            v-model="title"
          ></v-text-field>
          <v-text-field
            label="Vendor Product"
            name="vendor"
            type="text"
            v-model="vendor"
          ></v-text-field>
          <v-text-field
            label="Color Product"
            name="color"
            type="text"
            v-model="color"
          ></v-text-field>
          <v-text-field
            label="Material Product"
            name="material"
            type="text"
            v-model="material"
          ></v-text-field>
          <v-text-field
            label="Price Product"
            required
            aria-required
            :rules="[v => !!v|| 'Price is require']"
            name="price"
            type="text"
            v-model="price"
          ></v-text-field>
          <v-text-field
            label="Description Product"
            name="description"
            type="text"
            aria-multiline
            v-model="description"
          ></v-text-field>
        </v-form>
        <v-layout class="mb-3">
          <v-flex xs12>
            <v-btn class="warning" @click="upload">
              Upload
              <v-icon right>mdi-cloud-upload</v-icon>
            </v-btn>
            <input 
            type="file"
            ref="fileInput"
            style="display: none;"
            accept="image/*"
            @change="onFileChange">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img :src="imageSrc" height="200px" v-if="imageSrc">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              v-model="promo"
              label="Add to Promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
              @click="createProduct"
              class="success"
            >Create Product</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                vendor: '',
                color: '',
                material: '',
                price: 0,
                description: '',
                promo: false,
                valid: false,
                image:null,
                imageSrc:''
            }
        },
        computed: {
          loading () {
              return this.$store.getters.loading
          }
        },
        methods: {
            createProduct() {
                if (this.$refs.form.validate() && this.image){
                    const product = {
                        title: this.title,
                        vendor: this.vendor,
                        color: this.color,
                        material: this.material,
                        price: this.price,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }
                    this.$store.dispatch('createProduct', product)
                        .then(() => {
                            this.$router.push('/list')
                        })
                        .catch(()=>{})
                }
            },
            upload() {
              this.$refs.fileInput.click()
            },
            onFileChange(event) {
              const file = event.target.files[0]
              const reader = new FileReader()
              reader.onload = () => {
                this.imageSrc = reader.result
              }
              reader.readAsDataURL(file)
              this.image = file
            }
        }
    }
</script>

<style scoped>

</style>
