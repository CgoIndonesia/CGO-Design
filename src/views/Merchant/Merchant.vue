<template>
    <div class="merchant">
        <div class="sidebar">
            <div class="p-4">
                <img style="cursor: pointer;" src="@/assets/img/cGO Fix.png" />
            </div>
            <a :class="{'active' :selectedContent === 'dashboard'}" href="#" @click="selectedContent = 'dashboard'"><img class="mr-3" src="@/assets/img/Group 247.png" alt=""> Home</a>
            <a :class="{'active' :selectedContent === 'service'}" href="#" @click="selectedContent = 'service'"><img class="mr-3" src="@/assets/img/Group 250.png" alt="">My Service </a>
            <a :class="{'active' :selectedContent === 'profile'}" href="#" @click="selectedContent = 'profile'"><img class="mr-3" src="@/assets/img/Group 249.png" alt="">Profile</a>
            </div>

            <div class="content">
                <NavbarMerchant/>
            <div class="container p-5" v-if="selectedContent === 'dashboard'">
                <b-row>
                    <b-col md="6">
                        <div class="text-left p-3">
                            <h6 style="font-family: NunitoSans-Bold; font-size:18px">Balance</h6>
                            <small>See your balance and transaction history</small>
                            <div style="background-color: #CDF2EE;" class="mt-3 p-4 d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <p style="color: #233E98;
                                    font-family: NunitoSans-Bold;a">Rp</p>
                                    <strong style="color: #233E98;
                                    font-family: NunitoSans-Bold;
                                    font-size: 24px;
                                    margin-left: 10px;">11,350.000</strong>
                                </div>
                                <b-button style="background-color: #8befeb;
                                border: transparent;
                                color: #00C2BC;
                                font-weight: 800;">></b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div class="text-left p-3">
                            <h6 style="font-family: NunitoSans-Bold; font-size:18px">Number of Transaction</h6>
                            <small>Total transaction since you joined cGO</small>
                            <div style="background-color: #CDF2EE;" class="mt-3 p-4 d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <strong style="color: #233E98;
                                    font-family: NunitoSans-Bold;
                                    font-size: 24px;">146</strong>
                                    <p style="color: #233E98;
                                    font-family: NunitoSans-Bold;
                                    font-size: 16px;
                                    margin-left: 10px;    margin-bottom: 0px;">Transaction</p>
                                </div>
                                <b-button style="background-color: #8befeb;
                                border: transparent;
                                color: #00C2BC;
                                font-weight: 800;">></b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="mt-4">
                    <b-col md="6">
                        <div class="text-left p-3">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h6 style="font-family: NunitoSans-Bold; font-size:18px">My Service</h6>
                                    <small>List of services you owned</small>
                                </div>
                                <b-button style="    padding: 0px 24px;
                                background-color: #CDF2EE;
                                color: black;
                                font-family: NunitoSans-Bold;
                                border-color: #d5d5d6;
                                border-radius: 2rem;">+ Add Service</b-button>
                            </div>
                            <b-card style="height: 700px;" class="mt-4">
                                <div style="border-bottom: 1px solid rgb(220, 220, 220);" class="pb-2 d-flex">
                                     <b-button class="ml-2" style="background-color: #233E98;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">All</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Sailing</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Tour</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Transportation</b-button>
                                </div>
                                <div style="border: 1px solid #dee4de; border-radius: 0.5rem;" class="mt-3 d-flex">
                                    <img style="height: 111px; width: 161px; object-fit: cover;" src="@/assets/shutterstock_357306383resize 9.png" alt="">
                                    <div class="mt-2 ml-3">
                                    <h6
                                        style="margin: 0; font-family: NunitoSans-Bold; font-size: 18px;"
                                    >Marina Skylight F-01</h6>
                                    <span class="d-flex align-items-center">
                                        <img style="height: 14px;" src="../../assets/droplet-outline.png" alt />
                                        <p class="m-0 ml-3">Bali, Indonesia</p>
                                    </span>
                                    <div class="d-flex mt-4">
                                        <span class="pl-2 d-flex">Rp<h6 style="font-family: NunitoSans-Bold; color: #0b0bbb;font-size: 20px;">1,050.000</h6>/pax</span>
                                    </div>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div class="text-left p-3">
                            <div class="d-flex">
                                <div>
                                    <h6 style="font-family: NunitoSans-Bold; font-size:18px">Upcoming Order</h6>
                                    <small>List of your upcoming orders</small>
                                </div>
                            </div>
                            <b-card style="height: 700px;" class="mt-4">
                                <div style="border-bottom: 1px solid rgb(220, 220, 220);" class="pb-2 d-flex">
                                    <b-form class="d-flex">
                                        <label style="align-self: center;
                                        font-family: NunitoSans-Bold;
                                        margin-right: 7px;
                                        margin-bottom: 0px;">Month</label>
                                        <b-form-select :options="options"></b-form-select>
                                        <label style="align-self: center;
                                        font-family: NunitoSans-Bold;
                                        margin-right: 7px;
                                        margin-left: 5px;
                                        margin-bottom: 0px;">Year</label>
                                        <b-form-select :options="options"></b-form-select>
                                    </b-form>
                                </div>
                                <div class="mt-3">
                                    <b-button class="ml-2" style="background-color: #233E98;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">All</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Sailing</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Tour</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Transportation</b-button>
                                </div>
                                <b-row class="mt-4" style="border-bottom: 1px solid #e2e2e2;
                                padding-bottom: 20px;"> 
                                    <b-col md="2">
                                        <div>
                                            <p style="color: #2345B9;">OCT</p>
                                            <h4>21</h4>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div>
                                            <div class="d-flex">
                                                <img style="    height: 14px;
                                            width: 14px;
                                            margin-right: 10px;" src="@/assets/ship.png" alt="">
                                                <p class="m-0">Sailing * 2 Days</p>
                                            </div>
                                            <h4 style="font-family: Mark-Medium;
                                            font-size: 15px;
                                            margin-top: 7px;">Big Sky 157 Ocean Fast</h4>
                                            <span>Marina Ancol</span>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <p>ID : 900123233</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4" style="border-bottom: 1px solid #e2e2e2;
                                padding-bottom: 20px;"> 
                                    <b-col md="2">
                                        <div>
                                            <p style="color: #2345B9;">OCT</p>
                                            <h4>21</h4>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div>
                                            <div class="d-flex">
                                                <img style="    height: 14px;
                                            width: 14px;
                                            margin-right: 10px;" src="@/assets/ship.png" alt="">
                                                <p class="m-0">Sailing * 2 Days</p>
                                            </div>
                                            <h4 style="font-family: Mark-Medium;
                                            font-size: 15px;
                                            margin-top: 7px;">Big Sky 157 Ocean Fast</h4>
                                            <span>Marina Ancol</span>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <p>ID : 900123233</p>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="mt-4">
                    <b-col md="6">
                        <div class="text-left p-3">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h6 style="font-family: NunitoSans-Bold;">Statistic</h6>
                                    <small>User Growth</small>
                                </div>
                            </div>
                            <b-card style="height: 300px;" class="mt-4">
                                <img src="@/assets/Group 507.png" alt="">
                            </b-card>
                        </div>
                    </b-col>
                    <b-col md="6">
                        <div class="text-left p-3">
                            <div class="d-flex">
                                <div>
                                    <h6 style="font-family: NunitoSans-Bold;">Transaction History</h6>
                                    <small>List of your upcoming orders</small>
                                </div>
                            </div>
                            <b-card style="height: 700px;" class="mt-4">
                                <div style="border-bottom: 1px solid rgb(220, 220, 220);" class="pb-2 d-flex">
                                    <b-form class="d-flex">
                                        <label style="align-self: center;
                                        font-family: NunitoSans-Bold;
                                        margin-right: 7px;
                                        margin-bottom: 0px;">Month</label>
                                        <b-form-select :options="options"></b-form-select>
                                        <label style="align-self: center;
                                        font-family: NunitoSans-Bold;
                                        margin-right: 7px;
                                        margin-left: 5px;
                                        margin-bottom: 0px;">Year</label>
                                        <b-form-select :options="options"></b-form-select>
                                    </b-form>
                                </div>
                                <div class="mt-3">
                                    <b-button class="ml-2" style="background-color: #233E98;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">All</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Sailing</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Tour</b-button>
                                    <b-button class="ml-2" style="    background-color: #EEF2FF;
                                    color: #2345B9;
                                    border: transparent;
                                    border-radius: 2rem;
                                    padding: 5px 15px;
                                    font-size: 14px;">Transportation</b-button>
                                </div>
                                <b-row class="mt-4" style="border-bottom: 1px solid #e2e2e2;
                                padding-bottom: 20px;"> 
                                    <b-col md="2">
                                        <div>
                                            <p style="color: #2345B9;">OCT</p>
                                            <h4>21</h4>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div>
                                            <div class="d-flex">
                                                <img style="    height: 14px;
                                            width: 14px;
                                            margin-right: 10px;" src="@/assets/ship.png" alt="">
                                                <p class="m-0">Sailing * 2 Days</p>
                                            </div>
                                            <h4 style="font-family: Mark-Medium;
                                            font-size: 15px;
                                            margin-top: 7px;">Big Sky 157 Ocean Fast</h4>
                                            <span>Marina Ancol</span>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <p>ID : 900123233</p>
                                        <p class="mt-4">Pending</p>
                                    </b-col>
                                </b-row>
                                <b-row class="mt-4" style="border-bottom: 1px solid #e2e2e2;
                                padding-bottom: 20px;"> 
                                    <b-col md="2">
                                        <div>
                                            <p style="color: #2345B9;">OCT</p>
                                            <h4>21</h4>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div>
                                            <div class="d-flex">
                                                <img style="    height: 14px;
                                            width: 14px;
                                            margin-right: 10px;" src="@/assets/ship.png" alt="">
                                                <p class="m-0">Sailing * 2 Days</p>
                                            </div>
                                            <h4 style="font-family: Mark-Medium;
                                            font-size: 15px;
                                            margin-top: 7px;">Big Sky 157 Ocean Fast</h4>
                                            <span>Marina Ancol</span>
                                        </div>
                                    </b-col>
                                    <b-col md="4">
                                        <p>ID : 900123233</p>
                                        <p class="mt-4">Success</p>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <div class="container p-5" v-if="selectedContent === 'service' ">
                <div class="text-left p-3">
                    <div>
                        <h6 style="font-family: NunitoSans-Bold; font-size:18px;">My Service</h6>
                        <small>List of services you owned</small>
                    </div>
                    <div class="mt-3">
                        <b-button class="ml-2" style="background-color: #233E98;
                        border: transparent;
                        border-radius: 2rem;
                        padding: 5px 15px;
                        font-size: 14px;">All</b-button>
                        <b-button class="ml-2" style="    background-color: #EEF2FF;
                        color: #2345B9;
                        border: transparent;
                        border-radius: 2rem;
                        padding: 5px 15px;
                        font-size: 14px;">Sailing</b-button>
                        <b-button class="ml-2" style="    background-color: #EEF2FF;
                        color: #2345B9;
                        border: transparent;
                        border-radius: 2rem;
                        padding: 5px 15px;
                        font-size: 14px;">Tour</b-button>
                        <b-button class="ml-2" style="    background-color: #EEF2FF;
                        color: #2345B9;
                        border: transparent;
                        border-radius: 2rem;
                        padding: 5px 15px;
                        font-size: 14px;">Transportation</b-button>
                    </div>
                    <div class="container-fluid">
              <b-row>
                <b-col md="6" class="mt-4 mb-2">
                  <b-card no-body>
                    <div>
                      <img
                        @click="goto('tourDetail',null)"
                        src="../../assets/shutterstock_357306383resize 9.png"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover; width:100%;"
                      />
                      <div class="top-left">
                        <p class="m-0">RATE</p>
                        <strong>4.7</strong>
                      </div>
                    </div>
                    <template v-slot:footer>
                      <b-row>
                        <b-col sm="7">
                          <h5>Marina Skylight F-01</h5>
                          <div class="d-flex">
                            <img
                              style="margin-top: 3px; height: 14px; margin-right: 5px;"
                              width="14"
                              src="../../assets/droplet-outline.png"
                              alt
                            />
                            <p>Bali, Indonesia</p>
                          </div>
                        </b-col>
                        <b-col sm="5">
                          <span class="d-flex price">
                            <h5>Rp</h5>
                            <strong>11,350.000</strong>
                            <p class="m-0">/days</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin justify-content-around d-flex pt-3">
                        <div class="d-flex">
                          <h5 class="pr-2">Capacity</h5>
                          <p>6-8 guest</p>
                        </div>
                        <div class="d-flex">
                          <h5 class="pr-2">Cabin</h5>
                          <p>3 days</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
                <b-col md="6" class="mt-4 mb-2">
                  <b-card no-body>
                    <div>
                      <img
                        src="../../assets/6240111_20170518085437727_1_XLARGE 1.png"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover; width:100%;"
                      />
                      <div class="top-left">
                        <p class="m-0">RATE</p>
                        <strong>4.7</strong>
                      </div>
                    </div>
                    <template v-slot:footer>
                      <b-row>
                        <b-col sm="7">
                          <h5>Catamaran Lagoon 560</h5>
                          <div class="d-flex">
                            <img
                              style="margin-top: 3px; height: 14px; margin-right: 5px;"
                              width="14"
                              src="../../assets/droplet-outline.png"
                              alt
                            />
                            <p>Bali, Indonesia</p>
                          </div>
                        </b-col>
                        <b-col sm="5">
                          <span class="d-flex price">
                            <h5>Rp</h5>
                            <strong>11,350.000</strong>
                            <p class="m-0">/days</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin justify-content-around d-flex pt-3">
                        <div class="d-flex">
                          <h5 class="pr-2">Capacity</h5>
                          <p>6-8 guest</p>
                        </div>
                        <div class="d-flex">
                          <h5 class="pr-2">Cabin</h5>
                          <p>3 days</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
                <b-col md="6" class="mt-4 mb-2">
                  <b-card no-body>
                    <div>
                      <img
                        @click="goto('tourDetail',null)"
                        src="../../assets/main 1.png"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover; width:100%;"
                      />
                      <div class="top-left">
                        <p class="m-0">RATE</p>
                        <strong>4.7</strong>
                      </div>
                    </div>
                    <template v-slot:footer>
                      <b-row>
                        <b-col sm="7">
                          <h5>Sail Skylight F-01</h5>
                          <div class="d-flex">
                            <img
                              style="margin-top: 3px; height: 14px; margin-right: 5px;"
                              width="14"
                              src="../../assets/droplet-outline.png"
                              alt
                            />
                            <p>Bali, Indonesia</p>
                          </div>
                        </b-col>
                        <b-col sm="5">
                          <span class="d-flex price">
                            <h5>Rp</h5>
                            <strong>11,350.000</strong>
                            <p class="m-0">/days</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin justify-content-around d-flex pt-3">
                        <div class="d-flex">
                          <h5 class="pr-2">Capacity</h5>
                          <p>6-8 guest</p>
                        </div>
                        <div class="d-flex">
                          <h5 class="pr-2">Cabin</h5>
                          <p>3 days</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
                <b-col md="6" class="mt-4 mb-2">
                  <b-card no-body>
                    <div>
                      <img
                        src="../../assets/angeleyes-image 1.png"
                        alt="Snow"
                        style="cursor: pointer; object-fit:cover; width:100%;"
                      />
                      <div class="top-left">
                        <p class="m-0">RATE</p>
                        <strong>3.9</strong>
                      </div>
                    </div>
                    <template v-slot:footer>
                      <b-row>
                        <b-col sm="7">
                          <h5>Catamaran Lagoon 760</h5>
                          <div class="d-flex">
                            <img
                              style="margin-top: 3px; height: 14px; margin-right: 5px;"
                              width="14"
                              src="../../assets/droplet-outline.png"
                              alt
                            />
                            <p>Bali, Indonesia</p>
                          </div>
                        </b-col>
                        <b-col sm="5">
                          <span class="d-flex price">
                            <h5>Rp</h5>
                            <strong>11,350.000</strong>
                            <p class="m-0">/days</p>
                          </span>
                        </b-col>
                      </b-row>
                      <div class="capacity-cabin justify-content-around d-flex pt-3">
                        <div class="d-flex">
                          <h5 class="pr-2">Capacity</h5>
                          <p>6-8 guest</p>
                        </div>
                        <div class="d-flex">
                          <h5 class="pr-2">Cabin</h5>
                          <p>3 days</p>
                        </div>
                      </div>
                    </template>
                  </b-card>
                </b-col>
              </b-row>
            </div>
                </div>
            </div>

            <div class="container p-5" v-if="selectedContent === 'profile'">
                <div class="text-left p-3">
                    <div class="container mt-5">
            <b style="font-family:NunitoSans-Bold; font-size:18px;">My Profile</b>
        </div>
        
        <div class="container mt-2">
            <div class="row">
                <div class="col">
                    <div class="card" style="width: 25rem;">
                        <ul class="mt-3 list-group list-group-flush">
                            <li class="list-group-item text-center">
                                <span class="dots"></span>
                                <h5 class="mt-3" style="font-family:Mark-bold">Helmi Ismail</h5>
                                <p>user@cgo.co.id</p>
                            </li>
                            <li class="list-group-item text-center">
                                <a href="#">EDIT PROFILE</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="container-fluid">
                                <div class="row p-0">
                                    <div class="col-1 p-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid " width="30" src="@/assets/help.png">
                                    </div>
                                    <div class="col-11">
                                        <h6 style="font-family:NunitoSans-Bold;">Help Center</h6>
                                        <span>Find the best answer to your question</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="container-fluid">
                                <div class="row p-0">
                                    <div class="col-1 p-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid " width="30" src="@/assets/role.png">
                                    </div>
                                    <div class="col-11">
                                        <h6 style="font-family:NunitoSans-Bold;">Manage Role</h6>
                                        <span>Set role permission to manage your service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="container-fluid">
                                <div class="row p-0">
                                    <div class="col-1 p-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid " width="30" src="@/assets/setting.png">
                                    </div>
                                    <div class="col-11">
                                        <h6 style="font-family:NunitoSans-Bold;">Settings</h6>
                                        <span>View and set your account preference</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="container-fluid">
                                <div class="row p-0">
                                    <div class="col-1 p-0 d-flex justify-content-center align-items-center">
                                        <img class="img-fluid " width="30" src="@/assets/logout.png">
                                    </div>
                                    <div class="col-11">
                                        <h6 style="font-family:NunitoSans-Bold;">Log Out</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import NavbarMerchant from '@/components/NavbarMerchant.vue'
export default {
    name: 'Merchant',
    components: {NavbarMerchant},
      data() {
          return {
              selectedContent : 'dashboard',
              selected: null,
              options: [
                { value: null, text: 'December' },
                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' }
            ]
          }
      }
}
</script>

<style scoped>
.sidebar {
  margin: 0;
  padding: 0;
  width: 300px;
  background-color: #233E98;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
    display: block;
    color: white;
    padding: 18px;
    padding-left: 75px;
    margin-left: 47px;
    font-family: NunitoSans-Bold;
    font-size: 17px;
    text-align: left;
    text-decoration: none;
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
}
 
.sidebar a.active {
  background-color: white;
  color: #233E98;
}

.sidebar a:hover:not(.active) {
  background-color: white;
  color: #233E98;
}

div.content {
    margin-left: 300px;
    padding: 0px 0px;
    height: 1000px;
    background-color: #F7F7F7;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
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
.card-footer {
  padding: 0px;
}
.card-footer .row {
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
</style>