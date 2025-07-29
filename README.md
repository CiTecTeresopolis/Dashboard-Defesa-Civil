# Dashboard Defesa Civil

Este projeto é um dashboard interativo para visualização de métricas e estatísticas relacionadas às ocorrências atendidas pela Defesa Civil. Ele foi desenvolvido utilizando React e Vite, com visualização de dados simulados a partir de um arquivo JSON.

## Funcionalidades
- Visualização de métricas anuais (2024, 2025)
- Gráficos por mês, categoria, bairro, área, origem e tipo de ocorrência
- Cards de estatísticas resumidas
- Interface responsiva e moderna
- Dados carregados dinamicamente do arquivo `public/dashboard-data.json`

## Estrutura do Projeto
```
├── public/
│   └── dashboard-data.json   # Dados simulados do dashboard
├── src/
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globais
│   ├── main.jsx             # Ponto de entrada do React
│   ├── components/          # Componentes de UI e gráficos
│   ├── hooks/               # Hooks customizados
│   ├── lib/                 # Funções utilitárias
│   └── services/
│       └── api.js           # Funções para buscar dados do dashboard
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
```

## Como Executar Localmente
1. **Pré-requisitos:**
   - Node.js >= 18
   - pnpm (ou npm/yarn)

2. **Instale as dependências:**
   ```powershell
   pnpm install
   ```
   Ou use `npm install` ou `yarn install` se preferir.

3. **Inicie o servidor de desenvolvimento:**
   ```powershell
   pnpm run dev
   ```
   O dashboard estará disponível em `http://localhost:5173` (ou porta informada pelo Vite).

## Como funciona o carregamento dos dados
Os dados do dashboard são simulados e estão no arquivo `public/dashboard-data.json`. As funções de busca em `src/services/api.js` utilizam `fetch` para carregar e filtrar os dados conforme o ano selecionado.

## Personalização dos Dados
Para atualizar ou adicionar novos anos e métricas, basta editar o arquivo `public/dashboard-data.json` seguindo a estrutura existente.

## Estrutura dos Componentes
- `components/ChartsSection.jsx`: Seção principal de gráficos
- `components/Dashboard.jsx`: Layout do dashboard
- `components/StatsCards.jsx`: Cards de estatísticas
- `components/charts/`: Gráficos específicos (por mês, categoria, bairro, etc.)
- `components/ui/`: Componentes de interface reutilizáveis

## Scripts Disponíveis
- `pnpm run dev` — Inicia o servidor de desenvolvimento
- `pnpm run build` — Gera a versão de produção
- `pnpm run preview` — Visualiza o build localmente

## Tecnologias Utilizadas
- React
- Vite
- JavaScript (ES6+)
- CSS

## Observações
- Este projeto utiliza dados simulados, mas pode ser facilmente adaptado para consumir APIs reais.
- O dashboard é totalmente responsivo e pode ser acessado em dispositivos móveis.

## Licença
Este projeto é open-source e pode ser utilizado livremente para fins educacionais e institucionais.

---

**Desenvolvido por Defesa Civil | Projeto de Visualização de Dados**
