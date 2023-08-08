<template>
  <base-section id="ive-event">
    <h4>{{ title }}</h4>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <div class="grid">
      <img
        id="img1"
        :style="{
          background: `url(${getImgUrl(
            imgList[0],
            true
          )}) 0% 0% / cover no-repeat`,
          backdropFilter: 'blur(20px)',
        }"
        :src="getImgUrl(imgList[0])"
        class="gd-img"
        alt="#"
      />
      <img
        id="img2"
        :style="{
          background: `url(${getImgUrl(
            imgList[1],
            true
          )}) 0% 0% / cover no-repeat`,
        }"
        :src="getImgUrl(imgList[1])"
        class="gd-img"
        alt="#"
      />
      <img
        id="img3"
        :style="{
          background: `url(${getImgUrl(
            imgList[2],
            true
          )}) 0% 0% / cover no-repeat`,
        }"
        :src="getImgUrl(imgList[2])"
        class="gd-img"
        alt="#"
      />
      <img
        id="img4"
        :style="{
          background: `url(${getImgUrl(
            imgList[3],
            true
          )}) 0% 0% / cover no-repeat`,
        }"
        :src="getImgUrl(imgList[3])"
        class="gd-img"
        alt="#"
      />
      <img
        id="img5"
        :style="{
          background: `url(${getImgUrl(
            imgList[4],
            true
          )}) 0% 0% / cover no-repeat`,
        }"
        :src="getImgUrl(imgList[4])"
        class="gd-img"
        alt="#"
      />
      <img
        id="img6"
        :style="{
          background: `url(${getImgUrl(
            imgList[5],
            true
          )}) 0% 0% / cover no-repeat`,
        }"
        :src="getImgUrl(imgList[5])"
        class="gd-img"
        alt="#"
      />
    </div>
  </base-section>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedEvent: null,
    };
  },
  computed: {
    title() {
      return this.selectedEvent.title;
    },
    description() {
      return this.selectedEvent.description;
    },
    date() {
      return this.selectedEvent.date;
    },
    imgLink() {
      return `../../assets/events/${this.selectedEvent.id}/`;
    },
    imgList() {
      return this.selectedEvent.images;
    },
  },
  methods: {
    getImgUrl(path, small = false) {
      if (small) path = this.convertToSmallWebP(path);
      const images = require(`../../assets/events/${this.selectedEvent.id}/${path}`);

      return images;
    },
    convertToSmallWebP(path) {
      const extension = ".webp";

      if (path.endsWith(extension)) {
        const filename = path.slice(0, -extension.length); // Remove the extension
        const newFilename = filename + "-small" + extension; // Append "-small" before the extension
        return newFilename;
      }

      // If the path doesn't end with ".webp", return the original path
      return path;
    },
  },

  created() {
    this.selectedEvent = this.$store.getters.getEventsList.find(
      (event) => event.id === this.id
    );
  },
};
</script>
<style scoped>
h4 {
  color: white;
  font-size: clamp(2.5rem, 4vw, 4rem);
}
p {
  color: white;
  line-height: 1.5;
  font-size: clamp(1.05rem, 3vw, 1.2rem);
}
p.date {
  font-size: clamp(1.3rem, 2vw, 1.5rem);
  margin-bottom: 1rem;
}

.grid {
  width: 100%;
  height: 60vh;
  margin-top: 10vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 30vh 30vh;
  gap: 2vw;
  background-size: cover;
}
#img1 {
  grid-column: 1 / span 3;
  grid-row: 1 / span 1;
}
#img2 {
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
}
#img3 {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
}
#img4 {
  grid-column: 4 / span 1;
  grid-row: 1 / span 2;
}
#img5 {
  grid-column: 5 / span 2;
  grid-row: 1 / span 1;
}
#img6 {
  grid-column: 5 / span 2;
  grid-row: 2 / span 1;
}
img {
  border-radius: 20px / 20px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 300ms transform;
}
img:hover {
  transform: scale(1.05);
}
h1 {
  color: #fff;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  font-size: clamp(2.5rem, 8vw, 85px);
}

@media (max-width: 933px) {
  .grid {
    height: auto;
    grid-template-rows: 30vh 30vh 30vh;
    grid-template-columns: 1fr 1fr 1fr;
  }
  #img1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
  #img2 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  #img3 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
  #img4 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
  }
  #img5 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
  #img6 {
    grid-column: 3 / span 2;
    grid-row: 3 / span 1;
  }
}

@media (max-width: 454px) {
  .grid {
    grid-template-rows: 30vh 20vh 20vh 30vh;
    grid-template-columns: 1fr 1fr;
  }
  #img1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
  #img2 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  #img3 {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
  #img4 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 2;
  }
  #img5 {
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
  }
  #img6 {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
  }
}
</style>
