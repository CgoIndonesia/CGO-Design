<template>
  <div>
    <Header />
      <b-row align-h="center">
        <!-- find -->
        <div class="find">
          <b-row  style="padding:20px 0 10px 20px;text-align:left">
            <b-col>
              <p style="font-size:20px;font-family:Mark-Bold">Find the best sea travel deal for your holiday</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-card no-body>
                <b-tabs card vertical>
                  <b-tab title="Sailing" active style="">
                    <b-form>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Destination" label-for="input-2" >
                            <b-form-input
                              id="input-2"
                              placeholder="your holiday destination"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Dates" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Dates"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Guest"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4"></b-col>
                        <b-col md="4"></b-col>
                        <b-col md="4">
                          <b-form-group>
                           <b-button type="submit" style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);">Search</b-button>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-tab>
                  <b-tab title="Tour">
                    <b-form>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Destination" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="your holiday destination"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Dates" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Dates"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Guest"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4"></b-col>
                        <b-col md="4"></b-col>
                        <b-col md="4">
                          <b-form-group>
                           <b-button type="submit" style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);">Search</b-button>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-tab>
                  <b-tab title="Transportation">
                    <b-form>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Destination" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="your holiday destination"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Dates" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Dates"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col md="4">
                          <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                            <b-form-input
                              id="input-2"
                              placeholder="Guest"
                              style="background-color:#DFDFDF"
                            ></b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row style="text-align:left;padding:20px">
                        <b-col md="4"></b-col>
                        <b-col md="4"></b-col>
                        <b-col md="4">
                          <b-form-group>
                           <b-button type="submit" style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);">Search</b-button>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-form>
                  </b-tab>
                </b-tabs>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-row>
      <div class="image">
        <img src="@/assets/img/home.png" width="100%" height="100%" />
      </div>
       <div class="space"></div>
       <!-- why book -->
       <div class="whybook">
         <div class="container">
            <b-row align-h="center">
              <b-col><p style="font-size:16px;font-family:Mark-Bold;">Why Book With Us</p></b-col>
            </b-row>
            <b-row align-h="center" style="margin-top:30px">
              <b-col>
                <b-row align-h="center" >
                    <b-col md="3" style="text-align:right">
                    <img src="@/assets/img/Easy Payment-01 1.png" alt="img">
                  </b-col>
                  <b-col md="4" style="text-align:left">
                    <p style="color:#233E98;font-weight:bold;">Easy Payment</p>
                    <p>cGO offers a secure payment using a credit card, bank transfer or any local payment method.</p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row align-h="center">
                  <b-col md="3" style="text-align:right">
                    <img src="@/assets/img/Icon for web app-03.png" alt="img">
                  </b-col>
                  <b-col md="4" style="text-align:left">
                    <p style="color:#233E98;font-weight:bold;">Various Merchant</p>
                    <p>Whatever accommodation you're looking for, we've got you covered!</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row align-h="center">
              <b-col>
                <b-row align-h="center">
                    <b-col md="3" style="text-align:right">
                    <img src="@/assets/img/Icon for web app-02.png" alt="img">
                  </b-col>
                  <b-col md="4" style="text-align:left">
                    <p style="color:#233E98;font-weight:bold;">Simple Booking Process</p>
                    <p>All you have to do is click on your departure date, pay and enjoy the trip.</p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row align-h="center">
                  <b-col md="3" style="text-align:right">
                    <img src="@/assets/img/Icon for web app-04.png" alt="img">
                  </b-col>
                  <b-col md="4" style="text-align:left">
                    <p style="color:#233E98;font-weight:bold;">We Offer Safety and Quality</p>
                    <p>Our listed merchants are the best in the business. We assure you to get the best service!</p>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
         </div>
       </div>
       <!-- Popular Destination -->
       <div class="popular-destination">
         <b-row align-h="center">
           <b-col><p style="font-size:16px;font-weight:bold; font-family:Mark-Bold">Popular Destination</p></b-col>
         </b-row>
         <b-row align-h="center" style="margin-bottom:20px">
           <b-col><p style="font-size:12px"></p>Enchanting natural beauty of Indonesia is an appealing reason to go on a sea trip.</b-col>
         </b-row>
         <b-row align-h="center">
           <div class="container">
              <b-row>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Bali</p>
                    </div>
                    <img src="@/assets/bali.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Lombok</p>
                    </div>
                    <img src="@/assets/lombok.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Labuan Bajo</p>
                    </div>
                    <img src="@/assets/labuan-bajo.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Pulau Pari,Kep. Seribu</p>
                    </div>
                    <img src="@/assets/pulau-pari.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Pulau Tidung,Kep. Seribu</p>
                    </div>
                    <img src="@/assets/pulau-tidung.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Pulau Kelor,Kep. Seribu</p>
                    </div>
                    <img src="@/assets/pulau kelor.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Pulau Onrust,Kep. Seribu</p>
                    </div>
                    <img src="@/assets/pulau-onrush.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
                <b-col md="3" style="margin-bottom:20px">
                  <div class="card-p-destination">
                    <div class="card-p-destination-gradient">
                      <p style="color:#ffffff">Ujung Kulon</p>
                    </div>
                    <img src="@/assets/ujung-kulon.png"  style="witdth:260.75px;height:232.88px;">
                  </div>
                </b-col>
              </b-row>
           </div>
         </b-row>
         <b-row align-h="center">
           <b-col><b-button variant="outline-primary">See All</b-button></b-col>
         </b-row>
         <!-- Spesial Promos -->
          <b-row align-h="center" style="margin-top:50px">
           <b-col><p style="font-size:18px;font-weight:bold;">Special Promos</p></b-col>
         </b-row>
          <b-row align-h="center">
           <b-col><p style="font-size:12px;">Lorem ipsum dolor sit amet constecteuer</p></b-col>
         </b-row>
         <div class="container">
          <b-row>
            <b-col md="4">
              <div class="promos">
                <b-row>
                  <b-col md="2"></b-col>
                  <b-col md="9" align-self="end">
                    <div class="component-promos">
                      <p style="font-weight: bold;font-size: 20px;color: #292727;">
                        Get discount for your first book
                        </p>
                    </div>
                  </b-col>
                  <img src="@/assets/img/Frame.png" alt="" style="position:absolute;margin:20% 0 0 8%">
                </b-row>
                <b-row>
                  <b-col>
                      <p>leran more</p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col md="4">
              <div class="promos">
                <b-row>
                  <b-col md="2"></b-col>
                  <b-col md="9" align-self="end">
                    <div class="component-promos">
                      <p style="font-weight: bold;font-size: 20px;color: #292727;">
                        Invite Your Friends
                        </p>
                    </div>
                  </b-col>
                  <img src="@/assets/img/Frame.png" alt="" style="position:absolute;margin:20% 0 0 8%">
                </b-row>
                <b-row>
                  <b-col>
                      <p>leran more</p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
            <b-col md="4">
             <div class="promos">
                <b-row>
                  <b-col md="2"></b-col>
                  <b-col md="9" align-self="end">
                    <div class="component-promos">
                      <p style="font-weight: bold;font-size: 20px;color: #292727;">
                        Get Voucher
                        </p>
                    </div>
                  </b-col>
                  <img src="@/assets/img/Frame (1).png" alt="" style="position:absolute;margin:20% 0 0 8%">
                </b-row>
                <b-row>
                  <b-col>
                      <p>leran more</p>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
         </div>
       </div>
       <!-- Never Been On Board -->
       <div class="content-above">
         <b-row align-h="center">
           <b-col><p style="font-size:16px;font-weight:bold">Never been on board before?</p></b-col>
         </b-row>
         <b-row align-h="center">
           <b-col><p style="font-size:12px;">Learn more about our services</p></b-col>
         </b-row>
        <div class="container">
         <b-row style="margin-top:20px">
           <b-col md="4">
             <div class="board">
               <div class="board-gradien">
                 <p style="font-size: 20px;font-weight:bold;color: #233E98;">Sailing</p>
               </div>
               <img src="@/assets/board3.png" height="100%" width="100%" alt="">
             </div>
           </b-col>
           <b-col md="4">
             <div class="board">
               <div class="board-gradien">
                 <p style="font-size: 20px;font-weight:bold;color: #233E98;">Tour</p>
               </div>
               <img src="@/assets/board2.png" height="100%" width="100%" alt="">
             </div>
           </b-col>
           <b-col md="4">
             <div class="board">
               <div class="board-gradien">
                 <p style="font-size: 20px;font-weight:bold;color: #233E98;">Transportation</p>
               </div>
               <img src="@/assets/board1.png" height="100%" width="100%" alt="">
             </div>
           </b-col>
         </b-row>
        </div>
       </div>
       <!-- Content Above -->
          <div class="content-end">
            <div class="playstore">
              <div class="container">
              <b-row align-h="center">
                <b-col md="1"></b-col>
                <b-col md="4" style="padding-left:20%">
                  <div class="box-palystore">
                    <div id="boxsatu"></div>
                    <div id="boxdua"></div>
                  </div>
                </b-col>
                <b-col md="6">
                  <b-row>
                    <b-col md="6" style="text-align:left;margin-top:50%;padding-left:20px">
                      <p style="font-size:20px;font-weight:bold;color:white">Feel the experience only at our mobile app</p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="8" style="text-align:left">
                      <b-link href="www.appstore.com"><img src="~@/assets/img/Group 420.png" style="margin-right:10px"></b-link>
                      <b-link href="www.playstore.com"><img src="~@/assets/img/Group 421.png"></b-link>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row align-h="center" style="margin-top:10%">
                  <b-col>
                    <b-button variant="danger">News Covered</b-button>
                  </b-col>
              </b-row>
              <b-row align-h="center" style="margin-top:2%">
                    <b-col>
                       <b-carousel
                          id="carousel-1"
                          v-model="slide"
                          :interval="4000"
                          controls
                          indicators
                          background="#ababab"
                          img-width="952"
                          img-height="218"
                          style="text-shadow: 1px 1px 2px #333;margin-left:10%;margin-right:10%;border-radius:10px"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd"
                        >
                          <!-- Text slides with image -->
                          <b-carousel-slide
                            caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                            img-src="https://picsum.photos/952/200/?image=52"
                          ></b-carousel-slide>

                          <!-- Slides with custom text -->
                          <b-carousel-slide img-src="https://picsum.photos/952/200/?image=54">
                            <h1>Hello world!</h1>
                          </b-carousel-slide>

                          <!-- Slides with image only -->
                          <b-carousel-slide img-src="https://picsum.photos/952/200/?image=58"></b-carousel-slide>

                          <!-- Slides with img slot -->
                          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                        </b-carousel>
                    </b-col>
              </b-row>
              </div>
            </div>
            <img src="@/assets/image 34.png" class="img-end">
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
</style>
