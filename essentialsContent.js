const essentialsSectionData = {
  "0-6": `<p>In the newborn phase, the focus is on feeding, hygiene, and safe sleep. Newborns require gentle care and close attention to their comfort and basic needs.<br><br>
✅ <strong>Feeding:</strong> Bottles (if not exclusively breastfeeding), sterilizer, burp cloths, nursing pillow, formula dispenser (if applicable)<br>
✅ <strong>Diapering:</strong> Newborn diapers, wipes, rash cream, diaper changing pad, diaper pail with liners<br>
✅ <strong>Bathing:</strong> Infant tub, baby shampoo, soft towels, washcloths, gentle body wash, hooded towel<br>
✅ <strong>Sleeping:</strong> Crib or bassinet with a firm mattress and fitted sheet (no pillows or blankets), white noise machine, nightlight<br>
✅ <strong>Travel:</strong> Infant car seat (rear-facing), stroller with full recline, baby carrier or wrap, sunshade cover<br>
✅ <strong>Clothing Care:</strong> Mild baby detergent, laundry basket, mesh garment bags for tiny items<br>
✅ <strong>Other Must-Haves:</strong> Digital thermometer, nasal aspirator, nail clipper set, pacifiers (optional), swaddle blankets, soft toys<br>
✅ <strong>Parental Comfort:</strong> Nursing chair, water bottle, phone holder near changing station<br>
✅ <strong>Cleaning & Organization:</strong> Storage baskets, bottle drying rack, cleaning brushes for bottles`,

  "7-12": `As your baby starts to eat solids, move, and explore, your toolkit expands to meet growing developmental needs. This stage includes crawling, teething, and discovering new tastes and textures.<br><br>
✅ <strong>Feeding:</strong> High chair, baby spoons, spill-proof bowls, silicone bibs, sippy cups, snack trays<br>
✅ <strong>Safety:</strong> Outlet covers, corner guards, cabinet locks, baby gates, table bumpers<br>
✅ <strong>Mobility:</strong> Crawler-safe mats, walker (if recommended), more spacious stroller, socks with grip<br>
✅ <strong>Bathing:</strong> Bath toys, spout covers, non-slip bath mat, rinse cup<br>
✅ <strong>Development:</strong> Teething toys, sensory play kits, soft books, baby-safe mirrors<br>
✅ <strong>Hygiene:</strong> Soft toothbrush, toothpaste (safe to swallow), baby hairbrush, baby lotion<br>
✅ <strong>Travel:</strong> Lightweight stroller, diaper bag with compartments, portable changing mat<br>
✅ <strong>Comfort & Sleep:</strong> Lovey or transitional sleep object, room thermometer, wearable blankets<br>
✅ <strong>Cleaning:</strong> Table wipes, bib holders, drying mat for bowls and spoons`,

  "13-18": `Your toddler is now mobile and wants independence. Focus shifts to interaction, routine building, and added safety around the home. Daily life involves more structured play, exploration, and skill development.<br><br>
✅ <strong>Feeding:</strong> Toddler-friendly bowls, training cups, snack catchers, booster seat, utensil sets<br>
✅ <strong>Potty Training Prep:</strong> Potty chair, training pants, wipes, waterproof covers for furniture<br>
✅ <strong>Safety:</strong> Furniture anchors, stair gates, window locks, door stoppers, safety latches<br>
✅ <strong>Play & Development:</strong> Learning tables, block sets, musical instruments, interactive books, stacking toys<br>
✅ <strong>Bathing:</strong> Step stool for sink access, gentle bath foams, rinse jug, toy net storage<br>
✅ <strong>Travel:</strong> Backpack-style diaper bags, easy-fold strollers, sun hat, toddler ID bracelet (for outings)<br>
✅ <strong>Home Essentials:</strong> Toddler mattress or crib conversion, soft rugs, toy bins, toddler-proof storage<br>
✅ <strong>Routine:</strong> Visual daily routines chart, bedtime lullabies, calm-down area setup`,

  "19-24": `This is a stage of growth, independence, and transition. Products should empower self-help and learning while supporting social and emotional development. Daily routines become more defined, and your child may begin preschool prep.<br><br>
✅ <strong>Feeding:</strong> Utensils with grip handles, divided plates, toddler water bottles, lunchbox for outings<br>
✅ <strong>Potty Training:</strong> Training toilet seat, rewards chart, waterproof mattress covers, flushable wipes<br>
✅ <strong>Safety:</strong> Continued proofing, safe stools for climbing, lockable toy bins, handle guards<br>
✅ <strong>Learning:</strong> Picture books, scribble boards, age-appropriate puzzles, flashcards, interactive toys<br>
✅ <strong>Bath & Hygiene:</strong> Hand soap for toddlers, bath time toys, brushing chart, toddler towel robe<br>
✅ <strong>Outdoor Gear:</strong> Helmet (if using trike), sunblock (baby-safe), toddler shoes, small backpack<br>
✅ <strong>Sleep:</strong> Nightlight, toddler pillow, bedtime storybooks, soft blanket<br>
✅ <strong>Routine & Social:</strong> Reward stickers, toddler calendar, morning and bedtime rituals. </p>`,

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

  document.getElementById('sectionTitle').textContent =
    `Essentials for your child (${age} months)`;

  document.getElementById('sectionDetail').innerHTML =
    essentialsSectionData[age] || "Details coming soon for your selection.";
});
