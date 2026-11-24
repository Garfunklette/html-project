# Herding Cats: Math Edition --- Development Roadmap

**Project folder:** `herding-cats-math-edition`\
**Display name:** Herding Cats: Math Edition\
**Status:** Planning\
**Target platform:** Windows PC, running locally in a browser\
**Stack:** Svelte 5, JavaScript, Vite, Prettier

## Product vision

Build a cozy, engaging cat-collection adventure that helps a
7--8-year-old learner understand and become confident with two-digit
subtraction within 100, especially subtraction requiring regrouping (for
example, `64 − 38`).

The game should teach the underlying place-value concept---not just
drill answers. A learner should be able to see and manipulate tens and
ones, exchange one ten for ten ones, and then complete the subtraction.

## Product principles

- **Learning before speed:** No countdowns or speed pressure in core
  learning activities.
- **Explain, don't punish:** Incorrect answers trigger supportive
  hints and optional worked examples.
- **Visual place value:** Make tens and ones concrete and manipulable.
- **Reward persistence:** Reward attempts, learning progress, and
  completed missions---not only perfect first attempts.
- **Child-friendly independence:** Clear instructions, large controls,
  readable text, and simple navigation.
- **No monetization pressure:** No ads, in-app purchases,
  subscriptions, loot boxes, or external account requirement.
- **Local-first:** Save progress on the device; no backend is required
  for the initial release.
- **Modular code:** Keep math logic independent from Svelte UI
  components.

## Technology decisions

---

Area Decision

---

Framework Svelte 5

Language JavaScript

Build tool Vite

Formatting Prettier with
`prettier-plugin-svelte`

Editor Visual Studio Code

Initial rendering Svelte components, HTML, CSS, and
SVG

State Svelte 5 runes where reactive state
is needed

Persistence `localStorage` initially

Routing Simple in-app screen navigation
initially

Game engine No separate engine initially;
reassess Phaser if the game needs
complex scenes, physics, or
collision detection

Hosting Runs locally in a browser; static
hosting such as GitHub Pages can be
considered later

---

## Proposed project structure

```text
herding-cats-math-edition/
├── public/
│   └── assets/
│       ├── cats/
│       ├── environments/
│       ├── items/
│       └── sounds/
├── src/
│   ├── lib/
│   │   ├── math/
│   │   │   ├── problem-generator.js
│   │   │   ├── regrouping.js
│   │   │   └── difficulty.js
│   │   ├── game/
│   │   │   ├── progression.js
│   │   │   ├── rewards.js
│   │   │   └── missions.js
│   │   ├── collection/
│   │   │   ├── cats.js
│   │   │   ├── habitats.js
│   │   │   └── inventory.js
│   │   └── storage/
│   │       └── save-manager.js
│   ├── components/
│   │   ├── math/
│   │   │   ├── MathProblem.svelte
│   │   │   ├── BaseTenBlocks.svelte
│   │   │   └── RegroupingWorkshop.svelte
│   │   ├── cats/
│   │   │   ├── CatCard.svelte
│   │   │   └── CatCollection.svelte
│   │   └── sanctuary/
│   │       └── Sanctuary.svelte
│   ├── routes/
│   │   ├── Home.svelte
│   │   ├── RescueMission.svelte
│   │   ├── Collection.svelte
│   │   └── Sanctuary.svelte
│   ├── App.svelte
│   ├── app.css
│   └── main.js
├── .vscode/
│   └── settings.json
├── .prettierrc
├── .prettierignore
├── index.html
├── package.json
└── ROADMAP.md
```

This is a proposed structure, not a requirement to create every file at
project initialization. Add modules when their features are implemented.

---

# Development milestones

## Milestone 0 --- Project foundation

**Goal:** Create a clean, runnable Svelte project with consistent
formatting.

- [x] Create the Vite project using the Svelte template.
- [x] Use the folder/repository name `herding-cats-math-edition`.
- [x] Confirm the project runs locally with `npm run dev`.
- [x] Install and configure Prettier and `prettier-plugin-svelte`.
- [x] Add VS Code format-on-save settings.
- [ ] Add a `.gitignore` and initialize Git.
- [ ] Set the page title to **Herding Cats: Math Edition**.
- [ ] Create a simple responsive application shell.
- [ ] Add a README with setup and run instructions.

**Acceptance criteria:** A fresh checkout can be installed with
`npm install` and started with `npm run dev`; Svelte files format
correctly.

## Milestone 1 --- Subtraction learning engine

**Goal:** Correctly generate and explain two-digit subtraction problems
within 100.

- [ ] Implement problem generation for non-negative answers.
- [ ] Support subtraction with and without regrouping.
- [ ] Add a mode that specifically generates regrouping problems.
- [ ] Track tens and ones separately.
- [ ] Represent the exchange of one ten for ten ones explicitly.
- [ ] Calculate and expose each step of a worked solution.
- [ ] Add difficulty settings and problem constraints.
- [ ] Add automated tests for arithmetic, regrouping, and edge cases.

**Initial target skill:** Problems such as `64 − 38 = 26`.

