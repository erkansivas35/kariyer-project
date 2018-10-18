<template>
  <div class="app">
    <div class="content">
      <div class="company-info">
        <h1>İŞ İLANI DETAYI</h1>
        <h3>Posizyon: {{ jobDetail.positionName }}</h3>
        <p><strong>Şirket Adı:</strong> {{ jobDetail.companyName }}</p>
        <p><strong>Adres:</strong> {{ jobDetail.address }}</p>
        <p>
          <strong>Telefon: </strong> 
          <a :href="phoneNumber()" class="tel">
            {{jobDetail.contactPhone.countryCallingCode}}
            {{jobDetail.contactPhone.areaCode}}
            {{jobDetail.contactPhone.number}}
          </a>
        </p>

        <p><small>Bu ilan {{ jobDetail.distance }}.</small></p>
        <p><small>İlan yayınlanma tarihi {{ jobDetail.dateTime }}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import JobDetail from "../data/data.json";

export default {
  name: "jobDetail",
  data() {
    return {
      jobDetail: []
    };
  },
  methods: {
    phoneNumber() {
      return `tel:${this.jobDetail.contactPhone.countryCallingCode}${
        this.jobDetail.contactPhone.areaCode
      }${this.jobDetail.contactPhone.number}`;
    }
  },
  created() {
    this.jobDetail = JobDetail.result.items.filter(
      job => job.jobId == this.$route.params.id
    )[0];
  }
};
</script>

<style lang="scss">
.tel {
  text-decoration: none;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
}
.company-info {
  margin-bottom: 20px;
}
.company-info > * {
  line-height: 26px;
}
</style>
