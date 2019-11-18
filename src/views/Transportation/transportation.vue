<template>
<div>
<Header />
    <div class="content-center" id="content-center">
        <!-- Tour Search Screen -->
        <b-row class="m-0" v-if="selectedContent =='tourHome'">
            <b-col md="4">
            <div class="content-aside-sailing">
                <b-card
                    title="Transportation"
                    img-top
                    tag="article"
                    style="max-width: 18rem; font-family: Mark-Bold;"
                    class="mb-2"
                >
                <div class="mt-4">
                    <p class="mb-2 m-0">From</p>
                    <strong>23 Oct  |  Marina Ancol</strong>
                </div>
                <div class="mt-3">
                    <p class="mb-2 m-0">To</p>
                    <strong>23 Oct  |  Muara Angke</strong>
                </div>
                <div class="mt-3" style="border-top: 1px solid #d6d4d4;
                  padding-top: 10px;">
                    <p class="mb-2 m-0">Passenger</p>
                    <strong>3 passengers</strong>
                </div>
                <div class="mt-3" style="border-top: 1px solid #d6d4d4;
                  padding-top: 10px;">
                    <p class="mb-2 m-0">Class</p>
                    <strong>Economy</strong>
                </div>
                </b-card>

                <b-card
                    img-top
                    tag="article"
                    style="max-width: 18rem;"
                    class="mt-5 mb-2"
                >
                <div class="d-flex justify-content-between">
                    <h4>Filter</h4>
                    <a style="color:red;" href="">Reset Filter</a>
                </div>
                    <b-form-group class="mt-3" label="Class">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                    <b-form-group class="mt-3" label="Sort by">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                </b-card>
            </div>
            </b-col>
            <b-col md="8">
                 <div class="content-sailing">
                     <div style="border-bottom: 2px solid #e0e4e0;
                        padding-bottom: 12px;">
                         <h6 v-b-toggle.collapse-1 style="color:blue; cursor:pointer; text-align:right; font-family:Mark-Bold;">Change Search</h6>
                     </div>
                     <b-collapse id="collapse-1" class="mt-2">
                        <b-row style="margin-bottom: 20px; border-bottom: 2px solid #e0dbdb;
                        padding: 20px 0;">
                            <b-col md="4">
                                <b-form>
                                    <b-form-group
                                        label="From"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        required
                                        placeholder="Departure port"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                        label="Departure"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        required
                                        placeholder="31 Oct 2019"
                                        ></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-col>
                            <b-col md="4">
                                <b-form>
                                    <b-form-group
                                        label="To"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        required
                                        placeholder="Arrival port"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox
                                        id="checkbox-1"
                                        name="checkbox-1"
                                        value="accepted"
                                        unchecked-value="not_accepted"
                                        style="padding-bottom: 8px;"
                                        >
                                        Return
                                        </b-form-checkbox>
                                        <b-form-input
                                        id="return"
                                        type="text"
                                        required
                                        placeholder="01 Nov 2019"
                                        ></b-form-input>
                                    </b-form-group>
                                </b-form>
                            </b-col>
                            <b-col md="4">
                                <b-form class="d-flex">
                                    <b-form-group
                                        label="Passenger"
                                        class="mr-3"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        required
                                        placeholder="Passenger"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                        label="Class"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        required
                                        placeholder="Economy"
                                        ></b-form-input>
                                    </b-form-group>
                                </b-form>
                                <b-button class="w-100 mt-4" variant="primary">Search</b-button>
                            </b-col>
                        </b-row>
                    </b-collapse>

                <!-- Empty Search Transportation -->
                <div class="d-none empty-sailing container">
                    <b-row>
                        <b-col md="12">
                         <div style="width: fit-content;" class="empty-content-sailing ml-auto mr-auto">
                            <img src="../../assets/Empty state sailing-06 1.png" alt="">
                            <h4>No Transportation available</h4>
                         </div>
                        </b-col>
                    </b-row>
                </div>

                <!-- Result sailing Search -->
                <div class="mt-4">
                    <b-row class="mb-4" style="border: 2px solid rgb(228, 225, 225);
                          margin: 0;
                          border-radius: 0.5rem;">
                            <b-col md="2" class="p-0">
                                <img src="@/assets/kapal_roro-696x360 1.png" @click="openModal();currentSlide(1)" class="hover-shadow cursor">
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
                                </div> -->
                            </b-col>
                            <b-col md="7" class="align-self-center">
                              <div class="d-flex">
                                <div style="padding-right: 15px;">
                                    <p>ASDP</p>
                                    <img style="width:70px; height:32px;" src="@/assets/Unknown.png" alt="">
                                </div>
                                <div style="margin-left: 45px;
                                padding-left: 15px;">
                                    <h5 style="    font-family: NunitoSans-Regular;
                                    margin-bottom: 17px;
                                    font-size: 16px;">Class: Economy</h5>
                                    <div class="d-flex">
                                        <strong>19:50</strong>
                                        <p class="ml-3 mr-3 text-muted">1h 30m</p>
                                        <strong>21:20</strong>
                                    </div>
                                    <span>Marina Ancol</span>
                                    <img src="@/assets/arrow-back.png" alt="">
                                    <span>Muara Angke</span>
                                </div>
                              </div>
                            </b-col>
                            <b-col md="3">
                                <div class="d-flex mt-4">
                                    <span class="pl-2 d-flex">Rp<h6 style="font-family: NunitoSans-Bold; color: #0b0bbb;font-size: 20px;">1,050.000</h6>/pax</span>
                                </div>
                                <b-button style="width:100%" variant="primary" @click="selectedContent='tourBook'; toBook();">Select</b-button>
                            </b-col>
                        </b-row>
                        <b-row class="mb-4" style="border: 2px solid rgb(228, 225, 225);
                          margin: 0;
                          border-radius: 0.5rem;">
                            <b-col md="2" class="p-0">
                                <img src="@/assets/kapal_roro-696x360 1.png" @click="openModal();currentSlide(1)" class="hover-shadow cursor">
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
                                </div> -->
                            </b-col>
                            <b-col md="7" class="align-self-center">
                              <div class="d-flex">
                                <div style="padding-right: 15px;">
                                    <p>ASDP</p>
                                    <img style="width:70px; height:32px;" src="@/assets/Unknown.png" alt="">
                                </div>
                                <div style="margin-left: 45px;
                                padding-left: 15px;">
                                    <h5 style="    font-family: NunitoSans-Regular;
                                    margin-bottom: 17px;
                                    font-size: 16px;">Class: Economy</h5>
                                    <div class="d-flex">
                                        <strong>21:50</strong>
                                        <p class="ml-3 mr-3 text-muted">1h 30m</p>
                                        <strong>22:20</strong>
                                    </div>
                                    <span>Marina Ancol</span>
                                    <img src="@/assets/arrow-back.png" alt="">
                                    <span>Muara Angke</span>
                                </div>
                              </div>
                            </b-col>
                            <b-col md="3">
                                <div class="d-flex mt-4">
                                    <span class="pl-2 d-flex">Rp<h6 style="font-family: NunitoSans-Bold; color: #0b0bbb;font-size: 20px;">1,050.000</h6>/pax</span>
                                </div>
                                <b-button style="width:100%" variant="primary">Select</b-button>
                            </b-col>
                        </b-row>
                </div>

                </div>
            </b-col>
        </b-row>

        <!-- Tour Booking Screen -->
        <div v-if="selectedContent=='tourBook'">
            <b-row class="m-0">
                <b-col md="9">
                    <div class="sailing-book-content">
                        <h1 style="font-family: Mark-Bold; font-size: 28px;">Transportation Booking</h1>
                        <b-form class="mt-4">
                        <b-form-group
                        label="Your Name"
                        >
                        <b-form-input
                        type="text"
                        required
                        placeholder="Enter Name"
                        ></b-form-input>
                        </b-form-group>
                        <b-row>
                            <b-col md="6">
                                <b-form-group
                                label="Email"
                                >
                                <b-form-input
                                type="email"
                                required
                                placeholder="ex : emmawatson@gmail.com"
                                ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                label="Phone Number"
                                >
                                <b-form-input
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
                                    <option :value="null" disabled>ID Card</option>
                                </template>

                                <option value="C">Option C</option> <option value="D">Option D</option>
                                </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="6">
                                <b-form-group
                                label="ID Number"
                                >
                                <b-form-input
                                type="number"
                                required
                                placeholder="Enter Phone Number"
                                ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-checkbox
                        id="checkbox-1"
                        name="checkbox-1"
                        >
                        Save my identity
                        </b-form-checkbox>
                        </b-form>
                        <b-form class="mt-4">
                            <h1 style="font-family: NunitoSans-Bold; font-size: 20px;">Special Notes</h1>
                        <b-form-textarea
                            id="textarea-rows"
                            placeholder="Your notes here"
                            rows="8"
                            class="mt-4"
                        ></b-form-textarea>
                        </b-form>
                        <b-form  style="padding: 30px; background: #E2FDFB;" class="mt-4 justify-content-around ref-code" inline>
                            <label for="inline-form-input-name" style="font-family: NunitoSans-Bold;  font-size: 18px;">Referal Code</label>
                            <b-input
                            id="inline-form-input-name"
                            class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Your promo code here"
                            ></b-input>

                            <b-button style="width: 250px;" variant="danger">Apply</b-button>
                        </b-form>
                        <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h6 class="mb-0"
                                style="font-size: 15px;
                                font-family: NunitoSans-Bold;">Price Details</h6>
                            </template>
                            <b-card-text>
                                <div class="d-flex justify-content-between">
                                    <div class="mb-2 mt-1 d-flex align-items-center">
                                        <h6 style="font-size: 15px; margin: 0;
                                        font-family: NunitoSans-Bold;">Mariana Ancol</h6>
                                        <img style="width:24px; height: 24px;" src="@/assets/arrow-back.png" alt="">
                                        <h6 style="font-size: 15px;
                                        margin: 0;
                                        font-family: NunitoSans-Bold;">Muara Angke</h6>
                                    </div>
                                    <span style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Rp350.000</span>
                                </div>
                                <div class="mb-2 d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Pax (x3)</em>
                                    <strong>Rp1.050.000</strong>
                                </div>
                                <div class="mb-2 d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Taxes and other fees</em>
                                    <strong style="font-size: 15px;
                                    font-family: NunitoSans-Bold;">Included</strong>
                                </div>
                            </b-card-text>
                            <template v-slot:footer>
                                <div class="d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Bold;">TOTAL</em>
                                    <strong style="font-size: 15px;
                                    font-family: NunitoSans-Bold;
                                    color: blue;">Rp1.050.000</strong>
                                </div>
                            </template>
                        </b-card>
                        <b-row class="mt-4">
                            <b-col md="7">
                            <p>By clicking this button, you have agreed with <a href="">Privacy Policy</a>and<a href="">Terms & Condition</a> of cGO</p>
                            </b-col>
                            <b-col md="5">
                                <b-button class="w-100" variant="primary" @click="selectedContent='reviewBooking'">Continue</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col md="3">
                    <div class="content-aside-saiing-booking">
                        <h6 style="margin-bottom: 20px; font-family: Mark-Bold; font-size: 20px; color: #292727;">Booking Details</h6>
                        <div class="d-flex">
                            <img style="height: 102px;
                            width: 14px;
                            margin-top: 6px; margin-right: 10px;" src="@/assets/Group 574.png" alt="">
                            <div>
                                <p class="m-0 mt-1 mb-2">From</p>
                                <strong>23 Oct</strong>
                                <div class="mb-3"><strong>Marina Ancol  |  19:50</strong></div>
                                <p class="m-0 mt-1 mb-2">To</p>
                                <strong>23 Oct</strong>
                                <div class="mb-3"><strong>Muara Angke  |  21:20</strong></div>
                            </div>
                        </div>
                        <div style="border-top: 2px solid #e6e5e5;
                        padding-top: 7px;">
                            <p class="m-0 mt-1">Passenger</p>
                            <strong>3 passengers</strong>
                        </div>
                        <div style="border-top: 2px solid #e6e5e5;
                        padding-top: 7px;">
                            <p class="m-0 mt-1">Class</p>
                            <strong>Economy</strong>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
        <!-- Review Booking Screen -->
        <div v-if="selectedContent=='reviewBooking'">
            <b-row class="m-0">
                <b-col md="9">
                    <div class="sailing-book-content">
                        <h1 style="font-family: Mark-Bold; font-size: 22px; text-align: left;">Before Continue to payment please review your booking</h1>
                      <b-card class="mt-4">
                          <b-row>
                              <b-col md="6">
                                <div class="d-flex">
                                    <img style="height: 102px;
                                    width: 14px;
                                    margin-top: 6px; margin-right: 10px;" src="@/assets/Group 574.png" alt="">
                                    <div>
                                        <p class="m-0 mt-1 mb-2">From</p>
                                        <strong>23 Oct</strong>
                                        <div class="mb-3"><strong>Marina Ancol  |  19:50</strong></div>
                                        <p class="m-0 mt-1 mb-2">To</p>
                                        <strong>23 Oct</strong>
                                        <div class="mb-3"><strong>Muara Angke  |  21:20</strong></div>
                                    </div>
                                </div>
                              </b-col>
                              <b-col md="6">
                                <div class="float-right">
                                    <img style="height: 42px; width:90px;" src="@/assets/Unknown.png" alt="">
                                    <span class="d-block text-right mt-3 align-items-center">
                                        <p class="m-0 ml-3">ASDP</p>
                                        <p class="m-0 ml-3">Ferry 01</p>
                                    </span>
                                </div>
                              </b-col>
                          </b-row>
                      </b-card>
                      <b-card class="price-details mt-4" no-body footer-tag="footer">
                            <template v-slot:footer>
                                <div style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;" class="d-flex justify-content-between">
                                    <em style="font-family: NunitoSans-Bold;">Passenger</em>
                                    <strong>3 passengers</strong>
                                </div>
                                <div style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;" class="pt-2 d-flex justify-content-between">
                                    <em style="font-family: NunitoSans-Bold;">Class</em>
                                    <strong>Economy</strong>
                                </div>
                                <div class="pt-2 d-flex justify-content-between">
                                    <em style="font-family: NunitoSans-Bold;">Order Name</em>
                                    <strong>Emma Watson</strong>
                                </div>
                            </template>
                        </b-card>                                                                             
                        <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <h6 class="mb-0"
                                style="font-size: 15px;
                                font-family: NunitoSans-Bold;">Price Details</h6>
                            </template>
                            <b-card-text>
                                <div class="d-flex justify-content-between">
                                    <div class="mb-2 mt-1 d-flex align-items-center">
                                        <h6 style="font-size: 15px; margin: 0;
                                        font-family: NunitoSans-Bold;">Mariana Ancol</h6>
                                        <img style="width:24px; height: 24px;" src="@/assets/arrow-back.png" alt="">
                                        <h6 style="font-size: 15px;
                                        margin: 0;
                                        font-family: NunitoSans-Bold;">Muara Angke</h6>
                                    </div>
                                    <span style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Rp350.000</span>
                                </div>
                                <div class="mb-2 d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Pax (x3)</em>
                                    <strong>Rp1.050.000</strong>
                                </div>
                                <div class="mb-2 d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Regular;">Taxes and other fees</em>
                                    <strong style="font-size: 15px;
                                    font-family: NunitoSans-Bold;">Included</strong>
                                </div>
                            </b-card-text>
                            <template v-slot:footer>
                                <div class="d-flex justify-content-between">
                                    <em style="font-size: 15px;
                                    font-family: NunitoSans-Bold;">TOTAL</em>
                                    <strong style="font-size: 15px;
                                    font-family: NunitoSans-Bold;
                                    color: blue;">Rp1.050.000</strong>
                                </div>
                            </template>
                        </b-card>
                        <b-row class="mt-4">
                            <b-col md="7">
                            <p>By clicking this button, you have agreed with <a href="">Privacy Policy</a> and<a href="">Terms & Condition</a> of cGO</p>
                            </b-col>
                            <b-col md="5">
                                <b-button class="w-100" variant="primary" @click="selectedContent='payment'">Continue to Payment</b-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
                <b-col md="3">
                    <div class="content-aside-saiing-booking">
                        <p>By clicking this button, you have agreed with <a href="">Privacy Policy</a> and<a href="">Terms & Condition</a> of cGO</p>                       <b-button class="mt-4 w-100" variant="primary" @click="selectedContent='payment'">Continue to Payment</b-button>
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
                                <img src="../../assets/Icon for web app-10 1.png" alt="">
                            </b-col>
                            <b-col md="9" class="align-self-center">
                                <h5 style="font-family: NunitoSans-Regular;">Make a payment before </h5>
                                <strong style="font-family: NunitoSans-Bold;  color: black; font-size: 20px;">Today 23:30</strong>
                                <p style="font-family: NunitoSans-Regular; margin-top: 10px; margin-bottom: 0;">Complete your payment within the time above</p>
                            </b-col>
                        </div>
                        <b-card class="price-details mt-4" header-tag="header" footer-tag="footer">
                            <template v-slot:header>
                                <div class="d-flex justify-content-between">
                                    <h6 class="mb-0" style="font-family: Mark-Bold;">Payment Method</h6>
                                    <div class="d-flex align-items-center">
                                        <span>Bank Central Asia (BCA)</span>
                                        <img style="height: 15px; margin-left: 10px;" src="../../assets/Bitmap.png" alt="">
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
                                    <strong>Rp22.400.000</strong>
                                </div>
                            </b-card-text>
                        </b-card>
                        <b-button variant="primary" class="float-right mt-4" @click="selectedContent='confirmation'">I Have Completed Payment</b-button>
                </div>
            </div>
        </div>
        <!-- last step Confirmation screen -->
        <div v-if="selectedContent=='confirmation'">
            <b-row class="m-0">
                <b-col md="8">
                    <div class="sailing-payment-content">
                        <h1 style="font-family: Mark-Bold; font-size: 26px;">Yay! Now you are ready for your trip</h1>
                         <div style="padding: 0px; height: 1000px;" class="bg-white mt-4 ticket row">
                            <b-col md="12" class="p-0">
                                <div style="background: rgb(35, 62, 152); padding: 5px 25px;">
                                    <img src="@/assets/img/cgo-logo.png" alt="">
                                </div>
                                <div class="p-5 d-flex justify-content-between">
                                    <div>
                                        <p>Package</p>
                                        <div class="mb-2 mt-1 d-flex align-items-center">
                                        <h6 style="font-size: 15px; margin: 0;
                                        font-family: NunitoSans-Bold;">Mariana Ancol</h6>
                                        <img style="width:24px; height: 24px;" src="@/assets/arrow-back.png" alt="">
                                        <h6 style="font-size: 15px;
                                        margin: 0;
                                        font-family: NunitoSans-Bold;">Muara Angke</h6>
                                    </div>
                                    </div>
                                    <div class="d-flex">
                                        <div>
                                            <p>Order ID</p>
                                            <h6>12345678</h6>
                                        </div>
                                        <img style="height:105px; width:105px;" src="@/assets/websiteQRCode_noFrame 1.png" alt="">
                                    </div>
                                </div>
                                <b-card class="m-4 price-details mt-4" no-header footer-tag="footer">
                                    <b-card-text>
                                         <b-row>
                                            <b-col md="6">
                                                <div class="d-flex">
                                                    <img style="height: 102px;
                                                    width: 14px;
                                                    margin-top: 6px; margin-right: 10px;" src="@/assets/Group 574.png" alt="">
                                                    <div>
                                                        <p class="m-0 mt-1 mb-2">From</p>
                                                        <strong>23 Oct</strong>
                                                        <div class="mb-3"><strong>Marina Ancol  |  19:50</strong></div>
                                                        <p class="m-0 mt-1 mb-2">To</p>
                                                        <strong>23 Oct</strong>
                                                        <div class="mb-3"><strong>Muara Angke  |  21:20</strong></div>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col md="6">
                                                <div class="float-right">
                                                    <img style="height: 42px; width:90px;" src="@/assets/Unknown.png" alt="">
                                                    <span class="d-block text-right mt-3 align-items-center">
                                                        <p class="m-0 ml-3">ASDP</p>
                                                        <p class="m-0 ml-3">Ferry 01</p>
                                                    </span>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-text>
                                    <template v-slot:footer>
                                        <div style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;" class="d-flex justify-content-between">
                                            <em style="font-family: NunitoSans-Bold;">Passenger</em>
                                            <strong>3 passengers</strong>
                                        </div>
                                        <div style="border-bottom: 1.5px solid #dadada;padding-bottom: 10px;" class="pt-2 d-flex justify-content-between">
                                            <em style="font-family: NunitoSans-Bold;">Class</em>
                                            <strong>Economy</strong>
                                        </div>
                                        <div class="pt-2 d-flex justify-content-between">
                                            <em style="font-family: NunitoSans-Bold;">Order Name</em>
                                            <strong>Emma Watson</strong>
                                        </div>
                                        <div class="pt-2 d-flex justify-content-between">
                                            <em style="font-family: NunitoSans-Bold;">ID Number</em>
                                            <strong>ID Card: 33002210282937</strong>
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
                        <b-button class="w-100" variant="primary">Download Ticket</b-button>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
<Footer />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Transportation',
  components: {Footer, Header},
  data () {
    return {
      selectedContent: 'tourHome',
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
  },
  methods: {
    toBook: function () {
    document.getElementById('content-center').style.backgroundColor = '#F7F7F7';
    }
  }
}
</script>

<style scoped>
ol li {font-size: 12px;
    font-family: NunitoSans-Regular;}
.content-center{
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
.content-aside-sailing{
float: left;
padding: 10px;
margin:100px 0 0 80px;
color: black;
text-align: justify;
}
.content-sailing{
    float: left;
    padding: 10px;
    height: 85%;
    width: -webkit-fill-available;
    margin: 105px 50px 100px 0px;
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
  background-color: #F6F6F6;
}
.content-sailing .card-footer {
    padding: 0px;
}
strong {font-family: NunitoSans-Bold;}
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
.sailing-book-content .price-details .card-body {
    padding: 8px 1.25rem;
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
.price-details .card-footer, .card-header {
    background: white;
}
.content-aside-sailing h4 {    font-family: Mark-Bold;}
.sailing-book-content input, .sailing-book-content select, .sailing-book-content textarea {
    background: #F7F7F7;
}
</style>