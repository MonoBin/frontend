import {Routes} from '@angular/router';
import {ViewPasteComponent} from "./view-paste/view-paste.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CreatePasteComponent} from "./create-paste/create-paste.component";
import {OverviewComponent} from "./overview/overview.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'MonoBin | Home'},
  {path: 'login', component: LoginComponent, title: 'MonoBin | Login'},
  {path: 'paste', component: ViewPasteComponent, title: 'MonoBin | View Paste'},
  {path: 'create', component: CreatePasteComponent, title: 'MonoBin | Create Paste'},
  {path: 'overview', component: OverviewComponent, title: 'MonoBin | Overview'},
]
