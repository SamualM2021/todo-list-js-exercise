
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    /**  Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    *
    */
    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    /**
     * Mark a task as completed
     */
    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;
}

// DRIVER CODE BELOW

const firstTask = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const secondTask = newTask("Do Laundry", "😨");
const tasks = [firstTask, secondTask];

console.log(tasks);
firstTask.logState(); // Clean Cat Litter has not been completed
firstTask.markCompleted();
firstTask.logState(); // Clean Cat Litter has been completed
