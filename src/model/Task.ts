import Tag from "./Tag"

export default interface Task {
    readonly id  : number
    title        : String,
    description? : String,
    tags         : [Tag]
}
