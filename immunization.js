const immunizationSectionData = {
  "0-6": `<p>During the first 6 months, babies receive foundational immunizations that are essential to protect against life-threatening infections. <br><br>
✅ <strong>At Birth:</strong> BCG (Tuberculosis), OPV-0 (Oral Polio), and Hepatitis B (birth dose) are administered before hospital discharge.<br>
✅ <strong>6 Weeks:</strong> DPT 1 (Pentavalent - Diphtheria, Pertussis, Tetanus, Hep B, Hib), IPV 1 (Injectable Polio Vaccine), PCV 1 (Pneumococcal Conjugate Vaccine), and Rotavirus 1 (for diarrheal disease).<br>
✅ <strong>10 Weeks:</strong> Second doses of DPT, IPV, and Rotavirus (DPT 2, IPV 2, Rotavirus 2).<br>
✅ <strong>14 Weeks:</strong> Third doses of DPT, IPV, PCV, and Rotavirus (DPT 3, IPV 3, PCV 2, Rotavirus 3).<br>
✅ <strong>Optional:</strong> First dose of Influenza vaccine, especially if the baby is at risk or during flu season.<br><br>
🩺 These vaccines shield against over 10 deadly diseases. Timely administration helps reduce infant mortality and ensures a strong immune foundation. Always consult a pediatrician if your child has any allergies, low birth weight, or special health needs before vaccination.</p>`,

  "7-12": `<p>Between 7 to 12 months, your child’s immune system continues developing, and booster shots help strengthen earlier immunizations. <br><br>
✅ <strong>7 Months:</strong> Second dose of Influenza vaccine (if the first was given earlier); otherwise, this may be the first dose.<br>
✅ <strong>9 Months:</strong> MMR 1 (Measles, Mumps, Rubella) is critical at this age to prevent common viral infections. Additionally, the Typhoid Conjugate Vaccine (TCV) is often introduced.<br>
✅ <strong>10–12 Months:</strong> Some doctors may schedule early Varicella (chickenpox) and the first dose of Hepatitis A, depending on exposure risk.<br>
✅ <strong>Nutritional Support:</strong> Ensure your baby gets sufficient Vitamin A and iron through food or supplements, as advised.<br><br>
💉 This period marks the baby's transition into more mobility and interaction with the environment. Vaccines during this stage help prevent airborne and foodborne diseases. Maintaining hygiene and a vaccination record is vital, especially as the baby may start social outings and daycare exposure increases.</p>`,

  "13-18": `<p>During 13 to 18 months, toddlers begin to explore more, increasing their risk of exposure to infections. Booster vaccines at this stage help maintain strong immunity.<br><br>
✅ <strong>13–15 Months:</strong> MMR 2 (to reinforce measles protection), PCV Booster (for pneumonia), and Varicella 1 (first dose against chickenpox). Hepatitis A 2nd dose may be given if the first was given earlier.<br>
✅ <strong>15–18 Months:</strong> DPT Booster 1 (to maintain protection from diphtheria, pertussis, tetanus) and Hib Booster (to prevent bacterial meningitis).<br>
✅ <strong>Optional:</strong> Meningococcal vaccine (based on regional outbreaks or travel).<br>
🧸 Toddlers are at greater risk of respiratory and foodborne illnesses due to exploratory hand-to-mouth behaviors. Good hygiene and proper nutrition support immunity. Always observe for mild fever or swelling post-vaccination—these are normal side effects. Parents should not delay booster schedules unless advised by a healthcare professional. Vaccination during this stage helps reduce the risk of community transmission of several pediatric illnesses.</p>`,

  "19-24": `<p>From 19 to 24 months, immunizations continue to ensure your child is fully protected before preschool years. Completing pending doses is essential.<br><br>
✅ <strong>19–24 Months:</strong> Hepatitis B Booster (if not given earlier), Typhoid Booster (to maintain long-term immunity), and Varicella 2 (to complete chickenpox protection).<br>
✅ <strong>Optional:</strong> Meningococcal vaccine (especially if attending daycare or traveling internationally), annual Influenza booster (important during flu season), and Japanese Encephalitis vaccine in endemic regions.<br>
✅ <strong>Developmental Monitoring:</strong> Pediatricians may recommend screening for anemia, dental checkups, and vision assessments during this period.<br>
📋 Maintain a printed and digital immunization chart to track all doses and future due dates. Keeping vaccination up to date ensures protection during social activities like playgroups and family gatherings.<br><br>
🧒 This age also introduces behavioral independence, making doctor visits a challenge. Bring distraction toys or comfort objects to help manage anxiety during clinic appointments. Always monitor for allergic reactions post-vaccination.</p>`  
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
    `Immunization for your child (${age} months)`;

  document.getElementById('sectionDetail').innerHTML =
    immunizationSectionData[age] || "Details coming soon for your selection.";
});
