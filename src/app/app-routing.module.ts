import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { BenifitsComponent } from './home/benifits/benifits.component';
import { CareerPlacementComponent } from './home/career-placement/career-placement.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PopularCoursesComponent } from './home/popular-courses/popular-courses.component';
import { ServicesComponent } from './pages/services/services.component';
import { OnlineTrainingComponent } from './pages/online-training/online-training.component';
import { GetFreeDemoComponent } from './pages/get-free-demo/get-free-demo.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CourseInDetailComponent } from './pages/course-in-detail/course-in-detail.component';
import { ClassroomTrainingComponent } from './pages/classroom-training/classroom-training.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: '', component: CareerPlacementComponent },
    { path: 'popular-courses', component: PopularCoursesComponent },
    { path: 'career-placement', component: CareerPlacementComponent },
    { path: 'benifits', component: BenifitsComponent },
    ]
  },
  { path: 'all-courses', component: AllCoursesComponent, },
  { path: 'all-courses/:courseID', component: CourseInDetailComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'online-training', component: OnlineTrainingComponent },
  { path: 'classroom-training', component: ClassroomTrainingComponent },
  { path: 'get-free-demo', component: GetFreeDemoComponent },
  { path: 'contact-list', component: ContactListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
