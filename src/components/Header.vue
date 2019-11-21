<template>
  <div id="head">
    <b-navbar
      class="navbar fixed-top navbar-dark"
      toggleable="lg"
      style="background-color:#233E98;color:#ffffff:padding:0 10% 0 10%"
    >
      <b-navbar-brand href="home" style="padding:0 0 0 30px">
        <img src="@/assets/img/cgo-logo.png" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav style="padding:0 30px 0 0">
        <b-navbar-nav>
          <b-nav-item href="/sailing/index" >Salling</b-nav-item>
          <b-nav-item href="/Tour/tour">Tour</b-nav-item>
          <b-nav-item href="/Transportation/transportation">Transportation</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav>
          <b-form>
            <b-input-group class="search">
              <b-input-group-prepend>
                <span class="search-icon">
                  <i>
                    <font-awesome-icon icon="search" />
                  </i>
                </span>
              </b-input-group-prepend>
              <b-form-input
                size="sm"
                class="search-input"
                placeholder="try 'labuan bajo'"
                style="border-width: 0px;border-left-radius:0px"
              ></b-form-input>
            </b-input-group>
          </b-form>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto pr-6">
          <b-nav-item v-if="loggedIn" @click.prevent="logout"> Logout</b-nav-item>
          <b-nav-item v-if="!loggedIn" href="/Home/register">Register</b-nav-item>
          <b-dropdown v-if="!loggedIn" variant="link" toggle-class="text-decoration-none" no-caret>
            <template v-slot:button-content style="padding:0px">
              <p style="color:rgba(255, 255, 255, 0.5);margin:0px;font-size:14px">Login</p>
            </template>
            <b-dropdown-form style="width: 254px;">
              <b-form-group label="Email" label-for="dropdown-form-email" @submit.stop.prevent>
                <b-form-input id="dropdown-form-email" size="sm" placeholder="email@example.com" v-model="form.username"></b-form-input>
              </b-form-group>

              <b-form-group style="font-family: NunitoSans-Regular;" label="Password" label-for="dropdown-form-password">
                <b-form-input
                  id="dropdown-form-password"
                  type="password"
                  v-model="form.password"
                  size="sm"
                  style="font-family: NunitoSans-Regular;"
                  placeholder="Password"
                ></b-form-input>
              </b-form-group>
              <b-link href>
                <b-dropdown-item>forgot password.?</b-dropdown-item>
              </b-link>
              <b-button
                type="submit"
                @click.prevent="login"
                style="width:100%;border-radius:5px;background: linear-gradient(168.49deg, #9CAFEF -53.91%, #2345B9 94.99%);"
              >Log In</b-button>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-row>
              <b-col md="6" style="text-align:center;">
                <p style="font-size:16px">log in with</p>
              </b-col>
              <b-col md="6" style="text-align:left;">
                <b-link href="www.facebook.com">
                  <img src="@/assets/img/Group.png" style="margin:5px" />
                </b-link>
                <b-link href="www.twitter.com">
                  <img src="@/assets/img/Color.png" style="margin:5px" />
                </b-link>
              </b-col>
            </b-row>
          </b-dropdown>
          <b-col>
            <b-button
              size="sm"
              variant="danger"
              style="border-radius:5px;width:150px;margin-top:3px"
            >for merchant</b-button>
          </b-col>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<<<<<<< HEAD
<script>
export default {

  data() {
    return {
      form: {
        username: null,
        password: null,
        device: "android",
        fcm_token: "ABCDEFGHIJK"
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.form)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout(){
      this.$store.dispatch("logout")
      .then(r =>{
        this.$router.push({ name: 'home' })
      })
      
      
    }
  },
  watch: {},
  computed : {
    loggedIn(){
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style>


*{
  font-family: Mark-Medium;

}
</style>
