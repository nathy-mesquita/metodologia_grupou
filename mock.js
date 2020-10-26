//https://chancejs.com/
/*
Criar Modelos:
OK - Definir tamanho da turma
OK - Criar o seed com o prefixo(base) + sufixo(incremental)
OK - Definir as skills da Disciplina [pontos a serem distribuídos]
OK - Criar SoftSkill predominantes (5 skills)
*/

/* 
Dividir integrantes:
Definir Divisão dos Grupos na Atividade
Definir peso das Disciplinas na Atividade
*/

/*
Mensurar:
Gerar um indíce de saber naquele grupo
Gerar o conhecimento das softskills
*/

const Chance = require('chance');
const params = require('./config/parametros.js')();

const { turma } = params;

const chance = new Chance(turma);
require('./ClassroomGenerate.js')(chance)
var fs = require('fs');
const { alunos, analise_hardskills_turma } = chance.classroom(params);

fs.writeFile(`turmas/${turma}.json`, JSON.stringify({
  alunos,
  analise: analise_hardskills_turma
}, null, 2), function (err) {
  if (err) throw err;
  console.log('complete');
}
);

