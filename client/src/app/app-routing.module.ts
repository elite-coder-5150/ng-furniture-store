import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from "./faq/faq.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {BlogPostsComponent} from "./blog-posts/blog-posts.component";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {OrderSummaryComponent} from "./order-summary/order-summary.component";

const routes: Routes = [
	{path: '', component: OrderSummaryComponent},
	{path: 'faq', component: FaqComponent},
	{path: 'product-details', component: ProductDetailsComponent},
	{path: 'blog-posts', component: BlogPostsComponent},
	{path: 'cart', component: FaqComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
