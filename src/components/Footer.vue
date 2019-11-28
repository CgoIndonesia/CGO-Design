<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#233E98;">
      <b-col md="6">
        <b-navbar-brand style="font-size: 16px;
    font-family: Mark-Bold;">be the first to receive our update news!</b-navbar-brand>
      </b-col>
      <b-col md="6" style="align:right;">
        <b-form>
          <b-row>
            <b-col md="8">
              <b-form-input size="sm" placeholder="your email address"></b-form-input>
            </b-col>
            <b-col md="2">
              <b-button size="sm" variant="danger">subscribe</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-navbar>
    <div class="footer-bottom">
      <b-container fluid class="text-left" style="font-size:12px;">
        <b-row>
          <b-col md="2">
            <p style="font-weight:bold;color:#233E98;">Company</p>
            <b-link href="/home/aboutus">About</b-link>
            <!-- <br /> -->
            <!-- <b-link href="#">Careers</b-link> -->
            <br />
            <b-link href="#">Marchant</b-link>
          </b-col>
          <b-col md="2">
            <p style="font-weight:bold;color:#233E98;">Customer Care</p>
            <b-link href="/Home/faq">FAQ</b-link>
            <br />
            <b-link href="/Home/termofuse">Term & Condition</b-link>
            <br />
            <b-link href="/Home/privacy-policy">Privacy Policy</b-link>
            <br />
            <b-link href="/Home/contactus">Contact Us</b-link>
          </b-col>
          <b-col md="2">
            <b-row>
              <b-col>
               <p style="font-weight:bold;color:#233E98;">Connect with Us</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col style="text-align:left;">
                <!-- <b-link href="www.facebook.com"><img src="@/assets/img/fb.png" style="margin:5px"></b-link> -->
                <!-- <b-link href="www.twitter.com"><img src="@/assets/img/tw.png" style="margin:5px"></b-link> -->
                <b-link href="https://www.instagram.com/cgoindonesia/?hl=en"><img src="@/assets/img/ig.png" style="margin:5px"></b-link>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="3" offset-md="3">
            <!-- <b-button variant="outline-primary" style="margin:5px;width:100px;">English</b-button>-->
            <b-button variant="outline-primary" style="margin:5px;width:100px;">USD</b-button> 
          </b-col>
        </b-row>
        <b-row>
          <b-col style="margin-top:33px;">
            <p style="color: rgb(35, 62, 152);
              font-family: NunitoSans-Regular;
              font-size: 13px;">&copy;2019 cGo. All rights reserved</p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<style scoped>
template {
  color: #ffffff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.footer-bottom {
  background-color: #F7F7F7;
  padding: 30px;
}
</style>
