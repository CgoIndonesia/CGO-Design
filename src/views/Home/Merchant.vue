<template>
  <div>
    <Header />
    <div class="hero-image">
    <div class="hero-text">
        <h1 style="font-size:33px">Let's  bring sea industry to the next level together</h1>
    </div>
    </div>
        <b-card id="merchant-form" style="position: absolute;
            width: 60%;
            text-align: center;
            left: 20%;
            top: 11%;">
            <div>
                <b-tabs content-class="mt-3" align="center">
                    <b-tab title="Individual" active>
                            <b-form class="row" >
                            <b-form-group
                                id="input-group-1"
                                label="Your name *"
                                label-for="input-1"
                                class="col-md-12"
                            >
                                <b-form-input
                                id="input-1"
                                type="text"
                                required
                                placeholder="Enter name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group class="col-md-6" id="input-group-2" label="Email:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                required
                                type="email"
                                placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group class="col-md-6" id="input-group-3" label="Phone Number *" label-for="input-3">
                                <b-form-input
                                id="input-2"
                                required
                                placeholder="ex: 0821xxx"
                                ></b-form-input>
                            </b-form-group>
                            
                            <b-form-group class="col-md-12" label="Address *">
                                <b-form-textarea
                                id="textarea-rows"
                                placeholder="Your address here"
                                rows="6"
                            ></b-form-textarea>
                            </b-form-group>

                            <b-form-group class="col-md-12 d-flex" id="input-group-4" label="Service Type">
                                <b-form-checkbox-group  id="checkboxes-4">
                                <b-form-checkbox value="me">Sailing</b-form-checkbox>
                                <b-form-checkbox value="that">Tour</b-form-checkbox>
                                <b-form-checkbox value="that">Transportation</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>

                            <b-form-group class="col-md-12" label="Type of Ship *">
                                <b-form-select></b-form-select>
                            </b-form-group>

                            <b-form-group class="col-md-12" label="Message">
                                <b-form-textarea
                                id="textarea-rows"
                                placeholder="Write a message"
                                rows="6"
                            ></b-form-textarea>
                            </b-form-group>

                            <b-button style="    width: 35% !important;
                            margin-left: auto;
                            margin-right: auto;" type="submit" variant="primary">Submit</b-button>
                            </b-form>
                    </b-tab>
                    <b-tab title="Company">
                        <b-form class="row" >
                            <b-form-group
                                id="input-group-1"
                                label="Company name *"
                                label-for="input-1"
                                class="col-md-12"
                            >
                                <b-form-input
                                id="input-1"
                                type="text"
                                required
                                placeholder="Company name"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group class="col-md-12" label="Address *">
                                <b-form-textarea
                                id="textarea-rows"
                                placeholder="Your address here"
                                rows="6"
                            ></b-form-textarea>
                            </b-form-group>

                            <b-form-group class="col-md-6" id="input-group-2" label="Email:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                required
                                type="email"
                                placeholder="Enter email"
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group class="col-md-6" id="input-group-3" label="Phone Number *" label-for="input-3">
                                <b-form-input
                                id="input-2"
                                required
                                placeholder="ex: 0821xxx"
                                ></b-form-input>
                            </b-form-group>                            

                            <b-form-group class="col-md-12 d-flex" id="input-group-4" label="Service Type">
                                <b-form-checkbox-group  id="checkboxes-4">
                                <b-form-checkbox value="me">Sailing</b-form-checkbox>
                                <b-form-checkbox value="that">Tour</b-form-checkbox>
                                <b-form-checkbox value="that">Transportation</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>

                            <b-form-group class="col-md-12" label="Type of Ship *">
                                <b-form-select></b-form-select>
                            </b-form-group>

                            <b-form-group class="col-md-12" label="Message">
                                <b-form-textarea
                                id="textarea-rows"
                                placeholder="Write a message"
                                rows="6"
                            ></b-form-textarea>
                            </b-form-group>

                            <b-button style="    width: 35% !important;
                            margin-left: auto;
                            margin-right: auto;" type="submit" variant="primary" @click="$bvModal.show('modal-3')">Submit</b-button>
                            </b-form>
                            <b-modal id="modal-1" title="BootstrapVue" hide-header hide-footer>
                <div class="text-center">
                  <h5>Thank You.. We will contact you soon!</h5>
                <p class="my-4">Let’s bring Indonesia’s sea industry to the next level together</p>
                <img src="@/assets/Empty state sailing-06 1.png" alt="">
                <div>
                  <b-button variant="outline-primary" @click="$bvModal.hide('modal-3')">Close</b-button>
                </div>
                </div>
              </b-modal>
                    </b-tab>
                </b-tabs>
            </div>
        </b-card>
    <Footer />
  </div>
</template>

<script>
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