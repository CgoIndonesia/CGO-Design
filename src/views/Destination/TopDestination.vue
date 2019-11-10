<template>
  <div>
    <Header />
    <div class="container">
      <b-row>
        <div class="destination">
                <b-row>
                    <b-col>
                        <p style="font-size:32px;color:#ffffff;">Merchant</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                            <b-row>
                                <b-col>
                                    <h2 style="color:#233E98;text-align:left">Destinations</h2>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <h6 style="text-align:left">Explore the most exotic places with cGO</h6>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                      <b-col>
                                         <b-tabs content-class="mt-2" style="text-align:left;">
                                            <b-tab title="Bali" active>
                                               <b-card-group>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                                    <div class="card-destination">
                                                        <b-card
                                                            overlay
                                                            img-src="https://picsum.photos/200/220/?image=20"
                                                            img-alt="Card Image"
                                                            text-variant="white"
                                                        >
                                                        <b-card-text style="font-weight:bold;font-size:20px;">
                                                        Gili
                                                        </b-card-text>
                                                        </b-card>
                                                     </div>
                                               </b-card-group>
                                            </b-tab>
                                            <b-tab title="Jakarta">
                                            </b-tab>
                                            <b-tab title="Labuan Bajo">
                                            </b-tab>
                                            <b-tab title="Flores">
                                            </b-tab>
                                            <b-tab title="Raja Ampat">
                                            </b-tab>
                                         </b-tabs>
                                      </b-col>
                                </b-col>
                            </b-row>
                    </b-col>
                </b-row>
        </div>
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
.card-destination{
    margin:auto auto auto 0;
    text-align: left;
    float: right;
    display: pointer;
    border-radius: 5px;
}
.card-destination:hover{
    box-shadow:0 0 10px 0;
}

@media only screen and (max-width: 600px) {
.card-destination{
    margin:15px 15px 0 0;
    text-align: left;
    position: relative;
    width: 100%;
}
}
</style>
