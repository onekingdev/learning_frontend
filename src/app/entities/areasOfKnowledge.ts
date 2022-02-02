import { ITopic } from './block';

export interface IAreasOfKnowledge {
    id: string;
    identifier: string;
    randomSlug: string;
    hexColor: string;
    slug: string;
    image: string;
    islandImage: string;
    name: string;
    topicSet: ITopic[];
}
