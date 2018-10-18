<template>
 <div class="job-search">
  <select v-model="city" @change="citySelected()">
    <option value="">İl Seçiniz</option>
    <option :value="index" v-for="(city, index) in cityData" :key="index">
      {{ city }}
    </option>
  </select>
  <input type="text" v-model="position" placeholder="Posizyon Giriniz" @keyup.prevent="searchJob">
  <p class="info"><small>Arama yapmak için şehir seçebilir veya posizyon adı girebilirsiniz.</small></p>
</div>
</template>

<script>
export default {
  name: "jobSearch",
  props: {
    cityData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      city: "",
      position: ""
    };
  },
  methods: {
    citySelected() {
      this.position = "";
      this.$emit("cityChanged", this.city);
    },
    searchJob() {
      this.$emit("searchJob", this.position);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/css/responsive-mixin.scss";

.job-search {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;

  & select,
  input {
    border: none;
    border-radius: 0;
    appearance: none;
    padding: 15px 25px;
    border: 1px solid #ccc;
    font-size: 16px;

    &:focus {
      outline: 0;
    }
  }

  & select {
    width: 20%;

    @include mq("mobile") {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  & input {
    width: calc(80% - 52px);

    @include mq("mobile") {
      width: 100%;
    }
  }

  & .info {
    flex-basis: 100%;
    text-align: right;
  }
}
</style>
