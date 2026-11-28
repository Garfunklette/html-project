import { generateSubtractionProblem } from "../math/problem-generator.js";
import { missions } from "../game/missions.js";

/*
- [ ] Create the home screen and mission screen.
- [ ] Present one problem at a time.
- [ ] Support answer entry and answer checking.
- [ ] Offer hints and access to the regrouping workshop.
- [ ] Award fish or another simple reward for participation and
      progress.
- [ ] Rescue a cat after a defined mission milestone.
- [ ] Add a mission-complete screen.
- [ ] Avoid timers and streak mechanics that create unnecessary
      pressure.

**Acceptance criteria:** The learner can start a mission, solve
problems, receive supportive feedback, earn rewards, and rescue a cat.


initializeGame()	Load or initialize player progress
startMission(missionId)	Begin a mission
generateProblem()	Request the next problem from problem-generator.js
submitAnswer(value)	Check the submitted answer
useHint()	Record hint usage
completeProblem()	Award participation reward and advance progress
completeMission()	Record completion and award mission rewards
rescueCat(id)	Add a cat to the rescued collection
resetProblem()	Clear the current problem's interaction state
resetMission()	Clear active mission state
*/

// persistent player progress
let numberFish = $state(0);
let rescuedCats = $state({});
let availableMissions = $state({});
let completedMissions = $state({});

// active gameplay state
let currentMission = $state(null);
let currentProblem = $state(null);
let problemsCompleted = $state(0);
let missionComplete = $state(false);

// ------------- Game functions ------------- //

export function initializeGame() {
  //load or initialize player progress
  numberFish = $state(0);
  rescuedCats = $state({});
  availableMissions = $state({});
  completedMissions = $state({});
}

export function startMission(missionId) {
  //open the mission screen
  currentMission = missions.find((m) => m.id === missionId);
  //reset the problem state
  currentProblem = null;
  //get the problem from the problem generator
  currentProblem = generateSubtractionProblem();
}

export function generateProblem() {
  return generateSubtractionProblem();
}
