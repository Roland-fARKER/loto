import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  image: string;
  alt: string;
  gitUser?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Rolando Loaisiga',
      image: 'https://geo-calculo.netlify.app/assets/rolando.png',
      alt: 'Rolando Loaisiga',
      gitUser: 'Roland-fARKER',
    },
  ];
}
