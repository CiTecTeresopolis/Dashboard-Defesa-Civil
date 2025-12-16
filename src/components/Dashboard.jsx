import StatsCards from './StatsCards';
import ChartsSection from './ChartsSection';
import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from '../services/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('2025');

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const dashboardData = await fetchDashboardData(selectedYear);
        setData(dashboardData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [selectedYear]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Erro ao carregar os dados</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="dashboard-header text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Logo SVG - Tamanho maior */}
              <div className="flex-shrink-0">
                <img
                  src="/teste.svg"
                  alt="Logo Defesa Civil"
                  className="w-20 sm:w-20 md:h-20 md:w-20 lg:h-50 lg:w-80 object-contain"
                />
              </div>
              {/* Texto do header */}
              <div className="text-center md:text-left">
                <h1 className=" text-3xl md:text-4xl font-bold mb-2">
                  Defesa Civil de Teresópolis
                </h1>
                <p className="text-lg opacity-90">
                  Relatório de Atendimentos e Vistorias Realizadas
                </p>
              </div>
            </div>
            <div className="bg-white mt-4 md:mt-0 rounded-sm">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32 bg-white/10 border-white/20 text-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectItem value="2015">2015</SelectItem> */}
                  <SelectItem value="2016">2016</SelectItem>
                  <SelectItem value="2017">2017</SelectItem>
                  <SelectItem value="2018">2018</SelectItem>
                  <SelectItem value="2019">2019</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>
             <a
            className="font-bold text-foreground mb-4 text-white mt-5"
            href="https://dados.teresopolis.rj.gov.br/dataset/relacao-de-atendimentos"
          >
            Dados Abertos Compilados - Clique Aqui 🗎
          </a>
          </div>
        </div>
      </div>

      {/* Período dos dados */}
      {data.parcial && (
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <div class="period-note shadow-lg" >
            <strong>Período dos dados:</strong> Janeiro a Junho de {data.ano} (dados parciais - 1° semestre)
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <StatsCards data={data} />
      </div>

      {/* Charts Section */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <ChartsSection data={data} year={selectedYear} />
      </div>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">
            © 2025 Secretaria Municipal de Ciência e Tecnologia - Dashboard gerado com dados de vistorias e atendimentos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

