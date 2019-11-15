<template>
  <div class="tour">
      
  </div>
</template>

<script>
export default {
  name: "BookingTour",
  data() {
    return {
      form: {
        date: null,
        days: null,
        guest: null,
        tour_id: null,
        merchant_id: null,
        room_availability: [
          {
            price: null,
            price_exchange: null,
            price_before_discount: null,
            price_before_discount_exchange: null,
            currency_code: null,
            current_currency_code: null,
            discount_rate: null,
            discount_percent: null,
            promotion_name: null,
            date: null,
            schedule_id: null,
            promotion_id: null,
            room_name: null,
            room_id: null,
            capacity: null
          }
        ]
      }
    };
  }
};
</script>

