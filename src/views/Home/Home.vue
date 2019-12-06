<template>
  <div>
    <Header />
    <b-row align-h="center">
      <!-- find -->
      <div class="find">
        <b-row style="padding:20px 0 10px 20px;text-align:left">
          <b-col>
            <p
              style="font-size:20px;font-family:Mark-Bold; color: #292727;"
            >Find the best sea travel deal for your holiday</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-card no-body>
              <b-tabs card pills vertical id="tab-find">
                <b-tab active style>
                  <template v-slot:title>
                    <img src="@/assets/img/Group 426.png" alt=""> <strong>Sailing</strong>
                  </template>
                  <b-form @submit.stop.prevent="onSubmitSailing">
                    <b-row style="text-align:left; padding: 0px 20px; padding-top: 15px;">
                      <b-col md="3">
                        <b-form-group id="input-group-2" label="Duration" label-for="input-2">
                          <select class="form-control" @change="changeCheckOut()" id="divisions_list" name="division" v-model="selectedDestiny">
                            <option disabled selected> Select Destination
                            </option>
                            <option v-for="destiny in destination" :value="destiny.name">
                              {{destiny.name}}
                            </option>
                          </select>
                        </b-form-group>
                      </b-col>
                      <b-col md="3">
                        <b-form-group id="input-group-2" label="Check In" label-for="input-2">
                          <!-- <b-form-input
                            v-model="$store.state.sailing.form.date"
                            id="input-2"
                            placeholder="Dates"
                            type="date"
                            style="background-color: #F7F7F7;
                              border: transparent;
                              font-family: NunitoSans-Regular;
                              font-size: 14px;"
                          ></b-form-input> -->
                          <!-- <datepicker @selected="bindingDate" v-model="state.date" format="dd MMM yyyy" :disabled-dates="state.disabledDates"></datepicker> -->
                          <date-picker v-model="time1" @change="bindingDate()" :disabled-date="notBeforeToday" placeholder="Select date" style="width: 140px; padding: 2px;" value-type="format" format="DD-MMM-YYYY"></date-picker>
                        </b-form-group>
                      </b-col>
                      <b-col md="3">
                        <b-form-group id="input-group-2" label="Duration" label-for="input-2">
                          <select class="form-control" @change="changeCheckOut()" id="divisions_list" name="division" v-model="duration">
                            <option v-for="days in day" :value="days.value">
                              {{days.name}}
                            </option>
                          </select>
                        </b-form-group>
                      </b-col>
                      <b-col md="3">
                        <b-form-group id="input-group-2" label="Check Out" label-for="input-2">
                          <p
                          >{{checkOut}}</p>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row style="text-align:left;padding:0 20px">
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                          <b-form-input
                            v-model="$store.state.sailing.form.guest"
                            id="input-2"
                            min="1"
                            placeholder="Guest"
                            type="number"
                            style="background-color: #F7F7F7;
                              border: transparent;
                              font-family: NunitoSans-Regular;
                              font-size: 14px;"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="4"></b-col>
                      <b-col md="4" class="align-self-center">
                        <b-form-group class="m-0">
                          <b-button
                            type="submit"
                            style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);"
                          >Search</b-button>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-tab>
                <b-tab >
                  <template v-slot:title>
                    <img src="@/assets/img/Group 427.png" alt=""> <strong>Tour</strong>
                  </template>
                  <b-form @submit.stop.prevent="onSubmitTour">
                    <b-row style="text-align:left;padding:20px">
                      <b-col md="4">
                        <b-form-group label="Destination">
                          <select class="form-control form-control-primary" v-model="search.tour.destination">
                            <option value="">(Select Destination)</option>
                            <option v-for="destiny in destination" :value="destiny.name">
                              {{destiny.name}}
                            </option>
                          </select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="Date" label-for="input-2">
                          <date-picker v-model="search.tour.date" class="form-control-primary" type="date" format="DD-MMM-YYYY" placeholder="Select Date"></date-picker>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            placeholder="Guest"
                            type="number"
                            min="1"
                            v-model="search.tour.guest"
                            class="form-control-primary"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row style="text-align:left;padding:0 20px">
                      <b-col md="4"></b-col>
                      <b-col md="4"></b-col>
                      <b-col md="4">
                        <b-form-group>
                          <b-button
                            type="submit"
                            style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);"
                          >Search</b-button>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    <img src="@/assets/img/camper-van.png" alt=""> <strong>Transportation</strong>
                  </template>
                  <b-form>
                    <b-row style="text-align:left;padding: 0 20px; padding-top: 15px;">
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="From" label-for="input-2">
                          <select class="form-control" @change="changeCheckOut()" id="divisions_list" name="division" v-model="duration">
                            <option v-for="destiny in destination" :value="destiny.name">
                              {{destiny.name}}
                            </option>
                          </select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="To" label-for="input-2">
                          <select class="form-control" @change="changeCheckOut()" id="divisions_list" name="division" v-model="duration">
                            <option v-for="destiny in destination" :value="destiny.name">
                              {{destiny.name}}
                            </option>
                          </select>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="Guest" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            type="number"
                            placeholder="your holiday destination"
                            style="background-color: #F7F7F7;
                                border: transparent;
                                font-family: NunitoSans-Regular;
                                font-size: 14px;"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row style="text-align:left;padding:0 20px">
                      <b-col md="4">
                        <b-form-group id="input-group-2" label="Departure" label-for="input-2">
                          <b-form-input
                            id="input-2"
                            placeholder="Dates"
                            style="background-color: #F7F7F7;
                                border: transparent;
                                font-family: NunitoSans-Regular;
                                font-size: 14px;"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="4">
                        <b-form-group id="input-group-2">
                          <b-form-checkbox
                            name="checkbox-1"
                            v-model="returnStatus"
                            v-value="1"
                            v-unchecked-value="null"
                            class="mb-1"
                          > Return
                          </b-form-checkbox>
                          <b-form-input
                            v-if="returnStatus == 1"
                            id="input-2"
                            placeholder="Dates"
                            style="background-color: #F7F7F7;
                                border: transparent;
                                font-family: NunitoSans-Regular;
                                font-size: 14px;"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col md="4" class="align-self-center">
                        <b-form-group class="m-0">
                          <b-button
                            type="submit"
                            style="width:100%;background: linear-gradient(170.2deg, #9CAFEF -53.91%, #2345B9 94.99%);"
                          >Search</b-button>
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
      <div class="container" style="margin-top: 120px;">
        <b-row align-h="center">
          <b-col>
            <p style="font-size:20px;font-family:Mark-Bold; color: #292727;">Why Book With Us</p>
          </b-col>
        </b-row>
        <b-row align-h="center" style="margin-top:30px">
          <b-col>
            <b-row align-h="center">
              <b-col md="3" style="text-align:right">
                <img src="@/assets/img/Easy Payment-01 1.png" alt="img" />
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
                <img src="@/assets/img/Icon for web app-03.png" alt="img" />
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
                <img src="@/assets/img/Icon for web app-02.png" alt="img" />
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
                <img src="@/assets/img/Icon for web app-04.png" alt="img" />
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
        <b-col>
          <p style="font-size:22px;font-weight:bold; font-family:Mark-Bold; color: #292727;">Popular Destination</p>
        </b-col>
      </b-row>
      <b-row align-h="center" style="margin-bottom:20px">
        <b-col>
          <p style="font-size:15px; font-family: NunitoSans-Regular; margin-bottom: 1.7rem;">Enchanting natural beauty of Indonesia is an appealing reason to go on a sea trip.</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <div class="container">
          <b-row>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Bali</p>
                </div>
                <img src="@/assets/bali.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Lombok</p>
                </div>
                <img src="@/assets/lombok.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Labuan Bajo</p>
                </div>
                <img src="@/assets/labuan-bajo.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                   font-size: 20px;">Pulau Pari, Kep. Seribu</p>
                </div>
                <img src="@/assets/pulau-pari.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                   font-size: 20px;">Pulau Tidung, Kep. Seribu</p>
                </div>
                <img src="@/assets/pulau-tidung.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Pulau Kelor, Kep. Seribu</p>
                </div>
                <img src="@/assets/pulau kelor.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Pulau Onrust, Kep. Seribu</p>
                </div>
                <img src="@/assets/pulau-onrush.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
            <b-col md="3" style="margin-bottom:20px">
              <div class="card-p-destination">
                <div class="card-p-destination-gradient">
                  <p style="color:#ffffff; font-family: Mark-Bold;
                  font-size: 20px;">Ujung Kulon</p>
                </div>
                <img src="@/assets/ujung-kulon.png" style="witdth:260.75px;height:232.88px;" />
              </div>
            </b-col>
          </b-row>
        </div>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <b-button variant="outline-primary" style="font-family: NunitoSans-Regular;
    width: 9rem;">See All</b-button>
        </b-col>
      </b-row>
      <!-- Spesial Promos -->
      <b-row align-h="center" style="margin-top:50px">
        <b-col>
          <p style="font-size:22px;font-family: Mark-Bold;color: #292727;">Special Promos</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <p style="font-size: 13px;
          font-family: NunitoSans-Regular;">Enjoy variety of exclusive offers</p>
        </b-col>
      </b-row>
      <div class="container">
        <b-row>
          <b-col md="2"></b-col>
          <b-col md="4">
            <div class="promos">
              <b-row>
                <b-col md="2"></b-col>
                <b-col md="10" align-self="end">
                  <div class="component-promos">
                    <p
                      style="font-weight: bold;font-size: 20px;color: #292727;"
                    >Get discount for your first book</p>
                  </div>
                </b-col>
                <img src="@/assets/img/Frame.png" alt style="position:absolute;margin:14% 0px 0px 8%;" />
              </b-row>
              <b-row>
                <b-col>
                  <p style="font-family: NunitoSans-Regular;">learn more</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="4">
            <div class="promos">
              <b-row>
                <b-col md="2">
                </b-col>
                <b-col md="10" align-self="end">
                  <div class="component-promos">
                    <p style="font-weight: bold;font-size: 20px;color: #292727;">Invite Your Friends</p>
                  </div>
                </b-col>
                <img src="@/assets/img/Group 596.png" alt style="position:absolute;margin:14% 0px 0px 8%;" />
              </b-row>
              <b-row>
                <b-col>
                  <p style="font-family: NunitoSans-Regular;">learn more</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="2"></b-col>
        </b-row>
      </div>
    </div>
    <!-- Never Been On Board -->
    <div class="content-above">
      <b-row align-h="center">
        <b-col>
          <p style="font-size:22px;font-family: Mark-Bold;color: #292727;">Never been on board before?</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <p style="font-size:12px; font-family:NunitoSans-Regular;">Learn more about our services</p>
        </b-col>
      </b-row>
      <div class="container">
        <b-row style="margin-top:20px">
          <b-col md="4">
            <div class="board">
              <div class="board-gradien">
                <p style="font-size: 20px;font-weight:bold;color: #233E98;">Sailing</p>
              </div>
              <img src="@/assets/board3.png" height="100%" width="100%" alt />
            </div>
          </b-col>
          <b-col md="4">
            <div class="board">
              <div class="board-gradien">
                <p style="font-size: 20px;font-weight:bold;color: #233E98;">Tour</p>
              </div>
              <img src="@/assets/board2.png" height="100%" width="100%" alt />
            </div>
          </b-col>
          <b-col md="4">
            <div class="board">
              <div class="board-gradien">
                <p style="font-size: 20px;font-weight:bold;color: #233E98;">Transportation</p>
              </div>
              <img src="@/assets/board1.png" height="100%" width="100%" alt />
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
                  <p
                    style="font-size:20px;font-weight:bold;color:white"
                  >Feel the experience only at our mobile app</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="8" style="text-align:left">
                  <b-link href="www.appstore.com">
                    <img src="~@/assets/img/Group 420.png" style="margin-right:10px" />
                  </b-link>
                  <b-link href="www.playstore.com">
                    <img src="~@/assets/img/Group 421.png" />
                  </b-link>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row align-h="center" style="margin-top:10%">
            <b-col>
              <b-button variant="danger">News Covered</b-button>
            </b-col>
          </b-row>
          <b-row align-h="center" style="margin-top:5%">
            <b-col>
              <div class="container-fluid news-cover">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner row w-75 mx-auto">
                    <div class="carousel-item col-md-6 active" href="https://www.thejakartapost.com/travel/2019/09/26/online-reservation-platform-cgo-to-offer-yachts-boats-for-your-travel-needs.html">
                      <b-card img-src="https://img.jakpost.net/c/2019/01/19/2019_01_19_63436_1547869618._large.jpg" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                          Online reservation platform cGo to offer yachts, boats for your travel needs.
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="carousel-item col-md-6">
                      <b-card img-src="https://www.thefolio.co.id/wp-content/uploads/2019/09/Team-cGO-_-Partners.jpg" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                          cGo: The Platform for Marine Tourism Officially Launched.
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="carousel-item col-md-6">
                      <b-card img-src="https://whatsnewindonesia.com/wp-content/uploads/2019/09/Jajaran_Kepemilikan_cGO.jpg" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                          INTRODUCING CGO : A NEW AVENUE TO EXPLORE THE INDONESIA ARCHIPELAGO.
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="carousel-item col-md-6">
                      <b-card img-src="https://www.gadis.co.id/gadis/new-img/images/cGO%2C%20Solusi%20Tepat%20untuk%20Eksplorasi%20Wisata%20Bahari%20Indonesia%20-%20Artikel%201.JPG" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                          cGO, Solusi Tepat untuk Eksplorasi Wisata Bahari Indonesia.
                        </b-card-text>
                      </b-card>
                    </div>
                    <div class="carousel-item col-md-6">
                      <b-card img-src="http://samudranesia.id/wp-content/uploads/2019/09/birds-eye-view-2133661_960_720.jpg" img-alt="Card image" img-left class="mb-3">
                        <b-card-text>
                          Media Launch cGO, Aplikasi Sewa Kapal Pesiar Indonesia.
                        </b-card-text>
                      </b-card>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
      <img src="@/assets/image 34.png" class="img-end" />
    </div>
    <Footer />
  </div>
