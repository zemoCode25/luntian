export type DiseaseData = {
  diseaseName: {
    common: string;
    scientific: string;
  };
  description: {
    overview: string;
    symptoms: string[];
  };
  possibleCauses: {
    environmentalConditions: string[];
    pathogenType: string;
    cultivationPractices: string[];
  };
  remedyTreatment: {
    immediateAction: string;
    organicOptions: string[];
    chemicalOptions: string[];
  };
  preventionTips: string[];
};