**Acceptance criteria:** - Generated problems follow the selected
constraints. - Answers and regrouping steps are mathematically
correct. - The math module can be tested without rendering or launching
Svelte. - Tests cover cases such as `64 − 38`, `52 − 27`, `70 − 46`, and
subtraction without regrouping.

## Milestone 2 --- Visual regrouping workshop

**Goal:** Teach why regrouping works through an interactive
tens-and-ones model.

- [ ] Display tens rods and individual ones.
- [ ] Let the learner exchange one ten for ten ones.
- [ ] Show the number before and after the exchange.
- [ ] Guide the learner through subtracting ones first, then tens.
- [ ] Provide optional hints.
- [ ] Provide a worked-example mode.
- [ ] Give encouraging, non-punitive feedback.
- [ ] Make the activity usable with a mouse and keyboard.

**Acceptance criteria:** A learner can demonstrate that 64 is equivalent
to 5 tens and 14 ones, then use that representation to solve `64 − 38`.

## Milestone 3 --- Core rescue-mission game loop

**Goal:** Connect math practice to a simple, satisfying game loop.

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

## Milestone 4 --- Cat collection

**Goal:** Give the learner a longer-term collection goal.

- [ ] Define cat data separately from UI.
- [ ] Create a starter roster of distinct cats.
- [ ] Give each cat a name, appearance, and short personality
      description.
- [ ] Display locked and rescued cats clearly.
- [ ] Unlock cats through transparent, predictable milestones.
- [ ] Add a collection/encyclopedia screen.
- [ ] Ensure collection rewards do not depend on random paid
      mechanics.

**Acceptance criteria:** Rescued cats remain unlocked after restarting
the game, and collection progress is easy to understand.

## Milestone 5 --- Sanctuary and decorations

**Goal:** Let the learner use earned rewards to personalize a cat
sanctuary.

- [ ] Create a sanctuary screen.
- [ ] Add a small initial set of beds, toys, and scratching posts.
- [ ] Allow purchases using earned in-game rewards only.
- [ ] Show owned and not-yet-unlocked items.
- [ ] Add simple placement or selection interactions.
- [ ] Save sanctuary choices locally.

**Acceptance criteria:** The learner can spend earned rewards on
available decorations and see the sanctuary retain those choices.

## Milestone 6 --- Progress tracking and adaptive practice

**Goal:** Identify which subtraction skills need more practice and
respond appropriately.

- [ ] Track attempts and correct answers by skill.
- [ ] Distinguish regrouping errors from calculation or input errors
      where possible.
- [ ] Track hint and worked-example usage.
- [ ] Offer additional practice for skills that remain difficult.
- [ ] Increase difficulty gradually after demonstrated understanding.
- [ ] Include a simple parent-facing progress summary.
- [ ] Keep progress data local to the device.

**Acceptance criteria:** Practice responds to demonstrated skill rather
than merely increasing difficulty after a fixed number of questions.

## Milestone 7 --- Polish and release

**Goal:** Make the game reliable, accessible, and comfortable for
repeated use.

- [ ] Add cat animations and gentle sound effects.
- [ ] Add settings for sound and reduced motion.
- [ ] Check readability, contrast, and control sizes.
- [ ] Test common Windows desktop resolutions.
- [ ] Test keyboard and mouse interactions.
- [ ] Verify save behavior and recovery from invalid saved data.
- [ ] Check that the game works without an internet connection after
      local setup.
- [ ] Add a production build and verify it locally.
- [ ] Document how to back up or reset local progress.

**Acceptance criteria:** The production build runs reliably in a desktop
browser, saves progress, and contains no ads, purchases, or account
requirements.

---

# Initial learning progression

The game should teach the concept in stages rather than immediately
presenting mixed timed drills.

---

Stage Example Learning objective

---

1\. Subtract tens `64 − 30` Understand tens

2\. Subtract ones `64 − 4` Understand ones

3\. Regroup visually `64 − 8` Exchange one ten for
ten ones

4\. Combine `64 − 38` Apply regrouping to
two-digit subtraction

5\. Generalize `73 − 46` Apply the method to new
numbers

6\. Mixed practice Varied problems within Build flexible,
100 independent fluency

---

Do not assume that a correct answer alone demonstrates understanding.
The learner should have opportunities to explain or show the exchange
using the visual model.

# Initial scope: first playable version

The first playable version should stay deliberately small:

1.  A home screen with a clear **Start Rescue** action.
2.  A regrouping-focused problem generator.
3.  An interactive tens-and-ones workshop.
4.  Answer entry, hints, and worked steps.
5.  A small set of collectible cats.
6.  A simple fish reward.
7.  Local save data.

Defer elaborate environments, large collections, complex animations, and
adaptive algorithms until the core learning loop has been tested with
the child.

# Development conventions

- Keep math and progression logic independent of Svelte components.
- Use descriptive function and variable names.
- Prefer small, focused modules and components.
- Format with Prettier before committing.
- Add tests for math logic before building UI around it.
- Keep content such as cats, rewards, and problem constraints in data
  files where practical.
- Do not introduce a backend or external service without a clear need.
- Update this roadmap as milestones and acceptance criteria change.

## Useful commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview

# Format project files
npx prettier --write .
```

---

**Guiding principle:** Make the math understandable, make the cats
delightful, and make progress feel rewarding.
