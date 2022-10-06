import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactComponent } from './contact/contact.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ContactDialogComponent } from './dialogs/contact-dialog/contact-dialog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PopularCoursesComponent } from './home/popular-courses/popular-courses.component';
import { CareerPlacementComponent } from './home/career-placement/career-placement.component';
import { BenifitsComponent } from './home/benifits/benifits.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OnlineTrainingComponent } from './pages/online-training/online-training.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GetFreeDemoComponent } from './pages/get-free-demo/get-free-demo.component';
import { AddTrainerDialogComponent } from './dialogs/add-trainer-dialog/add-trainer-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddCourseDialogComponent } from './dialogs/add-course-dialog/add-course-dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { CourseInDetailComponent } from './pages/course-in-detail/course-in-detail.component';
import { ClassroomTrainingComponent } from './pages/classroom-training/classroom-training.component';
import { AddClassroomTrainingDialogComponent } from './dialogs/add-classroom-training-dialog/add-classroom-training-dialog.component';
import { EditClassroomTrainingDialogComponent } from './dialogs/edit-classroom-training-dialog/edit-classroom-training-dialog.component';
import { DeleteClassroomTrainingDialogComponent } from './dialogs/delete-classroom-training-dialog/delete-classroom-training-dialog.component';
import { MyErrorHandler } from './app-error-handler';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { DeleteContactDialogComponent } from './dialogs/delete-contact-dialog/delete-contact-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContactComponent,
    AllCoursesComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    ScrollToTopComponent,
    ContactDialogComponent,
    AboutUsComponent,
    PopularCoursesComponent,
    CareerPlacementComponent,
    BenifitsComponent,
    OnlineTrainingComponent,
    GetFreeDemoComponent,
    AddTrainerDialogComponent,
    AddCourseDialogComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    CourseInDetailComponent,
    ClassroomTrainingComponent,
    AddClassroomTrainingDialogComponent,
    EditClassroomTrainingDialogComponent,
    DeleteClassroomTrainingDialogComponent,
    ContactListComponent,
    DeleteContactDialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    NgxUsefulSwiperModule,
    MatCommonModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  { provide: ErrorHandler, useClass: MyErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
