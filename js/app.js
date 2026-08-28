(function () {
  "use strict";

  var i18nDict = {
    pt: {
      nav_sobre: "Sobre",
      nav_projetos: "Projetos",
      nav_skills: "Stack",
      nav_trilha: "Formação",
      nav_experiencia: "Experiência",
      nav_contato: "Contato",
      guide_inicio: "Início",
      hero_kicker: "Engenheiro de Software & Desenvolvedor Back-end",
      hero_role:
        "Engenheiro de Software & Desenvolvedor Back-end Java · SpringBoot, Node.js & APIs",
      hero_desc:
        "Desenvolvedor Back-end especializado no ecossistema Java e SpringBoot. Migrei do Direito para a Engenharia de Software focando em APIs RESTful escaláveis, microsserviços, segurança com OAuth2/2FA, mensageria e automação com IA.",
      hero_btn_projects: "Ver projetos",
      hero_btn_contact: "Falar comigo",
      hero_btn_about: "Sobre mim",
      ficha_base_lbl: "Cidade",
      ficha_base_val: "Salvador - BA",
      ficha_disp_lbl: "Disponível",
      ficha_disp_val: "CLT / Estágio",
      ficha_foco_lbl: "Foco Atual",
      ficha_foco_val: "Java, SpringBoot & Microsserviços",
      ficha_codigo_lbl: "Fazendo códigos desde",
      hero_cap_interactive: "Interativo",
      hero_cap_move: "Mova o cursor",
      placar_1_lbl: "Java, SpringBoot, SpringData JPA & Microsserviços",
      placar_2_lbl:
        "Arquitetura de software limpa, Clean Code e Desenvolvimento Ágil",
      placar_3_lbl: "Docker, Kubernetes, AWS, Kafka & LangChain4j",
      sobre_title: "Como eu trabalho",
      sobre_p1:
        "Minha jornada profissional começou no Direito, mas foi ao descobrir a programação que encontrei minha verdadeira vocação. Migrei para a Engenharia de Software motivado pela certeza de construir soluções concretas, escaláveis e de alto impacto.",
      sobre_p2:
        "Como desenvolvedor back-end, dedico meu tempo à construção de sistemas robustos em Java, Javascript, Node.JS, Typescript. Valorizo o trabalho metódico, a organização rigorosa do código e a atenção extrema aos detalhes — virtudes herdadas da formação jurídica e essenciais para a engenharia de software de qualidade.",
      sobre_p3:
        "Tenho especial interesse no desenvolvimento de APIs RESTful, microsserviços, modelagem de banco de dados e integração de inteligência artificial em processos de automação.",
      sobre_read_full: "Ler história completa ›",
      ficha_role_lbl: "Função",
      ficha_role_val: "Desenvolvedor Back-end",
      ficha_edu_lbl: "Formação",
      ficha_edu_val: "Engenharia de Software",
      ficha_bg_lbl: "Background",
      ficha_bg_val: "Direito & Análise Crítica",
      ficha_spec_lbl: "Especialidades",
      ficha_db_lbl: "Bancos de Dados",
      ficha_lang_lbl: "Idiomas",
      ficha_lang_val: "Português (Nativo) e Inglês (Fluente)",
      projetos_kicker: "projetos/ · destaques",
      projetos_title: "O que eu construí",
      projetos_lead:
        "Soluções de back-end, APIs e automações focadas em estabilidade e desempenho.",
      p1_title: "API Gateway & Microsserviços",
      p1_desc:
        "Arquitetura de microsserviços orientada a eventos para alta demanda. Validação rigorosa de dados e alta performance.",
      p2_title: "Automação & Agente Back-end com IA",
      p2_desc:
        "Pipeline de processamento assíncrono para classificação e resposta inteligente de requisições utilizando modelos de linguagem.",
      p3_title: "Sistema Corporativo & Autenticação Segura",
      p3_desc:
        "Engine corporativa completa com controle de permissões, logs de auditoria e persistência otimizada no banco de dados.",
      github_card_title: "Repositórios no GitHub",
      github_card_desc:
        "Confira meus outros projetos, scripts de automação, estudos e contribuições de código-fonte aberto.",
      stack_title: "Ferramentas & Ecossistema",
      stack_c1: "Java & Spring Ecosystem",
      stack_c2: "Back-end & Arquitetura",
      stack_c3: "Bancos de Dados & DevOps",
      stack_c4: "IA & Automação",
      trilha_title: "Trilha de Conhecimentos Back-end",
      trilha_lead:
        "Formação técnica contínua cobrindo desde a lógica até microsserviços e nuvem.",
      tl_t1_title: "01. Base & Pensamento Computacional",
      tl_t1_desc:
        "Lógica de programação, pensamento computacional, decomposição de problemas, algoritmos e fundamentos da web (redes e protocolos).",
      tl_t2_title: "02. Java Core & Orientação a Objetos",
      tl_t2_desc:
        "POO avançada, coleções de dados, manipulação de streams, lambdas, tratamento de exceções, refatoração e testes automatizados.",
      tl_t3_title: "03. SpringBoot & Segurança APIs",
      tl_t3_desc:
        "APIs RESTful com SpringBoot, SpringData JPA, documentação com Swagger, SpringSecurity (OAuth2 GitHub/Google, JWT e 2FA).",
      tl_t4_title: "04. Microsserviços, Cloud & DevOps",
      tl_t4_desc:
        "Microsserviços com RabbitMQ e Kafka, Infraestrutura como Código (IaC com AWS CDK), containers Docker, Kubernetes e CI/CD.",
      timeline_title: "Linha do Tempo",
      tl_1_year: "2026",
      tl_1_role: "Especialização Back-end Java & SpringBoot",
      tl_1_desc:
        "Desenvolvimento de APIs REST escaláveis, microsserviços com SpringBoot, SpringSecurity (OAuth2, 2FA), mensageria com RabbitMQ, IaC com AWS CDK, Docker e pipelines CI/CD com GitHub Actions.",
      tl_2_year: "Graduação",
      tl_2_role: "Engenharia de Software",
      tl_2_desc:
        "Estudo aprofundado de estrutura de dados, algoritmos, modelagem de sistemas, qualidade de software, bancos de dados relacionais e padrões de projeto (Clean Code & SOLID).",
      tl_3_year: "Transição",
      tl_3_role: "Direito → Engenharia de Software",
      tl_3_desc:
        "Transição de carreira motivada pelo fascínio por tecnologia e resolução lógica de problemas. Aplicação da precisão e do rigor analítico do Direito na escrita de código limpo e arquitetura de software.",
      contact_title: "Bora conversar",
      contact_lead:
        "Envie uma mensagem ou entre em contato direto pelas redes sociais.",
      lbl_nome: "Seu Nome",
      lbl_email: "Seu E-mail",
      lbl_msg: "Mensagem",
      btn_submit: "Enviar mensagem",
      copy_btn: "copiar",
      copied_btn: "copiado! ✓",
      footer_text: "Editado no dia 15/08/2026",
      footer_by: "Desenvolvido por Marcelo Ramos",
    },
    en: {
      nav_sobre: "About",
      nav_projetos: "Projects",
      nav_skills: "Stack",
      nav_trilha: "Roadmap",
      nav_experiencia: "Experience",
      nav_contato: "Contact",
      guide_inicio: "Home",
      hero_kicker: "Software Engineer & Back-end Developer",
      hero_role:
        "Software Engineer & Java Back-end Developer · SpringBoot, Node.js & APIs",
      hero_desc:
        "Back-end Developer specialized in the Java and SpringBoot ecosystem. Transitioned from Law to Software Engineering focusing on scalable RESTful APIs, microservices, OAuth2/2FA security, messaging, and AI automation.",
      hero_btn_projects: "View projects",
      hero_btn_contact: "Contact me",
      hero_btn_about: "About me",
      ficha_base_lbl: "City",
      ficha_base_val: "Salvador - BA",
      ficha_disp_lbl: "Availability",
      ficha_disp_val: "Full-time / Internship",
      ficha_foco_lbl: "Current Focus",
      ficha_foco_val: "Java, SpringBoot & Microservices",
      ficha_codigo_lbl: "Coding since",
      hero_cap_interactive: "Interactive",
      hero_cap_move: "Move cursor",
      placar_1_lbl: "Java, SpringBoot, SpringData JPA & Microservices",
      placar_2_lbl:
        "Clean software architecture, Clean Code, and Agile Development",
      placar_3_lbl: "Docker, Kubernetes, AWS, Kafka & LangChain4j",
      sobre_title: "How I work",
      sobre_p1:
        "My professional journey began in Law, but it was upon discovering programming that I found my true vocation. I transitioned to Software Engineering motivated by the drive to build concrete, scalable, and high-impact solutions.",
      sobre_p2:
        "As a back-end developer, I dedicate my time to building robust systems in Java, JavaScript, Node.js, and TypeScript. I value methodical work, rigorous code organization, and extreme attention to detail — virtues inherited from legal training and essential for quality software engineering.",
      sobre_p3:
        "I am particularly interested in RESTful API development, microservices, database modeling, and integrating artificial intelligence into automation processes.",
      sobre_read_full: "Read full story ›",
      ficha_role_lbl: "Role",
      ficha_role_val: "Back-end Developer",
      ficha_edu_lbl: "Education",
      ficha_edu_val: "Software Engineering",
      ficha_bg_lbl: "Background",
      ficha_bg_val: "Law & Critical Thinking",
      ficha_spec_lbl: "Specialties",
      ficha_db_lbl: "Databases",
      ficha_lang_lbl: "Languages",
      ficha_lang_val: "Portuguese (Native) and English (Fluent)",
      projetos_kicker: "projects/ · highlights",
      projetos_title: "What I built",
      projetos_lead:
        "Back-end solutions, APIs, and automations focused on stability and performance.",
      p1_title: "API Gateway & Microservices",
      p1_desc:
        "Event-driven microservices architecture for high demand. Rigorous data validation and high performance.",
      p2_title: "Automation & AI Back-end Agent",
      p2_desc:
        "Asynchronous processing pipeline for classification and intelligent request handling using language models.",
      p3_title: "Enterprise System & Secure Auth",
      p3_desc:
        "Complete enterprise engine with permission control, audit logs, and optimized database persistence.",
      github_card_title: "GitHub Repositories",
      github_card_desc:
        "Check out my other projects, automation scripts, studies, and open-source code contributions.",
      stack_title: "Tools & Ecosystem",
      stack_c1: "Java & Spring Ecosystem",
      stack_c2: "Back-end & Architecture",
      stack_c3: "Databases & DevOps",
      stack_c4: "AI & Automation",
      trilha_title: "Back-end Knowledge Roadmap",
      trilha_lead:
        "Continuous technical training covering from logic foundations to microservices and cloud.",
      tl_t1_title: "01. Foundations & Computational Thinking",
      tl_t1_desc:
        "Programming logic, computational thinking, problem decomposition, algorithms, and web fundamentals (networking & protocols).",
      tl_t2_title: "02. Java Core & Object Orientation",
      tl_t2_desc:
        "Advanced OOP, data collections, stream manipulation, lambdas, exception handling, refactoring, and automated testing.",
      tl_t3_title: "03. SpringBoot & API Security",
      tl_t3_desc:
        "RESTful APIs with SpringBoot, SpringData JPA, Swagger documentation, SpringSecurity (OAuth2 GitHub/Google, JWT & 2FA).",
      tl_t4_title: "04. Microservices, Cloud & DevOps",
      tl_t4_desc:
        "Microservices with RabbitMQ and Kafka, Infrastructure as Code (IaC with AWS CDK), Docker containers, Kubernetes, and CI/CD.",
      timeline_title: "Timeline",
      tl_1_year: "2026",
      tl_1_role: "Java Back-end & SpringBoot Specialization",
      tl_1_desc:
        "Development of scalable REST APIs, microservices with SpringBoot, SpringSecurity (OAuth2, 2FA), messaging with RabbitMQ, IaC with AWS CDK, Docker, and CI/CD pipelines with GitHub Actions.",
      tl_2_year: "Graduation",
      tl_2_role: "Software Engineering",
      tl_2_desc:
        "In-depth study of data structures, algorithms, system modeling, software quality, relational databases, and design patterns (Clean Code & SOLID).",
      tl_3_year: "Transition",
      tl_3_role: "Law → Software Engineering",
      tl_3_desc:
        "Career switch driven by a passion for technology and logical problem-solving. Applying legal precision and analytical rigor to clean code writing and software architecture.",
      contact_title: "Let's talk",
      contact_lead:
        "Send a message or reach out directly through social networks.",
      lbl_nome: "Your Name",
      lbl_email: "Your Email",
      lbl_msg: "Message",
      btn_submit: "Send message",
      copy_btn: "copy",
      copied_btn: "copied! ✓",
      footer_text: "Edited on 08/15/2026",
      footer_by: "Developed by Marcelo Ramos",
    },
  };

  var currentLang = "pt";

  function initLang() {
    try {
      var saved = localStorage.getItem("mr-lang");
      if (saved === "en" || saved === "pt") {
        currentLang = saved;
      }
    } catch (e) {}

    applyLanguage(currentLang);

    var toggleBtn = document.querySelector("[data-lang-toggle]");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        currentLang = currentLang === "pt" ? "en" : "pt";
        applyLanguage(currentLang);
        try {
          localStorage.setItem("mr-lang", currentLang);
        } catch (e) {}
      });
    }
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute(
      "lang",
      lang === "pt" ? "pt-BR" : "en",
    );

    var langLabel = document.querySelector("[data-lang-label]");
    if (langLabel) {
      langLabel.textContent = lang === "pt" ? "PT-BR" : "EN";
    }

    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (i18nDict[lang] && i18nDict[lang][key]) {
        el.textContent = i18nDict[lang][key];
      }
    });

    var inputs = document.querySelectorAll("[data-i18n-ph]");
    inputs.forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (i18nDict[lang] && i18nDict[lang][key]) {
        el.setAttribute("placeholder", i18nDict[lang][key]);
      }
    });
  }

  function initNav() {
    var toggleBtn = document.querySelector("[data-nav-toggle]");
    var panel = document.querySelector("[data-nav-panel]");

    if (toggleBtn && panel) {
      toggleBtn.addEventListener("click", function () {
        var expanded = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", !expanded);
        panel.hidden = expanded;
      });

      panel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          toggleBtn.setAttribute("aria-expanded", "false");
          panel.hidden = true;
        });
      });
    }
  }

  function initScrollObserver() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav__link, .guia a");
    var progressBar = document.querySelector("[data-progresso]");

    function onScroll() {
      var scrollPos = window.scrollY || window.pageYOffset;
      var windowHeight = window.innerHeight;
      var docHeight = document.documentElement.scrollHeight - windowHeight;

      if (progressBar && docHeight > 0) {
        var pct = Math.min(100, Math.max(0, (scrollPos / docHeight) * 100));
        progressBar.style.width = pct + "%";
      }

      var currentSectionId = "";

      // Se rolou até o final da página (ou próximo do final), ativa a última seção ("contato")
      if (scrollPos + windowHeight >= document.documentElement.scrollHeight - 60) {
        if (sections.length > 0) {
          currentSectionId = sections[sections.length - 1].getAttribute("id");
        }
      } else {
        sections.forEach(function (sec) {
          var top = sec.offsetTop - 140;
          var height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSectionId = sec.getAttribute("id");
          }
        });
      }

      navLinks.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href === "#" + currentSectionId) {
          link.setAttribute("aria-current", "true");
          link.classList.add("active");
        } else {
          link.removeAttribute("aria-current");
          link.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
  }

  function initDitherCanvas() {
    var canvas = document.querySelector("[data-dither]");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var width = 320;
    var height = 320;
    canvas.width = width;
    canvas.height = height;

    var bayer8x8 = [
      [0, 32, 8, 40, 2, 34, 10, 42],
      [48, 16, 56, 24, 50, 18, 58, 26],
      [12, 44, 4, 36, 14, 46, 6, 38],
      [60, 28, 52, 20, 62, 30, 54, 22],
      [3, 35, 11, 43, 1, 33, 9, 41],
      [51, 19, 59, 27, 49, 17, 57, 25],
      [15, 47, 7, 39, 13, 45, 5, 37],
      [63, 31, 55, 23, 61, 29, 53, 21],
    ];

    var mouseX = width / 2;
    var mouseY = height / 2;
    var targetMouseX = mouseX;
    var targetMouseY = mouseY;
    var radius = 110;

    function handlePointer(px, py) {
      var rect = canvas.getBoundingClientRect();
      var rx = ((px - rect.left) / rect.width) * width;
      var ry = ((py - rect.top) / rect.height) * height;
      targetMouseX = rx;
      targetMouseY = ry;
    }

    window.addEventListener("mousemove", function (e) {
      handlePointer(e.clientX, e.clientY);
    });

    window.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches && e.touches[0]) {
          handlePointer(e.touches[0].clientX, e.touches[0].clientY);
        }
      },
      { passive: true },
    );

    function render() {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      var imgData = ctx.createImageData(width, height);
      var data = imgData.data;

      var fgR = 45,
        fgG = 186,
        fgB = 78;
      var bgR = 43,
        bgG = 49,
        bgB = 55;

      var lightX = (mouseX - width / 2) / (width / 2);
      var lightY = (mouseY - height / 2) / (height / 2);
      var lightZ = 1.0;
      var lightLen = Math.sqrt(
        lightX * lightX + lightY * lightY + lightZ * lightZ,
      );
      lightX /= lightLen;
      lightY /= lightLen;
      lightZ /= lightLen;

      for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
          var idx = (y * width + x) * 4;
          var dx = x - width / 2;
          var dy = y - height / 2;
          var distSq = dx * dx + dy * dy;

          if (distSq <= radius * radius) {
            var dz = Math.sqrt(radius * radius - distSq);
            var nx = dx / radius;
            var ny = dy / radius;
            var nz = dz / radius;

            var dot = Math.max(0, nx * lightX + ny * lightY + nz * lightZ);
            var spec = Math.pow(dot, 16) * 0.6;
            var intensity = (dot * 0.8 + spec + 0.1) * 64;

            var threshold = bayer8x8[y % 8][x % 8];
            if (intensity > threshold) {
              data[idx] = fgR;
              data[idx + 1] = fgG;
              data[idx + 2] = fgB;
              data[idx + 3] = 255;
            } else {
              data[idx] = bgR;
              data[idx + 1] = bgG;
              data[idx + 2] = bgB;
              data[idx + 3] = 255;
            }
          } else {
            data[idx] = bgR;
            data[idx + 1] = bgG;
            data[idx + 2] = bgB;
            data[idx + 3] = 0;
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
  }

  function initOrbCanvas() {
    var orbCanvas = document.querySelector(".orb__globo");
    if (!orbCanvas) return;

    var ctx = orbCanvas.getContext("2d");
    var w = 450;
    var h = 450;
    orbCanvas.width = w;
    orbCanvas.height = h;

    var angle = 0;
    var orbitAngles = [
      0,
      Math.PI / 6,
      Math.PI / 3,
      Math.PI / 2,
      (2 * Math.PI) / 3,
      (5 * Math.PI) / 6,
    ];
    var rx = 165;
    var ry = 58;

    function drawOrb() {
      ctx.clearRect(0, 0, w, h);
      var cx = w / 2;
      var cy = h / 2;

      var radGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 28);
      radGrad.addColorStop(0, "rgba(45, 186, 78, 0.85)");
      radGrad.addColorStop(0.5, "rgba(45, 186, 78, 0.25)");
      radGrad.addColorStop(1, "rgba(45, 186, 78, 0)");
      ctx.fillStyle = radGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#2dba4e";
      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fill();

      orbitAngles.forEach(function (rotAngle, index) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotAngle + angle * (index % 2 === 0 ? 0.25 : -0.25));

        ctx.strokeStyle = "rgba(45, 186, 78, 0.38)";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();

        var electronAngle = angle * (1.3 + index * 0.25) + index;
        var ex = Math.cos(electronAngle) * rx;
        var ey = Math.sin(electronAngle) * ry;

        ctx.fillStyle = "#2dba4e";
        ctx.beginPath();
        ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      angle += 0.008;
      requestAnimationFrame(drawOrb);
    }

    requestAnimationFrame(drawOrb);
  }

  function initDitherCube() {
    var canvas = document.querySelector("[data-dither-cube]");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var width = 320;
    var height = 320;
    canvas.width = width;
    canvas.height = height;

    var angleX = 0.4;
    var angleY = 0.6;
    var targetAngleX = angleX;
    var targetAngleY = angleY;

    window.addEventListener("mousemove", function (e) {
      targetAngleY = (e.clientX / window.innerWidth - 0.5) * Math.PI * 2;
      targetAngleX = (e.clientY / window.innerHeight - 0.5) * Math.PI * 2;
    });

    window.addEventListener(
      "touchmove",
      function (e) {
        if (e.touches && e.touches[0]) {
          targetAngleY =
            (e.touches[0].clientX / window.innerWidth - 0.5) * Math.PI * 2;
          targetAngleX =
            (e.touches[0].clientY / window.innerHeight - 0.5) * Math.PI * 2;
        }
      },
      { passive: true },
    );

    var nodes = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    var faces = [
      { v: [0, 1, 2, 3], norm: [0, 0, -1] },
      { v: [5, 4, 7, 6], norm: [0, 0, 1] },
      { v: [4, 0, 3, 7], norm: [-1, 0, 0] },
      { v: [1, 5, 6, 2], norm: [1, 0, 0] },
      { v: [4, 5, 1, 0], norm: [0, -1, 0] },
      { v: [3, 2, 6, 7], norm: [0, 1, 0] },
    ];

    function rotateX(p, a) {
      var cos = Math.cos(a),
        sin = Math.sin(a);
      return [p[0], p[1] * cos - p[2] * sin, p[1] * sin + p[2] * cos];
    }

    function rotateY(p, a) {
      var cos = Math.cos(a),
        sin = Math.sin(a);
      return [p[0] * cos + p[2] * sin, p[1], -p[0] * sin + p[2] * cos];
    }

    function renderCube() {
      angleX += (targetAngleX - angleX) * 0.05 + 0.006;
      angleY += (targetAngleY - angleY) * 0.05 + 0.009;

      ctx.clearRect(0, 0, width, height);

      var rotNodes = nodes.map(function (node) {
        var p = rotateY(node, angleY);
        return rotateX(p, angleX);
      });

      var scale = 72;
      var projNodes = rotNodes.map(function (p) {
        return [width / 2 + p[0] * scale, height / 2 + p[1] * scale, p[2]];
      });

      ctx.lineWidth = 1.5;

      faces.forEach(function (face) {
        var n = rotateY(face.norm, angleY);
        n = rotateX(n, angleX);
        if (n[2] > 0) {
          var p0 = projNodes[face.v[0]];
          var p1 = projNodes[face.v[1]];
          var p2 = projNodes[face.v[2]];
          var p3 = projNodes[face.v[3]];

          ctx.beginPath();
          ctx.moveTo(p0[0], p0[1]);
          ctx.lineTo(p1[0], p1[1]);
          ctx.lineTo(p2[0], p2[1]);
          ctx.lineTo(p3[0], p3[1]);
          ctx.closePath();

          var light = Math.max(0.08, n[2] * 0.6 + n[0] * 0.3 + 0.3);
          ctx.fillStyle = "rgba(45, 186, 78, " + light * 0.25 + ")";
          ctx.fill();
        }
      });

      var edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = "#2dba4e";
      ctx.beginPath();
      edges.forEach(function (edge) {
        var pA = projNodes[edge[0]];
        var pB = projNodes[edge[1]];
        ctx.moveTo(pA[0], pA[1]);
        ctx.lineTo(pB[0], pB[1]);
      });
      ctx.stroke();

      projNodes.forEach(function (p) {
        ctx.fillStyle = "#2dba4e";
        ctx.fillRect(p[0] - 2.5, p[1] - 2.5, 5, 5);
      });

      requestAnimationFrame(renderCube);
    }

    requestAnimationFrame(renderCube);
  }

  function initCopyBtn() {
    var copyBtns = document.querySelectorAll("[data-copy]");
    copyBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var emailEl = document.querySelector("[data-email]");
        var textToCopy = emailEl
          ? emailEl.textContent.trim()
          : "celoramosdev@gmail.com";

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(textToCopy)
            .then(function () {
              showCopyFeedback(btn);
            })
            .catch(function () {
              fallbackCopy(textToCopy, btn);
            });
        } else {
          fallbackCopy(textToCopy, btn);
        }
      });
    });
  }

  function fallbackCopy(text, btn) {
    var input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand("copy");
      showCopyFeedback(btn);
    } catch (err) {}
    document.body.removeChild(input);
  }

  function showCopyFeedback(btn) {
    var origKey = "copy_btn";
    var copiedKey = "copied_btn";
    btn.textContent = i18nDict[currentLang][copiedKey] || "copiado! ✓";
    btn.classList.add("copied");
    setTimeout(function () {
      btn.textContent = i18nDict[currentLang][origKey] || "copiar";
      btn.classList.remove("copied");
    }, 2000);
  }

  function initForm() {
    var form = document.querySelector("[data-form]");
    if (!form) return;

    var statusEl = form.querySelector("[data-status]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.querySelector("#f-nome").value.trim();
      var email = form.querySelector("#f-email").value.trim();
      var msg = form.querySelector("#f-msg").value.trim();

      if (!nome || !email || !msg) {
        if (statusEl) {
          statusEl.textContent =
            currentLang === "pt"
              ? "Por favor, preencha todos os campos obrigatórios."
              : "Please fill in all required fields.";
          statusEl.className = "form__status form__status--err";
        }
        return;
      }

      if (statusEl) {
        statusEl.textContent =
          currentLang === "pt" ? "Enviando mensagem..." : "Sending message...";
        statusEl.className = "form__status";
      }

      setTimeout(function () {
        if (statusEl) {
          statusEl.textContent =
            currentLang === "pt"
              ? "Mensagem enviada com sucesso! Obrigado pelo contato."
              : "Message sent successfully! Thank you.";
          statusEl.className = "form__status form__status--ok";
        }
        form.reset();
      }, 1000);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initNav();
    initScrollObserver();
    initDitherCanvas();
    initOrbCanvas();
    initDitherCube();
    initCopyBtn();
    initForm();
  });
})();
