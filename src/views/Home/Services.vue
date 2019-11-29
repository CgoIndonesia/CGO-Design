<template>
<div>
<Header />
    <div class="hero-image" style="height: 45vh !important;">
    <div class="hero-text" style="top: 45% !important;">
        <h1 style="font-size:33px">Learn About Our service</h1>
    </div>
    </div>

    <div class="mb-5 d-flex justify-content-center services-menu">
        <b-button>Sailing</b-button>
        <b-button>Tour</b-button>
        <b-button>Transportation</b-button>
    </div>
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