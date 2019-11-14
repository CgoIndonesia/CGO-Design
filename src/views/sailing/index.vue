<template>
<div>
<Header />
    <div class="content-center">
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
                        <b-form-group
                            id="input-group-1"
                            label="Destination"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            required
                            placeholder="Enter Destination"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="Dates"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="date"
                            required
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="Guest"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="number"
                            required
                            placeholder="Guest total here"
                            ></b-form-input>
                        </b-form-group>
                        </b-form>

                    <b-button class="mt-3 w-100" href="#" variant="primary">Search</b-button>
                </b-card>

                <b-card
                    img-top
                    tag="article"
                    style="max-width: 18rem;"
                    class="mt-5 mb-2"
                >
                <div class="d-flex justify-content-between">
                    <h4>Filter</h4>
                    <a class="text-red" href="">Reset Filter</a>
                </div>
                    <b-form class="mt-4">
                        <b-form-group
                            label="Destination"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            required
                            placeholder="Enter email"
                            ></b-form-input>
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
                <!-- Empty Search -->
                <div class="d-none empty-sailing container">
                    <b-row>
                        <b-col md="12">
                         <div style="width: fit-content;" class="empty-content-sailing ml-auto mr-auto">
                            <img src="../../assets/Empty state sailing-06 1.png" alt="">
                            <h4>No sailing available</h4>
                         </div>
                        </b-col>
                    </b-row>
                </div>

                <div class="container-fluid">
                    <b-row>
                        <b-col md="6" class="mt-4 mb-2">
                            <b-card no-body>
                                <div>
                                    <img @click="selectedContent='sailingDetail'" src="../../assets/shutterstock_357306383resize 3.png" alt="Snow" style="cursor: pointer; object-fit:cover; width:100%;">
                                    <div class="top-left">
                                        <p class="m-0">RATE</p>
                                        <strong>4.7</strong>
                                    </div>
                                    <div class="top-right"><img src="../../assets/Path 932.png" alt=""></div>
                                </div>
                                <template v-slot:footer>
                                    <b-row>
                                        <b-col sm="7">
                                            <h5>Marina Skylight F-01</h5>
                                            <div class="d-flex">
                                                <img style="margin-top: 3px; height: 14px; margin-right: 5px;" width="14" src="../../assets/droplet-outline.png" alt="">
                                                <p>Bali, Indonesia</p>
                                            </div>
                                        </b-col>
                                        <b-col sm="5">
                                            <span class="d-flex price"><h5>Rp</h5><strong>11,350.000</strong><p>/days</p></span>
                                        </b-col>
                                    </b-row>
                                    <div class="capacity-cabin d-flex pt-3">
                                    <div class="d-flex">
                                        <h5 class="pr-2">Capacity</h5><p>6-8 guest</p>
                                    </div>
                                    <div class="ml-3 d-flex">
                                        <h5 class="pr-2">Cabin</h5><p>2 cabins</p>
                                    </div>
                                    </div>
                                </template>
                            </b-card>
                        </b-col>
                        <b-col md="6" class="mt-4 mb-2">
                            <b-card no-body>
                                <div>
                                    <img src="../../assets/6240111_20170518085437727_1_XLARGE 1.png" alt="Snow" style="cursor: pointer; object-fit:cover; width:100%;">
                                    <div class="top-left">
                                        <p class="m-0">RATE</p>
                                        <strong>3.9</strong>
                                    </div>
                                    <div class="top-right"><img src="../../assets/Path 932.png" alt=""></div>
                                </div>
                                <template v-slot:footer>
                                    <b-row>
                                        <b-col sm="7">
                                            <h5>Catamaran Lagoon 560</h5>
                                            <div class="d-flex">
                                                <img style="margin-top: 3px; height: 14px; margin-right: 5px;" width="14" src="../../assets/droplet-outline.png" alt="">
                                                <p>Bali, Indonesia</p>
                                            </div>
                                        </b-col>
                                        <b-col sm="5">
                                            <span class="d-flex price"><h5>Rp</h5><strong>11,350.000</strong><p>/days</p></span>
                                        </b-col>
                                    </b-row>
                                    <div class="capacity-cabin d-flex pt-3">
                                    <div class="d-flex">
                                        <h5 class="pr-2">Capacity</h5><p>6-8 guest</p>
                                    </div>
                                    <div class="ml-3 d-flex">
                                        <h5 class="pr-2">Cabin</h5><p>2 cabins</p>
                                    </div>
                                    </div>
                                </template>
                            </b-card>
                        </b-col>
                        <b-col md="6" class="mt-4 mb-2">
                            <b-card no-body>
                                <div>
                                    <img src="../../assets/main 1.png" alt="Snow" style="cursor: pointer; object-fit:cover; width:100%;">
                                    <div class="top-left">
                                        <p class="m-0">RATE</p>
                                        <strong>4.7</strong>
                                    </div>
                                    <div class="top-right"><img src="../../assets/Path 932.png" alt=""></div>
                                </div>
                                <template v-slot:footer>
                                    <b-row>
                                        <b-col sm="7">
                                            <h5>Sail Skylight F-01</h5>
                                            <div class="d-flex">
                                                <img style="margin-top: 3px; height: 14px; margin-right: 5px;" width="14" src="../../assets/droplet-outline.png" alt="">
                                                <p>Bali, Indonesia</p>
                                            </div>
                                        </b-col>
                                        <b-col sm="5">
                                            <span class="d-flex price"><h5>Rp</h5><strong>11,350.000</strong><p>/days</p></span>
                                        </b-col>
                                    </b-row>
                                    <div class="capacity-cabin d-flex pt-3">
                                    <div class="d-flex">
                                        <h5 class="pr-2">Capacity</h5><p>6-8 guest</p>
                                    </div>
                                    <div class="ml-3 d-flex">
                                        <h5 class="pr-2">Cabin</h5><p>2 cabins</p>
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
                    v-model="slide"
                    controls
                    background="#ababab"
                    img-width="1024"
                    img-height="580"
                    style="text-shadow: 1px 1px 2px #333;"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd"
                    >
                    <!-- Text slides with image -->
                    <b-carousel-slide
                        img-src="https://picsum.photos/1024/480/?image=52"
                    ></b-carousel-slide>

                    <!-- Slides with custom text -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    </b-carousel-slide>

                    <!-- Slides with image only -->
                    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                    <!-- Slides with img slot -->
                    <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                    <b-carousel-slide>
                        <template v-slot:img>
                        <img
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="https://picsum.photos/1024/480/?image=55"
                            alt="image slot"
                        >
                        </template>
                    </b-carousel-slide>
                    </b-carousel>

                    <div class="d-flex justify-content-between px-4 pt-4" style="border: 2px solid #efefef; border-top:transparent;">
                        <div>
                            <h5 style="font-family: Mark-Bold; font-size: 22px;">Marina Skylight F-01</h5>
                            <div class="d-flex">
                                <img style="margin-top: 3px; height: 14px; margin-right: 5px;" width="14" src="../../assets/droplet-outline.png" alt="">
                                <p style="font-family: NunitoSams-Regular;">Bali, Indonesia</p>
                            </div>
                        </div>
                        <span class="d-flex price"><h5 style="font-family:NunitoSans-Regular; font-size: 14px;">Rp</h5><strong style="font-family:NunitoSans-Bold; font-size: 22px;">11,350.000</strong><p style="font-family:NunitoSans-Regular; font-size: 16px;">/days</p></span>
                    </div>
                    <div class="d-flex align-items-center p-4" style="border: 2px solid #efefef; border-top:transparent;">
                        <h5 style="font-family: Mark-Bold; margin-bottom: 0;">Rating</h5>
                        <img style="width: 31px; height: 31px; margin-left: 25px; margin-right: 15px;" src="../../assets/Path 961.png" alt="">
                        <strong style="font-family: Mark-Bold; font-size: 20px; margin-right: 20px;">4.7</strong>
                        <p class="m-0">Based on 231 reviews</p>
                    </div>
                    <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
                        <h5 style="font-family: Mark-Bold;">About</h5>
                        <p style="font-family: NunitoSans-Regular; line-height: 1.8;">Spend your next holiday in Bali aboard a deluxe sailing yacht by Dufour. Charter this luxury Dufour 560 in Alimos, near Athens. Available as a skippered or fully crewed charter, this Dufour 560 is elegantly designed and provides a comfortable place to rest after spending the day island hopping, snorkelling and discovering the beauty of Greece. The Dufour 560, constructed in 2014, is perfect for family charter holidays. The 3 chic cabins can accommodate parties of up to 6. Even on hot summer days, you can rest peacefully on the air conditioned yacht or take a dip in the sea from the extensive swimming platform. Get some inspiration for your holiday in Greece with our guide to yacht charters in Athens.</p>
                        <a style="font-family: NunitoSans-Regular;" href="">See all</a>
                    </div>
                    <div class="p-4 pickup-return" style="border: 2px solid #efefef; border-top:transparent;">
                        <h5 style="font-family: Mark-Bold;">Pickup and Return</h5>
                        <div class="mt-4 d-flex flex-wrap justify-content-start">
                            <b-card class="mr-4">
                                <div class="d-flex">
                                    <img src="../../assets/Layer 2.png" alt="" style="height:20px;">
                                    <div class="pl-3">
                                        <h5 style="font-family: NunitoSans-Regular; color: #808080;">Departure</h5>
                                        <p style="font-family: NunitoSans-Regular;">Labuan Bajo at 20:30 WITA</p>
                                    </div>
                                </div>
                            </b-card>
                            <b-card>
                                <div class="d-flex">
                                    <img src="../../assets/Layer 2.png" alt="" style="height:20px;">
                                    <div class="pl-3">
                                        <h5 style="font-family: NunitoSans-Regular; color: #808080;">Arrival</h5>
                                        <p style="font-family: NunitoSans-Regular;">Gili Trawangan at 20:30 WITA</p>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                    <div class="p-4" style="border: 2px solid #efefef; border-top:transparent;">
                        <h5 style="font-family: Mark-Bold;">Facilities</h5>
                        <div class="facilities d-flex flex-wrap justify-content-start">
                            <span>3 Toilet</span>
                            <span>Shower</span>
                            <span>Food and Drink</span>
                            <span>3 bedrooms</span>
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
                            <div class="d-flex justify-content-between">
                                <p>Sail Type</p>
                                <strong>Speenboat</strong>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Machine</p>
                                <strong>Mits. 160PK</strong>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Length</p>
                                <strong>20M/65.6ft</strong>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Width</p>
                                <strong>20M/65.6ft</strong>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Capacity</p>
                                <strong>Max. 6 guests</strong>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Cabin</p>
                                <strong>1 Cabin</strong>
                            </div>
                        </b-card>
                        </div>
                    </div>
                    <div class="mt-5 rating-comment">
                        <b-card>
                            <div class="title-rating-comment">
                                <h5>Rating and comment (231)</h5>
                            </div>
                            <b-row>
                                <b-col md="6">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <strong>4</strong>
                                        </div>
                                        <span>02 October 2019</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-3">
                                        <img style="object-fit:cover;" class="rounded-circle" src="../../assets/Mask Group.png" alt="">
                                        <h4 class="pl-3" style="font-family: Mark-Bold; font-size: 18px;">Rupert Grint</h4>
                                    </div>
                                    <p style="font-family: NunitoSans-Regular; line-height: 1.6;">This was the sailing trip of my dreams! Everything was perfect. The crew was friendly, the food fantastic, and the beaches and villages we stopped at were lovely.</p>
                                </b-col>
                                 <b-col md="6">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <img style="width: 23px; height: 23px; margin-right: 8px;" src="../../assets/Path 961.png" alt="">
                                            <strong>4</strong>
                                        </div>
                                        <span>17 October 2019</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-3">
                                        <img style="object-fit:cover;" class="rounded-circle" src="../../assets/Mask Group.png" alt="">
                                        <h4 class="pl-3" style="font-family: Mark-Bold; font-size: 18px;">Neville</h4>
                                    </div>
                                    <p style="font-family: NunitoSans-Regular; line-height: 1.6;">This was the sailing trip of my dreams! Everything was perfect. The crew was friendly, the food fantastic, and the beaches and villages we stopped at were lovely.</p>
                                </b-col>
                            </b-row>
                            <a href="" style="margin-left: 30px;">See all review</a>
                        </b-card>
                    </div>
                </div>
            </b-col>
            <b-col md="3">
                <div class="content-aside-sailing-detail">
                    <b-card>
                        <div class="d-flex align-items-center">
                            <img style="object-fit:cover; height:45px; margin-top: 4px; margin-right:10px;" class="rounded-circle" src="../../assets/Group 19 Copy.png" alt="">
                            <span>
                                <h5 style="font-family: Mark-Bold; font-size: 15px; margin-bottom: 2px;">Water Ship Group</h5>
                                <p class="m-0" style="font-family: NunitoSans-Regular; font-size: 12px;">Member since Jan 2020</p>
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
                            <span class="d-flex price"><h5>Rp</h5><strong style="font-family:NunitoSans-Bold; font-size: 22px;">11,350.000</strong><p>/days</p></span>
                            <b-button class="w-100" variant="primary">Book</b-button>
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'sailingEmpty',
  components: {Footer, Header},
  data () {
    return {
      selectedContent: 'sailingHome',
      selected: null,
      options: [
        { value: null, text: 'Recommended by cGO' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' }
      ],
      type: [
        { value: null, text: 'Catamaran' },
        { value: 'a', text: 'Yacht' },
        { value: 'b', text: 'Speedboat' },
        { value: 'c', text: 'Phinisi' },
        { value: 'd', text: 'Wooden boat' }
      ]
    }
  }
}
</script>

