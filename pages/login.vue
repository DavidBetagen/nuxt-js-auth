<template>
  <div class="row justify-content-md-center">
        <div class="col-sm-6">
            <b-form @reset="onReset">
              <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="Password:"
                label-for="input-1"
              >

                <b-form-input
                  id="input-1"
                  v-model="form.password"
                  type="password"
                  required
                ></b-form-input>
                
              </b-form-group>
              <div class="text-center">
                  <b-button  @click="loginLocal()" type="button" variant="success">Login</b-button>
                  <b-button type="reset" variant="secondary">Reset</b-button>
                  <div class="text-center mt-3">
                        <b-button @click="loginWithFacebook()" type="button" class="btn-login fb">Login with Facebook</b-button>
                  </div>
              </div>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
  </div>
</template>

<script>
  export default {
    middleware: 'guest', // guest.js
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      }
    },
    methods: {
        // config in nuxt.config.js

        async loginWithFacebook(){
          try {
              await this.$auth.loginWith('facebook');
              this.$router.push('/dashboard');
          } catch (error) {
            console.log(error);
          }
        }, 
        async loginLocal() {
          try {
            let response = await this.$auth.loginWith("local", {data: this.form});
          } catch (error) {
            console.log(error);
          }
        },
        async loginSantum() {
          try {
            let response = await this.$auth.loginWith("laravelSanctum", {data: this.form});
            console.log(response);
            this.$router.push('/dashboard');
          } catch (error) {
            console.log(error);
          }
        },
        onReset(event) {
            event.preventDefault()
            this.form.email = ''
            this.form.password = ''
        } 
    }
  }
</script>
<style>

.fb {
  background-color: #3B5998;
  color: white;
}

.btn-login {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
}

</style>