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
        <b-col md="6" style="margin-top:10%;padding:20% 10% 20% 10%">
             <b-alert show variant="primary">Your account has been made!</b-alert>
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
