import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  constructor() {
    
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  fecharMenu() {
    this.menuOpen = false;
  }
  
  services = [
    {
      title: 'Desenvolvimento Web',
      desc: 'Aplicações modernas e APIs escaláveis visando performance e usabilidade.',
      iiconClass: 'fa-solid fa-code',
    },
    {
      title: 'Soluções para Concessionárias',
      desc: 'Integração com ERPs, estoque e CRM.',
      iconClass: 'fa-solid fa-car',
    },
    {
      title: 'Suporte Técnico',
      desc: 'Atendimento remoto e on-site, com SLA ajustável.',
      iconClass: 'fa-solid fa-headset',
    },
    {
      title: 'Integrações & APIs',
      desc: 'Automatize processos conectando seus sistemas.',
      iconClass: 'fa-solid fa-plug',
    },
  ];

  portfolio = [
    {
      nome: 'Sistema de Gestão',
      descricao:
        'Plataforma web completa para controle de atendimentos, agendamentos e relatórios financeiros. Ideal para estéticas, salões de beleza e clínicas.',
      imagem: 'assets/portfolio/ak.png',
    },
    {
      nome: 'Dashboard de Concessionária',
      descricao:
        'Painel interativo personalizado com indicadores de vendas e performance de revendedores conectado ao ERP e corporativo personalizado.',
      imagem: 'assets/portfolio/conc.png',
    },
    {
      nome: 'Portal de Suporte Técnico',
      descricao:
        'Sistema de tickets com atendimento em tempo real e histórico de chamados.',
      imagem: 'assets/portfolio/suporte.png',
    },
    {
      nome: 'Integração ERP & API',
      descricao:
        'Integração segura entre ERP corporativo e APIs de terceiros.',
      imagem: 'assets/portfolio/erp.png',
    },
  ];

  contact = { name: '', email: '', phone: '', message: '' };

  submit() {
    const templateParams = {
      from_name: this.contact.name,
      from_email: this.contact.email,
      phone: this.contact.phone,
      message: this.contact.message,
    };

    emailjs
      .send('service_c2x3wam', 'template_l8vb0uw', templateParams, '8WIHfYvToHA-8RfkP')
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        this.contact = { name: '', email: '', phone: '', message: '' };
        this.menuOpen = false;
      })
      .catch((error) => {
        alert('Erro ao enviar mensagem.');
        console.error(error);
      });
  }
}
