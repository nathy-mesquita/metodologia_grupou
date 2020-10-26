module.exports = () => {
  const quantidade_alunos = 20;

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
          de: 50,
          ate: 60,
          outliers_perc_maiores_ate: calcula_outliers(20),
          outliers_perc_menores_de: calcula_outliers(20)
        }
      },
      'CSS': {
        capacidade: {
          de: 50,
          ate: 60,
          outliers_perc_maiores_ate: calcula_outliers(20),
          outliers_perc_menores_de: calcula_outliers(20)
        }
      },
      'Javascript': {
        capacidade: {
          de: 50,
          ate: 52,
          outliers_perc_maiores_ate: calcula_outliers(20),
          outliers_perc_menores_de: calcula_outliers(20)
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

