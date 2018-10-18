<template>
  <div class="app">
    <div class="content">
      <Search :cityData="cityData" v-on:cityChanged="cityChange" v-on:searchJob="searchJob" />
      <JobList :jobData="jobData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CityJson from "../data/city.json";
import JobData from "../data/data.json";
//components
import Search from "@/components/Search";
import JobList from "@/components/JobList";

export default {
  name: "home",
  data() {
    return {
      cityData: [],
      jobData: [],
      cityPlate: ''
    };
  },
  methods: {
    cityChange(cityPlate) {
      this.cityPlate = cityPlate;
      this.jobData = JobData.result.items.filter(city => {
        return city.cityPlate.includes(cityPlate);
      });
    },
    searchJob(seachQuery) {
      this.jobData = JobData.result.items.filter(query => {
        return query.positionName
          .toLowerCase()
          .includes(seachQuery.toLowerCase()) && query.cityPlate.includes(this.cityPlate);
      });
    }
  },
  created() {
    this.jobData = JobData.result.items;
    this.cityData = CityJson;
  },
  components: { Search, JobList }
};
</script>

<style lang="scss">
.app {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    max-width: 768px;
    width: 100%;
  }
}
</style>
