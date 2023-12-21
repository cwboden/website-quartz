import { QuartzFilterPlugin } from "../types"

export const RemoveUnlessShared: QuartzFilterPlugin<{}> = () => ({
    name: "RemoveUnlessShared",
    shouldPublish(_ctx, [_tree, vfile]) {
        const shareFlag: boolean = vfile.data?.frontmatter?.share ?? false
        return shareFlag
    },
})
