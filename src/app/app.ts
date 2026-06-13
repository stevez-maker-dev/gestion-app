import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink, NavigationEnd } from '@angular/router';
import { Sidebar } from './components/sidebar/sidebar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  private router = inject(Router);

  ngOnInit(): void {
    const ultimaRuta = localStorage.getItem('ultimaRuta');
    const rutaActual = window.location.pathname;

    if(ultimaRuta && ultimaRuta !== '/' && rutaActual === '/') {
      this.router.navigate([ultimaRuta]);
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      localStorage.setItem('ultimaRuta', event.urlAfterRedirects);
    });
  }
}
