import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { UNIVERSAL_LOCAL_STORAGE } from '@ng-web-apis/universal';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    FlexLayoutServerModule
  ],
  providers: [UNIVERSAL_LOCAL_STORAGE],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
