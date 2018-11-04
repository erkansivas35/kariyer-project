<template>
<div class="job-list">
  <div class="job-item" v-for="(job, index) in jobData" :key="index">
    <router-link :to="jobDetailGo(job.jobId)">
      <div class="title">
        <h3>{{ job.positionName }}</h3>
      </div>
      <div class="subtitle">
        <p>{{ job.companyName }}</p>
      </div>
      <div class="city">
        <p>{{ job.cityName }}</p>
      </div>
      <div class="date">
        <p>{{ job.dateTime }}</p>
      </div>
    </router-link>
  </div>
  <div class="job-not-found" v-if="jobData.length == 0">
    <p>Aradığınız kriterlere uygun ilan bulunamamıştır.</p>
  </div>
</div>
</template>

<script>
export default {
  name: "jobList",
  props: {
    jobData: {
      type: Array,
      required: true
    }
  },
  methods: {
    jobDetailGo(id) {
      return `/jobdetail/${id}`;
    }
  }
};
</script>

<style lang="scss">
.job-list {
  .job-item {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;

    &:hover {
      background: #f7f7f7;
    }

    .date {
      text-align: right;
    }

    & a {
      text-decoration: none;
      color: #2c3e50;
    }
  }

  .job-not-found {
    height: calc(100vh - 118px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
}
</style>
