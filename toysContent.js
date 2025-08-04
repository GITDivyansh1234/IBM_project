// toysContent.js
const toysSectionData = {
  "0-6": `<p>👶 During the first six months, babies explore using their senses. Toys should be soft, safe, and engaging.<br>
✅ High-contrast black-and-white toys support visual development.<br>
✅ Soft rattles and crinkle toys engage hearing and grasp reflexes.<br>
✅ Tummy time mats with hanging toys promote neck strength.<br>
✅ Safe mirrors allow babies to explore facial expressions.<br>
✅ Cloth books with textures and bold colors enhance sensory curiosity.<br>
✅ Teething rings and chewy toys soothe gums.<br>
✅ Wrist and sock rattles encourage movement and awareness.<br>
✅ Musical mobiles entertain and develop tracking.<br>
✅ Sensory balls with soft spikes help tactile stimulation.<br>
✅ Soft plush animals support comfort and grasping.<br>
✅ Clip-on stroller toys provide entertainment during outings.<br>
✅ Hanging toys above cribs improve hand-eye coordination.<br>
✅ Water play mats offer safe tummy-time fun.<br>
✅ Grasping rings or linking chains improve dexterity.<br>
✅ Gentle lullaby sound machines create a calm play environment.</p>`,

  "7-12": `<p>👶 At this stage, babies start crawling, pulling to stand, and exploring everything with curiosity.<br>
✅ Push-and-pull toys strengthen muscles and aid crawling.<br>
✅ Musical instruments like tambourines and shakers develop rhythm.<br>
✅ Pop-up or peekaboo toys teach cause and effect.<br>
✅ Teething-safe blocks support early stacking.<br>
✅ Activity cubes improve hand-eye coordination.<br>
✅ Bath toys with sprayers and floaters make bath time fun.<br>
✅ Suction toys stick to high chairs for mess-free fun.<br>
✅ Board books with flaps and textures build vocabulary.<br>
✅ Soft balls and rolling toys encourage chasing.<br>
✅ Light-up toys with music engage multiple senses.<br>
✅ Shape sorters build basic logic skills.<br>
✅ Toy phones and remotes support pretend play.<br>
✅ Crawl tunnels and obstacle pillows encourage movement.<br>
✅ Cloth stacking rings develop fine motor skills.<br>
✅ Spinning toys help build wrist strength and focus.</p>`,

  "13-18": `<p>👶 Toddlers here walk, climb, and copy adults. Toys should encourage motor skills, pretend play, and communication.<br>
✅ Push toys and animal walkers boost mobility.<br>
✅ Large building blocks inspire stacking and creativity.<br>
✅ Simple knob puzzles build problem-solving skills.<br>
✅ Pretend kitchen tools or phones foster role play.<br>
✅ Interactive sound books introduce words and animals.<br>
✅ Ride-on toys build balance and confidence.<br>
✅ Jumbo crayons and doodle boards spark creativity.<br>
✅ Shape sorters and nesting toys build logic.<br>
✅ Musical toys like drums or baby pianos entertain and teach rhythm.<br>
✅ Ball pits provide safe, energetic fun.<br>
✅ Sorting toys by color and shape build recognition skills.<br>
✅ Pretend food items enhance daily life imitation.<br>
✅ Pop-up tunnels and tents offer playful exploration.<br>
✅ Peg boards with chunky pegs build hand strength.<br>
✅ Large pop beads improve coordination and focus.</p>`,

  "19-24": `<p>👶 Toddlers become imaginative, expressive, and social. Play now supports creativity, emotions, and peer interaction.<br>
✅ Pretend sets like doctor kits or cooking tools build imagination.<br>
✅ Simple puzzles strengthen memory and coordination.<br>
✅ Crayons, stamps, and stickers improve fine motor control.<br>
✅ Picture books with emotions support social learning.<br>
✅ Ride-on vehicles build gross motor strength.<br>
✅ Magnetic drawing boards teach pre-writing without mess.<br>
✅ Stacking blocks and Duplo bricks build creative thinking.<br>
✅ Dress-up accessories encourage storytelling and independence.<br>
✅ Outdoor toys like bubbles and mini slides foster physical activity.<br>
✅ Animal figurines spark pretend play and naming skills.<br>
✅ Musical instruments allow self-expression and rhythm learning.<br>
✅ Sorting jars and matching games teach classification.<br>
✅ Mini trampolines with support bars aid coordination.<br>
✅ Dollhouses or character sets encourage empathy and daily routine roleplay.<br>
✅ Sensory bins with safe materials like rice or beans promote exploration.</p>`,
};


document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const age = params.get("age");

  const validAges = ["0-6", "7-12", "13-18", "19-24"];

  if (!validAges.includes(age)) {
    window.location.href = "select.html";
    return;
  }

  document.getElementById('sectionTitle').innerContent =
    `Toys for your child (${age} months)`;

  document.getElementById('sectionDetail').innerHTML =
    toysSectionData[age] || "Details coming soon for your selection.";
});