</template>

<script>
    // @ is an alias to /src
    import Footer from "@/components/Footer.vue";
    import Header from "@/components/Header.vue";
    import DatePicker from 'vue2-datepicker';
    import axios from '@/plugins/axiosAuth'
    import 'vue2-datepicker/index.css';
    import { timeout } from 'q';
    import moment from 'moment'

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    export default {
        name: "home",
        data() {
            return {
                day: [
                    {name: 1, value: 1},
                    {name: 2, value: 2},
                    {name: 3, value: 3},
                    {name: 4, value: 4},
                    {name: 5, value: 5},
                    {name: 6, value: 6}
                ],

                search: {
                    tour: {
                        destination: '',
                        date: MOMENT().format('DD MMMM YYYY'),
                        guest: 1,
                    },
                },
                destination: [],
                selectedDestiny: null,
                selectedDestinyTour: null,
                returnStatus: null,
                selected: null,
                duration: 1,
                monthTour: '',
                dateCheckIn: null,
                dateCheckOut: null,
                checkOut: null,
                time1: new Date(Date.now()),
                timeTour: new Date(Date.now()),
                timeTourParse: new Date(Date.now())
            };
        },
        components: {
            Footer,
            Header,
            DatePicker
        },
        mounted() {
            $(document).ready(function() {
                $("#myCarousel").on("slide.bs.carousel", function(e) {
                    var $e = $(e.relatedTarget);
                    var idx = $e.index();
                    var itemsPerSlide = 4;
                    var totalItems = $(".carousel-item").length;

                    if (idx >= totalItems - (itemsPerSlide - 1)) {
                        var it = itemsPerSlide - (totalItems - idx);
                        for (var i = 0; i < it; i++) {
                            // append slides to end
                            if (e.direction == "left") {
                                $(".carousel-item")
                                    .eq(i)
                                    .appendTo(".carousel-inner");
                            } else {
                                $(".carousel-item")
                                    .eq(0)
                                    .appendTo($(this).find(".carousel-inner"));
                            }
                        }
                    }
                });
            });
            axios.get('/api/v1/UserApps/Master/Harbor/')
                .then(response =>
                {
                    let res = response.data;

                    res.data.forEach(item => {
                        item.id = item.name;
                        item.text = item.name;
                    });

                    this.destination = res.data
                })
        },
        methods: {
            search(data) {},
            onSubmitSailing() {
                this.$store.state.sailing.form.destination = this.selectedDestiny
                this.$store.state.sailing.form.day = this.duration
                this.$router.push({ name: "sailingEmpty" });
            },

            onSubmitTour()
            {
                this.search.tour.date = MOMENT(this.search.tour.date,'DD MMMM YYYY').format('YYYY-MM-DD');

                let query = this.search.tour;
                this.$router.push({ name: "Tour", query: query });
            },

            changeCheckOut(){
                var days = this.duration;
                this.dateCheckIn = this.time1
                this.dateCheckIn = this.checkOut
                this.checkOut = new Date(new Date(this.time1).setDate(new Date(this.time1).getDate() + days));
                this.checkOut =  moment(String(this.checkOut)).format('DD-MMM-YYYY')
                this.dateCheckIn =  moment(String(this.time1)).format('YYYY-MM-DD');
                this.dateCheckOut =  moment(String(this.checkOut)).format('YYYY-MM-DD');
                // this.dateCheckOut =  moment(String(this.checkOut)).format("YYYY-MM-DD[T]HH:mm:ss");
                this.$store.state.sailing.form.dateCheckIn = this.dateCheckIn
                // this.$store.state.sailing.form.dateCheckIn = this.time1
                this.$store.state.sailing.form.dateCheckOut = this.dateCheckOut

                console.log(this.time1)
                console.log(this.checkOut)
                console.log(this.dateCheckIn)
                console.log(this.dateCheckOut)
            },
            notBeforeToday(date) {
                return date < today;
            },
            bindingDate(){
                var days = this.duration;
                this.dateCheckIn = this.time1
                this.dateCheckIn = this.checkOut
                this.checkOut = new Date(new Date(this.time1).setDate(new Date(this.time1).getDate() + days));
                this.checkOut =  moment(String(this.checkOut)).format('DD-MMM-YYYY')
                console.log(result)
                this.dateCheckIn =  moment(String(this.time1)).format('YYYY-MM-DD');
                this.dateCheckOut =  moment(String(this.checkOut)).format('YYYY-MM-DD');
                // this.dateCheckOut =  moment(String(this.checkOut)).format("YYYY-MM-DD[T]HH:mm:ss");
                this.$store.state.sailing.form.dateCheckIn = this.dateCheckIn
                // this.$store.state.sailing.form.dateCheckOut = new Date(this.checkOut)
                this.$store.state.sailing.form.dateCheckOut = this.dateCheckOut

                console.log(this.time1)
                console.log(this.checkOut)
                console.log(this.dateCheckIn)
                console.log(this.dateCheckOut)
            },
            bindingDateTour(){
                // this.checkOut = new Date(new Date(this.time1).setDate(new Date(this.time1).getDate() + days));
                // this.dateCheckOut =  moment(String(this.checkOut)).format('YYYY-MM-DD');
                // this.checkOut =  moment(String(this.checkOut)).format('DD-MMM-YYYY')
                this.timeTourParse =  moment(String(this.timeTour)).format('YYYY-MM-DD');
                // this.dateCheckOut =  moment(String(this.checkOut)).format("YYYY-MM-DD[T]HH:mm:ss");
                this.$store.state.tour.form.date = this.timeTourParse
                // this.$store.state.sailing.form.dateCheckOut = new Date(this.checkOut)
                // this.$store.state.sailing.form.dateCheckOut = this.dateCheckOut

            }
        },
        created() {
            this.search(null);
        }
    };
</script>
