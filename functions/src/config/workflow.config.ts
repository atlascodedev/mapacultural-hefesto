import * as functions from "firebase-functions";

const repositoryName: string = "mapacultural-nextjs";
const repositoryOwner: string = "oparin10";
export const eventType: string = "forge";
export const workflowBearerKey: string = functions.config().workflow.github.app;

export const dispatchURL: string = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/dispatches`;
