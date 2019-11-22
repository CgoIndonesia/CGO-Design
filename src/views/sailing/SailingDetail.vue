<template>
  <div>
    <Header />
    <div class="content-center" id="content-center">
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
                v-for="(img, i) in sailingDetail.images"
                :key="i"
                :img-src="img.endpoint"
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
                >{{ sailingDetail.availabilities[0].current_currency_code }}</h5>
                <strong
                  style="font-family:NunitoSans-Bold; font-size: 22px;"
                >{{ stringIDR(sailingDetail.availabilities[0].price_exchange) }}</strong>
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
                <b-card class="mr-4">
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
                <b-card>
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
              <div class="mt-4 spesification col-6 p-0">
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
                  <h5>Rating and comment {{ sailingDetail.reviews ? sailingDetail.reviews.length : 0}}</h5>
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
              <strong>3 Oct - 4 Oct</strong>
              <p style="margin-top: 15px; font-family: NunitoSans-Regular; margin:0px;">Guest</p>
              <strong>8 guests</strong>
              <template v-slot:footer>
                <span class="d-flex price">
                  <h5>{{ sailingDetail.availabilities[0].current_currency_code }}</h5>
                  <strong
                    style="font-family:NunitoSans-Bold; font-size: 22px;"
                  >{{ stringIDR(sailingDetail.availabilities[0].price_exchange) }}</strong>
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
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "sailingEmpty",
  components: { Footer, Header },
  data() {
    return {
      selectedContent: "sailingHome",
      data_sailing: null,
      selected: null,
      sailingDetail: null,
      prevRoute: null,
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
  beforeRouteLeave(to, from, next) {
    alert("s");
    next(vm => {
      vm.prevRoute = from;
    });
  },
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? You have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    toBook: function() {
      document.getElementById("content-center").style.backgroundColor =
        "#F7F7F7";
    },
    search_sailing(data) {
      this.$store
        .dispatch("search", "sailing", data)
        .then(res => {
          this.data_sailing = this.$store.state.search_sailing;
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
      if (to == "sailingDetail") this.getDetail(to, data);
    },
    getDetail(to, data) {
      var body = this.selectedContent;
      this.$store
        .dispatch("detailSailing", { id: data.ref_id, data: this.detailBody })
        .then(res => {
          this.sailingDetail = res.data.data;
          console.log(res.data.data);
          this.selectedContent = to;
        })
        .catch(error => {
          console.log(error);
        });
    },
    backButton() {}
  },
  computed: {},
  created() {
    this.search_sailing(null);
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