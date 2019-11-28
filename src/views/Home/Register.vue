<template>
  <div class="register">
    <Header />
    <div class="content-register">
      <b-row>
        <!-- for regiter left(image) -->
        <b-col>
          <div class="text">
            <p style="font-size:20px;font-weight:bold;color:#233E98">
              <b-badge variant="danger">Experience</b-badge>the ease of
            </p>
            <p style="font-size:20px;font-weight:bold;color:#233E98">sea travel booking</p>
          </div>
          <div class="register-left">
            <img src="@/assets/register.png" />
          </div>
        </b-col>
        <!-- end -->
        <!-- coloum for register left -->
        <b-col md="6" style="margin-top:10%" v-if="page == 'registration'">
          <div class="register-right">
            <div class="form-regiter">
              <b-row align-h="center" style="text-align:left">
                <b-col>
                  <p style="font-size:16px">Register</p>
                </b-col>
              </b-row>
              <b-form>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="user" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="text"
                    required
                    placeholder="first name"
                    v-model="form.first_name"
                  ></b-form-input>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="text"
                    required
                    placeholder="last name"
                    v-model="form.last_name"
                  ></b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="envelope" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="email"
                    required
                    placeholder="your email"
                    v-model="form.email"
                  ></b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="phone" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="text"
                    required
                    placeholder="phone number"
                    v-model="form.phone_number"
                  ></b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="lock" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="password"
                    required
                    placeholder="password"
                    v-model="form.password"
                  ></b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="lock" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="password"
                    placeholder="retry password"
                    v-model="form.retry_password"
                  ></b-form-input>
                </b-input-group>
                <b-button
                  type="submit"
                  variant="primary"
                  style="width:100%"
                  @click.prevent="register"
                >Register</b-button>
              </b-form>
            </div>
          </div>
        </b-col>

        <b-col md="6" style="margin-top:10%" v-if="page == 'verification'">
          <div class="register-right">
            <div class="form-regiter">
              <b-row align-h="center" style="text-align:left;">
                <b-col>
                  <p style="font-size:16px;font-weight:bold">Send Verification Code</p>
                </b-col>
              </b-row>
              <b-form>
                <b-button
                  :disabled="disabledVerfivication"
                  type="submit"
                  variant="primary"
                  style="width:100%"
                  @click.prevent="sendPin"
                >Submit</b-button>
              </b-form>
            </div>
          </div>
          <div class="register-right">
            <div class="form-regiter">
              <b-row align-h="center" style="text-align:left;">
                <b-col>
                  <p style="font-size:16px;font-weight:bold">Verify</p>
                </b-col>
              </b-row>
              <b-form>
                <b-input-group style="margin-bottom:10px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF">
                      <i>
                        <font-awesome-icon icon="lock" />
                      </i>
                    </span>
                  </b-input-group-prepend>
                  <b-form-input
                    style="background-color:#DFDFDF"
                    class="LoginInput"
                    type="text"
                    required
                    placeholder="enter your pin"
                    v-model="verification.pin"
                  ></b-form-input>
                </b-input-group>
                <b-button
                  type="submit"
                  variant="primary"
                  style="width:100%"
                  @click.prevent="pinVerification"
                >Verify</b-button>
              </b-form>
            </div>
          </div>
        </b-col>
        <b-col md="6" style="margin-top:10%;padding:20% 10% 20% 10%" v-if="page == 'success'">
          <b-alert show variant="primary">
            Your account has been made!
            <b>redirect in 3s...</b>
          </b-alert>
        </b-col>
        <!-- end -->
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "register",
  components: {
    Header
  },
  data() {
    return {
      disabledVerfivication: false,
      page: "registration",
      form: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        password: null,
        timezone_id: 7
      },
      form_login: {
        username: null,
        password: null,
        device: "WEB",
        fcm_token: "ABCDEFGHIJK"
      },
      verification: {
        email: null,
        pin: null
      }
    };
  },
  methods: {
    register() {
      if (this.form.phone_number.substring(0, 1) == "0")
        this.form.phone_number = this.form.phone_number.replace(/^0/, "+62");
      else this.form.phone_number = this.form.phone_number;
      if (this.form.password == this.form.retry_password) {
        this.$store
          .dispatch("register", this.form)
          .then(res => {
            this.page = "verification";

            console.log(res);
          })
          .catch(error => {
            alert(error.message);
          });
      } else {
        alert("Pasword do not match");
      }
    },
    sendPin() {
      this.disabledVerfivication = true;
      if (this.form.phone_number.substring(0, 1) == "0")
        this.form.phone_number = this.form.phone_number.replace(/^0/, "+62");
      else this.form.phone_number = this.form.phone_number;
      this.verification.email = this.form.email;
      console.log(JSON.stringify(this.form.phone_number));
      this.$store
        .dispatch("otp", { phone_number: this.form.phone_number })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          this.disabledVerfivication = false;
          alert(error);
        });
    },
    pinVerification() {
      console.log(JSON.stringify(this.verification));
      this.$store
        .dispatch("pinVerification", this.verification)
        .then(res => {
          this.$store
            .dispatch("login", this.form_login)
            .then(res => {
              this.page = "success";
              console.log("login succes");
              setTimeout(this.$router.push({ name: "home" }), 3000);
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    retryPassword() {
      return this.form.password == this.form.retry_password;
    }
  },
  watch: {
    "form.email": function() {
      this.form_login.username = this.form.email;
    },
    "form.password": function() {
      this.form_login.password = this.form.password;
    }
  }
};
</script>
