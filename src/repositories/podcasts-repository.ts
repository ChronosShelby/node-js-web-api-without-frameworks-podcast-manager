import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";


const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
    queryString?: string
): Promise<PodcastModel[]> => {

    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if (queryString) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) =>
            podcast.episode === queryString ||
            podcast.podcastName === queryString
        );
    }

    return jsonFile;
}