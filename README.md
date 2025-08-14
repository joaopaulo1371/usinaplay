✅ README.md
# 📱 Projeto Ionic + Angular + Firebase

Este projeto é um aplicativo híbrido desenvolvido com **Ionic 7**, **Angular standalone components** e **Firebase** para autenticação e mock de dados. Ele utiliza **Swiper** para implementar carrosséis de forma moderna, substituindo os antigos `ion-slides`.

---

## 🚀 Tecnologias utilizadas
- **Angular 16+** com **Standalone Components**
- **Ionic 7**
- **Firebase** (Firestore para dados mockados)
- **RxJS** (para programação reativa)
- **Swiper** (para carrosséis)
- **TypeScript**

---

## 📂 Estrutura do projeto


src/
app/
components/
header/
program-card/
pages/
home/
services/
data.service.ts
environments/
environment.ts


- **components/** → Componentes reutilizáveis (ex.: `HeaderComponent`, `ProgramCardComponent`)
- **pages/** → Páginas principais do app (ex.: `HomePage`)
- **services/** → Serviços de dados (ex.: integração com Firebase)
- **environments/** → Configurações do ambiente (chaves do Firebase)

---

## 🔧 Pré-requisitos

- **Node.js** versão 18 ou superior
- **Ionic CLI** instalado globalmente:
  ```bash
  npm install -g @ionic/cli


Conta no Firebase para criar o app e obter as credenciais.

⚙️ Como rodar o projeto localmente

Clone o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


Instale as dependências:

npm install

Instale o Swiper (para carrosséis):

npm install swiper@10


Rodar o projeto:

ionic serve
