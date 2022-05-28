import Tag from "../entity/Tag";
import TagService from "./TagService";

class TagsJsonService implements TagService {
    getTag(): Tag[] {
        throw new Error("Method not implemented.");
    }
    getTags(id: number): Tag | undefined {
        throw new Error("Method not implemented.");
    }
    createTag(): boolean {
        throw new Error("Method not implemented.");
    }
    updateTag(): boolean {
        throw new Error("Method not implemented.");
    }

}
