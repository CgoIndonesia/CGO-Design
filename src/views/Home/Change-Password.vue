<template>
  <div class="home">
    <Header />
        <b-row align-h="center">
            <b-col md="4" style="margin-top:15%">
                <div class="form-forgot-password">
                    <b-row align-h="center" style="text-align:left">
                      <b-col>
                        <p style="font-size:16px;font-weight:bold">Change Password</p>
                      </b-col>
                    </b-row>
                    <b-row align-h="center" style="text-align:left">
                      <b-col>
                        <p style="font-size:12px;">Create your new password</p>
                      </b-col>
                    </b-row>
                    <b-row align-h="center">
                        <b-col>
                            <b-form>
                                <b-input-group style="margin-bottom:20px">
                                <b-input-group-prepend>
                                    <span class="input-group-text" style="background-color:#DFDFDF"><i><font-awesome-icon icon="lock" /></i></span>
                                </b-input-group-prepend>
                                    <b-form-input style="background-color:#DFDFDF" class="LoginInput" type="password"  placeholder="Password">
                                </b-form-input>
                                </b-input-group>
                                <b-button type="submit" variant="primary" style="width:100%">Change Password</b-button>
                            </b-form>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
