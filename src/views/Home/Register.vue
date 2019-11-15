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
                </b-input-group>
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
                    placeholder="confirm password"
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
              <b-row align-h="center" style="text-align:left;margin-top:10%">
                <b-col>
                  <p style="font-size:16px;font-weight:bold">Verify</p>
                </b-col>
              </b-row>
              <b-form>
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
          <b-alert show variant="primary">Your account has been made!</b-alert>
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
      page: "registration",
      form: {
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        password: null,
        timezone_id: 7
      },
      verification: {
        email: null,
        pin: null
      }
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", this.form)
        .then(res => {
          this.page = "verification";
          this.verification.email = this.form.email;
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    pinVerification() {
      console.log(JSON.stringify(this.verification));
      this.$store
        .dispatch("pinVerification", this.verification)
        .then(res => {
          this.page = 'success'
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
  }
};
</script>
