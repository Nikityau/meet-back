import {Module} from "@nestjs/common";
import {EventModel} from "../db/models/event.model";
import {TagModel} from "../db/models/tag.model";
import {UserModel} from "../db/models/user.model";
import {EventsOrgsModel} from "../db/relations/events-orgs.model";
import {ImageModel} from "../db/models/image.model";
import {EventTagsModel} from "../db/relations/event-tags.model";
import {EventsImgsModel} from "../db/relations/events-imgs.model";
import {CommentsModel} from "../db/models/comments.model";


const AdminJsModule = import("@adminjs/nestjs");
(async () => {
    const AdminJs = await import('adminjs')
    const seq = await import('@adminjs/sequelize')
    AdminJs.AdminJS.registerAdapter({
        Resource: seq.Resource,
        Database: seq.Database
    })
})()

const DEFAULT_ADMIN = {
    email: "admin@example.com",
    password: "password"
};

const authenticate = async (email: string, password: string) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
};

@Module({
    imports: [
        AdminJsModule.then(({AdminModule}) => AdminModule.createAdmin({
            adminJsOptions: {
                rootPath: '/admin',
                resources: [
                    EventModel,
                    TagModel,
                    UserModel,
                    ImageModel,
                    CommentsModel,
                    EventsOrgsModel,
                    EventTagsModel,
                    EventsImgsModel,
                ]
            },
        }))
    ]
})
export class AdminModule {}