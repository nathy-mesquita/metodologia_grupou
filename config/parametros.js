module.exports = () => {
  const quantidade_alunos = 40;

  const calcula_outliers = (percentual) => {
    return Math.round((quantidade_alunos * percentual) / 100);
  }

  return {
    turma: 123,
    quantidade_alunos: quantidade_alunos,
    softskills: [
      'Resolução de Problemas',
      'Comunicação Eficaz',
      'Gestão de Tempo',
      'Foco',
      'Criatividade',
      'Colaboração',
      'Flexibidade',
      'Liderança de Equipe',
      'Auto-Controle',
      'Trabalhar sob pressão',
      'Trabalhar orientado para Resultados',
      'Produtividade',
      'Negociação',
      'Gestão de Conflitos',
      'Equilíbrio Emocional',
      'Proatividade',
      'Motivação',
      'Disciplina',
    ],

    hardskills_turma: {
      'HTML': {
        capacidade: {
          de: 20,
          ate: 80,
          outliers_perc_maiores_ate: calcula_outliers(10),
          outliers_perc_menores_de: calcula_outliers(5)
        }
      },
      'CSS': {
        capacidade: {
          de: 50,
          ate: 55,
          outliers_perc_maiores_ate: calcula_outliers(0),
          outliers_perc_menores_de: calcula_outliers(0)
        }
      },
      'Javascript': {
        capacidade: {
          de: 30,
          ate: 60,
          outliers_perc_maiores_ate: calcula_outliers(0),
          outliers_perc_menores_de: calcula_outliers(50)
        }
      }
    },

    hardskills_atividade: {
      'HTML': {
        peso: 50
      },
      'CSS': {
        peso: 30
      },
      'Javascript': {
        peso: 20
      }
    }

  }
}

