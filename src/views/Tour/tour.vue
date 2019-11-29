<template>
  <div>
    <Header />
    <div class="content-center" id="content-center">
      <!-- Tour Search Screen -->
      <b-row class="m-0" v-if="selectedContent =='tourHome'">
        <b-col md="4">
          <div class="content-aside-sailing">
            <b-card
              title="Tour"
              img-top
              tag="article"
              style="max-width: 18rem; font-family: Mark-Bold;"
              class="mb-2"
            >
              <b-form class="mt-4">
                <b-form-group id="input-group-1" label="Destination" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="$store.state.tour.form.destination"
                    type="text"
                    required
                    placeholder="Enter Destination"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Month" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="$store.state.tour.form.date"
                    type="date"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Days" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="$store.state.tour.form.day"
                    type="number"
                    required
                    placeholder="Guest total here"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Guest" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="$store.state.tour.form.guest"
                    type="number"
                    required
                    placeholder="Guest total here"
                  ></b-form-input>
                </b-form-group>
              </b-form>

              <b-button
                @click.prevent="search(null)"
                class="mt-3 w-100"
                href="#"
                variant="primary"
              >Search</b-button>
            </b-card>

            <b-card img-top tag="article" style="max-width: 18rem;" class="mt-5 mb-2">
              <div class="d-flex justify-content-between">
                <h4>Filter</h4>
                <a style="color:red;" href>Reset Filter</a>
              </div>
              <b-form class="mt-4">
                <b-form-group label="Destination">
                  <b-form-input id="input-1" type="text" required placeholder="Enter Destination"></b-form-input>
                </b-form-group>
              </b-form>
              <b-form class="mb-4 justify-content-between form-price" inline>
                <b-input
                  id="inline-form-input-name"
                  class="w-35 mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Rp. 500.000"
                ></b-input>

                <b-input-group class="w-35 mb-2 mr-sm-2 mb-sm-0">
                  <b-input id="inline-form-input-username" placeholder="Rp. 800.000"></b-input>
                </b-input-group>
              </b-form>
              <div class="col-sm-12">
                <div id="slider-range"></div>
              </div>

              <b-form-group label="Sort by">
                <b-form-select v-model="selected" :options="options"></b-form-select>
              </b-form-group>
            </b-card>
          </div>
        </b-col>
        <b-col md="8">
          <div class="content-sailing">
            <!-- Empty Search Sailing -->
            <div class="empty-sailing container" v-if="data_tour == null">
              <b-row>
                <b-col md="12">
                  <div style="width: fit-content;" class="empty-content-sailing ml-auto mr-auto">
                    <img src="../../assets/Icon for web app-08 1.png" alt />
                    <h4>No Tour available</h4>
                  </div>
                </b-col>
              </b-row>
            </div>

            <!-- Result sailing Search -->
            <div class="container-fluid"  v-if="data_tour != null">
              <b-row>
                <b-col md="6" class="mt-4 mb-2" v-for="(data,i) in data_tour" :key="i">
                  <b-card no-body>
                    <div>
                      <img
                        @click="goto('tourDetail',data)"
                        :src="data.feature_image || noImage"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover; width:100%;"
                      />
                      <div class="top-left">
                        <p class="m-0">RATE</p>
                        <strong>{{ data.rating }}.0</strong>
                      </div>
                      <div class="top-right">
                        <img src="../../assets/Path 932.png" alt />
                      </div>
                    </div>
                    <template v-slot:footer>
                      <b-row>
                        <b-col sm="7">
                          <h5>{{ data.title }}</h5>
                          <div class="d-flex">
                            <img
                              style="margin-top: 3px; height: 14px; margin-right: 5px;"
                              width="14"
                              src="../../assets/droplet-outline.png"
                              alt
                            />
                            <p>{{ data.origin_city_name }}, {{ data.origin_province_name }}</p>
                          </div>
                        </b-col>
                        <b-col sm="5">
                          <span class="d-flex price">
                            <h5>{{ data.current_currency_code }}</h5>
                            <strong>{{ stringIDR(data.price_exchange) }}</strong>
                            <p>/pax</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin justify-content-around d-flex pt-3">
                        <div>
                          <h5 class="pr-2">Capacity</h5>
                          <p>6-8 guest</p>
                        </div>
                        <div>
                          <h5 class="pr-2">Duration</h5>
                          <p>3 days</p>
                        </div>
                        <div>
                          <h5 class="pr-2">Dates</h5>
                          <p>22 Dec-24 Dec</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
              </b-row>
              <div style="margin-top: 9rem;">
                <h5 class="text-center">Yay, you have seen it all!</h5>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <!-- Tour Detail Screen -->
      <b-row class="m-0" v-if="selectedContent=='tourDetail'">
        <b-col md="9">
          <div class="content-sailing-detail">
            <b-carousel
              id="carousel-1"
              controls
              background="#ababab"
              img-width="1024"
              img-height="580"
              style="text-shadow: 1px 1px 2px #333;"
            >
              <b-carousel-slide
                :v-if="tourDetail.images"
                v-for="(img, i) in tourDetail.images"
                :key="i"
                :img-src="img.endpoint"
                style="max-height:400px;"
              ></b-carousel-slide>
              <b-carousel-slide
                :v-else="tourDetail.images"
                :img-src="noImage"
                style="max-height:400px;"
              ></b-carousel-slide>
            </b-carousel>

            <div
              class="d-flex justify-content-between px-4 pt-4"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <div>
                <h5 style="font-family: Mark-Bold; font-size: 22px;">{{ tourDetail.name }}</h5>
                <div class="d-flex">
                  <img
                    style="margin-top: 3px; height: 14px; margin-right: 5px;"
                    width="14"
                    src="../../assets/droplet-outline.png"
                    alt
                  />
                  <p
                    style="font-family: NunitoSams-Regular;"
                  >{{ tourDetail.origin }} - {{ tourDetail.destination }}</p>
                </div>
              </div>
            </div>
            <div
              class="d-flex align-items-center p-4"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <h5 style="font-family: Mark-Bold; margin-bottom: 0;">Rating</h5>
              <img
                style="width: 31px; height: 31px; margin-left: 25px; margin-right: 15px;"
                src="../../assets/Path 961.png"
                alt
              />
              <strong
                style="font-family: Mark-Bold; font-size: 20px; margin-right: 20px;"
              >{{ tourDetail.rating ? tourDetail.rating : 0 }}.0</strong>
              <p
                class="m-0"
              >Based on {{ tourDetail.reviews ? tourDetail.reviews.length : 0}} reviews</p>
            </div>
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">About</h5>
              <p
                style="font-family: NunitoSans-Regular; line-height: 1.8;"
              >{{ tourDetail.description }}</p>
              <a style="font-family: NunitoSans-Regular;" href>See all</a>
            </div>
            <div
              class="p-4 pickup-return"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <h5 style="font-family: Mark-Bold;">Package Details</h5>
              <div class="mt-4 d-flex flex-wrap justify-content-start">
                <b-card class="mr-4 mb-3">
                  <div>
                    <h5
                      style="font-family: NunitoSans-Regular; color: #808080; font-size: 12px;"
                    >Duration</h5>
                    <p
                      style="font-family: NunitoSans-Regular; font-size: 12px;"
                    >3 Days - 2 Nights | 23 Dec - 25 Dec</p>
                  </div>
                </b-card>
                <b-card class="mr-4 mb-3">
                  <div>
                    <h5
                      style="font-family: NunitoSans-Regular; color: #808080; font-size: 12px;"
                    >Capacity</h5>
                    <p style="font-family: NunitoSans-Regular; font-size: 12px;">6-8 guest</p>
                  </div>
                </b-card>
                <b-card class="mr-4 mb-3">
                  <div>
                    <h5
                      style="font-family: NunitoSans-Regular; color: #808080; font-size: 12px;"
                    >Transportation</h5>
                    <p style="font-family: NunitoSans-Regular; font-size: 12px;">Yacht</p>
                  </div>
                </b-card>
                <b-card class="mr-4 mb-3">
                  <div>
                    <h5
                      style="font-family: NunitoSans-Regular; color: #808080; font-size: 12px;"
                    >Room</h5>
                    <p style="font-family: NunitoSans-Regular; font-size: 12px;">Super King</p>
                  </div>
                </b-card>
              </div>
            </div>
            <div
              class="p-4 pickup-return"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <div class="d-flex justify-content-between">
                <h5 style="font-family: Mark-Bold;">Itenary</h5>
                <span
                  style="background: #A9E8E1;
                            padding: 5px 15px;
                            border-radius: 0.7rem;
                            font-size: 12px;
                            cursor: pointer;
                            font-family: NunitoSans-Regular;"
                >Download Brochure</span>
              </div>
              <div class="mt-4 d-flex flex-wrap justify-content-start">
                <b-card
                  class="mr-4 mb-3"
                  v-for="(itineraries,i) in tourDetail.itineraries"
                  :key="i"
                >
                  <div>
                    <h5
                      style="font-family: NunitoSans-Regular; color: #808080; font-size: 12px;"
                    >Day {{ itineraries.day }}</h5>
                    <p
                      style="font-family: NunitoSans-Regular; font-size: 12px;"
                    >{{ itineraries.description }}</p>
                  </div>
                </b-card>
              </div>
            </div>
            <div
              class="p-4 pickup-return"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <h5 style="font-family: Mark-Bold;">Pickup and Return</h5>
              <div class="mt-4 d-flex flex-wrap justify-content-start">
                <b-card class="mr-4"  @click="goToMaps()" style="cursor: pointer;">
                  <div class="d-flex">
                    <img src="../../assets/Layer 2.png" alt style="height:20px;" />
                    <div class="pl-3">
                      <h5
                        style="font-family: NunitoSans-Regular; color: #808080;font-size: 14px;"
                      >Departure</h5>
                      <p
                        style="font-family: NunitoSans-Regular;font-size: 14px;"
                      >{{ tourDetail.origin }} {{ tourDetail.date }}</p>
                    </div>
                  </div>
                </b-card>
                <b-card  @click="goToMaps()" style="cursor: pointer;">
                  <div class="d-flex">
                    <img src="../../assets/Layer 2.png" alt style="height:20px;" />
                    <div class="pl-3">
                      <h5
                        style="font-family: NunitoSans-Regular; color: #808080;font-size: 14px;"
                      >Arrival</h5>
                      <p
                        style="font-family: NunitoSans-Regular;font-size: 14px;"
                      >{{ tourDetail.destination }} {{ tourDetail.end_date }}</p>
                    </div>
                  </div>
                </b-card>
              </div>
            </div>
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">Facilities</h5>
              <div class="facilities d-flex flex-wrap justify-content-start">
                <span
                  v-for="(facilities,i) in tourDetail.ship.facilities"
                  :key="i"
                >{{ facilities.name }}</span>
              </div>
            </div>
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">Safety Facilities</h5>
              <div class="facilities d-flex flex-wrap justify-content-start">
                <span>Life Jackets</span>
                <span>First Aid Kit</span>
                <span>Sea Safe Tracking</span>
              </div>
            </div>
            <div
              class="mt-4 p-3"
              style="border: 2px solid rgb(232, 230, 230); border-radius: 0.5rem;"
            >
              <h5
                style="font-family: Mark-Medium;
                         font-size: 20px; margon-bottom:15px;"
              >Select Room</h5>
              <b-row
                style="border: 2px solid #d0d0d0;
                          margin: 0;
                          border-radius: 0.5rem;
                          margin-bottom: 25px;"
              >
                <b-col md="2" class="p-0">
                  <img
                    src="@/assets/boat-room-drawing_csp5710024 1.png"
                    @click="openModal();currentSlide(1)"
                    class="hover-shadow cursor"
                  />
                  <!-- <div id="myModal" class="modal">
                                <span class="close cursor" onclick="closeModal()">&times;</span>
                                <div class="modal-content">

                                    <div id="mySlides">
                                    <div class="numbertext">1 / 4</div>
                                    <img src="@/assets/boat-room-drawing_csp5710024 1.png" style="width:100%">
                                    </div>

                                    <div id="mySlides">
                                    <div class="numbertext">2 / 4</div>
                                    <img src="@/assets/boat-direction 1.png" style="width:100%">
                                    </div>
                                    
                                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                                    </div>
                  </div>-->
                </b-col>
                <b-col md="7">
                  <div class="d-flex">
                    <div style="padding-right: 15px;">
                      <h5>Super King</h5>
                      <p>Max 3 guest</p>
                    </div>
                    <div
                      style="margin-left: 25px;
                                padding-left: 15px;
                                border-left: 1px solid grey;"
                    >
                      <h5>Facilities</h5>
                      <ul
                        style="columns: 2;
                                    -webkit-columns: 2;
                                    -moz-columns: 2;
                                    padding-inline-start: 0px;
                                    list-style: none;"
                      >
                        <li>Shower</li>
                        <li>Toilet</li>
                        <li>Wifi</li>
                        <li>AC</li>
                        <li>Food and Drink</li>
                        <li>Kitchen</li>
                      </ul>
                    </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div
                    style="
                                text-align: right;
                                background: #A9E8E1;
                                padding: 8px;
                                border-bottom-left-radius: 0.7rem;
                                position: absolute;
                                top: 0;
                                right: 0;"
                  >
                    <p class="m-0">Included</p>
                  </div>
                  <b-button
                    style="position: absolute;
                                bottom: 11px;
                                width: 85%;"
                    class="disabled"
                    variant="primary"
                  >Select Room</b-button>
                </b-col>
              </b-row>
              <b-row
                style="border: 2px solid #d0d0d0;
                          margin: 0;
                          border-radius: 0.5rem;"
              >
                <b-col md="2" class="p-0">
                  <img
                    src="@/assets/boat-direction 1.png"
                    @click="openModal();currentSlide(1)"
                    class="hover-shadow cursor"
                  />
                  <!-- <div id="myModal" class="modal">
                                <span class="close cursor" onclick="closeModal()">&times;</span>
                                <div class="modal-content">

                                    <div id="mySlides">
                                    <div class="numbertext">1 / 4</div>
                                    <img src="@/assets/boat-room-drawing_csp5710024 1.png" style="width:100%">
                                    </div>

                                    <div id="mySlides">
                                    <div class="numbertext">2 / 4</div>
                                    <img src="@/assets/boat-direction 1.png" style="width:100%">
                                    </div>
                                    
                                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                                    </div>
                  </div>-->
                </b-col>
                <b-col md="7">
                  <div class="d-flex">
                    <div style="padding-right: 15px;">
                      <h5>Super King</h5>
                      <p>Max 3 guest</p>
                    </div>
                    <div
                      style="margin-left: 25px;
                                padding-left: 15px;
                                border-left: 1px solid grey;"
                    >
                      <h5>Facilities</h5>
                      <ul
                        style="columns: 2;
                                    -webkit-columns: 2;
                                    -moz-columns: 2;
                                    padding-inline-start: 0px;
                                    list-style: none;"
                      >
                        <li>Shower</li>
                        <li>Toilet</li>
                        <li>Wifi</li>
                        <li>AC</li>
                        <li>Food and Drink</li>
                        <li>Kitchen</li>
                      </ul>
                    </div>
                  </div>
                </b-col>
                <b-col md="3">
                  <div class="d-flex mt-3">
                    <a href>add</a>
                    <span class="pl-2 d-flex">
                      Rp
                      <h6
                        style="font-family: NunitoSans-Bold; color: #0b0bbb;font-size: 20px;"
                      >1,050.000</h6>
                    </span>
                  </div>
                  <b-button style="width:100%" variant="primary">Select Room</b-button>
                </b-col>
              </b-row>
            </div>
            <div class="mt-5 rating-comment">
              <b-card>
                <div class="title-rating-comment">
                  <h5>Rating and Review {{ tourDetail.reviews ? tourDetail.reviews.length : 0}}</h5>
                </div>
                <b-row>
                  <b-col md="6" v-for="(item,i) in tourDetail.reviews" :key="i">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <img
                          style="width: 23px; height: 23px; margin-right: 8px;"
                          src="../../assets/Path 961.png"
                          alt
                        />
                        <img
                          style="width: 23px; height: 23px; margin-right: 8px;"
                          src="../../assets/Path 961.png"
                          alt
                        />
                        <img
                          style="width: 23px; height: 23px; margin-right: 8px;"
                          src="../../assets/Path 961.png"
                          alt
                        />
                        <img
                          style="width: 23px; height: 23px; margin-right: 8px;"
                          src="../../assets/Path 961.png"
                          alt
                        />
                        <strong>{{ item.rating }}</strong>
                      </div>
                      <span>{{ item.created_at }}</span>
                    </div>
                    <div class="d-flex align-items-center mb-3">
                      <img
                        style="object-fit:cover;"
                        class="rounded-circle"
                        :src="item.user_avatar"
                        width="25px"
                        height="25px"
                        alt
                      />
                      <h4
                        class="pl-3"
                        style="font-family: Mark-Bold; font-size: 18px;"
                      >{{ item.user_full_name }}</h4>
                    </div>
                    <p style="font-family: NunitoSans-Regular; line-height: 1.6;">{{ item.comment }}</p>
                  </b-col>
                </b-row>
                <a href style="margin-left: 30px;">See all review</a>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col md="3">
          <div class="content-aside-sailing-detail">
            <b-card>
              <div class="d-flex align-items-center">
                <img
                  style="object-fit:cover; height:45px; width:45px; margin-top: 4px; margin-right:10px;"
                  class="rounded-circle"
                  :src="tourDetail.merchant_image || noImage"
                  alt
                />
                <span>
                  <h5
                    style="font-family: Mark-Bold; font-size: 15px; margin-bottom: 2px;"
                  >{{ tourDetail.merchant_name }}</h5>
                  <p
                    class="m-0"
                    style="font-family: NunitoSans-Regular; font-size: 12px;"
                  >Member since Jan 2020</p>
                </span>
              </div>
            </b-card>
            <b-card class="mt-5 text-left">
              <h5 style="margin-top: 15px; font-family: Mark-Bold;">Book Now</h5>
              <p style="font-family: NunitoSans-Regular; margin:0px;">Dates</p>
              <strong>{{ dateFormat($store.state.tour.form.date) }} - {{dateFormat($store.getters.pax)}}</strong>
              <p
                style="margin-top: 15px; font-family: NunitoSans-Regular; margin:0px; margin-top:15px;"
              >Guest</p>
              <strong>{{$store.state.tour.form.guest }} guests/pax</strong>
              <template v-slot:footer>
                <span class="d-flex price">
                  <h5>{{ tourDetail.ship.current_currency_code }}</h5>
                  <strong
                    style="font-family:NunitoSans-Bold; font-size: 22px;"
                  >{{ stringIDR(tourDetail.price_exchange) }}</strong>
                  <p>/pax</p>
                </span>
                <b-button
                  class="w-100"
                  variant="primary"
                  @click="selectedContent='tourBook'; toBook();"
                >Book</b-button>
              </template>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <!-- Tour Booking Screen -->
      <div v-if="selectedContent=='tourBook'">
        <b-row class="m-0">
          <b-col md="9">
            <div class="sailing-book-content">
              <h1 style="font-family: Mark-Bold; font-size: 28px;">Tour Booking</h1>
              <b-form class="mt-4">
                <b-form-group label="Your Name">
                  <b-form-input
                    type="text"
                    v-model="$store.state.tour.sailing_book.first_name"
                    required
                    placeholder="Enter Name"
                  ></b-form-input>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Email">
                      <b-form-input
                        type="email"
                        v-model="$store.state.tour.sailing_book.email"
                        required
                        placeholder="ex : emmawatson@gmail.com"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Phone Number">
                      <b-form-input
                        type="text"
                        v-model="$store.state.tour.sailing_book.phone_number"
                        required
                        placeholder="Enter Phone Number"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="6">
                    <b-form-group label="ID Type">
                      <b-form-select class="mb-3">
                        <template v-slot:first>
                          <option :value="'ID Card'">ID Card</option>
                          <option :value="'ID Card'">Passport</option>
                        </template>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="ID Number">
                      <b-form-input
                        type="text"
                        v-model="$store.state.tour.sailing_book.id_card_number"
                        required
                        placeholder="Enter Phone Number"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-form-checkbox id="checkbox-1" name="checkbox-1">Save my identity</b-form-checkbox>
              </b-form>
              <!-- <b-form class="mt-4">
                <h1 style="font-family: NunitoSans-Bold; font-size: 20px;">Special Notes</h1>
                <b-form-textarea
                  id="textarea-rows"
                  placeholder="Your notes here"
                  rows="8"
                  class="mt-4"
                ></b-form-textarea>
              </b-form> -->
              <b-form
                style="padding: 30px; background: #E2FDFB;"
                class="mt-4 justify-content-around ref-code"
                inline
              >
                <label
                  for="inline-form-input-name"
                  style="font-family: NunitoSans-Bold;  font-size: 18px;"
                >Referal Code</label>
                <b-input
                  id="inline-form-input-name"
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Your promo code here"
                ></b-input>

                <b-button style="width: 250px;" variant="danger">Apply</b-button>
              </b-form>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <h6
                    class="mb-0"
                    style="font-size: 15px;
                                font-family: NunitoSans-Bold;"
                  >Price Details</h6>
                </template>
                <b-card-text>
                  <div class="d-flex justify-content-between">
                    <h6
                      style="font-size: 15px;
                                    font-family: NunitoSans-Bold;"
                    >{{ tourDetail.destination }} {{ searchDetail.origin_city_name }}, {{ searchDetail.origin_province_name }}</h6>
                    <span
                      style="font-size: 15px;
                                    font-family: NunitoSans-Regular;"
                    >Rp {{ tourDetail.price_exchange }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em
                      style="font-size: 15px;
                                    font-family: NunitoSans-Regular;"
                    >Pax (x{{$store.state.tour.form.guest}})</em>
                    <strong>Rp {{$store.state.tour.form.total}}</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em
                      style="font-size: 15px;
                                    font-family: NunitoSans-Regular;"
                    >Taxes and other fees</em>
                    <strong
                      style="font-size: 15px;
                                    font-family: NunitoSans-Bold;"
                    >Included</strong>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div class="d-flex justify-content-between">
                    <em
                      style="font-size: 15px;
                                    font-family: NunitoSans-Bold;"
                    >TOTAL</em>
                    <strong
                      style="font-size: 15px;
                                    font-family: NunitoSans-Bold;
                                    color: blue;"
                    >Rp {{$store.state.tour.form.total}}</strong>
                  </div>
                </template>
              </b-card>
              <b-row class="mt-4">
                <b-col md="7">
                  <p>
                    By clicking this button, you have agreed with
                    <a href>Privacy Policy</a>and
                    <a href>Terms & Condition</a> of cGO
                  </p>
                </b-col>
                <b-col md="5">
                  <b-button
                    class="w-100"
                    variant="primary"
                    @click="selectedContent='reviewBooking'"
                  >Continue</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="3">
            <div class="content-aside-saiing-booking">
              <h6
                style="margin-bottom: 30px; font-family: Mark-Bold; font-size: 20px; color: #292727;"
              >Booking Details</h6>
              <strong>{{ tourDetail.name }}</strong>
              <p
                class="m-0 mt-1"
              >{{ searchDetail.origin_city_name }}, {{ searchDetail.origin_province_name }}</p>
              <p class="m-0 mt-3 mb-2">Dates</p>
              <strong>{{ dateFormat($store.state.tour.form.date) }} - {{dateFormat($store.getters.pax)}}</strong>
              <p class="m-0 mt-3 mb-2">Guest</p>
              <strong>{{$store.state.tour.form.guest }} guests</strong>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- Review Booking Screen -->
      <div v-if="selectedContent=='reviewBooking'">
        <b-row class="m-0">
          <b-col md="9">
            <div class="sailing-book-content">
              <h1
                style="font-family: Mark-Bold; font-size: 22px; text-align: left;"
              >Before Continue to payment please review your booking</h1>
              <b-card class="mt-4">
                <b-row>
                  <b-col md="6">
                    <img
                      style="width: inherit; object-fit:cover;"
                      class="rounded"
                      :src="searchDetail.feature_image|| noImage"
                      alt
                    />
                  </b-col>
                  <b-col md="6">
                    <div>
                      <h6
                        style="font-family: NunitoSans-Bold; font-size: 18px;"
                      >{{ tourDetail.name }}</h6>
                      <span class="d-flex align-items-center">
                        <img style="height: 14px;" src="../../assets/droplet-outline.png" alt />
                        <p class="m-0 ml-3">{{ tourDetail.origin }} - {{ tourDetail.destination }}</p>
                      </span>
                    </div>
                    <div style="position: absolute; bottom: 0;" class="d-flex align-items-center">
                      <img
                        style="height:29px;"
                        class="rounded-circle"
                        :src="tourDetail.merchant_image ||noImage"
                        alt
                      />
                      <h6 class="m-0 ml-3">{{tourDetail.merchant_name}}</h6>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0" style="font-family: NunitoSans-Bold;">Dates</h6>
                    <span>{{ dateFormat($store.state.tour.form.date) }} - {{dateFormat($store.getters.pax)}}</span>
                  </div>
                </template>
                <b-card-text>
                  <strong style="font-family: NunitoSans-Bold;">Pickup and Return</strong>
                  <div class="mt-2 d-flex justify-content-between">
                    <h6>Departure</h6>
                    <strong>{{ tourDetail.origin }} {{ dateFormat($store.state.tour.form.date) }} at 20:30 WITA</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Arrival</em>
                    <strong>{{ tourDetail.destination }} {{dateFormat($store.getters.pax)}} at 20:30 WITA</strong>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div
                    style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;"
                    class="d-flex justify-content-between"
                  >
                    <em style="font-family: NunitoSans-Bold;">Guest</em>
                    <strong>{{$store.state.tour.form.guest }} guests</strong>
                  </div>
                  <div
                    style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;"
                    class="pt-2 d-flex justify-content-between"
                  >
                    <em style="font-family: NunitoSans-Bold;">Room</em>
                    <strong>Super King</strong>
                  </div>
                  <div class="pt-2 d-flex justify-content-between">
                    <em style="font-family: NunitoSans-Bold;">Order’s Name</em>
                    <strong>{{ $store.state.tour.sailing_book.first_name }}</strong>
                  </div>
                </template>
              </b-card>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <h6 class="mb-0" style="font-family: NunitoSans-Bold;">Price Details</h6>
                </template>
                <b-card-text>
                  <div class="d-flex justify-content-between">
                    <h6
                      style="font-family: NunitoSans-Bold;"
                    >{{ tourDetail.origin }} - {{ tourDetail.destination }}</h6>
                    <strong>Rp {{tourDetail.price_exchange}}</strong>
                  </div>
                  <div class="pb-2 d-flex justify-content-between">
                    <em>Pax (x{{$store.state.tour.form.guest}})</em>
                    <strong
                      style="font-family: NunitoSans-Bold;"
                    >Rp {{$store.state.tour.form.total}}</strong>
                  </div>
                  <div class="pb-2 d-flex justify-content-between">
                    <em>Promo Code</em>
                    <strong style="font-family: NunitoSans-Bold; color:red;">- Rp0</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Taxes and other fees</em>
                    <strong style="font-family: NunitoSans-Bold;">Included</strong>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div class="d-flex justify-content-between">
                    <em style="font-family: NunitoSans-Bold;">TOTAL</em>
                    <strong
                      style="font-family: NunitoSans-Bold; color:blue;"
                    >Rp {{$store.state.tour.form.total}}</strong>
                  </div>
                </template>
              </b-card>
              <b-row class="mt-4">
                <b-col md="7">
                  <p>
                    By clicking this button, you have agreed with
                    <a href>Privacy Policy</a> and
                    <a href>Terms & Condition</a> of cGO
                  </p>
                </b-col>
                <b-col md="5">
                  <b-button
                    class="w-100"
                    variant="primary"
                    @click="selectedContent='payment'; setLastPayment();"
                  >Continue to Payment</b-button>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="3">
            <div class="content-aside-saiing-booking">
              <p>
                By clicking this button, you have agreed with
                <a href>Privacy Policy</a> and
                <a href>Terms & Condition</a> of cGO
              </p>
              <b-button
                class="mt-4 w-100"
                variant="primary"
                @click="selectedContent='payment'; setLastPayment();"
              >Continue to Payment</b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- payment screen -->
      <div v-if="selectedContent=='payment'">
        <div class="row m-0">
          <div class="col-6 sailing-payment-content">
            <h1 style="font-family: Mark-Bold; font-size: 26px;">Please pay your booking</h1>
            <div class="mt-4 notice" style="    padding: 15px;">
              <span>A payment instruction has been sent to your email</span>
            </div>
            <div style="padding: 0px;" class="mt-4 notice row">
              <b-col md="3">
                <img src="../../assets/Icon for web app-10 1.png" alt />
              </b-col>
              <b-col md="9" class="align-self-center">
                <h5 style="font-family: NunitoSans-Regular;">Make a payment before</h5>
                <strong
                  style="font-family: NunitoSans-Bold;  color: black; font-size: 20px;"
                >{{ lastPayment }}</strong>
                <p
                  style="font-family: NunitoSans-Regular; margin-top: 10px; margin-bottom: 0;"
                >Complete your payment within the time above</p>
              </b-col>
            </div>
            <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <h6 class="mb-0" style="font-family: Mark-Bold;">Payment Method</h6>
                  <div class="d-flex align-items-center">
                    <span>Bank Central Asia (BCA)</span>
                    <img style="height: 15px; margin-left: 10px;" src="../../assets/Bitmap.png" alt />
                  </div>
                </div>
              </template>
              <b-card-text>
                <div class="d-flex justify-content-between">
                  <h6>Account Number</h6>
                  <strong>2821479307</strong>
                </div>
                <div class="pb-2 d-flex justify-content-between">
                  <em>Account Holder Name</em>
                  <strong>PT DTech Solusi Bisnis</strong>
                </div>
                <div class="d-flex justify-content-between">
                  <em>Transfer Amount</em>
                  <strong>Rp {{$store.state.tour.form.total}}</strong>
                </div>
              </b-card-text>
            </b-card>
            <b-button
              variant="primary"
              class="float-right mt-4"
              @click="selectedContent='confirmation'"
            >I Have Completed Payment</b-button>
          </div>
        </div>
      </div>
      <!-- last step Confirmation screen -->
      <div v-if="selectedContent=='confirmation'">
        <b-row class="m-0">
          <b-col md="8">
            <div class="sailing-payment-content">
              <h1
                style="font-family: Mark-Bold; font-size: 26px;"
              >Yay! Now you are ready for your trip</h1>
              <div style="padding: 0px; height: 1000px;" class="bg-white mt-4 ticket row">
                <b-col md="12" class="p-0">
                  <div style="background: rgb(35, 62, 152); padding: 5px 25px;">
                    <img src="@/assets/img/cgo-logo.png" alt />
                  </div>
                  <div class="p-5 d-flex justify-content-between">
                    <div>
                      <p>Package</p>
                      <h6>{{ tourDetail.origin }} - {{ tourDetail.destination }}</h6>
                    </div>
                    <div class="d-flex">
                      <div>
                        <p>Order ID</p>
                        <h6>12345678</h6>
                      </div>
                      <img
                        style="height:105px; width:105px;"
                        src="@/assets/websiteQRCode_noFrame 1.png"
                        alt
                      />
                    </div>
                  </div>
                  <b-card class="m-4 price-details mt-4" header-tag="header" footer-tag="footer">
                    <template v-slot:header>
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-0" style="font-family: NunitoSans-Bold;">Dates</h6>
                        <span>{{ dateFormat($store.state.tour.form.date) }} - {{dateFormat($store.getters.pax)}}</span>
                      </div>
                    </template>
                    <b-card-text>
                      <strong style="font-family: NunitoSans-Bold;">Pickup and Return</strong>
                      <div class="mt-2 d-flex justify-content-between">
                        <h6>Departure</h6>
                        <strong>{{ tourDetail.origin }} {{ dateFormat($store.state.tour.form.date) }} at 20:30 WITA</strong>
                      </div>
                      <div class="d-flex justify-content-between">
                        <em>Arrival</em>
                        <strong>{{ tourDetail.destination }} {{dateFormat($store.getters.pax)}} Gili Trawangan at 20:30 WITA</strong>
                      </div>
                    </b-card-text>
                    <template v-slot:footer>
                      <div
                        style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;"
                        class="d-flex justify-content-between"
                      >
                        <em style="font-family: NunitoSans-Bold;">Guest</em>
                        <strong>{{$store.state.tour.form.guest }} guests</strong>
                      </div>
                      <div
                        style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;"
                        class="pt-2 d-flex justify-content-between"
                      >
                        <em style="font-family: NunitoSans-Bold;">Room</em>
                        <strong>Super King</strong>
                      </div>
                      <div class="pt-2 d-flex justify-content-between">
                        <em style="font-family: NunitoSans-Bold;">Order’s Name</em>
                        <strong>{{ $store.state.tour.sailing_book.first_name }}</strong>
                      </div>
                      <div class="pt-2 d-flex justify-content-between">
                        <em style="font-family: NunitoSans-Bold;">ID Number</em>
                        <strong>ID Card: {{ $store.state.tour.sailing_book.id_card_number }}</strong>
                      </div>
                    </template>
                  </b-card>
                  <div style="position: absolute; bottom: 0; padding: 40px;">
                    <h6 style="font-family: NunitoSans-Bold; font-size:12px;">How to use:</h6>
                    <ol style="padding-inline-start: 16px;">
                      <li>Tunjukan tiket kepada checker setelah Anda sampai di lokasi merchant cGO</li>
                      <li>Merchant akan melakukan scan QR pada tiket Anda</li>
                      <li>Bawalah kartu identitas yang Anda daftarkan agar merchant dapat memverifikasi pesanan Anda</li>
                      <li>Datanglah ke lokasi merchant selambat-lambatnya 60 menit sebelum jadwal keberangkatan</li>
                    </ol>
                  </div>
                </b-col>
              </div>
            </div>
          </b-col>
          <b-col md="4">
            <div class="aside-payment-content">
              <b-button
                @click.prevent="booking_ship"
                class="w-100"
                variant="primary"
              >Download Ticket</b-button>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Moment from "moment";

export default {
  name: "Tour",
  components: { Footer, Header },
  data() {
    return {
      noImage:
        "https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg",
      selectedContent: "tourHome",
      selected: null,
      lastPayment: null,
      dataSearch: {
        type: "tour"
      },
      data_tour: null,
      detailBody: null,
      options: [
        { value: null, text: "Recommended by cGO" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" }
      ],
      type: [
        { value: null, text: "Catamaran" },
        { value: "a", text: "Yacht" },
        { value: "b", text: "Speedboat" },
        { value: "c", text: "Phinisi" },
        { value: "d", text: "Wooden boat" }
      ]
    };
  },
  methods: {
    toBook: function() {
      document.getElementById("content-center").style.backgroundColor =
        "#F7F7F7";
    },
    dateFormat(data) {
      var dt = Moment(data).format("DD MMM");
      return dt;
    },
    openModal: function() {
      document.getElementById("myModal").style.display = "block";
    },

    closeModal: function() {
      document.getElementById("myModal").style.display = "none";
    },
    search(data) {
      var guest = parseInt(this.$store.state.tour.form.guest) || 1;
      var date_from = Moment.parseZone(this.$store.state.tour.form.date)
        .utc()
        .format();
      var date_to = Moment.parseZone(this.$store.getters.pax)
        .utc()
        .format();
      var days = parseInt(this.$store.state.tour.form.day) || 1;

      var body = {};
      console.log(body);
      this.$store
        .dispatch("search", { type: "tour", data: body })
        .then(res => {
          this.data_tour = this.$store.state.tour.search_tour;
          console.log("resss", JSON.stringify(this.data_tour));
        })
        .catch(error => {
          console.log(error);
        });
    },
    goto(to, data) {
      //$this.state.tour.detail_search;
      this.$store.state.tour.detail_search = data;
      if (to == "tourDetail") this.getDetail(to, data);
    },
    booking_ship() {
      var date_from = Moment(this.$store.state.tour.form.date).format();
      var date_to = Moment(this.$store.getters.pax).format();
      var guest = parseInt(this.$store.state.tour.form.guest) || 1;
      var price = this.$store.state.tour.form.total;
      var usd = price / 15000;
      var currency_code = this.searchDetail.current_currency_code;
      var date_now = Moment.utc().format();
      var body = {
        daterange: [date_from, date_to],
        round_trip: true,
        multi_trip: false,
        adult: guest,
        child: 0,
        merchant_id: this.searchDetail.id,
        ship_availability: [
          {
            price: usd,
            price_exchange: price,
            price_before_discount: price,
            price_before_discount_exchange: price,
            currency_code: "IDR",
            current_currency_code: "IDR",
            discount_rate: 0,
            discount_percent: 0,
            promotion_name: "",
            date: date_now,
            schedule_id: 3199,
            promotion_id: 0
          }
        ]
      };
      this.$store
        .dispatch("bookingShip", {
          type: "tour",
          data: body
        })
        .then(res => {
          var bookingCode = res.data.data.code || "0";
          console.log(res.data.data);
          this.$store
            .dispatch("charge", {
              id: bookingCode,
              data: {
                payment_type: "bca_va"
              }
            })
            .then(res => {
              alert(
                "kllik link untuk permbayaran " + res.data.data.redirect_url
              );
            })
            .catch(error => {
              alert(error.data.message);
            });
        })
        .catch(error => {
          alert(error.data.message);
        });

      //this.selectedContent = "confirmation";
    },
    getDetail(to, data) {
      var body = this.selectedContent;
      this.$store
        .dispatch("detailShip", {
          id: data.ref_id,
          data: this.detailBody,
          type: "tour"
        })
        .then(res => {
          var harga = this.$store.state.tour.detail.price_exchange || 0;
          this.$store.state.tour.form.total =
            harga * this.$store.state.tour.form.day;
          console.log("dataaa", res.data.data);
          this.selectedContent = to;
        })
        .catch(error => {
          console.log(error);
        });
    },
    stringIDR(data) {
      const x = Math.round(data);
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    goToMaps() {
      var url = "https://www.google.com/maps/preview";
      this.$router.push({ path: "/sailing/index" });
      window.open(url, "_target");
    },
    setLastPayment() {
      this.lastPayment = new Moment().add(2, 'hours').calendar();
    }
  },
  computed: {
    tourDetail() {
      return this.$store.state.tour.detail;
    },
    searchDetail() {
      return this.$store.state.tour.detail_search;
    },
    profile() {
      return JSON.parse(this.$store.state.profile);
    }
  },
  created() {
    this.search(this.dataSearch);
  }
  //   mounted() {
  //       var slideIndex = 1;
  // showSlides(slideIndex);

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }

  // function showSlides(n) {
  //   var i;
  //   var slides = document.getElementById("mySlides");
  //   var dots = document.getElementsByClassName("demo");
  //   var captionText = document.getElementById("caption");
  //   if (n > slides.length) {slideIndex = 1}
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //       dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";
  //   dots[slideIndex-1].className += " active";
  //   captionText.innerHTML = dots[slideIndex-1].alt;
  // }
  //   }
};
</script>

<style scoped>
ol li {
  font-size: 12px;
  font-family: NunitoSans-Regular;
}
.content-center {
  width: 100%;
  color: #ffffff;
  padding-bottom: 110px;
}
.sailing-payment-content {
  float: left;
  padding: 10px;
  height: 85%;
  width: -webkit-fill-available;
  margin: 100px 50px 100px 150px;
  color: black;
  text-align: justify;
}
.aside-payment-content {
  margin: 185px 103px 185px 0;
  background: white;
  padding: 20px;
  border-radius: 0.5rem;
  border: 2px solid #e2e2e2;
}
.sailing-book-content form {
  background: white;
  border-radius: 0.6rem;
  padding: 3rem;
  border: 1.7px solid #efe8e8;
}
.sailing-book-content {
  float: left;
  padding: 10px;
  height: 85%;
  width: -webkit-fill-available;
  margin: 100px;
  color: black;
  text-align: justify;
}
.content-aside-saiing-booking {
  margin: 170px 50px 0 0px;
  color: black;
  float: left;
  width: 270px;
  background: white;
  border-radius: 0.6rem;
  padding: 1.5rem;
  text-align: left;
  border: 1.7px solid #efe8e8;
}
.content-sailing-detail {
  float: left;
  padding: 10px;
  height: 85%;
  width: -webkit-fill-available;
  margin: 100px;
  color: black;
  text-align: justify;
}
.content-aside-sailing-detail {
  margin: 100px 50px 0 0px;
  color: black;
  float: left;
}
.content-aside-sailing {
  float: left;
  padding: 10px;
  margin: 100px 0 0 50px;
  color: black;
  text-align: justify;
}
.content-sailing {
  float: left;
  padding: 10px;
  height: 85%;
  width: -webkit-fill-available;
  margin: 75px 50px 100px 0px;
  color: black;
  text-align: justify;
}
.content-sailing .menu-type p {
  padding: 16px;
  border: 1px solid #d8d5d5;
  border-radius: 0.4rem;
  margin-bottom: 0px;
  font-family: NunitoSans-Bold;
  border-right: transparent;
  border-bottom-right-radius: 0px 0px;
  border-top-right-radius: 0px 0px;
}
.form-price .w-35 {
  width: 45%;
}
.content-sailing .menu-type #checkbox-group-1 {
  align-self: center;
  padding: 15px;
  border-radius: 0.4rem;
  border: 1px solid #d8d5d5;
  border-bottom-left-radius: 0px 0px;
  border-top-left-radius: 0px 0px;
  width: -webkit-fill-available;
}
.content-sailing .menu-type #checkbox-group-1 .custom-control-inline {
  margin-right: 3rem;
}
.empty-sailing {
  margin-top: 200px;
}
.content-sailing label span {
  font-family: NunitoSans-Regular;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
  padding: 10px;
  border-radius: 0.5rem;
  background-color: #f6f6f6;
  text-align: center;
}
.top-left p {
  color: blue;
}
.top-left strong {
  margin-top: 4px;
  font-family: Mark-Bold;
  font-size: 18px;
}
.notice {
  background: rgb(226, 253, 251);
  padding: 30px 30px 0;
  margin: 0;
  border: 1.7px solid #efe8e8;
  border-radius: 0.6rem;
}
.top-right {
  position: absolute;
  top: 8px;
  padding: 7px;
  right: 16px;
  border-radius: 0.5rem;
  background-color: #f6f6f6;
}
.content-sailing .card-footer {
  padding: 0px;
}
.content-sailing .card-footer .row {
  padding: 10px 15px 0;
}
.card-footer h5 {
  font-size: 15px;
  font-family: NunitoSans-Bold;
}
.card-footer .price h5 {
  font-size: 12px;
  color: #8e8e8e;
}
.capacity-cabin {
  border-top: 1px solid #b5b3b3;
  padding: 0 15px;
}
.price strong {
  color: #143abe;
  padding-right: 3px;
  padding-left: 3px;
}
.sailing-book-content .price-details .card-body {
  padding: 8px 1.25rem;
}
.facilities span {
  padding: 10px 15px;
  background: #e6ecff;
  border-radius: 30px;
  margin: 20px 15px 0 0;
  font-family: NunitoSans-Regular;
}
.spesification p {
  font-family: NunitoSans-Regular;
  color: #656060;
}
.spesification strong {
  font-family: NunitoSans-Regular;
}
.spesification .card,
.pickup-return .card {
  border-radius: 0.7rem;
  border: 1px solid #e4eaff;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.125) !important;
}
.pickup-return .card-body {
  padding: 0.55rem 1.2rem;
}
.rating-comment .card {
  border-radius: 0.7rem;
  border: 1px solid #e4eaff;
}
.rating-comment .card-body {
  padding: 0;
  padding-bottom: 20px;
}
.rating-comment .row {
  padding: 15px 30px;
}
.title-rating-comment {
  padding: 15px 30px;
  background: linear-gradient(
    225deg,
    rgba(214, 250, 246, 1) 0%,
    rgba(214, 250, 246, 1) 26%,
    rgba(151, 225, 217, 1) 100%
  );
}
.title-rating-comment h5 {
  font-family: Mark-Bold;
}
.rating-comment strong {
  font-family: Mark-Bold;
  font-size: 18px;
}
.content-aside-sailing-detail .card-footer {
  margin-top: 25px;
}
.price-details .card-footer,
.card-header {
  background: white;
}
.content-aside-sailing h4 {
  font-family: Mark-Bold;
}
.sailing-book-content input,
.sailing-book-content select,
.sailing-book-content textarea {
  background: #f7f7f7;
}
</style>