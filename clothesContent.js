const clothesSectionData = {
  "0-6": `<p>Newborns need comfort, warmth, and frequent changes. During this delicate stage, clothing should be soft, safe, and easy to manage.<br><br>
✅ Choose soft, breathable cotton onesies and footed sleepers to keep your baby cozy<br>
✅ Have plenty of bibs and burp cloths — spit-up and drool are common in this phase<br>
✅ Use mittens and caps to prevent accidental scratching and maintain warmth in cooler rooms<br>
✅ Stock up on swaddle blankets or opt for wearable sleep sacks for safer sleep<br>
✅ Avoid clothing with rough zippers near the skin — go for snaps, magnetic closures, or envelope necks<br>
✅ Prepare for 2–4 outfit changes a day due to spit-ups, blowouts, or leaks<br>
✅ Choose clothes that open from the front or bottom for hassle-free diaper changes<br>
✅ Look for tag-free options or clothing with printed labels to avoid irritation on delicate skin`,

  "7-12": `This stage brings crawling, rolling, teething, and messy feedings — your baby's clothes should support all that movement.<br><br>
✅ Invest in comfy rompers, onesies, and flexible bottoms like leggings or joggers<br>
✅ Add bibs with waterproof backs for both drool and food mess during solids introduction<br>
✅ Use knee-friendly pants or padded leggings to protect those tiny legs while crawling<br>
✅ Choose clothes with reinforced seams to withstand active play and frequent washes<br>
✅ Keep extra socks on hand — they tend to fall off easily during movement<br>
✅ Switch from swaddles to sleep sacks or footed pajamas as babies start to roll<br>
✅ Look for tag-free or flat-seamed options to minimize discomfort<br>
✅ Dress in layers to help adapt to indoor and outdoor temperature changes`,

  "13-18": `At this age, your toddler is likely walking or trying to. Their clothes should promote independence and be built for durability.<br><br>
✅ Stock up on two-piece sets — they make diaper changes quicker and allow better mobility<br>
✅ Add sun hats or knit beanies for outdoor exploration and weather protection<br>
✅ Use shoes with flexible soft soles or grippy bottoms to support early walkers<br>
✅ Choose pull-on pants with elastic waists — they’re easier for toddlers learning self-dressing<br>
✅ Pajamas with grippy feet reduce the chance of slipping during nighttime wandering<br>
✅ Always keep a spare outfit in your diaper bag — spills and accidents still happen<br>
✅ Let toddlers assist in choosing clothes — it nurtures independence and decision-making<br>
✅ Opt for fabrics that stretch and breathe, supporting all-day play`,

  "19-24": `Toddlers at this age crave independence and are often potty training. Clothing should support self-help and adaptability.<br><br>
✅ Choose clothes toddlers can easily pull on and off themselves — no tricky buttons or tight necks<br>
✅ Use training pants or diapers with tear-away sides for quick changes<br>
✅ Transition to firm-soled shoes that offer proper foot support for outdoor adventures<br>
✅ Dress in comfortable layers so your toddler can adjust to changing temperatures while playing<br>
✅ Include clothes with bright colors, fun characters, or patterns your child enjoys — it encourages dressing cooperation<br>
✅ Invest in breathable cotton sleepwear to ensure restful nights and comfort<br>
✅ If your toddler attends daycare, label their clothes to prevent mix-ups<br>
✅ Provide comfortable lounge sets for nap time or indoor play, balancing function and style</p>`,
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
    `Clothes for your child (${age} months)`;

  // Use innerHTML so <br> tags are rendered correctly
  document.getElementById('sectionDetail').innerHTML =
    clothesSectionData[age] || "Details coming soon for your selection.";
});
