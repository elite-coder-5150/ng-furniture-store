import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {PostFooterComponent} from './post-footer/post-footer.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {FaqComponent} from './faq/faq.component';
import {NewsletterFormComponent} from './newsletter-form/newsletter-form.component';
import {CartComponent} from './cart/cart.component';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {RecentPostsComponent} from './recent-posts/recent-posts.component';
import {TagsComponent} from './tags/tags.component';
import {GalleryComponent} from './gallery/gallery.component';
import {CommentFormComponent} from './comment-form/comment-form.component';
import {BlogPostsComponent} from './blog-posts/blog-posts.component';
import {LatestBlogPostComponent} from './latest-blog-post/latest-blog-post.component';
import {TeamComponent} from './team/team.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {OrderSummaryComponent} from './order-summary/order-summary.component';
import {ShippingComponent} from './shipping/shipping.component';
import {BilingComponent} from './biling/biling.component';
import {PaymentMethodsComponent} from './payment-methods/payment-methods.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SingleBlogPostComponent} from './single-blog-post/single-blog-post.component';
import {ProductReviewComponent} from './product-review/product-review.component';
import {ProductReviewFormComponent} from './product-review-form/product-review-form.component';
import {ReplyFormComponent} from './reply-form/reply-form.component';
import {ProductDescriptionComponent} from './product-description/product-description.component';
import {PriceFilterComponent} from './price-filter/price-filter.component';
import {ColorFilterComponent} from './color-filter/color-filter.component';
import {CategoryFilterComponent} from './category-filter/category-filter.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {ProductGridComponent} from './product-grid/product-grid.component';
import {NewArrivalsComponent} from './new-arrivals/new-arrivals.component';
import {NewestProductsComponent} from './newest-products/newest-products.component';
import {FeaturedProductsComponent} from './featured-products/featured-products.component';
import {InteriorModernComponent} from './interior-modern/interior-modern.component';
import {AboutDeliveryComponent} from './about-delivery/about-delivery.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import { PrimaryFullWidthBtnComponent } from './primary-full-width-btn/primary-full-width-btn.component';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		PostFooterComponent,
		ContactFormComponent,
		FaqComponent,
		NewsletterFormComponent,
		CartComponent,
		CartSummaryComponent,
		ContactInfoComponent,
		RecentPostsComponent,
		TagsComponent,
		GalleryComponent,
		CommentFormComponent,
		BlogPostsComponent,
		LatestBlogPostComponent,
		TeamComponent,
		WishlistComponent,
		CheckoutComponent,
		OrderSummaryComponent,
		ShippingComponent,
		BilingComponent,
		PaymentMethodsComponent,
		ProductDetailsComponent,
		SingleBlogPostComponent,
		ProductReviewComponent,
		ProductReviewFormComponent,
		ReplyFormComponent,
		ProductDescriptionComponent,
		PriceFilterComponent,
		ColorFilterComponent,
		CategoryFilterComponent,
		SearchFormComponent,
		ProductGridComponent,
		NewArrivalsComponent,
		NewestProductsComponent,
		FeaturedProductsComponent,
		InteriorModernComponent,
		AboutDeliveryComponent,
		AboutUsComponent,
		LoginFormComponent,
		RegisterFormComponent,
  PrimaryFullWidthBtnComponent,
  PrimaryBtnComponent,
  CartItemComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
