import { InternalModule } from "../InternalModule";
import { ModuleName } from "functions/TpDocumentation";

export class InternalModuleFrontmatter extends InternalModule {
    public name: ModuleName = "frontmatter";

    async create_static_templates(): Promise<void> {}

    async create_dynamic_templates(): Promise<void> {
        const cache = this.app.metadataCache.getFileCache(
            this.config.target_file
        );
        this.dynamic_functions = new Map(
            Object.entries(cache?.frontmatter || {})
        );
    }
}
