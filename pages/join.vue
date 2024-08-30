<template>
  <base-section>
    <div class="form-container" v-if="curAppStatus === 0">
      <h2>Join ITDT for the 24-25 school year!</h2>
      <p v-if="isFailed" class="disclaimer">
        Something went wrong with the embedded form. Fill in the below fields
        again to access the second part of the application.
      </p>
      <form action="https://dbsitdt.netlify.app/api/join" method="post">
        <div>
          <label for="fullName">Full Name:</label>
          <input type="text" name="fullName" id="fullName" required />
        </div>
        <div>
          <label for="grade">Class:</label>
          <select id="grade" name="grade" required>
            <option value="">Grade</option>
            <option v-for="option in gradeOptions" :value="option">
              {{ option }}
            </option>
          </select>
          <select id="classLetter" name="letter" required>
            <option value="">Letter</option>
            <option v-for="option in classLetterOptions" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div>
          <label for="classNumber">Class Number:</label>
          <input
            type="number"
            min="1"
            max="40"
            name="classNumber"
            id="classNumber"
            required
          />
        </div>
        <div>
          <label for="email">School Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" name="phone" id="phoneNumber" required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <div
      class="form-container"
      id="secondary-form"
      v-else-if="curAppStatus === 1"
    >
      <form @submit.prevent="submitForm">
        <h2>Tell us more about yourself</h2>
        <p>Do not share your current application URL with others.</p>
        <p>
          There are no word limits for the below questions, but you are
          encouraged to write more so we can learn more about you!
        </p>
        <div>
          <label for="motivation"
            >Why are you interested in joining the IT Development Team? What do
            you hope to learn or contribute?</label
          >
          <textarea required name="motivation" v-model="motivation"></textarea>
        </div>
        <div>
          <label for="experience"
            >What relevant previous experience do you have? Feel free to attach
            links to your projects or link images on your drive so that we can
            know more about it!
          </label>
          <textarea required name="experience" v-model="experience"></textarea>
        </div>
        <div>
          <label for="commitments"
            >Do you have other commitments in school activities e.g. memberships
            in choir, sports, or exco roles?</label
          >
          <textarea
            required
            name="commitments"
            v-model="commitments"
          ></textarea>
        </div>
        <div class="availabilities-container">
          <label for="availabilities"
            >Our trainings typically take place during lunches after 1pm. How
            many lunches can you commit to the team on a weekly basis?
            (1-5)</label
          >
          <input
            required
            name="availabilities"
            type="number"
            min="1"
            max="5"
            v-model="availabilities"
          />
        </div>
        <h2>Quiz</h2>
        <p>
          The quiz you take will be dependent on which stream(s) you select.
          Refer to the recruitment email for more explanation about our
          different streams. If you select more than one stream, you are
          required to do one of the quizzes only (you should not submit this
          application again). If needed, you may google. Have fun!
        </p>
        <div>
          <label for="stream"
            >Interested field of development (this is the stream you will be
            assigned to):</label
          >
          <div>
            <input
              id="stream-web"
              name="stream"
              type="checkbox"
              value="web"
              v-model="streams"
            />
            <label for="stream-web">Web</label>
            <input
              id="stream-python"
              name="stream"
              type="checkbox"
              value="python"
              v-model="streams"
            />
            <label for="stream-python">Python</label>
            <input
              id="stream-hardware"
              name="stream"
              type="checkbox"
              value="hardware"
              v-model="streams"
            />
            <label for="stream-hardware">Hardware</label>
          </div>
        </div>
        <div class="quiz" v-if="questions">
          <label class="question">{{ questions[0].question }} </label>
          <div class="choices">
            <div>
              <input
                value="A"
                v-model="answer1"
                name="q1"
                type="radio"
                id="q1c1"
              />
              <label for="q1c1">{{ questions[0].answers[0] }}</label>
            </div>
            <div>
              <input
                value="B"
                v-model="answer1"
                name="q1"
                type="radio"
                id="q1c2"
              />
              <label for="q1c2">{{ questions[0].answers[1] }}</label>
            </div>
            <div>
              <input
                v-model="answer1"
                name="q1"
                type="radio"
                id="q1c3"
                value="C"
              />
              <label for="q1c3">{{ questions[0].answers[2] }}</label>
            </div>
            <div>
              <input
                v-model="answer1"
                name="q1"
                type="radio"
                id="q1c4"
                value="D"
              />
              <label for="q1c4">{{ questions[0].answers[3] }}</label>
            </div>
          </div>
          <label class="question">{{ questions[1].question }} </label>
          <div class="choices">
            <div>
              <input
                v-model="answer2"
                name="q2"
                type="radio"
                id="q2c1"
                value="A"
              />
              <label for="q2c1">{{ questions[1].answers[0] }}</label>
            </div>
            <div>
              <input
                v-model="answer2"
                name="q2"
                type="radio"
                id="q2c2"
                value="B"
              />
              <label for="q2c2">{{ questions[1].answers[1] }}</label>
            </div>
            <div>
              <input
                v-model="answer2"
                name="q2"
                type="radio"
                id="q2c3"
                value="C"
              />
              <label for="q2c3">{{ questions[1].answers[2] }}</label>
            </div>
            <div>
              <input
                v-model="answer2"
                name="q2"
                type="radio"
                id="q2c4"
                value="D"
              />
              <label for="q2c4">{{ questions[1].answers[3] }}</label>
            </div>
          </div>
          <label class="question">{{ questions[2].question }} </label>
          <div class="choices">
            <div>
              <input
                v-model="answer3"
                name="q3"
                type="radio"
                id="q3c1"
                value="A"
              />
              <label for="q3c1">{{ questions[2].answers[0] }}</label>
            </div>
            <div>
              <input
                v-model="answer3"
                name="q3"
                type="radio"
                id="q3c2"
                value="B"
              />
              <label for="q3c2">{{ questions[2].answers[1] }}</label>
            </div>
            <div>
              <input
                v-model="answer3"
                name="q3"
                type="radio"
                id="q3c3"
                value="C"
              />
              <label for="q3c3">{{ questions[2].answers[2] }}</label>
            </div>
            <div>
              <input
                v-model="answer3"
                name="q3"
                type="radio"
                id="q3c4"
                value="D"
              />
              <label for="q3c4">{{ questions[2].answers[3] }}</label>
            </div>
          </div>
          <label class="question">{{ questions[3].question }} </label>
          <div class="choices">
            <div>
              <input
                v-model="answer4"
                name="q4"
                type="radio"
                id="q4c1"
                value="A"
              />
              <label for="q4c1">{{ questions[3].answers[0] }}</label>
            </div>
            <div>
              <input
                v-model="answer4"
                name="q4"
                type="radio"
                id="q4c2"
                value="B"
              />
              <label for="q4c2">{{ questions[3].answers[1] }}</label>
            </div>
            <div>
              <input
                v-model="answer4"
                name="q4"
                type="radio"
                id="q4c3"
                value="C"
              />
              <label for="q4c3">{{ questions[3].answers[2] }}</label>
            </div>
            <div>
              <input
                v-model="answer4"
                name="q4"
                type="radio"
                id="q4c4"
                value="D"
              />
              <label for="q4c4">{{ questions[3].answers[3] }}</label>
            </div>
          </div>
          <label class="question">{{ questions[4].question }} </label>
          <div class="choices">
            <div>
              <input
                v-model="answer5"
                name="q5"
                type="radio"
                id="q5c1"
                value="A"
              />
              <label for="q5c1">{{ questions[4].answers[0] }}</label>
            </div>
            <div>
              <input
                v-model="answer5"
                name="q5"
                type="radio"
                id="q5c2"
                value="B"
              />
              <label for="q5c2">{{ questions[4].answers[1] }}</label>
            </div>
            <div>
              <input
                v-model="answer5"
                name="q5"
                type="radio"
                id="q5c3"
                value="C"
              />
              <label for="q5c3">{{ questions[4].answers[2] }}</label>
            </div>
            <div>
              <input
                v-model="answer5"
                name="q5"
                type="radio"
                id="q5c4"
                value="D"
              />
              <label for="q5c4">{{ questions[4].answers[3] }}</label>
            </div>
          </div>
        </div>
        <p v-if="errorText">{{ errorText }}</p>
        <div v-if="isLoading" class="wrap">
          <div class="spinner"></div>
        </div>
        <input v-if="canSubmit && !isLoading" type="submit" value="Submit" />
      </form>
    </div>
    <div class="completed-container" v-else>
      <h2>Thanks for the submission!</h2>
      <p>
        Congratulations on taking your first step to becoming a better
        developer!
      </p>
      <p>
        Believe it or not, this form (and the website) was created by members
        over the years too! ITDT is the first in our school to adopt HTML
        emails, embedded forms and now custom forms in recruitment.
      </p>
      <p>
        Please stay notified as we will release the results of your application
        through your email and/or whatsapp.
      </p>
      <p>
        Meanwhile, check out our instagram at
        <a href="https://www.instagram.com/dbsitdt/" target="_blank"
          >@dbsitdt</a
        >
      </p>
    </div>
  </base-section>
