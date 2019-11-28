<template>
  <div>
    <Header />
    <div class="hero-image-about" style="height: 145vh !important;">
    <div class="hero-text" style="top: 23% !important;     width: 100%;">
        <div class="row">
            <b-col md="6"><h1 style="font-size:33px; color:#233E98; font-family: Mark-Bold;">About Us</h1></b-col>
            <b-col md="6"><h1 style="font-size:33px; color:#233E98; font-family: Mark-Bold;">#exploretheblue</h1></b-col>
        </div>
    </div>
    </div>
        <div class="container" style="position: absolute;
                            width: 80%;
                            left: 10%;
                            top: 32%;">
            <b-row align-h="center">
                <b-col md="4">
                    <b-card style="height: 151px; background-color: #233E98;">
                        <div>
                            <h1 class="mb-4" style="    font-family: Mark-Bold;
                                font-size: 18px;
                                color: white;">Vision</h1>
                            <p style="font-family: Mark-Bold;
                                font-size: 14px;
                                color: white;">To preverse the beauty in order to enchance the quality of indonesian seat travel industry</p>
                        </div>
                    </b-card>
                </b-col>
                <b-col md="2"></b-col>
                <b-col md="4">
                    <b-card style="height: 151px; background-color: #52B1ED;">
                        <div>
                            <h1 class="mb-4" style="    font-family: Mark-Bold;
                                font-size: 18px;
                                color: white;">Mission</h1>
                            <p style="font-family: Mark-Bold;
                                font-size: 14px;
                                color: white;">Make indonesian sea travel <br> easy to access</p>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
            <b-row>
                <p>cGO exist to provide access for everyone to Explore, Experience and Enjoy the Indonesian archipelago through trusted platform in an affordable, safety and comfortable manner. Starting with personal experience, we commited to create a new journey so that there will be no more difficulties when traveling across the sea.</p>
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

