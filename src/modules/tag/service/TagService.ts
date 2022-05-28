import Tag from "../entity/Tag";

interface TagService {
    getTag()   : Tag[];
    getTags(id : number) : Tag | undefined
    createTag() : boolean;
    updateTag() : boolean;
}

export default TagService;
