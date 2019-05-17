import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'products/:id', 
    component: ProductComponent
  },
  { 
    path: 'cart', 
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
