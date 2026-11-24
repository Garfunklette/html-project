# Herding Cats: Math Edition --- Game Design Document

**Document version:** 1.0\
**Status:** Approved design baseline\
**Project folder:** `herding-cats-math-edition`\
**Display name:** Herding Cats: Math Edition\
**Target player:** One child, approximately 7--8 years old (Grade 2)\
**Primary platform:** Windows PC, local browser\
**Technology baseline:** Svelte 5, JavaScript, Vite, Prettier

## 1. Product vision

Herding Cats: Math Edition is a cozy, whimsical storybook adventure in
which the player explores a neighborhood, rescues cats, and builds a
welcoming sanctuary. Mathematics is the central way the player makes
progress.

The first educational focus is subtraction within 100, especially
two-digit subtraction that requires regrouping. The game should help the
learner understand place value and the exchange of one ten for ten
ones---not merely memorize a borrowing rule.

The experience should feel like a small game first, with learning
naturally integrated into its missions. It should be supportive, calm,
rewarding, and suitable for repeated short play sessions.

## 2. Design pillars

1.  **Teach the idea, not just the answer.** Use manipulable tens and
    ones, clear language, and worked examples.
2.  **Adventure gives practice a purpose.** Math challenges are part of
    rescuing cats and helping the neighborhood.
3.  **Progress is personal.** Adapt practice to demonstrated skills; do
    not force every learner through the same pace.
4.  **Mistakes are safe.** No lost currency, lives, or rescued cats for
    incorrect answers.
5.  **Collection is transparent.** Cats and decorations are earned
    through known goals, never randomized paid mechanics.
6.  **Keep the game calm and accessible.** No countdowns in core
    learning, no punitive streaks, readable text, large controls, and
    mouse/keyboard support.
7.  **Local-first and non-commercial.** No ads, IAP, subscriptions,
    accounts, or backend in the initial product.

## 3. Target player and session

-   Designed around a 7--8-year-old Grade 2 learner.
-   Primary interaction is mouse and keyboard on a Windows desktop.
-   A typical session should work well in roughly 5--15 minutes, without
    requiring the player to finish a long chapter.
-   Instructions should be short, concrete, and readable independently,
    with optional parent support.
-   Use encouraging language without babyish tone.

## 4. Game premise and world

The player helps run a small cat sanctuary. Cats have wandered into
nearby places---gardens, parks, alleys, market lanes, and woodland
paths---and need help finding their way to safety.

The player chooses a rescue mission from a neighborhood map. Each
mission contains a short sequence of math challenges. Completing the
mission brings the cat to the sanctuary, adds to the collection, and may
unlock a new area or sanctuary improvement.

The story should remain light and flexible. Avoid frightening danger,
urgency, or punishment. Cats may be shy, lost, curious, hungry, or stuck
somewhere inconvenient, but they are never harmed for a wrong answer.

## 5. Core gameplay loop

1.  **Return to the sanctuary.** See rescued cats, available missions,
    and a clear next goal.
2.  **Choose a mission.** Select an available location and see which
    math skill it practices.
3.  **Meet the cat.** Introduce the cat and the simple reason it needs
    help.
4.  **Complete the math challenges.** Solve a short sequence of
    problems, with hints and the regrouping workshop available at any
    time.
5.  **Rescue the cat.** Complete the mission threshold; mistakes do not
    remove progress already earned.
6.  **Receive rewards.** Earn fish or another predictable reward and add
    the cat to the collection.
7.  **Care for the sanctuary.** Spend earned resources on visible,
    optional decorations and care items.
8.  **Continue or stop.** Save automatically and make it easy to leave
    after a mission.

## 6. Main screens

### 6.1 Sanctuary home

The home screen is the central hub. It shows: - A small illustrated
sanctuary scene. - A few visible rescued cats. - Current fish/reward
count. - Available rescue mission(s). - A clear collection entry
point. - A clear workshop/practice entry point. - A simple indication of
the next recommended learning activity.

Do not overload the home screen with statistics. Detailed learning data
belongs in a parent-facing view.

### 6.2 Neighborhood map

A friendly illustrated map shows mission locations. Initially, keep the
map small and mostly linear so the player is not overwhelmed. New areas
become available through mission and skill progress.

Each mission card or map marker should communicate: - The cat or
location involved. - The math skill being practiced, phrased simply. -
Whether the mission is new, available, or completed.

### 6.3 Rescue mission

A mission screen presents one problem at a time, with: - A large,
readable subtraction expression. - A clear answer-entry area. -
Check-answer action. - Hint action. - Open-workshop action. - Supportive
feedback. - A visible mission progress indicator that does not create
time pressure.

A mission usually contains 3--5 problems. The exact count can adapt to
the learner's current needs and attention.

### 6.4 Regrouping workshop

The workshop is a reusable learning space, not a punishment screen. It
shows tens rods and individual ones. The learner can exchange one ten
for ten ones, then remove the required ones and tens.

