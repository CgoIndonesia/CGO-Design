import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Moment from 'moment'
import {
  stat
} from 'fs';

Vue.use(Vuex)
axios.defaults.baseURL = 'https://api.cgo.co.id'

let config = {
  headers: {
    'Content-Type': 'application/json'
  }
}
export default new Vuex.Store({
  state: {
    profile: JSON.parse(localStorage.getItem('profile')) || null,
    token: localStorage.getItem('access_token') || null,
    sailing: {
      sailing_book: JSON.parse(localStorage.getItem('profile')) || null,
      detail: {},
      detail_search: {},
      search_sailing: [],
      bodyDetail: {},
      home_search: [],
      boody_booking: {
        round_trip: true,
        multi_trip: false,
        adult: 0,
        child: 0,
        merchant_id: 0,
        schedules: []
      },
      form: {
        destination: null,
        date: Moment().format("YYYY-MM-DD"),
        day: 1,
        guest: 1,
      }
    },
    tour: {
      sailing_book: JSON.parse(localStorage.getItem('profile')) || null,
      detail: {},
      detail_search: {},
      search_tour: [],
      bodyDetail: {},
      home_search: [],
      form: {
        destination: null,
        date: Moment().format("YYYY-MM-DD"),
        day: 1,
        guest: 1
      }
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
    },
    day(state) {
      if (state.sailing.form.date) return Moment(state.sailing.form.date).add(state.sailing.form.day - 1, 'd').format("YYYY-MM-DD")
    },
    pax(state) {
      var day = state.tour.detail.days;
      if (day <= 1) day = 1;
      if (state.tour.form.date) return Moment(state.sailing.form.date).add(day - 1, 'd').format("YYYY-MM-DD")
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
      } else if (data.type == "transportation") {
        Object.assign(state.transport.bodyDetail, data.data);

      } else if (data.type == "all" || data.type == null) {

      }
    },
    form(state, data) {
      if (data.type == "sailing") {
        Object.assign(state.sailing.form, data.data);
      } else if (data.type == "tour") {
        Object.assign(state.tour.form, data.data);
      } else if (data.type == "transportation") {
        Object.assign(state.transport.form, data.data);

      } else if (data.type == "all" || data.type == null) {

      }
    }
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
    profile(context) {
      if (context.state.profile == null && context.state.token != null) {
        config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.getters.token,
          },
        }
        return new Promise((resolve, reject) => {
          axios.get('/api/v1/UserApps/My/Profile', config)
            .then(response => {
              localStorage.setItem('profile', JSON.stringify(response.data.data))
              console.log("profile", response.data.data)
              context.state.profile = response.data.data
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      } else {

        console.log("profile", context.state.profile)
        return null
      }

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
    otp(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/api/v1/UserApps/LoginGetOTP ', data, config)
          .then(response => {
            console.log("succes otp")
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
        axios.post('api/v1/UserApps/search', data.data ? data.data : {}, config)
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
      return new Promise((resolve, reject) => {
        axios.post(url + data.id, data.data ? data.data : {}, config)
          .then(response => {
            console.log("data detailSailing", response.data)
            if (data.type == 'sailing') context.state.sailing.detail = response.data.data
            else if (data.type == 'tour') context.state.tour.detail = response.data.data
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
    charge(context, data) {
      return new Promise((resolve, reject) => {
        config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.getters.token,
          },
        }
        console.log("cinfig", config)
        axios.post('/api/v1/Midtrans/Charge/' + data.id, data.data, config)
          .then(response => {
            console.log("res chae", response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })

    },
    bookingShip(context, data) {
      return new Promise((resolve, reject) => {
        var url = 'api/v1/UserApps/Booking/Ship'
        config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.getters.token,
          },
        }
        if (data.type == 'sailing') url = 'api/v1/UserApps/Booking/Ship'
        else if (data.type == 'tour') url = 'api/v1/UserApps/Booking/Tour'
        console.log("cinfig", config)
        axios.post(url, data.data, config)
          .then(response => {
            console.log("res booking", response.data)
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
