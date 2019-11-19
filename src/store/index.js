import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {
  stat
} from 'fs';

Vue.use(Vuex)
axios.defaults.baseURL = 'https://api.staging.cgo.co.id'

let config = {
  headers: {
    'Content-Type': 'application/json'
  }
}
export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    sailing: {
      search_sailing: [],
      bodyDetail: {},
      home_search: [],
      boody_booking: {
        round_trip: true,
        multi_trip: false,
        adult: 1,
        child: 1,
        merchant_id: 1,
        schedules: []
      },
      form: {}
    },
    tour: {
      search_tour: [],
      bodyDetail: {},
      home_search: []
    },
    transport: {
      search_transport: [],
      bodyDetail: {},
      home_search: []
    },
    home: {
      search_home: []
    }
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    token(state) {
      return state.token
    },
    searchHome(state) {
      return state.home.search_home
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    logout(state) {
      localStorage.removeItem('access_token')
      state.token = null
    },
    search(state, data) {
      console.log("dataaaaaaaaaaaa", data)

      if (data.type == "sailing") {
        state.sailing.search_sailing = data.data
      } else if (data.type == "tour") {
        state.tour.search_tour = data.data
      } else if (data.type == "transportation") {
        state.transport.search_tour = data.data
      } else if (data.type == "all" || data.type == null) {
        state.home.search_home = data.data
        var result = [];
        var sailing = [];
        var tour = [];
        var transport = [];
        data.data.forEach(item => {
          if (result.indexOf(item["destination"]) < 0) {
            if (item["destination"] != "") {
              result.push(item["destination"]);
              if (item.type == "yacht") sailing.push(item)
              else if (item.type == "tour") tour.push(item)
              else if (item.type == "transport") transport.push(item)
            }
          }
        });
        state.sailing.home_search = sailing
        state.tour.home_search = tour
        state.transport.home_search = transport
      }
    },
    bodyDetail(state, data) {
      if (data.type == "sailing") {
        Object.assign(state.sailing.bodyDetail, data.data);
      } else if (data.type == "tour") {
        Object.assign(state.tour.bodyDetail, data.data);
      } else if (data.type == "transport") {
        Object.assign(state.transport.bodyDetail, data.data);

      } else if (data.type == "all" || data.type == null) {

      }
    },
    uarr(state, data) {
      var result = [];
      var res = []
      data.a.forEach(item => {
        if (result.indexOf(item[data.key]) < 0) {
          if (item[data.key] != "") {
            result.push(item[data.key]);
            res.push(item);
          }
        }
      });

    },
  },
  actions: {
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/v1/UserApps/registration', {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone_number: data.phone_number,
            password: data.password,
            timezone_id: data.timezone_id
          }, config)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    pinVerification(context, data) {
      let api = '/api/v1/UserApps/PinVerification/';
      return new Promise((resolve, reject) => {
        axios.get(api + data.email + '/' + data.pin, config).then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    login(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('api/v1/UserApps/login', data, config)
          .then(response => {
            const token = response.data.token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout(context) {
      return context.commit('logout')
    },
    search(context, data) {
      config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + context.getters.token,
        },
      }
      return new Promise((resolve, reject) => {
        axios.post('api/v1/UserApps/search/', data.data ? data.data : {}, config)
          .then(response => {
            //console.log("data siling", response.data)
            context.commit("search", {
              type: data.type,
              data: response.data.data
            })
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    detailShip(context, data) {
      let url;
      config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + context.getters.token,
        },
      }
      console.log("data detailSailing", data)
      if (data.type == 'sailing') url = 'api/v1/UserApps/Ship/'
      else if (data.type == 'tour') url = '/api/v1/UserApps/Tour/'
      else if (data.type == 'transport') url = '/api/v1/UserApps/Transportation/'
      return new Promise((resolve, reject) => {
        axios.post(url + data.id, data.data ? data.data : {}, config)
          .then(response => {
            console.log("data detailSailing", response.data)
            //context.commit("search", {type : type, data : response.data.data})
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    bookingSeiling(context, data) {
      return new Promise((resolve, reject) => {
        config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.getters.token,
          },
        }
        console.log("cinfig", config)
        axios.post('/api/v1/UserApps/Booking/Tour', data, config)
          .then(response => {
            const token = response.data.token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })

    },
    stringIDR(context, data) {
      const x = Math.round(data)
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  modules: {}
})
