import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCode, faCar, faHeadset, faPlug } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCode, faCar, faHeadset, faPlug);
  }
  menuOpen = false;

  services = [
    { title: 'Desenvolvimento Web', desc: 'Aplicações modernas e APIs escaláveis visando performance e usabilidade.', icon: faCode },
    { title: 'Soluções para Concessionárias', desc: 'Integração com ERPs, estoque e CRM.', icon: faCar },
    { title: 'Suporte Técnico', desc: 'Atendimento remoto e on-site, com SLA ajustável.', icon: faHeadset },
    { title: 'Integrações & APIs', desc: 'Automatize processos conectando seus sistemas.', icon: faPlug }
  ];

  portfolio = [
  {
    nome: 'Sistema de Gestão Para Podologia e Estética',
    descricao: 'Plataforma web completa para controle de atendimentos, agendamentos e relatórios financeiros.',
    imagem: 'assets/portfolio/ak.png'
  },
  {
    nome: 'Dashboard de Concessionária',
    descricao: 'Painel interativo personalizado com indicadores de vendas e performance de revendedores.',
    imagem: 'assets/portfolio/conc.png'
  },
  {
    nome: 'Portal de Suporte Técnico',
    descricao: 'Sistema de tickets com atendimento em tempo real e histórico de chamados.',
    imagem: 'assets/portfolio/suporte.png'
  },
  {
    nome: 'Integração ERP & API Financeira',
    descricao: 'Integração segura entre ERP corporativo e APIs de instituições financeiras.',
    imagem: 'assets/portfolio/erp.png'
  }
];

  contact = { name: '', email: '', phone: '', message: '' };

  submit() {
    // aqui você integraria com backend. por enquanto mostramos alerta.
    alert(`Obrigado ${this.contact.name || 'cliente'}! Sua mensagem foi recebida.`);
    this.contact = { name: '', email: '', phone: '', message: '' };
    this.menuOpen = false;
  }
}