For 64 − 38: - Begin with 6 tens and 4 ones. - Exchange one ten. - Show
5 tens and 14 ones. - Remove 8 ones, leaving 6 ones. - Remove 3 tens,
leaving 2 tens. - Combine the remainder: 26.

The workshop should allow exploration without requiring an answer to be
submitted. It should also provide a worked-example mode.

### 6.5 Cat collection

The collection displays rescued cats and undiscovered silhouettes. Each
rescued cat can have: - Name. - Coat/breed-inspired appearance. - Short
personality description. - Favorite toy or resting place. - Rescue
location/story. - Optional sanctuary placement.

Use fictional cat characters. Breed labels should be used thoughtfully;
appearance variety is more important than strict breed accuracy.

### 6.6 Sanctuary customization

The player can spend earned fish on known, visible items such as beds,
toys, scratching posts, climbing structures, plants, and habitat
decorations.

The initial version should use a small inventory and simple
selection/placement rather than a complex building editor. Decorations
are optional and never gate access to math instruction.

### 6.7 Parent progress view

A simple parent-facing screen may show: - Skills introduced. - Skills
currently developing. - Independent success versus success with hints or
worked examples. - Recent practice and recurring error patterns. -
Suggested next practice.

Do not expose sensitive or unnecessary personal data. Keep this
information local to the device.

## 7. Mission design

### 7.1 Mission structure

A standard rescue mission has: 1. A short introduction. 2. A brief
sequence of skill-aligned problems. 3. Optional hint/workshop use. 4. A
rescue moment and reward. 5. A short transition back to the sanctuary.

The player should generally complete a mission in a short session. Offer
a clear pause/exit at any time.

### 7.2 Completion rules

-   Mission completion is based on reaching a reasonable practice
    threshold, not perfect first-try performance.
-   An incorrect answer does not remove fish, lives, cats, or previously
    earned progress.
-   A learner who uses a hint or workshop can still complete the
    mission.
-   If a learner is stuck, the game can model a problem and offer a
    simpler follow-up rather than trapping the player.
-   Repeated guessing should prompt a supportive hint or visual
    representation, not a scolding message.

### 7.3 Mission variety

Use a mix of: - Direct subtraction. - Visual regrouping. - Choose or
build the correct tens-and-ones representation. - Missing-number
problems. - Short word problems once foundational skills are ready.

Do not introduce variety so quickly that the learner loses sight of the
target skill.

## 8. Adaptive learning design

The game tracks mastery separately for each skill. It should not use a
single overall level as a proxy for mathematical understanding.

Suggested mastery scale:

  -----------------------------------------------------------------------
  Level                   Name                    Interpretation
  ----------------------- ----------------------- -----------------------
  0                       Not introduced          No meaningful evidence
                                                  yet

  1                       Learning                Needs modeling or
                                                  substantial support

  2                       Developing              Can sometimes complete
                                                  with hints or visual
                                                  support

  3                       Proficient              Usually completes
                                                  independently across
                                                  varied examples

  4                       Mastered                Consistent independent
                                                  understanding and
                                                  transfer
  -----------------------------------------------------------------------

### 8.1 Evidence to track

For each attempt, record: - Skill tag(s). - Problem parameters. -
Correct/incorrect result. - Number of attempts. - Whether a hint was
used. - Whether the workshop was opened. - Whether a worked solution was
revealed. - Whether the learner completed a visual regrouping action. -
Whether the answer was independently entered.

A correct answer after revealing the full solution is useful
participation, but it is not equivalent to independent mastery.

### 8.2 Adaptation rules

-   If the learner struggles, reduce complexity and return to the
    prerequisite skill.
-   If the learner succeeds with visual support, continue supported
    practice before removing support.
-   If the learner succeeds independently on varied examples, gradually
    introduce mixed problems.
-   Revisit previously learned skills periodically.
-   Do not increase difficulty solely because a fixed number of
    questions was answered.
-   Allow a parent to select or override the suggested practice focus.

The initial adaptation algorithm should be transparent and rule-based.
Avoid opaque scoring or machine learning.

## 9. Rewards and economy

Keep the economy small and understandable.

  -----------------------------------------------------------------------
  Resource                Earned by               Used for
  ----------------------- ----------------------- -----------------------
  Fish                    Participating in and    Basic cat-care items
                          completing              and decorations
                          challenges/missions     

  Paw tokens              Demonstrating progress  Occasional special
                          on a skill or           decorations
                          completing a learning   
                          milestone               

  Rescue milestones       Completing mission      Opening new map areas
                          chapters                and story content
  -----------------------------------------------------------------------

Rules: - Never remove currency for mistakes. - Never sell currency or
items. - Never use loot boxes or randomized paid rewards. - Do not make
instructional content purchasable. - Display costs and unlock conditions
before the player commits. - Rewards should celebrate persistence and
learning, not pressure the player to continue.

