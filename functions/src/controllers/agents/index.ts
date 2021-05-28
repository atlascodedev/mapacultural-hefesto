import { Request, Response } from "express";
import { IAgentModel } from "../../@types/project";
import getGeoCode from "../../helper/geocode";

export const createAgent = async (
  req: Request<{}, {}, IAgentModel, {}>,
  res: Response
) => {
  let agentData: IAgentModel = { ...req.body };

  if (!req.body.cep) {
    return res.status(400).json({ error: "Um CEP válido é obrigatório" });
  }

  try {
    const geocodeData = await getGeoCode(req.body.cep);

    const { lat, lng } =
      geocodeData.results?.[0]?.geometry?.location ?? "Not found";

    console.log(lat, lng);

    return res.status(200).json(geocodeData);
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};
