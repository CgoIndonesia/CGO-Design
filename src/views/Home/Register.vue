<template>
  <div class="home">
    <Header />
    <div class="content-register">
      <b-row>
        <!-- for regiter left(image) -->
        <b-col>
          <div class="text">
             <p style="font-size:20px;font-weight:bold;color:#233E98"><b-badge variant="danger">Experience</b-badge> the ease of  </p>
             <p style="font-size:20px;font-weight:bold;color:#233E98">sea travel booking</p>
          </div>
          <div class="register-left">
            <img src="@/assets/register.png">
          </div>
        </b-col>
        <!-- end -->
        <!-- coloum for register left -->
        <b-col md="6" style="margin-top:10%">
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
                    <span class="input-group-text" style="background-color:#DFDFDF"><i><font-awesome-icon icon="user" /></i></span>
                  </b-input-group-prepend>
                    <b-form-input style="background-color:#DFDFDF" class="LoginInput" type="text" required  placeholder="your name here">
                  </b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF"><i><font-awesome-icon icon="envelope" /></i></span>
                  </b-input-group-prepend>
                    <b-form-input style="background-color:#DFDFDF" class="LoginInput" type="email" required  placeholder="your email">
                  </b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF"><i><font-awesome-icon icon="lock" /></i></span>
                  </b-input-group-prepend>
                    <b-form-input style="background-color:#DFDFDF" class="LoginInput" type="password" required  placeholder="password">
                  </b-form-input>
                </b-input-group>
                <b-input-group style="margin-bottom:20px">
                  <b-input-group-prepend>
                    <span class="input-group-text" style="background-color:#DFDFDF"><i><font-awesome-icon icon="lock" /></i></span>
                  </b-input-group-prepend>
                    <b-form-input style="background-color:#DFDFDF" class="LoginInput" type="password"  placeholder="confirm password">
                  </b-form-input>
                </b-input-group>
                <b-button type="submit" variant="primary" style="width:100%">Register</b-button>
              </b-form>
            </div>
          </div>
        </b-col>
        <!-- end -->
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
