<template>
  <base-section>
    <div class="form-container" v-if="curAppStatus === 0">
      <h2>Join ITDT for the 24-25 school year!</h2>

      <form action="http://localhost:3000/api/join" method="post">
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
          <input type="number" name="classNumber" id="classNumber" required />
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
          There is no word limits for the below questions, but you are
          encouraged to write more so we can learn more about you! We recommend
          you write more than 50 words for the first 3 questions.
        </p>
        <div>
          <label for="about"
            >What do you think ITDT is about? What do we do typically? What
            achievements have we had?</label
          >
          <textarea required name="about" v-model="about"></textarea>
        </div>
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
        <div>
          <label for="availabilities"
            >Our trainings typically take place during lunches after 1pm. How
            many lunches can you commit to the team on a weekly basis?</label
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
}

// for step 2
const about = ref("");
const motivation = ref("");
const experience = ref("");
const commitments = ref("");
const availabilities = ref("");
const streams = ref([]);
const questionBank = {
  web: [
    {
      question:
        "What is the difference between document.getElementById() and document.querySelector() in JavaScript?",
      answers: [
        "document.getElementById() selects an element by its unique ID, while document.querySelector() can select elements based on any valid CSS selector",
        "document.getElementById() returns a single element, while document.querySelector() returns a NodeList of all matching elements",
        "document.getElementById() is faster and more efficient than document.querySelector()",
        "document.getElementById() is a legacy method, while document.querySelector() is a more modern and flexible way to select elements",
      ],
    },
    {
      question: "What is the purpose of the display property in CSS?",
      answers: [
        "To control how an element is displayed on the page, such as inline, block, or none",
        "To set the background color of an element",
        "To define the font style and size of an element",
        "To position an element relative to its parent container",
      ],
    },
    {
      question:
        "What is the difference between async and defer attributes in the <script> tag?",
      answers: [
        "async scripts are downloaded and executed as soon as they are available, while defer scripts are executed in the order they appear in the HTML",
        "async scripts block the parsing of the HTML, while defer scripts do not",
        "async scripts can be executed in any order, while defer scripts are executed in the order they appear in the HTML",
        "async is used for independent scripts, while defer is used for scripts that depend on the DOM",
      ],
    },
    {
      question: "What is the purpose of the flexbox layout in CSS?",
      answers: [
        "To create flexible and responsive layouts by controlling the size, position, and order of elements within a container",
        "To create grid-based layouts with rows and columns",
        "To add drop shadows and other visual effects to elements",
        "To control the scrolling behavior of a webpage",
      ],
    },
    {
      question:
        "What is the difference between var, let, and const when declaring variables in JavaScript?",
      answers: [
        "var has function scope, let has block scope, and const is used for declaring constants",
        "var can be redeclared, let cannot be redeclared, and const must be initialized with a value",
        "var is hoisted to the top of the scope, let and const are not hoisted",
        "All three have the same functionality, the only difference is in their naming conventions",
      ],
    },
  ],
  python: [
    {
      question:
        "What is the purpose of the self parameter in Python class methods?",
      answers: [
        "To refer to the current instance of the class within the method",
        "To pass additional arguments to the method",
        "To define the return type of the method",
        "To call other methods within the same class",
      ],
    },
    {
      question:
        "What is the difference between a list comprehension and a for loop in Python?",
      answers: [
        "List comprehensions are more concise and can be used to create new lists in a single line of code, while for loops are more flexible and can be used for a wider range of tasks",
        "List comprehensions can only be used with lists, while for loops can be used with any iterable object",
        "List comprehensions are faster and more efficient than for loops",
        "List comprehensions are only available in Python 3, while for loops have been available since Python 2",
      ],
    },
    {
      question:
        "What is the purpose of the __str__ and __repr__ methods in Python classes?",
      answers: [
        "__str__ provides a human-readable string representation of an object, while __repr__ provides a more technical, machine-readable representation",
        "__str__ is used for printing objects, while __repr__ is used for debugging purposes",
        "__str__ and __repr__ are used to define the behavior of the print() and repr() functions, respectively",
        "__str__ and __repr__ are used to define the behavior of the + and - operators, respectively",
      ],
    },
    {
      question: "What is the purpose of the with statement in Python?",
      answers: [
        "To simplify the management of resources, such as files or database connections, by automatically handling the setup and teardown of the resource",
        "To define a code block that should be executed repeatedly until a certain condition is met",
        "To handle exceptions that may occur during the execution of a program",
        "To define a function that can be called from other parts of the code",
      ],
    },
    {
      question: "What is the difference between a list and a tuple in Python?",
      answers: [
        "Lists are mutable, meaning their elements can be modified, while tuples are immutable, meaning their elements cannot be modified",
        "Lists are defined using square brackets [], while tuples are defined using parentheses ()",
        "Lists can be used for a wide range of data storage and manipulation tasks, while tuples are primarily used for storing a fixed set of values",
        "Lists are more memory-efficient than tuples, but tuples are generally faster and more lightweight",
      ],
    },
  ],
  hardware: [
    {
      question: "What is the purpose of a CPU cache in a computer?",
      answers: [
        "To store frequently accessed data and instructions, reducing the time required to retrieve them from main memory",
        "To provide additional storage space for the computer's operating system and applications",
        "To manage the flow of data between the CPU and other hardware components, such as the GPU and RAM",
        "To control the power consumption of the computer and extend its battery life",
      ],
    },
    {
      question:
        "What is the difference between a HDD (Hard Disk Drive) and an SSD (Solid-State Drive)?",
      answers: [
        "HDDs use spinning magnetic disks to store data, while SSDs use flash memory chips that have no moving parts",
        "HDDs are generally less expensive per gigabyte of storage, while SSDs are faster and more reliable",
        "HDDs are more suitable for long-term data storage, while SSDs are better for frequent read/write operations",
        "HDDs are more susceptible to physical damage, while SSDs are more resistant to shock and vibration",
      ],
    },
    {
      question:
        "What is the purpose of a GPU (Graphics Processing Unit) in a computer?",
      answers: [
        "To handle the rendering and processing of graphics and video, offloading these tasks from the CPU",
        "To provide additional storage space for the computer's operating system and applications",
        "To manage the flow of data between the CPU and other hardware components, such as the RAM and storage devices",
        "To control the power consumption of the computer and extend its battery life",
      ],
    },
    {
      question:
        "What is the difference between SDRAM and DDR SDRAM in computer memory?",
      answers: [
        "SDRAM is a older, single-data-rate memory technology, while DDR SDRAM is a newer, double-data-rate technology that can transfer data on both the rising and falling edges of the clock signal",
        "SDRAM and DDR SDRAM have the same underlying technology, the only difference is in the naming conventions",
        "SDRAM is faster and more efficient than DDR SDRAM, but requires more power to operate",
        "SDRAM is used for long-term storage, while DDR SDRAM is used for short-term, high-speed memory access",
      ],
    },
    {
      question: "What is the purpose of a motherboard in a computer?",
      answers: [
        "To provide a central hub for connecting and coordinating the various hardware components of a computer, such as the CPU, RAM, storage devices, and expansion cards",
        "To convert the alternating current (AC) from the power outlet into the direct current (DC) required by the computer's components",
        "To manage the flow of data between the CPU and other hardware components, such as the GPU and network interfaces",
        "To control the power consumption of the computer and regulate the temperature of its components",
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
    about: about.value,
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
}
</style>
