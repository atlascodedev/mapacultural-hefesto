import { Request, Response } from "express";
import { nanoid } from "nanoid";
import {
  ICulturalSpaceModel,
  RegistrationStatus,
} from "../../../typings/project";
import { SPACE_COLLECTON_REF } from "../../../constants";
import { db } from "../../../firebase";
import getGeoCode from "../../../helper/geocode";

export const createSpace = async (
  req: Request<{}, {}, ICulturalSpaceModel, {}>,
  res: Response
) => {
  let spaceData: ICulturalSpaceModel = { ...req.body };

  if (!req.body.cep) {
    return res.status(400).send("Um CEP válido é obrigatório");
  }

  try {
    const geocodeData = await getGeoCode(req.body.cep);

    const { lat, lng } =
      geocodeData.results?.[0]?.geometry?.location ?? "Not found";

    await db.collection(SPACE_COLLECTON_REF).add({
      ...spaceData,
      lat: lat,
      lng: lng,
      status: "ANÁLISE",
    } as ICulturalSpaceModel & { lat: string; lng: string; status: string });

    res.status(200).send("Cultural space created successfully");
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export const getCulturalSpaces = async (req: Request, res: Response) => {
  try {
    let culturalSpaceArrayInternal: ICulturalSpaceModel[] = [];

    const culturalSpaceData = await db.collection(SPACE_COLLECTON_REF).get();

    culturalSpaceData.forEach((docRef) => {
      culturalSpaceArrayInternal.push(docRef.data() as ICulturalSpaceModel);
    });

    const approvedData = (
      culturalSpaceArrayInternal as Array<
        ICulturalSpaceModel & { status: RegistrationStatus }
      >
    ).filter((value, index) => {
      return value.status === "APROVADO";
    });

    return res.status(200).json(approvedData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