<style>
.content-center{
width: 100%;
color: #ffffff;
margin-bottom: 110px;
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
.content-aside-sailing{
float: left;
padding: 10px;
margin:100px 0 0 50px;
color: black;
text-align: justify;
}
.content-sailing{
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
.form-price .w-35{
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
.content-sailing .menu-type #checkbox-group-1 .custom-control-inline{margin-right: 3rem;}
.empty-sailing {
        margin-top: 200px
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
  background-color: #F6F6F6;
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

.top-right {
  position: absolute;
  top: 8px;
  padding: 7px;
  right: 16px;
  border-radius: 0.5rem;
  background-color: #F6F6F6;
}
.content-sailing .card-footer {
    padding: 0px;
}
.content-sailing .card-footer .row{
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
    color: #143ABE;
    padding-right: 3px;
    padding-left: 3px;
}
.facilities span {
    padding: 10px 15px;
    background: #E6ECFF;
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
.spesification .card, .pickup-return .card {
    border-radius: 0.7rem;
    border: 1px solid #E4EAFF;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.125) !important;
}
.pickup-return .card-body{
    padding: 0.55rem 1.2rem;
}
.rating-comment .card {
    border-radius: 0.7rem;
    border: 1px solid #E4EAFF;
}
.rating-comment .card-body {
    padding: 0;
    padding-bottom: 20px
}
.rating-comment .row {padding: 15px 30px;}
.title-rating-comment{
    padding: 15px 30px;
    background: linear-gradient(225deg, rgba(214,250,246,1) 0%, rgba(214,250,246,1) 26%, rgba(151,225,217,1) 100%)
}
.title-rating-comment h5 {font-family: Mark-Bold;}
.rating-comment strong{    font-family: Mark-Bold;
    font-size: 18px;}
.content-aside-sailing-detail .card-footer {
    margin-top:25px;
}
.content-aside-sailing h4 {    font-family: Mark-Bold;}
</style>