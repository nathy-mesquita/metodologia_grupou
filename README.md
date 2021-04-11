# GRUPOU

---

### Resumo da Descrição do Projeto:

A plataforma grupou buscará facilitar o processo de formação dos trabalhos acadêmicos que são realizados em grupo, onde buscaremos maximizar a capacidade em analisar alunos a fim de gerar grupos de trabalhos mais equilibrados, e com habilidades complementares.

A partir de uma base de dados, teremos que maximizar a eficiência em formação de grupos para determinada atividade desta turma, aumentando sua acurácia.

### Objetivo (Engenharia):

Criar uma metodologia: GPASK (group augmented skill).

### Análise de requisitos:

- Os hard-Skills são mensurados a partir de questões que o aluno responde;
- Os soft-Skills são mensurados a partir do Feedback do grupo, na avaliação 360º;
- Ao criar o trabalho o professor cadastrará a descrição do trabalho, selecionará as habilidades (hard-skills) e o peso em sua distribuição, a quantidade de integrantes por grupo, e pontuação. (Informações definidas em parâmetros.js);
> O sistema deverá tentar agrupar da melhor maneira os alunos que participam da disciplina. – Metodologia GPASK;
- As disciplinas, e cursos devem estar previamente preenchidos no banco, não haverá cadastro em um primeiro momento;

### Pontos a considerar para a definição da metodologia GPASK:

-  Como realizar a gestão das skills de maneira a não termos duplicidade, e torna-las colaborativas no nível da disciplina?
- [ ]  softskills acuracia definitas com um peso de 10% - é a junção do todas as softskills do grupo, ou seja, se um aluno tiver uma SS "Disciplina", todo o grupo terá essa SS .
- [ ]  hardskills acuracia definidas com um peso de 90%
>  Como agrupar os alunos da melhor maneira possível? (Tecnicas de agrupamento / Algoritmos)
-  Como mensurar a capacidade do aluno de maneira relativa ao universo que o mesmo está inserido? (Teremos a avaliação dele / aproveitamento pessoal nas questões /
aproveitamento dos indivíduos deste universo)
-  Como distribuir as questões diárias com base em mensurar a performance do aluno naquele hard-skill, e mensurar seu nível ?



```jsx
 "diferenca_absoluta_media" é a hardskills do aluno - hardskills da turma
```

```jsx
 "gap" é a a HS do maior aluno - a minha / HS do maior aluno - HS do menor aluno. EX(9-6/9-3)=0.6666 ou seja, o meu GAP é 0.666.
```