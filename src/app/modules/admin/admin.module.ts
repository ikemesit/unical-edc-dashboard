import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CoursesComponent } from './views/courses/courses.component';
import { CourseRegistrationsComponent } from './views/course-registrations/course-registrations.component';
import { AcademicSessionsComponent } from './views/academic-sessions/academic-sessions.component';
import { DepartmentsComponent } from './views/departments/departments.component';
import { FacultiesComponent } from './views/faculties/faculties.component';
import { ReceiptsComponent } from './views/receipts/receipts.component';
import { VendorsComponent } from './views/vendors/vendors.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from 'app/shared/shared.module';
import { CreateAcademicSessionComponent } from './components/create-academic-session/create-academic-session.component';
import { CreateFacultyComponent } from './components/create-faculty/create-faculty.component';
import { CreateDepartmentComponent } from './components/create-department/create-department.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CreateVendorComponent } from './components/create-vendor/create-vendor.component';
import { TransactionsComponent } from './views/transactions/transactions.component';

const adminRoutes: Route[] = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'courses',
                component: CoursesComponent,
            },
            {
                path: 'course-registrations',
                component: CourseRegistrationsComponent,
            },
            {
                path: 'receipts',
                component: ReceiptsComponent,
            },
            {
                path: 'vendors',
                component: VendorsComponent,
            },
            {
                path: 'academic-sessions',
                component: AcademicSessionsComponent,
            },
            {
                path: 'departments',
                component: DepartmentsComponent,
            },
            {
                path: 'faculties',
                component: FacultiesComponent,
            },
            {
                path: 'transactions',
                component: TransactionsComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        CoursesComponent,
        CourseRegistrationsComponent,
        ReceiptsComponent,
        VendorsComponent,
        AcademicSessionsComponent,
        DepartmentsComponent,
        FacultiesComponent,
        CreateAcademicSessionComponent,
        CreateFacultyComponent,
        CreateDepartmentComponent,
        CreateCourseComponent,
        CreateVendorComponent,
        TransactionsComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
})
export class AdminModule {}
