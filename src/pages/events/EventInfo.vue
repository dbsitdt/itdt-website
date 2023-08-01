<template>
  <base-section id="ive-event">
    <h4>{{ title }}</h4>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <div class="grid">
      <img id="img1" :src="getImgUrl(imgList[0])" class="gd-img" alt="#" />
      <img id="img2" :src="getImgUrl(imgList[1])" class="gd-img" alt="#" />
      <img id="img3" :src="getImgUrl(imgList[2])" class="gd-img" alt="#" />
      <img id="img4" :src="getImgUrl(imgList[3])" class="gd-img" alt="#" />
      <img id="img5" :src="getImgUrl(imgList[4])" class="gd-img" alt="#" />
      <img id="img6" :src="getImgUrl(imgList[5])" class="gd-img" alt="#" />
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
    getImgUrl(path) {
      const images = require(`../../assets/events/${this.selectedEvent.id}/${path}`);
      return images;
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
  font-size: clamp(3rem, 4vw, 4rem);
}
p {
  color: white;
  line-height: 1.5;
  font-size: 1.2rem;
}
p.date {
  font-size: 1.5rem;
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
  background-color: grey;
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
