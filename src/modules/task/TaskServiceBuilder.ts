import {CategoryJson} from "../category/entity/CategoryJson";
import {CategoryJsonService} from "../category/service/CategoryJsonService";
import {TagJson} from "../tag/entity/TagJson";
import {TagsJsonService} from "../tag/service/TagJsonService";
import TagService from "../tag/service/TagService";
import {TaskJson} from "./entity/TaskJson";
import {TaskJsonService} from "./service/TaskJsonService";

export class TaskJsonServicebuilder {
    constructor(private tagsJson : TagJson,
                private categoryJson : CategoryJson,
                private taskJson : TaskJson) {}

    private buildTagService() : TagsJsonService {
        return new TagsJsonService(this.tagsJson);
    }

    private buildCategoryService() : CategoryJsonService {
        return new CategoryJsonService(this.categoryJson);
    }

    public build() : TaskJsonService {
        const tagService : TagsJsonService = this.buildTagService();
        const categoryService : CategoryJsonService = this.buildCategoryService();
        return new TaskJsonService(this.taskJson, categoryService, tagService);
    }
}
