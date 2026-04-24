import { useState } from 'react';
import { Menu, X, Linkedin, Github, Mail, Code2, Server, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import lucasHero from '../imports/lucas1.png';
import lucasSobre from '../imports/lucas2.png';
import todoListImage from '../imports/to-do-list.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Cabeçalho */}
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-[1120px] mx-auto px-4 h-[76px] flex items-center justify-between">
          <a href="#topo-do-site" className="flex items-center gap-1 text-xl font-bold">
            <span className="text-primary">&lt;/</span>
            Lucas Mendes
            <span className="text-primary">&gt;</span>
          </a>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#topo-do-site" className="text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Início</a>
            <a href="#habilidades" className="text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Habilidades</a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Sobre</a>
            <a href="#projetos" className="text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Projetos</a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full">Contato</a>
          </nav>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <Menu size={34} />
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[min(320px,82vw)] bg-[#090b12] z-50 p-5"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="text-foreground mb-7"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={34} />
              </button>
              <nav className="text-right">
                <a
                  href="#topo-do-site"
                  className="block py-4 text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </a>
                <a
                  href="#habilidades"
                  className="block py-4 text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Habilidades
                </a>
                <a
                  href="#sobre"
                  className="block py-4 text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre
                </a>
                <a
                  href="#projetos"
                  className="block py-4 text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projetos
                </a>
                <a
                  href="#contato"
                  className="block py-4 text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </header>

      <main className="pt-[76px]">
        {/* Seção inicial */}
        <section
          id="topo-do-site"
          className="min-h-screen flex items-center py-22"
          style={{
            background: 'radial-gradient(circle at top left, rgba(40, 120, 255, 0.22), transparent 32%), linear-gradient(180deg, #0c1020 0%, #07080d 100%)'
          }}
        >
          <div className="max-w-[1120px] mx-auto px-4 w-full">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <motion.div
                className="order-2 md:order-1 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-[clamp(2.8rem,6vw,5.2rem)] leading-[1.1] mb-6 max-w-[680px] mx-auto md:mx-0">
                  Desenvolvedor full stack
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed max-w-[600px] mb-10 mx-auto md:mx-0">
                  Crio aplicações web modernas, responsivas e escaláveis com React, Node.js e JavaScript.
                </p>

                <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
                  <a
                    href="#projetos"
                    className="inline-flex items-center justify-center min-h-[48px] px-6 bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    Ver projetos
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center min-h-[48px] px-6 border border-border text-foreground hover:border-foreground transition-colors"
                  >
                    Entrar em contato
                  </a>
                </div>

                <div className="flex gap-5 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/lucas-m-65817a107/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="https://github.com/LucasMendes99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="mailto:lucas.ms2312@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center order-1 md:order-2 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Elementos decorativos de fundo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[350px] h-[350px] rounded-full border-2 border-primary/20 animate-pulse" />
                </div>

                {/* Container da imagem */}
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-primary/30 bg-gradient-to-br from-card to-secondary shadow-2xl">
                  <img
                    src={lucasHero}
                    alt="Lucas Mendes"
                    className="max-h-[520px] object-cover"
                  />
                  {/* Gradiente sobre a imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de habilidades */}
        <section id="habilidades" className="py-22 bg-background">
          <div className="max-w-[1120px] mx-auto px-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-10.5">
              Minhas <span className="text-primary">habilidades</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Code2 size={54} />,
                  title: 'Front-end',
                  description: 'Desenvolvimento de interfaces modernas, responsivas e bem organizadas com React, HTML, CSS e JavaScript.'
                },
                {
                  icon: <Server size={54} />,
                  title: 'Back-end',
                  description: 'Criação de APIs, integração com bancos de dados e estruturação da lógica da aplicação com Node.js.'
                },
                {
                  icon: <Rocket size={54} />,
                  title: 'Full stack',
                  description: 'Integração entre front-end e back-end para construir aplicações completas, funcionais e escaláveis.'
                }
              ].map((skill, index) => (
                <motion.article
                  key={index}
                  className="p-8.5 rounded-lg border border-border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:-translate-y-1.5 hover:border-primary/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary mb-4.5">{skill.icon}</div>
                  <h3 className="text-2xl mb-2.5">{skill.title}</h3>
                  <p className="text-muted-foreground leading-[1.75]">{skill.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Seção sobre */}
        <section id="sobre" className="py-22 bg-card">
          <div className="max-w-[1120px] mx-auto px-4">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
              <motion.div
                className="flex justify-center relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Fundo decorativo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                </div>

                {/* Imagem com moldura */}
                <div className="relative z-10">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                    <img
                      src={lucasSobre}
                      alt="Lucas Mendes sorrindo"
                      className="max-h-[520px] object-cover"
                    />
                    {/* Detalhes nos cantos */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] mb-5.5">
                  Muito prazer, <span className="block text-primary">sou Lucas Mendes.</span>
                </h2>
                <p className="text-muted-foreground leading-[1.75] mb-4">
                  Sou estudante de Engenharia de Software e desenvolvedor full stack. Trabalho com HTML, CSS, JavaScript e React no front-end, além de Node.js no back-end, criando aplicações completas e bem estruturadas.
                </p>
                <p className="text-muted-foreground leading-[1.75]">
                  Desenvolvo projetos pessoais que integram front-end e back-end para evoluir minhas habilidades. Busco uma oportunidade para colaborar com uma equipe, aprender na prática e contribuir com soluções completas.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de projetos */}
        <section
          id="projetos"
          className="py-22"
          style={{ background: 'linear-gradient(180deg, #07080d 0%, #0d1019 100%)' }}
        >
          <div className="max-w-[1120px] mx-auto px-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-10.5">
              Meu <span className="text-primary">portfólio</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.article
                className="rounded-lg border border-border bg-card shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(40,120,255,0.3)] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-[260px] overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center bg-top group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${todoListImage})` }}
                  />
                  {/* Gradiente sobre a imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  {/* Etiqueta */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs rounded-full">
                    Concluído
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[1.35rem] mb-2.5">Lista de tarefas</h3>
                  <p className="text-muted-foreground leading-[1.75] mb-5.5">
                    Aplicação para organizar tarefas, praticar JavaScript e treinar manipulação de dados na interface.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://lucasmendes99.github.io/To-do-list/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[42px] px-4 rounded-lg bg-primary text-white text-sm hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(40,120,255,0.24)] transition-all"
                    >
                      Ver projeto
                    </a>
                    <a
                      href="https://github.com/LucasMendes99/To-do-list"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[42px] px-4 rounded-lg border border-border bg-white/[0.04] text-sm hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(40,120,255,0.24)] transition-all"
                    >
                      Repositório
                    </a>
                  </div>
                </div>
              </motion.article>

              {[
                { title: 'Próximo projeto', desc: 'Novo projeto será adicionado em breve para mostrar minha evolução prática.' },
                { title: 'Em desenvolvimento', desc: 'Projeto em construção para aplicar novos estudos e ampliar meu portfólio.' }
              ].map((project, index) => (
                <motion.article
                  key={index}
                  className="rounded-lg border border-dashed border-border bg-card/50 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden opacity-70 hover:opacity-90 transition-opacity"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  <div className="relative h-[260px] overflow-hidden bg-muted/10 flex items-center justify-center">
                    <Rocket className="text-muted-foreground" size={58} />
                    {/* Etiqueta */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-muted-foreground/20 text-muted-foreground text-xs rounded-full">
                      Em breve
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[1.35rem] mb-2.5">{project.title}</h3>
                    <p className="text-muted-foreground leading-[1.75]">{project.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de contato */}
        <section id="contato" className="py-22 bg-card">
          <div className="max-w-[1120px] mx-auto px-4">
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-center mb-10.5">
              Entre em <span className="text-primary">contato</span>
            </h2>
            <form
              action="mailto:lucas.ms2312@gmail.com"
              method="post"
              encType="text/plain"
              className="max-w-[560px] mx-auto flex flex-col gap-3.5"
            >
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                required
                className="w-full border border-border outline-none px-4 py-4.25 rounded-lg bg-input-background text-foreground focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                required
                className="w-full border border-border outline-none px-4 py-4.25 rounded-lg bg-input-background text-foreground focus:border-primary transition-colors"
              />
              <input
                type="tel"
                name="celular"
                placeholder="Telefone ou WhatsApp"
                className="w-full border border-border outline-none px-4 py-4.25 rounded-lg bg-input-background text-foreground focus:border-primary transition-colors"
              />
              <textarea
                name="mensagem"
                placeholder="Escreva sua mensagem"
                required
                className="w-full border border-border outline-none px-4 py-4.25 rounded-lg bg-input-background text-foreground min-h-[150px] resize-y focus:border-primary transition-colors"
              />
              <div className="text-center mt-2.5">
                <input
                  type="submit"
                  value="Enviar"
                  className="w-[150px] min-h-[48px] border-0 bg-primary text-white rounded-lg cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(40,120,255,0.24)] transition-all"
                />
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="py-9 px-4 border-t border-border">
        <div className="max-w-[1120px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <a href="#topo-do-site" className="flex items-center gap-1 text-xl font-bold">
              <span className="text-primary">&lt;/</span>
              Lucas Mendes
              <span className="text-primary">&gt;</span>
            </a>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/lucas-m-65817a107/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46px] h-[46px] inline-flex items-center justify-center rounded-full bg-secondary text-foreground text-[22px] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(40,120,255,0.24)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/LucasMendes99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[46px] h-[46px] inline-flex items-center justify-center rounded-full bg-secondary text-foreground text-[22px] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(40,120,255,0.24)] transition-all"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-center">
            <p className="flex items-center justify-center gap-2.5 text-muted-foreground">
              <Mail className="text-primary" size={18} />
              <a href="mailto:lucas.ms2312@gmail.com">lucas.ms2312@gmail.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}