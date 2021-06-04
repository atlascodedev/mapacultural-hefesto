import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { IAgentModel, RegistrationStatus } from "../../@types/project";
import { AGENT_COLLECTION_REF } from "../../constants";
import { db } from "../../firebase";
import getGeoCode from "../../helper/geocode";

export const createAgent = async (
  req: Request<{}, {}, IAgentModel, {}>,
  res: Response
) => {
  let agentData: IAgentModel = {
    ...req.body,
  };

  if (!req.body.cep) {
    return res.status(400).json({ error: "Um CEP válido é obrigatório" });
  }

  try {
    // const geocodeData = await getGeoCode(req.body.cep);

    // const { lat, lng } =
    //   geocodeData.results?.[0]?.geometry?.location ?? "Not found";

    await db.collection(AGENT_COLLECTION_REF).add({
      ...agentData,
      lat: "0000x0",
      lng: "0000x0",
      status: "ANÁLISE",
    });

    res.status(200).send("Agent created successfully");
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getAgents = async (req: Request, res: Response) => {
  try {
    let agentArrayInternal: any[] = [];

    const agentData = await db.collection(AGENT_COLLECTION_REF).get();

    agentData.forEach((docRef) => {
      agentArrayInternal.push(docRef.data());
    });

    const approvedData = (
      agentArrayInternal as Array<IAgentModel & { status: RegistrationStatus }>
    ).filter((value, index) => {
      return value.status === "APROVADO";
    });

    return res.status(200).json(approvedData);
  } catch (error) {
    res.send(400).json({ error: error });
  }
};
