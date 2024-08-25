<template>
  <base-section id="ive-event">
    <h4>{{ title }}</h4>
    <p class="date">{{ date }}</p>
    <p>{{ description }}</p>
    <div class="grid">
      <img
        v-for="(img, i) in imgList"
        :id="'img' + (i + 1)"
        :style="{
          background: `url(${getImgUrl(img, true)}) 0% 0% / cover
      no-repeat`,
          backdropFilter: 'blur(20px)',
        }"
        :src="getImgUrl(img)"
        class="gd-img"
        alt="#"
        draggable="false"
      />
    </div>
  </base-section>
</template>
<script setup>
import { useStore } from "~/store/myStore";
import { filename } from "pathe/utils";

const route = useRoute();
const eventId = route.params.id;

const store = useStore();
const eventsList = store.getEventsList;
const selectedEvent = eventsList.find((event) => event.id === eventId);
if (!selectedEvent) {
  throw createError({
    statusCode: 404,
    statusMessage: `Event not found`,
    fatal: true,
  });
}
const title = computed(() => selectedEvent?.title);
const description = computed(() => selectedEvent?.description);
const date = computed(() => selectedEvent?.date);
// const imgLink = computed(
//   () => `../../assets/events/${selectedEvent?.id}/`
// );
const imgList = computed(() => selectedEvent?.images);
const getImgUrl = (path, small = false) => {
  if (small) path = convertToSmallWebP(path);
  const glob = import.meta.glob(`~/assets/events/*/*.webp`, {
    eager: true,
  });
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  );
  return images[path];
};

const convertToSmallWebP = (path) => {
  const filename = path + "-small";
  return filename;
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
