<template>
  <div class="home">
    <Header />
        <div class="container">
            <b-row>
                <b-col md="3">
                    <div class="sidebar-profile">
                        <div class="profile-photos">
                          <img :src="no_image" alt="John Doe" class="rounded-circle" style="width:100px;height:100px">
                              <p style="font-weight:bold">{{profiles.data.first_name}}</p>
                              <p>{{profiles.data.email}}</p>
                              <p>{{profiles.data.phone_number}}</p>
                        </div>
                      <img src="@/assets/img/vektor.png" style="width:100%;">
                      <div class="sidebar-profile-body">
                      </div>
                      <div class="sidebar-profile-content">
                        <b-row>
                          <b-col md="4">
                            <p>Credit</p>
                          </b-col>
                          <b-col md="8">
                            <p style="font-weight:bold;color:#233E98">IDR 300.000</p>
                          </b-col>
                        </b-row>
                      </div>
                      <b-row>
                        <b-col>
                           <div class="sidebar-profile-footer">
                             <b-link href="#"><p style="font-weight:bold;color:#233E98">EDIT PROFILE</p></b-link>
                           </div>
                        </b-col>
                      </b-row>
                    </div>
                    <div class="sidebar-card">
                      <p style="font-weight:bold;font-size:16px">Share your love to Archipelago</p>
                      <p style="font-size:12px">Invite your friend to cGO and get credits worth Rp300,000.</p>
                      <b-button variant="primary" style="background: linear-gradient(158.81deg, #9CAFEF -53.91%, #2345B9 94.99%);border-radius: 5px;">Try Now</b-button>
                    </div>
                </b-col>
                <b-col md="9">
                    <div class="main-content-profile">
                         <b-tabs content-class="mt-3" active-nav-item-class="font-weight-bold text-uppercase text-primary border-style-none">
                            <b-tab title="My Trip" active>
                              <b-row>
                                <b-col style="text-align:left;">
                                  <b-button v-b-toggle.collapse-1 variant="outline-primary">All</b-button>
                                  <b-button v-b-toggle.collapse-2 variant="outline-primary">Sailing</b-button>
                                  <b-button v-b-toggle.collapse-3 variant="outline-primary">Tour</b-button>
                                  <b-button v-b-toggle.collapse-4 variant="outline-primary">Transportation</b-button>
                                </b-col>
                              </b-row>
                              <b-row style="margin-top:10%">
                                <b-col style="text-align:cneter">
                                  <b-collapse id="collapse-1" class="mt-2" style="text-align:center">
                                    <!-- <img src="@/assets/img/empty.png" alt="empty">
                                    <p>No item found</p> -->
                                     <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>3 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius:3px;text-align:right;">See aa</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                     <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">See Ticket</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                    <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">See Ticket</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-2" class="mt-2">
                                     <!-- sailing -->
                                    <div class="mytrip"   v-for="(item,i) in my_ship" :key="i" >
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">{{item.type}}</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">{{item.merchant_name}}</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius:3px;text-align:right;">See Ticket</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-3" class="mt-2">
                                    <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">See Ticket</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-4" class="mt-2">
                                    <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">See Ticket</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <!-- waiting for confirmation -->
                            <b-tab title="Panding Payment">
                              <b-row>
                                <b-col style="text-align:left;">
                                  <b-button v-b-toggle.collapse-1 variant="outline-primary">All</b-button>
                                  <b-button v-b-toggle.collapse-2 variant="outline-primary">Sailing</b-button>
                                  <b-button v-b-toggle.collapse-3 variant="outline-primary">Tour</b-button>
                                  <b-button v-b-toggle.collapse-4 variant="outline-primary">Transportation</b-button>
                                </b-col>
                              </b-row>
                              <b-row style="margin-top:10%">
                                <b-col style="text-align:cneter">
                                  <b-collapse id="collapse-1" class="mt-2" style="text-align:center">
                                    <!-- <img src="@/assets/img/empty.png" alt="empty">
                                    <p>No item found</p> -->
                                     <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="9">
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius:3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                     <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="9">
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                    <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-2" class="mt-2">
                                     <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                               <b-col md="9">
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius:3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-3" class="mt-2">
                                    <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="9">
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-4" class="mt-2">
                                    <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:16px;">Rp<strong style="color:#143ABE">300.000</strong></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                                <b-button variant="primary" style="background: linear-gradient(273.33deg, #143ABE 3.36%, #5E79D3 88.52%);border-radius: 3px;text-align:right;">Play Now</b-button>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab title="Waiting For Confirmation">
                              <p>For sailing service, after payment you have to wait for our merchant confirmation maximal 24 hour. If our merchant’s sailing service is not ready, we will fully refund your payment to your account.</p>
                                <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                              <b-col md="3">
                                                <p style="font-size:10px;color:#143ABE;text-align:left">Waiting For Confirmation</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                              </b-tab>
                            <b-tab title="Expired Order">
                              <b-row>
                                <b-col style="text-align:left;">
                                  <b-button v-b-toggle.collapse-b1 variant="outline-primary">All</b-button>
                                  <b-button v-b-toggle.collapse-b2 variant="outline-primary">Sailing</b-button>
                                  <b-button v-b-toggle.collapse-b3 variant="outline-primary">Tour</b-button>
                                  <b-button v-b-toggle.collapse-b4 variant="outline-primary">Transportation</b-button>
                                </b-col>
                              </b-row>
                              <b-row style="margin-top:10%">
                                <b-col style="text-align:cneter">
                                  <b-collapse id="collapse-b1" class="mt-2" style="text-align:center">
                                    <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                             <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                 <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                     <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                    <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                               <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-b2" class="mt-2">
                                     <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                             <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                 <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-b3" class="mt-2">
                                    <!-- Tour -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/tour.png" style="margin-right:10px">Tour</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Guest </strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><strong> Room </strong> Deluxe</p>
                                              </b-col>
                                              <b-col>
                                                <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                  <b-collapse id="collapse-b4" class="mt-2">
                                               <!-- Transportation -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                            <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left"><img src="@/assets/img/trans.png" style="margin-right:10px">Transportation</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Marina Ancol</h5>
                                              </b-col>
                                              <b-col md="4">
                                                <h5 style="text-align:left">Pulau Pramuka</h5>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">09.30</p>
                                              </b-col>
                                              <b-col md="4">
                                                <p style="text-align:left">21 October 2019</p>
                                                <p style="text-align:left">07.00</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="4">
                                                <p  style="text-align:left"><strong> Passenger </strong> 2 persons</p>
                                              </b-col>
                                              <b-col md="5">
                                                <p  style="text-align:left"><strong> Class </strong> Ekonomy</p>
                                              </b-col>
                                              <b-col  md="3" align-self="end">
                                               <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                                  </b-collapse>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab title="Wishlist">
                               <!-- sailing -->
                                    <div class="mytrip">
                                      <b-row>
                                        <b-col md="2">
                                          <div class="date">
                                            <p style="font-weight:bold;color: #2345B9;">OCT</p>
                                            <p>02</p>
                                            <p>03</p>
                                          </div>
                                        </b-col>
                                        <b-col md="10">
                                          <div class="ticket-content">
                                             <div class="expired">
                                              <p>Expired</p>
                                            </div>
                                            <b-row>
                                              <b-col md="2">
                                                <p style="text-align:left"><img src="@/assets/img/sailing.png" style="margin-right:10px">Sailing</p>
                                              </b-col>
                                              <b-col md="3">
                                                <p  style="text-align:left"><ul><li>2 Days</li></ul></p>
                                              </b-col>
                                              <b-col md="4">
                                                <p  style="text-align:left"><ul><li>Order ID 111111</li></ul></p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col>
                                                <p style="font-weight:bold;font-size:16px;text-align:left">Big Sky 157 Ocean Fast</p>
                                              </b-col>
                                            </b-row>
                                            <b-row>
                                              <b-col md="3">
                                                <p  style="text-align:left"><img src="@/assets/img/loc.png" alt="loc"> Marina Ancol</p>
                                              </b-col>
                                              <b-col md="6">
                                                <p  style="text-align:left"><strong> Guest</strong> 8 Guest</p>
                                              </b-col>
                                              <b-col md="3" align-self="end">
                                                 <p><b-link href="">Delete</b-link></p>
                                              </b-col>
                                            </b-row>
                                          </div>
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <!-- end -->
                            </b-tab>
                        </b-tabs>
                    </div>
                </b-col>
            </b-row>
        </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      my_ship:null,
      profiles: null,
      no_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjmznwgy_l-XkdkZUsiOdRa3Kj3O4dZk4u38oztKSYoOXNxE5&s",
      no_my_ship:"@/assets/img/empty.png",
    }
  },
  methods : {
    get_my_ship(){
      this.$store.dispatch("my_ship").then(res=>{
        console.log("my_shp",res)
        this.my_ship = res;
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted () {
    this.get_my_ship();
    let token = this.$store.state.token;
    axios.get('http://api.cgo.co.id/api/v1/UserApps/My/Profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      this.profiles = response.data
      console.log(this.profiles.data)
    })
  }
}
</script>
<style>
.mytrip {
  box-shadow: 0px 0px 4px rgba(117, 117, 117, 0.25);
  border-radius: 5px;
  margin-bottom: 30px;
}

.date {
  border-radius: 5px 0 0 5px;
  box-shadow: 0px 0px 5px rgba(117, 117, 117, 0.25);
  height: 100%;
  padding: 15px;
}

.ticket-content {
  width: 100%;
  height: 100%;
  padding: 15px;
}

.expired {
  background: linear-gradient(90deg, #D42128 53.76%, rgba(212, 33, 40, 0.42) 103.76%);
  color: #ffffff;
  border-radius: 0px 5px 0 5px;
  float: right;
  padding: 5px;
  width: 15%;
  height: 30px;
}

/* Profile-Trip */

  
</style>
