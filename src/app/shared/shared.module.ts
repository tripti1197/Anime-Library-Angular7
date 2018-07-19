import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ HeaderComponent, FooterComponent, SpinnerComponent ],
  declarations: [ HeaderComponent, FooterComponent, SpinnerComponent ],
  providers: [ SpinnerService ]
})
export class SharedModule { }
