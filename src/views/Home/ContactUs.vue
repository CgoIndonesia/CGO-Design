<template>
  <div>
    <Header />
    <div class="hero-image" style="height: 145vh !important;">
    <div class="hero-text" style="top: 15% !important;">
        <h1 style="font-size:33px">Contact Us</h1>
    </div>
    </div>
        <div class="container" style="position: absolute;
                            width: 100%;
                            left: 7%;
                            top: 15%;">
            <b-row align-h="center">
                <b-col md="8">
                    <div class="form-contact">
                         <b-form>
                            <b-form-group label="Your Name" style=" text-align:left;font-weight:bold">
                                <b-form-input name="subject" id="subject"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Email" style=" text-align:left;font-weight:bold">
                                <b-form-input name="subject" type="email" id="subject"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Subject" style=" text-align:left;font-weight:bold">
                                <b-form-input name="subject" id="subject"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Message" style=" text-align:left;font-weight:bold">
                                <b-form-textarea id="message"  rows="4"></b-form-textarea>
                            </b-form-group>
                            <b-button type="reset" variant="primary"  @click="$bvModal.show('modal-2')">Submit</b-button>
                            </b-form>
                            <b-modal id="modal-2" title="BootstrapVue" hide-header hide-footer>
                <div class="text-center">
                  <h5>Thank You.. We will contact you soon!</h5>
                <p class="my-4">Let’s bring Indonesia’s sea industry to the next level together</p>
                <img src="@/assets/Empty state sailing-06 1.png" alt="">
                <div>
                  <b-button variant="outline-primary" @click="$bvModal.hide('modal-2')">Close</b-button>
                </div>
                </div>
              </b-modal>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                </b-col>
            </b-row>
        </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Header
  }
}
</script>
<style>
    .form-contact{
        color: black;
        border:#d4d9da solid 1px;
        padding: 20px;
        margin: 10px 0 150px 0;
            background: white;
    }
</style>