</template>
<script setup>
const route = useRoute();

// Check if we are on step 2
const uuid = route.query.uuid;
const isLoading = ref(false);
let curAppStatus = ref(0);
// 0 is unknown (not initiated)
// 1 is on step 2
// 2 is completed
const isFailed = ref(false);
if (uuid) {
  const { data: res } = await useFetch("/api/check?uuid=" + uuid);
  const { appStatus } = res.value;
  if (appStatus === "Unknown uuid") {
    curAppStatus.value = 0;
    await navigateTo("/join");
  } else if (appStatus === "Completed") {
    curAppStatus.value = 2;
  } else {
    curAppStatus.value = 1;
  }
} else {
  curAppStatus.value = 0;
  // Check if failed
  isFailed.value = route.query.failed;
}

// for step 2
const motivation = ref("");
const experience = ref("");
const commitments = ref("");
const availabilities = ref("");
const streams = ref([]);
const questionBank = {
  web: [
    {
      question:
        "Which of the following in HTML creates some text with a hyperlink to Google?",
      answers: [
        "<a url=”https://www.google.com/”>text</a>",
        "<a href=”https://www.google.com/”>text</a>",
        "<url=”https://www.google.com/”>text</url>",
        "<url to=”https://www.google.com/”>text</url>",
      ],
    },
    {
      question:
        "Which of the following is considered to be a programming language?",
      answers: ["HTML", "CSS", "JS", "XSL"],
    },
    {
      question:
        "Which of the following is a valid way to apply CSS to a HTML element?",
      answers: [
        "Inline styles",
        "Internal styles",
        "External stylesheet",
        "All of the above",
      ],
    },
    {
      question: "Which tag can create text with the largest default font size?",
      answers: ["<large>", "<h1>", "<h0>", "<h7>"],
    },
    {
      question: "Which code is used to define a variable in javascript?",
      answers: ["const car", "define car", "create car", "build car"],
    },
  ],
  python: [
    {
      question:
        "Which of the following is typically used to access instance variables and methods within a class?",
      answers: ["this", "self", "inst", "Base"],
    },
    {
      question: "Which keyword is used to define a function?",
      answers: ["fun", "func", "def", "void"],
    },
    {
      question: "What is used to start a comment in Python?",
      answers: ["//", "<!--", "/*", "#"],
    },
    {
      question: "Which is used to handle errors/exceptions in Python?",
      answers: ["try/catch", "try/except", "catch/throw", "catch/return"],
    },
    {
      question: "What is the output of the following code? print(type([]))",
      answers: [
        "<class ‘list’>",
        "<class ‘dictionary’>",
        "<class ‘array’>",
        "<class ‘set’>",
      ],
    },
  ],
  hardware: [
    {
      question: "Which of the following is the correct name for GPU?",
      answers: [
        "General Processing Unit",
        "Graphics Processing Unit",
        "Gaming Processing Unit",
        "Grid Processing Unit",
      ],
    },
    {
      question:
        "Which of the following is a possible clock speed of a GPU when running a game?",
      answers: ["9Hz", "24dB", "2.4GHz", "150W"],
    },
    {
      question:
        "Which of the following best describes the function of RAM in a computer system?",
      answers: [
        "Long-term data storage",
        "Instruction processing",
        "Graphics rendering",
        "Temporary data storage",
      ],
    },
    {
      question:
        "Which of the following is a legitimate Intel CPU in production?",
      answers: [
        "Intel i9-RX790",
        "Intel Core Ultra 9 185H",
        "Intel 8 Pro Max",
        "Intel S890",
      ],
    },
    {
      question:
        "Which of the following best describes the function of BIOS in computers?",
      answers: [
        "System booting",
        "Network connection",
        "Fan control",
        "Graphics processing",
      ],
    },
  ],
};
const questions = computed(() => {
  if (streams.value) {
    const selectedStream = Array.from(streams.value)[0];
    return questionBank[selectedStream];
  } else {
    return [];
  }
});
const answer1 = ref(null);
const answer2 = ref(null);
const answer3 = ref(null);
const answer4 = ref(null);
const answer5 = ref(null);
watch(questions, function () {
  answer1.value = null;
  answer2.value = null;
  answer3.value = null;
  answer4.value = null;
  answer5.value = null;
});
const errorText = ref("");
const answers = computed(() => {
  return [
    answer1.value,
    answer2.value,
    answer3.value,
    answer4.value,
    answer5.value,
  ];
});
const canSubmit = computed(() => answers.value.every((answer) => answer));
const submitForm = async function () {
  const body = {
    motivation: motivation.value,
    experience: experience.value,
    commitments: commitments.value,
    availabilities: availabilities.value,
    streams: Array.from(streams.value),
    answers: answers.value,
    uuid: uuid,
  };
  try {
    isLoading.value = true;
    await $fetch("/api/join", {
      method: "post",
      body: JSON.stringify(body),
    });
    errorText.value = "";
    curAppStatus.value = 2;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    errorText.value =
      "Something went wrong. Try again and contact dbs20072265@g.dbs.edu.hk if this issue persists.";
  }
};

