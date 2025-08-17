const sampleData = {
  diseaseName: {
    common: "Apple Scab",
    scientific: "Venturia inaequalis",
  },
  description: {
    overview:
      "Apple scab is a common fungal disease that affects apple and crabapple trees, causing characteristic olive-green to brown spots on leaves, fruit, twigs, and blossoms. If left untreated, it can lead to premature leaf and fruit drop, reduced fruit quality, and overall tree weakening.",
    symptoms: [
      "Olive-green to brown, velvety spots on the upper and lower leaf surfaces",
      "Distortion, puckering, and yellowing of infected leaves",
      "Premature defoliation (leaf drop)",
    ],
  },
  possibleCauses: {
    environmentalConditions: [
      "Cool temperatures (18-24°C or 65-75°F)",
      "Prolonged periods of leaf wetness (6-9 hours or more, depending on temperature)",
      "High humidity",
    ],
    pathogenType: "Fungus",
    cultivationPractices: [
      "Poor air circulation within the tree canopy",
      "Overhead irrigation that keeps foliage wet for extended periods",
      "Failure to remove infected plant debris (leaves and fruit) from previous seasons",
    ],
  },
  remedyTreatment: {
    immediateAction:
      "Remove and destroy all fallen leaves and infected fruit in the autumn to reduce the primary inoculum. Prune out severely infected twigs during dormancy.",
    organicOptions: [
      "Apply sulfur-based fungicides or Bordeaux mixture during critical growth stages (e.g., green tip, tight cluster, pink, petal fall) according to label instructions.",
      "Use horticultural oils (dormant oil) in late winter/early spring to smother overwintering spores (less effective than fungicides, but can contribute).",
      "Improve air circulation by proper pruning.",
      "Plant resistant apple varieties.",
    ],
    chemicalOptions: [
      "Apply synthetic fungicides containing active ingredients such as Myclobutanil, Captan, Fenarimol, or Propiconazole. Multiple applications are often required, starting from bud break and continuing through the primary infection period (usually until about 3-4 weeks after petal fall). Always follow label rates and safety precautions.",
    ],
  },
  preventionTips: [
    "Plant apple varieties that are resistant or highly tolerant to apple scab (e.g., 'Liberty', 'Prima', 'GoldRush', 'Honeycrisp' has some resistance).",
    "Ensure good air circulation around and within the apple tree canopy through proper pruning.",
    "Rake up and destroy all fallen leaves and fruit in the autumn to eliminate overwintering spores.",
  ],
};

export default sampleData;
