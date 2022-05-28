import Tag from "../entity/Tag";
import TagService from "./TagService";
import {TagJson} from "../entity/TagJson";

export class TagsJsonService implements TagService {
    private tags : Tag[];

    public constructor(tagsJson : TagJson) {
        this.tags = [...tagsJson.tags]
    }
    
    getTags(): Tag[] {
        throw new Error("Method not implemented.");
    }

    getTag(id: number): Tag {
        const foundTag = this.tags.find((tag) => {
            return tag.id == id
        })

        if(foundTag == undefined)
            throw new Error('Tag not found with this id');

        return foundTag;
    }

    createTag(): boolean {
        throw new Error("Method not implemented.");
    }

    updateTag(): boolean {
        throw new Error("Method not implemented.");
    }

}
