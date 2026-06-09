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

import {
  generateEcoAdvice
} from "../services/aiService";

import {
  AuthRequest
} from "../middleware/authMiddleware";

export const calculateCarbon = async (
  req: AuthRequest,
  res: Response
) => {
  try {
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

    const aiAdvice =
      await generateEcoAdvice(
        score,
        totalEmission,
        recommendations
      );

    const record =
      await CarbonRecord.create({
        userId: req.user.id,
        transportKm,
        electricityUnits,
        waterUsage,
        wasteKg,
        foodType,
        totalEmission,
        sustainabilityScore: score
      });

    res.json({
      success: true,
      carbonData: record,
      recommendations,
      prediction,
      aiAdvice
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
