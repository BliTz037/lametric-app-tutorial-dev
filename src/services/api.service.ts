import { NextFunction, Request, Response } from "express";
import GoalFrame from "../frames/goal.frame";
import NameFrame from "../frames/name.frame";
import SparklineFrame from "../frames/sparkline.frame";

const getResponse = async (req: Request, res: Response, next: NextFunction) => {
    const name: NameFrame = { icon: 653, text: "Name" };
    const goal: GoalFrame = { goalData: { start: 0, current: 50, end: 100, unit: "Goal" }, icon: 87 };
    const sparkline: SparklineFrame = { index: 5, chartData: [25, 8, 69, 87, 76] };

    return res.status(200).json({
        frames: [name, goal, sparkline]
    });
};

export {
    getResponse
};