<template>
  <div class="home">
    <Header />
        <div class="container">
            <b-row>
                <b-col md="3">
                    <div class="sidebar-profile">
                        <div class="profile-photos">
                          <img src="@/assets/img/profile.png" alt="John Doe" class="rounded-circle" style="width:100px;">
                              <p style="font-weight:bold">Emma Watson</p>
                              <p>emmawatson@gmail.com</p>
                              <p>+62 856 219 2265</p>
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
                            <p style="font-weight:bold;color:#233E98">IDR 300.0000</p>
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
                         <b-tabs content-class="mt-3">
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
                                    <img src="@/assets/img/empty.png" alt="empty">
                                    <p>No item found</p>
                                  </b-collapse>
                                  <b-collapse id="collapse-2" class="mt-2">
                                  </b-collapse>
                                  <b-collapse id="collapse-3" class="mt-2">
                                  </b-collapse>
                                  <b-collapse id="collapse-4" class="mt-2">
                                  </b-collapse>
                                </b-col>
                              </b-row>
                            </b-tab>
                            <b-tab title="Waiting for Confirmation"><p>I'm the second tab</p></b-tab>
                            <b-tab title="Pending Payment"><p>I'm the second tab</p></b-tab>
                            <b-tab title="Expired Order"><p>I'm the second tab</p></b-tab>
                            <b-tab title="Wishlist"><p>I'm the second tab</p></b-tab>
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

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