// for step 1
const gradeOptions = [7, 8, 9, 10, 11, 12];
const classLetterOptions = ["D", "S", "G", "P", "M", "L", "A", "J", "T"];
</script>
<style lang="scss" scoped>
.form-container,
.completed-container {
  background: rgba(41, 46, 51, 0.699);
  backdrop-filter: blur(5px);
  padding: clamp(1rem, 2vw, 2rem);
  // padding: 2vw;
  color: white;
}
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid rgb(0, 6, 37);
  border-left: 4px solid white;
  animation: spinner 1.5s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
}
.select {
  display: flex;
  gap: 1rem;
}
h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}
.disclaimer {
  margin-bottom: 1rem;
  color: rgb(255, 99, 99);
}
label {
  margin-right: 1rem;
}
input,
textarea {
  padding-block: 5px;
  border: none;
  border-bottom: 2px solid grey;
  background: none;
  color: white;
}

select {
  padding: 5px 0.5ch;
  border: none;
  background: none;
  color: white;
  width: 70px;
}
option {
  color: black;
}
input[type="text"] {
  padding-left: 0.5rem;

  min-width: 10rem;
}
input[type="submit"] {
  padding: 0.3rem 1rem;
  font-family: inherit;
  color: white;
  border: none;
  border-radius: 15px;
  background: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.3rem;
}
.completed-container {
  p {
    font-size: 1.2rem;
  }
  a {
    text-decoration: underline;
  }
}
.wrap {
  /*   Flex Perfect Centring  */
  display: flex;
  justify-content: center;
  align-items: center;
  /*   Colors */
  box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
}
#secondary-form {
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.7rem;
  }
  h2 {
    margin-bottom: 0.7rem;
  }
  div:not(.wrap, .spinner) {
    width: 100%;
  }
  textarea {
    display: block;
    width: 80%;
    resize: none;
    margin-top: 0.5rem;
  }
  textarea,
  input {
    font-size: 1rem;
  }
  .quiz .question {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
  .choices {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 1.1rem;
  }
  .availabilities-container input {
    width: 250px;
  }
}
</style>
