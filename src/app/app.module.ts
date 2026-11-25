import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { Student1Component } from './shared/component/student1/student1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './shared/component/todo/todo/todo.component';
import { PostComponent } from './shared/component/posts/post/post.component';
import { ProductComponent } from './shared/component/product/product/product.component';
import { MovieComponent } from './shared/component/movie/movie/movie.component';



@NgModule({
  declarations: [
    AppComponent,
    Student1Component,
    TodoComponent,
    PostComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MovieComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
