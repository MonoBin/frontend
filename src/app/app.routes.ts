import {Routes} from '@angular/router';
import {ViewPasteComponent} from "./view-paste/view-paste.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CreatePasteComponent} from "./create-paste/create-paste.component";
import {OverviewComponent} from "./overview/overview.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'MonoPaste | Home'},
  {path: 'login', component: LoginComponent, title: 'MonoPaste | Login'},
  {path: 'paste', component: ViewPasteComponent, title: 'MonoPaste | View Paste'},
  {path: 'create', component: CreatePasteComponent, title: 'MonoPaste | Create Paste'},
  {path: 'overview', component: OverviewComponent, title: 'MonoPaste | Overview'},
]
