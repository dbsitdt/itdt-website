<template>
  <base-section
    ><div id="form-container">
      <h2>Join ITDT Now!</h2>
      <form action="https://ITDT-misc.timothyso2.repl.co/quiz" method="POST">
        <label>Class:</label>
        <input
          type="number"
          name="grade"
          min="7"
          max="12"
          step="1"
          style="width: 5ch"
          required
        />
        <select name="class" required>
          <option value="D">D</option>
          <option value="S">S</option>
          <option value="G">G</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="A">A</option>
          <option value="J">J</option>
          <option value="T">T</option>
        </select>
        <br /><br />
        <label>Class Number:</label>
        <input
          type="number"
          name="number"
          min="1"
          max="30"
          step="1"
          style="width: 5ch"
          required
        />
        <br /><br />
        <label>Full Name:</label>
        <input
          type="text"
          placeholder="e.g. Chan Tai Man"
          name="name"
          style="width: 15ch"
          required
        />
        <br /><br />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          placeholder="e.g. 12345689"
          style="width: 10ch"
          required
        />
        <br /><br />
        <label>Preferred Stream:</label>
        <div
          style="border-radius: 20px; width: fit-content; padding: 5px"
          class="select"
        >
          <label for="web"
            ><input
              type="radio"
              id="web"
              name="stream"
              value="web"
              required
            />Web</label
          >
          <label for="app"
            ><input type="radio" id="app" name="stream" value="app" />App</label
          >
          <label for="hardware"
            ><input
              type="radio"
              id="hardware"
              name="stream"
              value="hardware"
            />Hardware</label
          >
        </div>
        <br />
        <input type="submit" class="btn-primary" value="Send Application" />
      </form></div
  ></base-section>
</template>
<style scoped>
#form-container {
  background: rgba(41, 46, 51, 0.699);
  backdrop-filter: blur(5px);
  padding: 2vw;
  color: white;
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
select {
  border-radius: 20px;
  padding: 5px 0.5ch;
  border: 1px solid grey;
}
input[type="text"] {
  padding-left: 0.5rem;

  min-width: 10rem;
}
input[type="submit"] {
  padding: 1rem 1rem;
  font-family: inherit;
  color: white;
  border: none;
  background: var(--primary-color);
  font-size: 1rem;
  cursor: pointer;
}
</style>
