// Caminho do arquivo JSON
const DATA_URL = '/dashboard-data.json';

// Simulação de delay de rede
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Função para carregar todos os dados do JSON
const loadDashboardData = async () => {
  await delay(800 + Math.random() * 400);
  const response = await fetch(DATA_URL);
  if (!response.ok) throw new Error('Erro ao carregar dados do dashboard');
  return await response.json();
};

// Função principal da API
export const fetchDashboardData = async (year) => {
  const allData = await loadDashboardData();
  if (allData[year]) {
    return allData[year];
  } else {
    throw new Error(`Dados não disponíveis para o ano ${year}`);
  }
};

// Função para buscar anos disponíveis
export const fetchAvailableYears = async () => {
  const allData = await loadDashboardData();
  return Object.keys(allData);
};

// Função para buscar estatísticas resumidas
export const fetchSummaryStats = async () => {
  const allData = await loadDashboardData();
  const years = Object.keys(allData);
  const totalRecords = years.reduce((acc, year) => acc + (allData[year].total_registros || 0), 0);
  return {
    totalYears: years.length,
    totalRecords,
    lastUpdate: new Date().toISOString(),
  };
};
