<template>
  <div class="video">
    <div class="video__thumb">
      <img :src="video.snippet.thumbnails.default.url" :alt="channelTitle" />
    </div>
    <div class="video__main">
      <div class="video__info">
        <p>{{ video.snippet.title }}</p>
      </div>
      <div class="video__buttons">
        <iframe
          class="button-api-frame"
          :src="`https://api.vevioz.com/@api/button/mp3/${video.id.videoId}`"
          allowtransparency="true"
          scrolling="no"
          style="border:none"
          >"></iframe
        >
        <iframe
          class="button-api-frame"
          :src="`https://api.vevioz.com/@api/button/mp4/${video.id.videoId}`"
          allowtransparency="true"
          scrolling="no"
          style="border:none"
          >"></iframe
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: Object,
  },
};
</script>

<style scoped>
.video {
  display: flex;
  cursor: pointer;
  margin-bottom: 2px;
  padding: 5px;
  border-radius: 5px;
}
.video:nth-child(odd) {
  background: #f5f5f5f5;
}
.video__main {
  margin-left: 5px;
}
.video__info > p {
  font-size: 15px;
}
.button-api-frame {
  width: 150px !important;
  height: 25px !important;
  margin: 0 5px !important;
  background-color: lightseagreen !important;
  border-radius: 5px;
  font-size: 12px !important;
}
</style>
