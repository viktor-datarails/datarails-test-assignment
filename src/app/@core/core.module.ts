import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '@core/services/users.service';
import { TablesService } from '@core/services/tables.service';
import { NotificationsService } from '@core/services/notifications.service';

export const throwIfAlreadyLoaded = (parentModule: any, moduleName: string) => {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
};

export const CORE_PROVIDERS = [
  UsersService,
  TablesService,
  NotificationsService,
];

@NgModule({
    imports: [CommonModule],
    exports: [],
    providers: [...CORE_PROVIDERS],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
