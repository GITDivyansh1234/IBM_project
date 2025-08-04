// todoContent.js
const todoSectionData = {

  "0-6": `<p>👶 <b>Introduction:</b><br>
The first six months of your baby’s life are a time of rapid growth, bonding, and adaptation — both for the baby and for you. At this stage, your baby depends entirely on you for comfort, nutrition, sleep, and safety. Establishing routines and learning to read your baby’s cues are key parts of parenting during this time.<br><br>

📌 <b>To-Do Checklist:</b><br>
🍼 Exclusive Breastfeeding or formula feeding every 2–3 hours; follow WHO guidance for exclusive breastfeeding up to 6 months.<br>
💦 Track Diapers: 6+ wet diapers/day = well hydrated. Monitor poop color and consistency.<br>
😴 Sleep Schedule: Expect frequent naps; total sleep needed is ~14–17 hours/day.<br>
🛁 Daily Hygiene: Sponge baths until umbilical cord falls off, then gentle baths 2–3 times a week.<br>
🩺 Health Visits & Vaccinations: Stick to your immunization schedule (BCG, OPV, HepB, DTP, etc.).<br>
🧠 Tummy Time: Begin with short tummy time sessions daily to build neck and upper body strength.<br>
🤱 Bonding: Skin-to-skin contact, singing, eye contact, and cuddling aid emotional and cognitive development.<br>
📦 Baby Essentials: Stock up on diapers, wipes, swaddles, soft clothing, sterilizers, and a safe sleeping space.<br>
🏡 Safe Sleep Setup: Place baby on back in a crib without pillows or loose blankets.<br>
📚 Parental Education: Learn baby CPR, feeding positions, and newborn cues (hunger, sleepiness, etc.).<br>
🧘 Self-Care for Parents: Rest when baby sleeps, eat nutritious meals, and don’t hesitate to ask for help.</p>`,

  "7-12": `<p>👶 <b>Introduction:</b><br>
Your baby is now curious, active, and ready to explore! From sitting to crawling to trying solid foods, this is a phase full of “firsts.” It’s time to baby-proof your space and guide your little one’s sensory, motor, and emotional development with love and consistency.<br><br>

📌 <b>To-Do Checklist:</b><br>
🍽 Introduce Complementary Feeding: Begin at 6 months. Continue breastfeeding/formula alongside pureed or mashed foods.<br>
🧀 Meal Schedule: Offer small meals 2–3 times daily with soft fruits, vegetables, cereals, and proteins.<br>
🧸 Stimulating Play: Use rattles, soft books, musical toys, and sensory activities for brain and motor development.<br>
🚼 Mobility Support: Encourage crawling and assisted standing. Give safe floor space for movement.<br>
🩺 Wellness Checkups: Continue immunizations (measles, DTP boosters) and monitor growth charts.<br>
🏡 Baby-Proof Everything: Cover sockets, lock cabinets, use corner protectors, and remove choking hazards.<br>
🦷 Oral Hygiene: Begin wiping gums and early teeth with a soft cloth or silicone finger brush.<br>
📷 Capture Milestones: Smiles, babbles, claps, crawling — celebrate and document the memories.<br>
🧠 Reading Routine: Short storybooks at bedtime foster listening and early language development.<br>
🛏 Sleep Routine: Babies may sleep 12–16 hours a day. Night wakings still common — consistency is key.<br>
🧘 Parent Support: Explore parenting communities or expert guidance if you’re unsure about milestones or nutrition.</p>`,

  "13-18": `<p>👶 <b>Introduction:</b><br>
Your toddler is officially on the move! Between walking, babbling, and independent eating, they’re becoming more expressive and exploratory. This stage calls for routine building, patience, and tons of interaction to support healthy growth.<br><br>

📌 <b>To-Do Checklist:</b><br>
🍲 Family Meals: Encourage self-feeding with soft finger foods. Offer 3 meals and 1–2 snacks daily.<br>
🍼 Continue Milk Feeds: Breastmilk or cow’s milk (after 12 months) remains important, about 400–500ml/day.<br>
🧽 Daily Clean-Up Habits: Start hand-washing before meals and after play (help them do it!).<br>
👟 Promote Walking & Balance: Use push toys, obstacle courses, or play zones to help develop coordination.<br>
🧠 Teach Words & Names: Identify objects, animals, and body parts. Use repetition and songs.<br>
🧸 Toy Rotation: Offer blocks, shape sorters, stacking rings, and pretend play items to boost learning.<br>
📆 Schedule Pediatric Visits: Monitor height/weight and address sleep, nutrition, and speech concerns.<br>
🦷 Tooth Brushing Routine: Brush gently twice daily with a rice-sized smear of fluoride toothpaste.<br>
🛌 Nap + Sleep Routine: One daytime nap + 10–12 hours at night. Use calming bedtime rituals.<br>
📵 Limit Screens: Avoid passive screen time; opt for interactive books and music instead.<br>
👫 Social Development: Let them interact with other children or family members to build emotional confidence.</p>`,

  "19-24": `<p>👶 <b>Introduction:</b><br>
Your toddler is now asserting independence and developing a personality! This stage includes more words, emotions, movement, and social learning. Your role is to nurture, guide, and set safe boundaries as they explore their world with curiosity.<br><br>

📌 <b>To-Do Checklist:</b><br>
🍴 Balanced Meals: Offer family foods in small portions. Include fruits, veggies, dairy, grains, and lean protein.<br>
🍼 Milk Transition: If breastfeeding continues, great! If not, 2 servings of dairy/day are enough.<br>
🧠 Language Boosting: Engage in two-way conversations. Use naming games and read daily.<br>
🎨 Creative Play: Encourage coloring, clay modeling, music, and outdoor play for motor and sensory growth.<br>
🧸 Daily Routines: Structure helps toddlers feel secure. Stick to regular mealtimes, naps, and bedtimes.<br>
💬 Teach Emotions: Use words like “happy,” “sad,” “angry” to label their feelings.<br>
🚽 Potty Readiness Signs: Stay alert but don’t rush. Interest in the potty, dry diapers, or telling you they went are signs.<br>
🩺 Monitor Development: Use WHO growth charts and milestone checklists. Flag any major delays to your pediatrician.<br>
🛑 Set Boundaries Gently: Use positive redirection and short, clear instructions rather than punishments.<br>
🧽 Life Skills Practice: Let them help with small tasks like tidying toys or putting clothes in a basket.<br>
🧘 Balance Parental Time: Prioritize your own rest, mental health, and personal time amidst toddler chaos.</p>`,
};

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const age = params.get("age");

  const validAges = ["0-6", "7-12", "13-18", "19-24"];

  // If age is missing or invalid → redirect
  if (!validAges.includes(age)) {
    window.location.href = "select.html"; // Redirect to selection page
    return;
  }

  document.getElementById("sectionTitle").textContent =
    `Things to do for your child (${age} months)`;

  // Use innerHTML so <br> and <b> tags are rendered correctly
  document.getElementById("sectionDetail").innerHTML =
    todoSectionData[age] || "Details coming soon for your selection.";
});
