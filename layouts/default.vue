<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Nuxt JS</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/dashboard">Dashboard</b-nav-item>
                    <b-nav-item to="/login" v-if="!$auth.loggedIn">Login</b-nav-item>
                    <b-nav-item href="#" v-if="$auth.loggedIn"  @click.prevent="logout()">Logout</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>   
        </b-navbar>
        <div class="container mt-5">
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
  name: 'default',
  methods: {
    async logout() {
        try {
            await this.$auth.logout();
             this.$router.push('/login')
        } catch (error) {
            console.log(error);
        }
    }
  },
}
</script>