## 10. Initial cat and world content

The first playable release needs only a small, polished collection: -
6--8 distinct cats. - 2--3 neighborhood locations. - A small set of
sanctuary items. - A handful of short rescue stories.

Add content through data files rather than hard-coding cat details into
UI components. Cat data should include a stable ID, display name,
description, appearance asset key, unlock condition, and optional
preferences.

## 11. Art and audio direction

### Visual style

**Whimsical storybook**: - Warm, cozy colors. - Soft illustrated shapes
and gentle texture. - Expressive, friendly cats. - Clear silhouettes and
uncluttered backgrounds. - A consistent visual language for tens, ones,
hints, and rewards.

The math representation must remain high-contrast and visually distinct
from decorative art. Avoid busy backgrounds behind numbers or
manipulable blocks.

### Animation

Use small, purposeful animations: - A ten-rod transforms into ten
ones. - A cat peeks out or approaches after a correct step. - A rescue
scene celebrates mission completion. - A new cat appears in the
collection.

Animations should be short, skippable, and respect reduced-motion
settings.

### Audio

Use optional gentle sound effects for feedback and rewards. Do not rely
on audio to communicate correctness or instructions. Provide a sound
toggle and keep default volume modest.

## 12. Accessibility and child experience

-   Large clickable controls and generous spacing.
-   Readable type and strong contrast.
-   Keyboard support for answer entry and primary actions.
-   No essential information conveyed by color alone.
-   No countdown timer in learning activities.
-   No forced reading-heavy instructions.
-   Optional hints and repeatable explanations.
-   Reduced-motion option.
-   Sound can be disabled.
-   Clear pause/exit behavior.
-   No shame-based language, failure screens, or loss of earned
    progress.

## 13. Technical design

### Stack

-   Svelte 5 and JavaScript.
-   Vite for local development and static production builds.
-   Prettier with `prettier-plugin-svelte`.
-   Native Svelte components, HTML, CSS, and SVG initially.
-   `localStorage` for the initial local save system.
-   No backend or account system for the first release.

### Architecture boundaries

Keep these concerns separate: - **Math domain:** problem generation,
regrouping model, solution steps, skill tags. - **Learning domain:**
attempt evidence, mastery estimates, next-practice recommendations. -
**Game domain:** missions, rewards, unlocks, story progress. -
**Collection domain:** cats, habitats, inventory, sanctuary
configuration. - **Persistence domain:** versioned save data,
validation, migration. - **Presentation:** Svelte screens and reusable
components.

Math and learning logic must be testable without rendering Svelte.

### Save data

Use a versioned save format. Store only what is needed for local
gameplay: - Save schema version. - Game progress and completed
missions. - Rescued cat IDs. - Inventory and sanctuary choices. -
Per-skill learning evidence/mastery. - Settings such as sound and
reduced motion.

Validate saved data when loading. Provide a parent-accessible reset and,
later, export/import backup.

### Suggested source organization

``` text
src/
├── lib/
│   ├── math/
│   ├── learning/
│   ├── missions/
│   ├── rewards/
│   ├── collection/
│   └── persistence/
├── components/
│   ├── math/
│   ├── cats/
│   ├── sanctuary/
│   └── shared/
├── screens/
├── App.svelte
├── app.css
└── main.js
```

This is a conceptual structure. Create modules as features are
implemented rather than generating empty files for every future feature.

## 14. Scope and release plan

### First playable version

Must include: - Home/sanctuary screen. - One rescue location. - A short
mission. - Two-digit subtraction with regrouping. - Interactive
tens-and-ones workshop. - Hints and worked examples. - A small cat
collection. - A simple reward. - Local save.

### Later additions

-   More neighborhood locations and stories.
-   More cat appearances and personalities.
-   Sanctuary decoration and placement.
-   Adaptive practice across all planned skills.
-   Parent progress view.
-   Missing-number and word-problem missions.
-   Audio, additional animation, and optional accessibility refinements.

### Explicit non-goals for the initial release

-   Multiplayer or social features.
-   Online accounts or cloud saves.
-   In-app purchases, ads, subscriptions, or paid currency.
-   Competitive leaderboards.
-   Timed arithmetic as the default learning mode.
-   Complex physics or platforming.
-   Large open-world navigation.

## 15. Success criteria

The game is successful when: 1. The learner voluntarily returns to play.
2. The learner can explain or demonstrate why one ten can be exchanged
for ten ones. 3. The learner becomes more independent on two-digit
subtraction with regrouping. 4. The game identifies skills needing more
support without frustrating the learner. 5. A short play session feels
complete and rewarding. 6. Progress survives closing and reopening the
browser. 7. The game remains usable without an internet connection after
its local files are available.

**Guiding principle:** Make the math understandable, make the cats
delightful, and make progress feel rewarding.
