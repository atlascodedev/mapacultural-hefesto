import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { RegistrationStatus } from "../../../../../src/@types/project";
import { IEventModel } from "../../../@types/project";
import { EVENT_COLLECTION_REF } from "../../../constants";
import { db } from "../../../firebase";
import getGeoCode from "../../../helper/geocode";

export const createEvent = async (
  req: Request<{}, {}, IEventModel, {}>,
  res: Response
) => {
  const eventData: IEventModel = {
    ...req.body,
  };

  if (!req.body.cep) {
    return res.status(400).json({ error: "Um CEP válido é obrigatório" });
  }

  try {
    // const geocodeData = await getGeoCode(req.body.cep);

    // const { lat, lng } =
    // geocodeData.results?.[0]?.geometry?.location ?? "Not found";

    await db.collection(EVENT_COLLECTION_REF).add({
      ...eventData,
      lat: "0000x0",
      lng: "0000x0",
      status: "ANÁLISE",
    });

    res.status(200).send("Event created successfully");
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    let eventArrayInternal: IEventModel[] = [];

    const eventData = await db.collection(EVENT_COLLECTION_REF).get();

    eventData.forEach((docRef) => {
      eventArrayInternal.push(docRef.data() as IEventModel);
    });

    const approvedData = (
      eventArrayInternal as Array<IEventModel & { status: RegistrationStatus }>
    ).filter((value, index) => {
      return value.status === "APROVADO";
    });

    return res.status(200).json(approvedData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
