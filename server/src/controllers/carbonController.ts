import { Response } from "express";

import CarbonRecord from "../models/CarbonRecord";

import {
  calculateCarbonFootprint
} from "../services/carbonCalculator";

import {
  calculateScore
} from "../services/scoreService";

import {
  getRecommendations
} from "../services/recommendationService";

import {
  predictFutureEmission
} from "../services/predictionService";

import { AuthRequest }
from "../middleware/authMiddleware";

export const calculateCarbon =
async (
  req: AuthRequest,
  res: Response
) => {

  const {
    transportKm,
    electricityUnits,
    waterUsage,
    wasteKg,
    foodType
  } = req.body;

  const totalEmission =
    calculateCarbonFootprint(
      transportKm,
      electricityUnits,
      waterUsage,
      wasteKg,
      foodType
    );

  const score =
    calculateScore(
      totalEmission
    );

  const recommendations =
    getRecommendations(
      transportKm,
      electricityUnits,
      foodType
    );

  const prediction =
    predictFutureEmission(
      totalEmission
    );

  const record =
    await CarbonRecord.create({
      userId:
        req.user.id,
      transportKm,
      electricityUnits,
      waterUsage,
      wasteKg,
      foodType,
      totalEmission,
      sustainabilityScore:
        score
    });

  res.json({
    success: true,
    carbonData: record,
    recommendations,
    prediction
  });
};
