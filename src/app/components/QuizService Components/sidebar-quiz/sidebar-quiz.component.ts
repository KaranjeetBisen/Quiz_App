import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar-quiz',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-quiz.component.html',
  styleUrl: './sidebar-quiz.component.scss'
})
export class SidebarQuizComponent {

}
