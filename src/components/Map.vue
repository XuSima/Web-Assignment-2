<template>
  <div >
    <h2 class="text-center text-secondary pb-2">Map</h2>
    <div class="map-container border rounded">
      <ul class="nav justify-content-center border-bottom">
      </ul>
      <div class="container mt-4"><div class="google-map" id="map"></div></div>
    </div>
  </div>
</template>
<style scoped>
  .google-map {
    width: 100%;
    height: 400px;
  }
</style>
<script>
export default {
  data () {
    return {
      showUserRouter: false,
      showRouter: true,
      map: null,
      lat: 53.342236,
      lng: -6.267183
    }
  },
  mounted () {
    this.initMap()
    this.setMarker()
  },
  methods: {
    initMap () {
      // eslint-disable-next-line no-undef
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
        mapTypeControl: false
      })
    },
    setMarker () {
      // eslint-disable-next-line no-unused-vars,no-undef
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map
      })
    }
  }
}

</script>
