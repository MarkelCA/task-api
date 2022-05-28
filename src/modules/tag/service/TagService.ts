import Task from "../../task/entity/Task";
import Tag from "../entity/Tag";

interface TagService {
    getTags() : Tag[];
    getTag(id : number) : Tag 
    createTag() : boolean;
    updateTag() : boolean;
}

export default TagService;
