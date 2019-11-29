<template>
  <div>
    <Header />
    <div class="content-center" id="content-center">
      <!-- Sailing Search Screen -->
      <b-row class="m-0" v-if="selectedContent =='sailingHome'">
        <b-col md="4">
          <div class="content-aside-sailing">
            <b-card
              title="Sailing"
              img-top
              tag="article"
              style="max-width: 18rem; font-family: Mark-Bold;"
              class="mb-2"
            >
              <b-form class="mt-4">
                <b-form-group id="input-group-1" label="Destination" label-for="input-1">
                  <b-form-input
                    v-model="$store.state.sailing.form.destination"
                    id="input-2"
                    placeholder="destination"
                    style="background-color:#DFDFDF"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Dates" label-for="input-1">
                  <b-form-input
                    v-model="$store.state.sailing.form.date"
                    id="input-2"
                    placeholder="Dates"
                    type="date"
                    style="background-color:#DFDFDF"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Duration" label-for="input-1">
                  <b-form-input
                    v-model="$store.state.sailing.form.day"
                    id="input-2"
                    placeholder="2 day"
                    type="number"
                    style="background-color:#DFDFDF"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Guest" label-for="input-1">
                  <b-form-input
                    v-model="$store.state.sailing.form.guest"
                    id="input-2"
                    placeholder="Guest"
                    type="number"
                    style="background-color:#DFDFDF"
                  ></b-form-input>
                </b-form-group>
              </b-form>

              <b-button
                @click.prevent="search(dataSearch)"
                class="mt-3 w-100"
                href="#"
                variant="primary"
              >Search</b-button>
            </b-card>

            <b-card img-top tag="article" style="max-width: 18rem;" class="mt-5 mb-2">
              <div class="d-flex justify-content-between">
                <h4>Filter</h4>
                <a class="text-red" href>Reset Filter</a>
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
            <b-form-group>
              <div class="menu-type d-flex">
                <p>Type</p>
                <b-form-checkbox-group
                  id="checkbox-group-1"
                  v-model="selected"
                  :options="type"
                  name="flavour-1"
                ></b-form-checkbox-group>
              </div>
            </b-form-group>

            <!-- Empty Search Sailing -->
            <div class="d-none empty-sailing container">
              <b-row>
                <b-col md="12">
                  <div style="width: fit-content;" class="empty-content-sailing ml-auto mr-auto">
                    <img src="../../assets/Empty state sailing-06 1.png" alt />
                    <h4>No sailing available</h4>
                  </div>
                </b-col>
              </b-row>
            </div>
            <!-- Result sailing Search -->
            <div class="container-fluid">
              <b-row>
                <b-col md="6" class="mt-4 mb-2" v-for="(data,i) in data_sailing" :key="i">
                  <b-card no-body>
                    <div>
                      <img
                        width="100%"
                        height="200px"
                        @click="goto('sailingDetail',data)"
                        :src="data.feature_image|| noImage"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover;max-height:200px"
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
                            <p>/days</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin d-flex pt-3">
                        <div class="d-flex">
                          <h5 class="pr-2">Capacity</h5>
                          <p>{{ data.max_guest }} guest</p>
                        </div>
                        <div class="ml-3 d-flex">
                          <h5 class="pr-2">Cabin</h5>
                          <p>2 cabins</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
              </b-row>
              <div style="margin-top: 9rem;">
                <h5 class="text-center">Yay, you have seen it all</h5>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <!-- Sailing Detail Screen -->
      <b-row class="m-0" v-if="selectedContent=='sailingDetail'">
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
              <!-- Text slides with image -->
              <b-carousel-slide
                :v-if="sailingDetail.images"
                v-for="(img, i) in sailingDetail.images"
                :key="i"
                :img-src="img.endpoint || noImage"
                style="max-height:400px;"
              ></b-carousel-slide>
              <b-carousel-slide
                :v-else="sailingDetail.images"
                :img-src="noImage"
                style="max-height:400px;"
              ></b-carousel-slide>

              <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            </b-carousel>

            <div
              class="d-flex justify-content-between px-4 pt-4"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <div>
                <h5 style="font-family: Mark-Bold; font-size: 22px;">{{ sailingDetail.name }}</h5>
                <div class="d-flex">
                  <img
                    style="margin-top: 3px; height: 14px; margin-right: 5px;"
                    width="14"
                    src="../../assets/droplet-outline.png"
                    alt
                  />
                  <p
                    style="font-family: NunitoSams-Regular;"
                  >{{ sailingDetail.origin }} - {{ sailingDetail.destination }}</p>
                </div>
              </div>
              <span class="d-flex price">
                <h5
                  style="font-family:NunitoSans-Regular; font-size: 14px;"
                >{{ searchDetail.current_currency_code }}</h5>
                <strong
                  style="font-family:NunitoSans-Bold; font-size: 22px;"
                >{{ stringIDR(searchDetail.price_exchange) }}</strong>
                <p style="font-family:NunitoSans-Regular; font-size: 16px;">/days</p>
              </span>
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
              >{{ sailingDetail.rating ? sailingDetail.rating : 0 }}.0</strong>
              <p
                class="m-0"
              >Based on {{ sailingDetail.reviews ? sailingDetail.reviews.length : 0}} reviews</p>
            </div>
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">About</h5>
              <p
                style="font-family: NunitoSans-Regular; line-height: 1.8;"
              >{{ sailingDetail.about }}</p>
              <a style="font-family: NunitoSans-Regular;" href>See all</a>
            </div>
            <div
              class="p-4 pickup-return"
              style="border: 2px solid #efefef; border-top:transparent;"
            >
              <h5 style="font-family: Mark-Bold;">Pickup and Return</h5>
              <div class="mt-4 d-flex flex-wrap justify-content-start">
                <b-card class="mr-4" @click="goToMaps()" style="cursor: pointer;">
                  <div class="d-flex">
                    <img src="../../assets/Layer 2.png" alt style="height:20px;" />
                    <div class="pl-3">
                      <h5 style="font-family: NunitoSans-Regular; color: #808080;">Departure</h5>
                      <p
                        style="font-family: NunitoSans-Regular;"
                      >{{ sailingDetail.origin }} {{ sailingDetail.date }}</p>
                    </div>
                  </div>
                </b-card>
                <b-card @click="goToMaps()" style="cursor: pointer;">
                  <div class="d-flex">
                    <img src="../../assets/Layer 2.png" alt style="height:20px;" />
                    <div class="pl-3">
                      <h5 style="font-family: NunitoSans-Regular; color: #808080;">Arrival</h5>
                      <p
                        style="font-family: NunitoSans-Regular;"
                      >{{ sailingDetail.destination }} {{ sailingDetail.end_date }}</p>
                    </div>
                  </div>
                </b-card>
              </div>
            </div>
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">Facilities</h5>
              <div class="facilities d-flex flex-wrap justify-content-start">
                <span
                  v-for="(facilities,i) in sailingDetail.facilities"
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
            <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
              <h5 style="font-family: Mark-Bold;">Spesification</h5>
              <div
                class="mt-4 spesification col-6 p-0"
                v-if="typeof sailingDetail.specification == 'Object'"
              >
                <b-card>
                  <div
                    class="d-flex justify-content-between"
                    v-for="(item,i) in JSON.parse(sailingDetail.specification)"
                    :key="i"
                  >
                    <p>{{item.title}}</p>
                    <strong>{{item.description}}</strong>
                  </div>
                </b-card>
              </div>
            </div>
            <div class="mt-5 rating-comment">
              <b-card>
                <div class="title-rating-comment">
                  <h5>Rating and Review {{ sailingDetail.reviews ? sailingDetail.reviews.length : 0}}</h5>
                </div>
                <b-row>
                  <b-col md="6" v-for="(item,i) in sailingDetail.reviews" :key="i">
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
                  :src="sailingDetail.merchant_image"
                  alt
                />
                <span>
                  <h5
                    style="font-family: Mark-Bold; font-size: 15px; margin-bottom: 2px;"
                  >{{ sailingDetail.merchant_name }}</h5>
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
              <strong>{{ dateFormat($store.state.sailing.form.date) }} - {{dateFormat($store.getters.day)}}</strong>
              <p style="margin-top: 15px; font-family: NunitoSans-Regular; margin:0px;">Guest</p>
              <strong>{{$store.state.sailing.form.guest }} guests</strong>
              <template v-slot:footer>
                <span class="d-flex price">
                  <h5>{{ searchDetail.current_currency_code }}</h5>
                  <strong
                    style="font-family:NunitoSans-Bold; font-size: 22px;"
                  >{{ stringIDR(searchDetail.price_exchange) }}</strong>
                  <p>/days</p>
                </span>
                <b-button
                  class="w-100"
                  variant="primary"
                  @click="selectedContent='sailingBook'; toBook();"
                >Book</b-button>
              </template>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <!-- Sailing Book Screen -->
      <div v-if="selectedContent=='sailingBook'">
        <b-row class="m-0">
          <b-col md="9">
            <div class="sailing-book-content">
              <h1 style="font-family: Mark-Bold; font-size: 28px;">Sailing Book</h1>
              <b-form class="mt-4">
                <b-form-group label="Your Name">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Enter Name"
                    v-model="$store.state.sailing.sailing_book.first_name"
                  ></b-form-input>
                </b-form-group>
                <b-row>
                  <b-col md="6">
                    <b-form-group label="Email">
                      <b-form-input
                        v-model="$store.state.sailing.sailing_book.email"
                        type="email"
                        required
                        placeholder="ex : emmawatson@gmail.com"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="Phone Number">
                      <b-form-input
                        v-model="$store.state.sailing.sailing_book.phone_number"
                        type="text"
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
                          <option :value="null">ID Card</option>
                          <option :value="'ID Card'">Passport</option>
                        </template>
                      </b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group label="ID Number">
                      <b-form-input
                        v-model="$store.state.sailing.sailing_book.id_card_number"
                        type="text"
                        required
                        placeholder="Enter ID Number"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-form-checkbox
                  v-model="$store.state.sailing.sailing_book.id_card_number"
                  id="checkbox-1"
                  name="checkbox-1"
                >Save my identity</b-form-checkbox>
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
              <div class="mt-4 notice row">
                <b-col md="3">
                  <img src="../../assets/Group 566.png" alt />
                </b-col>
                <b-col md="9">
                  <h5>Important Notice</h5>
                  <p>
                    After payment, you have to wait for our merchant confirmation maximal 24 hour.
                    If our merchant’s sailing service is not ready, we will fully refund your payment to your account.
                  </p>
                </b-col>
              </div>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <h6 class="mb-0">Price Details</h6>
                </template>
                <b-card-text>
                  <div class="d-flex justify-content-between">
                    <h6>{{ sailingDetail.name }}</h6>
                    <strong>Rp {{ stringIDR(searchDetail.price_exchange) }}</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Days (x{{ $store.state.sailing.form.day }})</em>
                    <strong>Rp {{ stringIDR($store.state.sailing.form.total) }}</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Taxes and other fees</em>
                    <strong>Rp.0</strong>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div class="d-flex justify-content-between">
                    <em>TOTAL</em>
                    <strong>Rp {{ stringIDR($store.state.sailing.form.total) }}</strong>
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
              <strong>{{ sailingDetail.name }}</strong>
              <p
                class="m-0 mt-1"
              >{{ searchDetail.destination}} {{ searchDetail.destination_province_name }}, {{ searchDetail.destination_country_name }}</p>
              <p class="m-0 mt-3 mb-2">Dates</p>
              <strong>{{ dateFormat($store.state.sailing.form.date) }} - {{dateFormat($store.getters.day)}}</strong>
              <p class="m-0 mt-3 mb-2">Guest</p>
              <strong>{{$store.state.sailing.form.guest }} guests</strong>
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
                      :src="searchDetail.feature_image"
                      alt
                    />
                  </b-col>
                  <b-col md="6">
                    <div>
                      <h6
                        style="font-family: NunitoSans-Bold; font-size: 18px;"
                      >{{ sailingDetail.name }}</h6>
                      <span class="d-flex align-items-center">
                        <img style="height: 14px;" :src="searchDetail.feature_image || null" alt />
                        <p
                          class="m-0 ml-3"
                        >{{ searchDetail.destination}} {{ searchDetail.destination_province_name }}, {{ searchDetail.destination_country_name }}</p>
                      </span>
                    </div>
                    <div style="position: absolute; bottom: 0;" class="d-flex align-items-center">
                      <img
                        style="height:29px;"
                        class="rounded-circle"
                        :src="sailingDetail.merchant_image"
                        alt
                      />
                      <h6 class="m-0 ml-3">{{ sailingDetail.merchant_name }}</h6>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-0" style="font-family: NunitoSans-Bold;">Dates</h6>
                    <span>{{ dateFormat($store.state.sailing.form.date) }} - {{dateFormat($store.getters.day)}}</span>
                  </div>
                </template>
                <b-card-text>
                  <strong style="font-family: NunitoSans-Bold;">Pickup and Return</strong>
                  <div class="d-flex justify-content-between">
                    <h6>Departure</h6>
                    <strong>{{ sailingDetail.origin }} at 20:30 WITA</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Arrival</em>
                    <strong>{{ sailingDetail.destination }} at 20:30 WITA</strong>
                  </div>
                </b-card-text>
                <template v-slot:footer>
                  <div
                    style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;"
                    class="d-flex justify-content-between"
                  >
                    <em style="font-family: NunitoSans-Bold;">Guest</em>
                    <strong>{{ $store.state.sailing.form.guest }} guests</strong>
                  </div>
                  <div class="pt-2 d-flex justify-content-between">
                    <em style="font-family: NunitoSans-Bold;">Order’s Name</em>
                    <strong>{{$store.state.sailing.sailing_book.first_name }}</strong>
                  </div>
                </template>
              </b-card>
              <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                <template v-slot:header>
                  <h6 class="mb-0" style="font-family: NunitoSans-Bold;">Price Details</h6>
                </template>
                <b-card-text>
                  <div class="d-flex justify-content-between">
                    <h6 style="font-family: NunitoSans-Bold;">{{sailingDetail.name}}</h6>
                    <strong>Rp {{ stringIDR(searchDetail.price_exchange) }}</strong>
                  </div>
                  <div class="d-flex justify-content-between">
                    <em>Days (x{{ $store.state.sailing.form.day }})</em>
                    <strong
                      style="font-family: NunitoSans-Bold;"
                    >Rp{{ stringIDR($store.state.sailing.form.total) }}</strong>
                  </div>
                  <div class="d-flex justify-content-between" v-if="null">
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
                    >Rp{{ stringIDR($store.state.sailing.form.total) }}</strong>
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
                  style="font-family: NunitoSans-Regular;"
                >Complete your payment within the time above</p>
              </b-col>
            </div>
            <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
              <template v-slot:header>
                <div class="d-flex justify-content-between">
                  <h6 class="mb-0">Payment Method</h6>
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
                <div class="d-flex justify-content-between">
                  <em>Account Holder Name</em>
                  <strong>PT DTech Solusi Bisnis</strong>
                </div>
                <div class="d-flex justify-content-between">
                  <em>Transfer Amount</em>
                  <strong>Rp{{ stringIDR($store.state.sailing.form.total) }}</strong>
                </div>
              </b-card-text>
            </b-card>
            <b-button
              variant="primary"
              class="float-right mt-4"
              @click="booking_ship"
            >I Have Completed Payment</b-button>
          </div>
        </div>
      </div>
      <!-- last step Confirmation screen -->
      <div v-if="selectedContent=='confirmation'">
        <b-row class="m-0">
          <b-col md="12">
            <div class="sailing-payment-content">
              <h1 style="font-family: Mark-Bold; font-size: 26px;">One last Step....</h1>
              <div style="padding: 0px;" class="mt-4 notice row">
                <b-col md="12" class="p-3 align-self-center">
                  <p style="font-family: NunitoSans-Regular;">Thank you for your payment!</p>
                  <p style="font-family: NunitoSans-Regular;">
                    For sailing service, after payment you have to wait for our merchant confirmation
                    maximal 24 hour. If our merchant’s sailing service is not ready, we will fully refund your payment to your account.
                  </p>
                </b-col>
              </div>
              <b-button
                variant="primary"
                class="float-right mt-4"
                @click="selectedContent='confirmation'"
              >See My Booking Status</b-button>
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
  name: "sailingEmpty",
  components: { Footer, Header },
  data() {
    return {
      selectedContent: "sailingHome",
      lastPayment: null,
      noImage:
        "https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg",
      data_sailing: null,
      selected: null,
      dataSearch: {
        type: "yacht"
      },

      detailBody: {
        daterange: ["2019-12-01T00:00:00+07:00", "2019-12-02T00:00:00+07:00"],
        type: "yatch",
        page: 1,
        guest: 1,
        with_skipper: false,
        sort: ["price asc"]
      },
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
    goToMaps() {
      var url = "https://www.google.com/maps/preview";
      this.$router.push({ path: "/sailing/index" });
      window.open(url, "_target");
    },
    toBook: function() {
      document.getElementById("content-center").style.backgroundColor =
        "#F7F7F7";
    },
    search(data) {
      var guest = parseInt(this.$store.state.sailing.form.guest) || 1;
      var date_from = Moment.parseZone(this.$store.state.sailing.form.date)
        .utc()
        .format();
      var date_to = Moment.parseZone(this.$store.getters.day)
        .utc()
        .format();

      var body = {
        type: "yacht"
      };
      console.log("sd", body);
      this.$store
        .dispatch("search", { type: "sailing", data: body })
        .then(res => {
          this.data_sailing = this.$store.state.sailing.search_sailing;
        })
        .catch(error => {
          //console.log(error);
        });
    },
    stringIDR(data) {
      const x = Math.round(data);
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    goto(to, data) {
      console.log("dataaaa log", data);
      this.$store.state.sailing.detail_search = data;

      if (to == "sailingDetail") this.getDetail(to, data);
    },
    getDetail(to, data) {
      var body = this.selectedContent;
      this.$store
        .dispatch("detailShip", {
          id: data.ref_id,
          data: this.detailBody,
          type: "sailing"
        })
        .then(res => {
          this.$store.state.sailing.form.total =
            this.$store.state.sailing.detail_search.price_exchange *
            this.$store.state.sailing.form.day;
          ///this.sailingDetail = res.data.data;
          //console.log(res.data.data);
          this.selectedContent = to;
        })
        .catch(error => {
          console.log(error);
        });
    },
    dateFormat(data) {
      var dt = Moment(data).format("DD MMM");
      return dt;
    },
    booking_ship() {
      var date_from = Moment(this.$store.state.sailing.form.date).format();
      var date_to = Moment(this.$store.getters.day).format();

      var guest = parseInt(this.$store.state.sailing.form.guest) || 1;
      var price = this.$store.state.sailing.form.total;
      var usd = price / 15000;
      var currency_code = this.$store.state.sailing.detail_search
        .current_currency_code;
      var date_now = Moment.utc().format();
      var body = {
        daterange: [date_from, date_to],
        round_trip: true,
        multi_trip: false,
        adult: guest,
        child: 0,
        merchant_id: this.searchDetail.ref_id,
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
      console.log(body);
      this.$store
        .dispatch("bookingShip", {
          data: body,
          type: "sailing"
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
              console.log(error);
              alert(error.message);
            });
        })
        .catch(error => {
          console.log(error);
          alert(error.message);
        });

      //this.selectedContent = "confirmation";
    },
    setLastPayment() {
      this.lastPayment = new Moment().add(2, 'hours').calendar();
    }
  },
  computed: {
    sailingDetail() {
      return this.$store.state.sailing.detail;
    },
    searchDetail() {
      return this.$store.state.sailing.detail_search;
    },
    profile() {
      return JSON.parse(this.$store.state.profile);
    }
  },
  created() {
    this.$store.commit("bodyDetail", {
      data: this.detailBody,
      type: "sailing"
    });
    this.search(this.dataSearch);
  }
};
</script>

<style>
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
  margin: 100px 280px;
  color: black;
  text-align: justify;
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
  margin: 100px 50px 100px 0px;
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