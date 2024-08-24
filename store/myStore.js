import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    bgColor: "#1e2121",
    isLoading: false,
    cursorText: "",
    eventsList: [
      {
        id: "ive",
        title: "Visit to IVE",
        description:
          "Our team visited the Hong Kong Institute of Vocational Education in Chun Wan to explore the latest advancements in technology. The team members were given a tour of the campus and shown the latest VR technology used for software development, as well as its practical applications as software products in various fields. They also took part in an introductory workshop where they utilized IoT technology to program a weather application, utilizing sensors and controllers to obtain real-time data. In addition, members also joined a workshop about the importance of cybersecurity and safety, especially in an increasingly tech-driven world. The field trip was a success and provided valuable experience for the team members about the practical use of technology.",
        date: "November 2022",
        images: ["ive1", "ive2", "ive3", "ive4", "ive5", "ive6"],
      },
      {
        id: "dream-district-competition",
        title: "Dream District Competition",
        description:
          "Our members took part in the Dream District Metaverse Competition in two teams. Despite the tight deadline after the exams, the teams worked diligently to create unique works, breaking into the finals and obtaining first runner-up and third runner-up respectively.",
        date: "June 2023",
        images: [
          "dream-district-competition1",
          "dream-district-competition2",
          "dream-district-competition3",
          "dream-district-competition4",
          "dream-district-competition5",
          "dream-district-competition6",
        ],
      },
      {
        id: "osaka",
        title: "DBS IT and Cultural Trip to Osaka",
        description:
          "The trip to Osaka was a journey of unity and camaraderie for members, where they shared meals and exchanged ideas and insights. Amidst the vibrant and dynamic setting of Japan's second-largest city, the participants became, not tourists, but a tightly knit group of students bonded by a shared passion for technology and teamwork. Such can be seen from members as they all worked together to design the trip banner and badge; as well as passing gentle reminders amongst themselves on what times to wake up or when to depart for another destination in spite of some mistakes. From visits to the local incineration plants, recycling facilities and other points of societal interests, the trip has perpetuated the school’s cultural heritage in accordance with the educational goal of all-round excellence, with special emphasis on values education, social services and sense of unity. In addition, the widening of horizons in Japan has upheld whole-person education, instilled and strengthened our national identity and sense of belonging towards our school and country. The trip was definitely a transformative experience that was not only educational and insightful, but also one that brought members closer.",
        date: "July 2023",
        images: ["osaka1", "osaka2", "osaka3", "osaka4", "osaka5", "osaka6"],
      },
      {
        id: "easter-camp",
        title: "IT Easter Camp",
        description:
          "Our team hosted an overnight IT Easter Camp in the Wu Kai Sha Youth Village, where members had the chance to delve into a plethora of technical topics, such as a workshop about machine learning basics, where members trained their own AI model to recognize drawings. Additionally, members had the chance to learn about the anatomy of a computer and were introduced to UI/UX design, honing their skills in these key areas of technology and design. Besides, we were also able to organize team-bonding activities such as a checkpoint game, where members solved questions about programming against the clock, strengthening teamwork and collaboration. We're looking forward to hosting even more activities in the future to not only foster a sense of belonging among our members but also promote the importance of technology.",
        date: "April 2023",
        images: [
          "easter-camp1",
          "easter-camp2",
          "easter-camp3",
          "easter-camp4",
          "easter-camp5",
          "easter-camp6",
        ],
      },
    ],
  }),
  actions: {
    changeCursorText(payload) {
      this.cursorText = payload;
    },
    changeLoading(loading) {
      this.isLoading = loading;
    },
  },
  getters: {
    getCursorText() {
      return this.cursorText;
    },
    getEventsList() {
      return this.eventsList;
    },
    getLoadingStatus() {
      return this.isLoading;
    },
  },
});
