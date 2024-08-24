import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { classRegistryProvider, manageableClassRegistryProvider } from '@app/app/di/class-registry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    classRegistryProvider,
    manageableClassRegistryProvider,
  ],
})
export class AppComponent {
  title = 'grade-training';
}
