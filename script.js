// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // ===== VARIABLES GLOBALES =====
    const currentYear = new Date().getFullYear();
    let currentLanguage = 'fr'; // Par défaut français
    let isDarkMode = false;
    
    // ===== TRADUCTIONS =====
    const translations = {
        fr: {
            // Navigation
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets",
            experience: "Expérience",
            contact: "Contact",
            
            // Hero Section
            greeting: "👋 Hello, je suis",
            name: "Tchongwang Bakayoko",
            title: "Développeur Full Stack &",
            typewriter1: "Data Scientist",
            typewriter2: "Développeur Python",
            typewriter3: "Expert Django",
            typewriter4: "Full Stack Developer",
            description: "Je conçois et développe des applications web performantes et des solutions d'intelligence artificielle qui transforment les données en valeur business.",
            viewProjects: "Voir mes projets",
            letsTalk: "Discutons",
            downloadCV: "Télécharger CV",
            projectsCompleted: "Projets réalisés",
            yearsExperience: "Années d'expérience",
            techMastered: "Technologies maîtrisées",
            
            // About Section
            aboutSubtitle: "À PROPOS DE MOI",
            aboutTitle: "Mon parcours & ma passion",
            aboutText1: "Développeur Full Stack passionné par la création de solutions digitales innovantes, avec une spécialisation en Python/Django pour le back-end et une expertise en Data Science pour extraire de la valeur des données.",
            aboutText2: "Mon approche combine rigueur technique et sens business, permettant de transformer des problématiques complexes en applications fonctionnelles et intuitives.",
            highlight1: "Développement Full Stack",
            highlightDesc1: "Création d'applications web complètes, de l'architecture à l'interface utilisateur",
            highlight2: "Data Science",
            highlightDesc2: "Analyse prédictive, machine learning et visualisation de données",
            highlight3: "Architecture Logicielle",
            highlightDesc3: "Conception de solutions scalables et maintenables",
            workTogether: "Travaillons ensemble",
            
            // Skills Section
            skillsSubtitle: "EXPERTISE TECHNIQUE",
            skillsTitle: "Stack technique & compétences",
            backend: "Back-End",
            frontend: "Front-End",
            datascience: "Data Science",
            tools: "Outils & DevOps",
            adaptText: "Je m'adapte rapidement aux nouvelles technologies et méthodologies.",
            seeAchievements: "Voir mes réalisations",
            
            // Projects Section
            projectsSubtitle: "PORTFOLIO",
            projectsTitle: "Projets récents & cas d'étude",
            projectsDesc: "Découvrez une sélection de mes projets les plus significatifs, illustrant mes compétences techniques et mon approche méthodologique.",
            all: "Tous",
            webApps: "Web Apps",
            dataScience: "Data Science",
            fullstack: "Full Stack",
            moreProjects: "Plus de projets en cours de développement !",
            viewAllProjects: "Voir tous mes projets GitHub",
            sourceCode: "Code Source",
            notebook: "Notebook",
            projectDetails: "Détails du projet",
            fullAnalysis: "Analyse complète",
            keyFeatures: "Fonctionnalités clés :",
            results: "Résultats obtenus :",
            
            // Experience Section
            experienceSubtitle: "PARCOURS PROFESSIONNEL",
            experienceTitle: "Expérience & Formation",
            
            // Contact Section
            contactSubtitle: "PRENONS CONTACT",
            contactTitle: "Travaillons ensemble",
            contactDesc: "Vous avez un projet ? Une opportunité ? Discutons-en ! Je suis ouvert aux collaborations, opportunités freelance et positions full-time.",
            email: "Email",
            emailDesc: "Pour toute question ou proposition",
            linkedin: "LinkedIn",
            linkedinDesc: "Connectons-nous professionnellement",
            github: "GitHub",
            githubDesc: "Découvrez mon code et mes projets",
            downloadableCV: "CV Téléchargeable",
            cvDesc: "Profil complet et détaillé",
            fullName: "Nom complet *",
            subject: "Sujet *",
            message: "Message *",
            sendMessage: "Envoyer le message",
            sending: "Envoi en cours...",
            successMessage: "✅ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.",
            errorMessage: "❌ Veuillez corriger les erreurs ci-dessus.",
            requiredField: "Ce champ est requis",
            validEmail: "Veuillez entrer un email valide",
            
            // Footer
            tagline: "Développeur Full Stack passionné par la création de solutions innovantes",
            navigation: "Navigation",
            resources: "Ressources",
            technologies: "Technologies",
            rights: "TCHONGWANG BAKAYOKO. Tous droits réservés.",
            madeWith: "Conçu et développé avec passion",
            
            // Placeholders
            namePlaceholder: "Votre nom",
            emailPlaceholder: "votre@email.com",
            subjectPlaceholder: "Objet de votre message",
            messagePlaceholder: "Décrivez votre projet ou opportunité..."
        },
        
        en: {
            // Navigation
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
            
            // Hero Section
            greeting: "👋 Hello, I'm",
            name: "Tchongwang Bakayoko",
            title: "Full Stack Developer &",
            typewriter1: "Data Scientist",
            typewriter2: "Python Developer",
            typewriter3: "Django Expert",
            typewriter4: "Full Stack Developer",
            description: "I design and develop high-performance web applications and AI solutions that transform data into business value.",
            viewProjects: "View my projects",
            letsTalk: "Let's talk",
            downloadCV: "Download CV",
            projectsCompleted: "Projects completed",
            yearsExperience: "Years of experience",
            techMastered: "Technologies mastered",
            
            // About Section
            aboutSubtitle: "ABOUT ME",
            aboutTitle: "My journey & passion",
            aboutText1: "Passionate Full Stack Developer focused on creating innovative digital solutions, with specialization in Python/Django for back-end and expertise in Data Science to extract value from data.",
            aboutText2: "My approach combines technical rigor and business sense, enabling the transformation of complex problems into functional and intuitive applications.",
            highlight1: "Full Stack Development",
            highlightDesc1: "Creation of complete web applications, from architecture to user interface",
            highlight2: "Data Science",
            highlightDesc2: "Predictive analysis, machine learning and data visualization",
            highlight3: "Software Architecture",
            highlightDesc3: "Design of scalable and maintainable solutions",
            workTogether: "Let's work together",
            
            // Skills Section
            skillsSubtitle: "TECHNICAL EXPERTISE",
            skillsTitle: "Technical stack & skills",
            backend: "Back-End",
            frontend: "Front-End",
            datascience: "Data Science",
            tools: "Tools & DevOps",
            adaptText: "I quickly adapt to new technologies and methodologies.",
            seeAchievements: "See my achievements",
            
            // Projects Section
            projectsSubtitle: "PORTFOLIO",
            projectsTitle: "Recent projects & case studies",
            projectsDesc: "Discover a selection of my most significant projects, illustrating my technical skills and methodological approach.",
            all: "All",
            webApps: "Web Apps",
            dataScience: "Data Science",
            fullstack: "Full Stack",
            moreProjects: "More projects in development!",
            viewAllProjects: "View all my GitHub projects",
            sourceCode: "Source Code",
            notebook: "Notebook",
            projectDetails: "Project details",
            fullAnalysis: "Full analysis",
            keyFeatures: "Key features:",
            results: "Results obtained:",
            
            // Experience Section
            experienceSubtitle: "PROFESSIONAL JOURNEY",
            experienceTitle: "Experience & Education",
            
            // Contact Section
            contactSubtitle: "LET'S CONNECT",
            contactTitle: "Let's work together",
            contactDesc: "Have a project? An opportunity? Let's discuss! I'm open to collaborations, freelance opportunities and full-time positions.",
            email: "Email",
            emailDesc: "For any question or proposal",
            linkedin: "LinkedIn",
            linkedinDesc: "Let's connect professionally",
            github: "GitHub",
            githubDesc: "Discover my code and projects",
            downloadableCV: "Downloadable CV",
            cvDesc: "Complete and detailed profile",
            fullName: "Full name *",
            subject: "Subject *",
            message: "Message *",
            sendMessage: "Send message",
            sending: "Sending...",
            successMessage: "✅ Message sent successfully! I will get back to you as soon as possible.",
            errorMessage: "❌ Please correct the errors above.",
            requiredField: "This field is required",
            validEmail: "Please enter a valid email",
            
            // Footer
            tagline: "Passionate Full Stack Developer focused on creating innovative solutions",
            navigation: "Navigation",
            resources: "Resources",
            technologies: "Technologies",
            rights: "TCHONGWANG BAKAYOKO. All rights reserved.",
            madeWith: "Designed and developed with passion",
            
            // Placeholders
            namePlaceholder: "Your name",
            emailPlaceholder: "your@email.com",
            subjectPlaceholder: "Subject of your message",
            messagePlaceholder: "Describe your project or opportunity..."
        }
    };
    
    // ===== INITIALISATION =====
    function init() {
        setCurrentYear();
        initMobileMenu();
        initBackToTop();
        initActiveNav();
        initStatsAnimation();
        initSkillsTabs();
        initProjectsFilter();
        initContactForm();
        initTypewriter();
        initTheme();
        initLanguage();
        initSmoothScroll();
        initAnimations();
        initExperienceTimeline();
    }
    
    // ===== SET CURRENT YEAR =====
    function setCurrentYear() {
        document.getElementById('current-year').textContent = currentYear;
    }
    
    // ===== MOBILE MENU =====
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!menuToggle || !navMenu) return;
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update aria-expanded
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            // Toggle body scroll
            document.body.style.overflow = isExpanded ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===== BACK TO TOP BUTTON =====
    function initBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (!backToTopBtn) return;
        
        function toggleBackToTop() {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        
        window.addEventListener('scroll', toggleBackToTop);
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Initial check
        toggleBackToTop();
    }
    
    // ===== ACTIVE NAV LINK ON SCROLL =====
    function initActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        function updateActiveLink() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        window.addEventListener('scroll', updateActiveLink);
        updateActiveLink(); // Initial call
    }
    
    // ===== ANIMATE STATS =====
    function initStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        function animateStats() {
            statNumbers.forEach(stat => {
                const finalValue = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const increment = finalValue / (duration / 16);
                let currentValue = 0;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentValue);
                    }
                }, 16);
            });
        }
        
        // Trigger stats animation when in viewport
        const heroSection = document.getElementById('home');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        if (heroSection) {
            observer.observe(heroSection);
        }
    }
    
    // ===== SKILLS TABS =====
    function initSkillsTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active class to current button and corresponding pane
                this.classList.add('active');
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }
    
    // ===== PROJECTS FILTER =====
    function initProjectsFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to current button
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ===== CONTACT FORM =====
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        
        if (!contactForm || !formStatus) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset status
            formStatus.className = 'form-status';
            formStatus.textContent = '';
            
            // Validate form
            let isValid = true;
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                const errorMsg = input.nextElementSibling;
                if (!input.value.trim()) {
                    errorMsg.textContent = currentLanguage === 'fr' ? 
                        translations[currentLanguage].requiredField : 
                        translations[currentLanguage].requiredField;
                    isValid = false;
                } else {
                    errorMsg.textContent = '';
                    
                    // Email validation
                    if (input.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(input.value)) {
                            errorMsg.textContent = currentLanguage === 'fr' ? 
                                translations[currentLanguage].validEmail : 
                                translations[currentLanguage].validEmail;
                            isValid = false;
                        }
                    }
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
                    (currentLanguage === 'fr' ? translations.fr.sending : translations.en.sending);
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    formStatus.className = 'form-status success';
                    formStatus.textContent = currentLanguage === 'fr' ? 
                        translations.fr.successMessage : 
                        translations.en.successMessage;
                    
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formStatus.className = 'form-status';
                        formStatus.textContent = '';
                    }, 5000);
                }, 2000);
            } else {
                formStatus.className = 'form-status error';
                formStatus.textContent = currentLanguage === 'fr' ? 
                    translations.fr.errorMessage : 
                    translations.en.errorMessage;
            }
        });
    }
    
    // ===== TYPEWRITER EFFECT =====
    function initTypewriter() {
        const typewriterElement = document.querySelector('.typewriter');
        
        if (!typewriterElement) return;
        
        // Create typewriter effect with manual animation
        const strings = currentLanguage === 'fr' ? 
            ['Data Scientist', 'Développeur Python', 'Expert Django', 'Full Stack Developer'] :
            ['Data Scientist', 'Python Developer', 'Django Expert', 'Full Stack Developer'];
        
        let stringIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeWriter() {
            const currentString = strings[stringIndex];
            
            if (isDeleting) {
                // Deleting characters
                typewriterElement.textContent = currentString.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                // Typing characters
                typewriterElement.textContent = currentString.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            // Check if string is complete
            if (!isDeleting && charIndex === currentString.length) {
                // Wait before starting to delete
                isDeleting = true;
                typingSpeed = 1500;
            } else if (isDeleting && charIndex === 0) {
                // Move to next string
                isDeleting = false;
                stringIndex = (stringIndex + 1) % strings.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        // Start typewriter
        setTimeout(typeWriter, 1000);
    }
    
    // ===== THEME TOGGLE =====
    function initTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Check for saved theme preference or use OS preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
            enableDarkMode();
            if (themeToggle) themeToggle.checked = true;
        }
        
        if (themeToggle) {
            themeToggle.addEventListener('change', function() {
                if (this.checked) {
                    enableDarkMode();
                } else {
                    disableDarkMode();
                }
            });
        }
    }
    
    function enableDarkMode() {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        isDarkMode = true;
        updateThemeIcon();
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        isDarkMode = false;
        updateThemeIcon();
    }
    
    function updateThemeIcon() {
        const themeIcons = document.querySelectorAll('.theme-label i');
        if (themeIcons.length > 0) {
            themeIcons[0].style.opacity = isDarkMode ? '0.5' : '1';
            themeIcons[1].style.opacity = isDarkMode ? '1' : '0.5';
        }
    }
    
    // ===== LANGUAGE TOGGLE =====
    function initLanguage() {
        // Create language switcher button
        createLanguageSwitcher();
        
        // Check for saved language preference
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && savedLanguage !== currentLanguage) {
            currentLanguage = savedLanguage;
            updateLanguage();
        }
    }
    
    function createLanguageSwitcher() {
        const navRight = document.querySelector('.nav-right');
        if (!navRight) return;
        
        // Create language switcher container
        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'lang-switcher';
        langSwitcher.innerHTML = `
            <button id="lang-toggle" class="lang-btn" aria-label="Changer la langue">
                <span class="lang-flag">🇫🇷</span>
                <span class="lang-text">FR</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="lang-dropdown">
                <button class="lang-option" data-lang="fr">
                    <span class="lang-flag">🇫🇷</span>
                    <span>Français</span>
                </button>
                <button class="lang-option" data-lang="en">
                    <span class="lang-flag">🇬🇧</span>
                    <span>English</span>
                </button>
            </div>
        `;
        
        // Insert before theme switch
        const themeSwitch = document.querySelector('.theme-switch');
        if (themeSwitch) {
            navRight.insertBefore(langSwitcher, themeSwitch);
        } else {
            navRight.appendChild(langSwitcher);
        }
        
        // Add event listeners
        const langToggle = document.getElementById('lang-toggle');
        const langDropdown = langSwitcher.querySelector('.lang-dropdown');
        const langOptions = langSwitcher.querySelectorAll('.lang-option');
        
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
            this.classList.toggle('active');
        });
        
        langOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-lang');
                if (selectedLang !== currentLanguage) {
                    currentLanguage = selectedLang;
                    localStorage.setItem('language', currentLanguage);
                    updateLanguage();
                    
                    // Update toggle button
                    const flag = this.querySelector('.lang-flag').textContent;
                    const text = selectedLang.toUpperCase();
                    langToggle.querySelector('.lang-flag').textContent = flag;
                    langToggle.querySelector('.lang-text').textContent = text;
                    
                    // Close dropdown
                    langDropdown.classList.remove('show');
                    langToggle.classList.remove('active');
                }
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSwitcher.contains(e.target)) {
                langDropdown.classList.remove('show');
                langToggle.classList.remove('active');
            }
        });
        
        // Add CSS for language switcher
        addLangSwitcherStyles();
    }
    
    function addLangSwitcherStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .lang-switcher {
                position: relative;
                margin-right: 15px;
            }
            
            .lang-btn {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 12px;
                background-color: transparent;
                border: 2px solid var(--lighter-gray);
                border-radius: var(--border-radius-md);
                color: var(--dark-gray);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition-fast);
                font-size: 0.9rem;
            }
            
            .lang-btn:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            .lang-btn.active {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            .lang-btn i {
                font-size: 0.8rem;
                transition: var(--transition-fast);
            }
            
            .lang-btn.active i {
                transform: rotate(180deg);
            }
            
            .lang-dropdown {
                position: absolute;
                top: 100%;
                right: 0;
                background-color: var(--white);
                border-radius: var(--border-radius-md);
                box-shadow: var(--shadow-lg);
                min-width: 140px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: var(--transition-normal);
                z-index: 1000;
                overflow: hidden;
            }
            
            .lang-dropdown.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(5px);
            }
            
            .lang-option {
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                padding: 12px 16px;
                background: none;
                border: none;
                text-align: left;
                cursor: pointer;
                transition: var(--transition-fast);
                color: var(--dark-color);
            }
            
            .lang-option:hover {
                background-color: var(--lighter-gray);
            }
            
            .lang-flag {
                font-size: 1.2rem;
            }
            
            @media (max-width: 768px) {
                .lang-btn {
                    padding: 6px 10px;
                    font-size: 0.85rem;
                }
                
                .lang-dropdown {
                    position: fixed;
                    top: 70px;
                    right: 20px;
                    left: auto;
                    min-width: 120px;
                }
            }
            
            .dark-theme .lang-btn {
                border-color: var(--light-gray);
                color: var(--dark-gray);
            }
            
            .dark-theme .lang-btn:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            .dark-theme .lang-dropdown {
                background-color: var(--white);
            }
            
            .dark-theme .lang-option {
                color: var(--dark-color);
            }
            
            .dark-theme .lang-option:hover {
                background-color: var(--lighter-gray);
            }
        `;
        document.head.appendChild(style);
    }
    
    function updateLanguage() {
        const lang = translations[currentLanguage];
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach((link, index) => {
            const icons = ['home', 'user', 'code', 'briefcase', 'chart-line', 'paper-plane'];
            const keys = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            
            if (index < keys.length) {
                const icon = `<i class="fas fa-${icons[index]}"></i>`;
                link.innerHTML = icon + ' ' + lang[keys[index]];
                
                // Update aria-label
                link.setAttribute('aria-label', lang[keys[index]]);
            }
        });
        
        // Update hero section
        updateElementText('.hero-badge span', lang.greeting);
        updateElementText('.hero-title .highlight', lang.name);
        updateElementText('.hero-subtitle', lang.title);
        updateElementText('.hero-description', lang.description);
        updateElementText('.hero-actions .btn-primary', lang.viewProjects);
        updateElementText('.hero-actions .btn-secondary', lang.letsTalk);
        updateElementText('.hero-actions .btn-outline', lang.downloadCV);
        
        // Update stats labels
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = lang.projectsCompleted;
            statLabels[1].textContent = lang.yearsExperience;
            statLabels[2].textContent = lang.techMastered;
        }
        
        // Update about section
        updateElementText('#about .section-subtitle', lang.aboutSubtitle);
        updateElementText('#about-title', lang.aboutTitle);
        
        const aboutParagraphs = document.querySelectorAll('.about-intro p');
        if (aboutParagraphs.length >= 2) {
            aboutParagraphs[0].innerHTML = lang.aboutText1;
            aboutParagraphs[1].innerHTML = lang.aboutText2;
        }
        
        const highlightCards = document.querySelectorAll('.highlight-card h3');
        if (highlightCards.length >= 3) {
            highlightCards[0].textContent = lang.highlight1;
            highlightCards[1].textContent = lang.highlight2;
            highlightCards[2].textContent = lang.highlight3;
        }
        
        const highlightDescs = document.querySelectorAll('.highlight-card p');
        if (highlightDescs.length >= 3) {
            highlightDescs[0].textContent = lang.highlightDesc1;
            highlightDescs[1].textContent = lang.highlightDesc2;
            highlightDescs[2].textContent = lang.highlightDesc3;
        }
        
        updateElementText('.about-cta .btn', lang.workTogether);
        
        // Update skills section
        updateElementText('#skills .section-subtitle', lang.skillsSubtitle);
        updateElementText('#skills-title', lang.skillsTitle);
        
        const tabButtons = document.querySelectorAll('.tab-btn');
        if (tabButtons.length >= 4) {
            tabButtons[0].textContent = lang.backend;
            tabButtons[1].textContent = lang.frontend;
            tabButtons[2].textContent = lang.datascience;
            tabButtons[3].textContent = lang.tools;
        }
        
        updateElementText('.skills-cta p', lang.adaptText);
        updateElementText('.skills-cta .btn', lang.seeAchievements);
        
        // Update projects section
        updateElementText('#projects .section-subtitle', lang.projectsSubtitle);
        updateElementText('#projects-title', lang.projectsTitle);
        updateElementText('#projects .section-description', lang.projectsDesc);
        
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (filterButtons.length >= 4) {
            filterButtons[0].textContent = lang.all;
            filterButtons[1].textContent = lang.webApps;
            filterButtons[2].textContent = lang.dataScience;
            filterButtons[3].textContent = lang.fullstack;
        }
        
        // Update project buttons
        document.querySelectorAll('.project-link').forEach(link => {
            if (link.textContent.includes('Code Source')) {
                link.innerHTML = '<i class="fab fa-github"></i> ' + lang.sourceCode;
            } else if (link.textContent.includes('Notebook')) {
                link.innerHTML = '<i class="fab fa-github"></i> ' + lang.notebook;
            }
        });
        
        document.querySelectorAll('.project-features h4').forEach(h4 => {
            if (h4.textContent.includes('Fonctionnalités')) {
                h4.textContent = lang.keyFeatures;
            } else if (h4.textContent.includes('Résultats')) {
                h4.textContent = lang.results;
            }
        });
        
        document.querySelectorAll('.btn-small').forEach(btn => {
            if (btn.textContent.includes('Détails')) {
                btn.innerHTML = '<i class="fas fa-external-link-alt"></i> ' + lang.projectDetails;
            } else if (btn.textContent.includes('Analyse')) {
                btn.innerHTML = '<i class="fas fa-chart-line"></i> ' + lang.fullAnalysis;
            }
        });
        
        updateElementText('.projects-cta p', lang.moreProjects);
        updateElementText('.projects-cta .btn', lang.viewAllProjects);
        
        // Update experience section
        updateElementText('#experience .section-subtitle', lang.experienceSubtitle);
        updateElementText('#experience-title', lang.experienceTitle);
        
        // Update contact section
        updateElementText('#contact .section-subtitle', lang.contactSubtitle);
        updateElementText('#contact-title', lang.contactTitle);
        updateElementText('#contact .section-description', lang.contactDesc);
        
        const contactCards = document.querySelectorAll('.contact-details h3');
        const contactDescs = document.querySelectorAll('.contact-details p');
        if (contactCards.length >= 4 && contactDescs.length >= 4) {
            contactCards[0].textContent = lang.email;
            contactCards[1].textContent = lang.linkedin;
            contactCards[2].textContent = lang.github;
            contactCards[3].textContent = lang.downloadableCV;
            
            contactDescs[0].textContent = lang.emailDesc;
            contactDescs[1].textContent = lang.linkedinDesc;
            contactDescs[2].textContent = lang.githubDesc;
            contactDescs[3].textContent = lang.cvDesc;
        }
        
        updateElementText('#contact-form label[for="name"]', lang.fullName);
        updateElementText('#contact-form label[for="email"]', lang.email);
        updateElementText('#contact-form label[for="subject"]', lang.subject);
        updateElementText('#contact-form label[for="message"]', lang.message);
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        if (nameInput) nameInput.placeholder = lang.namePlaceholder;
        if (emailInput) emailInput.placeholder = lang.emailPlaceholder;
        if (subjectInput) subjectInput.placeholder = lang.subjectPlaceholder;
        if (messageInput) messageInput.placeholder = lang.messagePlaceholder;
        
        updateElementText('.submit-btn', lang.sendMessage);
        
        // Update footer
        updateElementText('.footer-tagline', lang.tagline);
        
        const footerColumns = document.querySelectorAll('.footer-column h4');
        if (footerColumns.length >= 3) {
            footerColumns[0].textContent = lang.navigation;
            footerColumns[1].textContent = lang.resources;
            footerColumns[2].textContent = lang.technologies;
        }
        
        updateElementText('.copyright p:first-child', lang.rights);
        updateElementText('.footer-note', lang.madeWith);
        
        // Restart typewriter with new strings
        setTimeout(initTypewriter, 100);
    }
    
    function updateElementText(selector, text) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = text;
        }
    }
    
    // ===== SMOOTH SCROLL =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // ===== ANIMATIONS ON SCROLL =====
    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements to animate
        document.querySelectorAll('.skill-item, .project-card, .timeline-content, .contact-card, .highlight-card').forEach(el => {
            observer.observe(el);
        });
        
        // Add animation styles
        addAnimationStyles();
    }
    
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .skill-item,
            .project-card,
            .timeline-content,
            .contact-card,
            .highlight-card {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .skill-item.animate-in,
            .project-card.animate-in,
            .timeline-content.animate-in,
            .contact-card.animate-in,
            .highlight-card.animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .skill-item:nth-child(2) { transition-delay: 0.1s; }
            .skill-item:nth-child(3) { transition-delay: 0.2s; }
            .skill-item:nth-child(4) { transition-delay: 0.3s; }
            
            .project-card:nth-child(2) { transition-delay: 0.1s; }
            .project-card:nth-child(3) { transition-delay: 0.2s; }
            
            .timeline-item:nth-child(2) .timeline-content { transition-delay: 0.1s; }
            .timeline-item:nth-child(3) .timeline-content { transition-delay: 0.2s; }
            .timeline-item:nth-child(4) .timeline-content { transition-delay: 0.3s; }
            
            .contact-card:nth-child(2) { transition-delay: 0.1s; }
            .contact-card:nth-child(3) { transition-delay: 0.2s; }
            .contact-card:nth-child(4) { transition-delay: 0.3s; }
            
            .highlight-card:nth-child(2) { transition-delay: 0.1s; }
            .highlight-card:nth-child(3) { transition-delay: 0.2s; }
        `;
        document.head.appendChild(style);
    }
    
    // ===== EXPERIENCE TIMELINE ANIMATION =====
    function initExperienceTimeline() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-timeline');
                }
            });
        }, { threshold: 0.3 });
        
        timelineItems.forEach(item => {
            observer.observe(item);
        });
        
        // Add timeline animation styles
        const style = document.createElement('style');
        style.textContent = `
            .timeline-content {
                opacity: 0;
                transform: translateX(-20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .timeline-item.animate-timeline .timeline-content {
                opacity: 1;
                transform: translateX(0);
            }
            
            .timeline-item:nth-child(1).animate-timeline .timeline-content { transition-delay: 0s; }
            .timeline-item:nth-child(2).animate-timeline .timeline-content { transition-delay: 0.2s; }
            .timeline-item:nth-child(3).animate-timeline .timeline-content { transition-delay: 0.4s; }
            .timeline-item:nth-child(4).animate-timeline .timeline-content { transition-delay: 0.6s; }
        `;
        document.head.appendChild(style);
    }
    
    // ===== DARK THEME STYLES =====
    function addDarkThemeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .dark-theme {
                --dark-color: #f8fafc;
                --dark-gray: #e2e8f0;
                --medium-gray: #cbd5e0;
                --light-gray: #4a5568;
                --lighter-gray: #2d3748;
                --light-color: #1a202c;
                --white: #2d3748;
            }
            
            .dark-theme body {
                background-color: var(--light-color);
                color: var(--dark-color);
            }
            
            .dark-theme .navbar {
                background-color: rgba(45, 55, 72, 0.95);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            
            .dark-theme .nav-link {
                color: var(--dark-gray);
            }
            
            .dark-theme .nav-link:hover,
            .dark-theme .nav-link.active {
                color: var(--primary-color);
                background-color: rgba(58, 134, 255, 0.15);
            }
            
            .dark-theme .logo-name {
                color: var(--dark-gray);
            }
            
            .dark-theme .logo-title {
                color: var(--medium-gray);
            }
            
            .dark-theme .theme-label {
                background-color: var(--light-gray);
            }
            
            .dark-theme .btn-secondary {
                background-color: var(--white);
                color: var(--primary-color);
            }
            
            .dark-theme .btn-secondary:hover {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .dark-theme .btn-outline {
                color: var(--primary-color);
                border-color: var(--primary-color);
            }
            
            .dark-theme .btn-outline:hover {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .dark-theme .skills {
                background-color: var(--light-color);
            }
            
            .dark-theme .tabs-content,
            .dark-theme .contact-form-container,
            .dark-theme .skill-item,
            .dark-theme .project-card,
            .dark-theme .timeline-content,
            .dark-theme .contact-card,
            .dark-theme .highlight-card,
            .dark-theme .skills-cta {
                background-color: var(--white);
                color: var(--dark-color);
            }
            
            .dark-theme .tech-tag {
                background-color: var(--lighter-gray);
                color: var(--dark-gray);
            }
            
            .dark-theme .form-group input,
            .dark-theme .form-group textarea {
                background-color: var(--light-color);
                border-color: var(--light-gray);
                color: var(--dark-color);
            }
            
            .dark-theme .form-group input:focus,
            .dark-theme .form-group textarea:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(58, 134, 255, 0.2);
            }
            
            .dark-theme .footer {
                background-color: #0f172a;
            }
            
            .dark-theme .menu-toggle .bar {
                background-color: var(--dark-gray);
            }
            
            .dark-theme .tab-btn {
                background-color: var(--white);
                border-color: var(--light-gray);
                color: var(--medium-gray);
            }
            
            .dark-theme .tab-btn:hover {
                color: var(--primary-color);
                border-color: var(--primary-light);
            }
            
            .dark-theme .tab-btn.active {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .dark-theme .filter-btn {
                background-color: var(--white);
                border-color: var(--light-gray);
                color: var(--medium-gray);
            }
            
            .dark-theme .filter-btn:hover {
                color: var(--primary-color);
                border-color: var(--primary-light);
            }
            
            .dark-theme .filter-btn.active {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .dark-theme p {
                color: var(--medium-gray);
            }
            
            .dark-theme .section-title {
                color: var(--dark-color);
            }
            
            .dark-theme .hero-description {
                color: var(--dark-gray);
            }
            
            .dark-theme .stat-label {
                color: var(--medium-gray);
            }
            
            .dark-theme .project-description,
            .dark-theme .project-features li,
            .dark-theme .timeline-description li,
            .dark-theme .contact-details p {
                color: var(--medium-gray);
            }
            
            .dark-theme .level-text {
                color: var(--medium-gray);
            }
            
            .dark-theme .skill-item p {
                color: var(--medium-gray);
            }
            
            .dark-theme .back-to-top {
                background-color: var(--primary-color);
                color: var(--white);
            }
            
            .dark-theme .back-to-top:hover {
                background-color: var(--primary-dark);
            }
            
            .dark-theme .experience-card {
                background: linear-gradient(135deg, var(--primary-dark), var(--secondary-color));
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===== INITIALIZE EVERYTHING =====
    addDarkThemeStyles();
    init();
});
// ===== EMAILJS CONFIGURATION =====
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_ss2ofvt', // À remplacer par votre service ID
    TEMPLATE_ID: 'template_4un7rnk', // À remplacer par votre template ID
    PUBLIC_KEY: 'VeGgxR8ceXc-RWTO-' // À remplacer par votre clé publique
};

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (!contactForm || !formStatus) return;
    
    // EmailJS est initialisé globalement via `EMAILJS_CONFIG` au chargement du script
    // (éviter une double initialisation ici)
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Reset status and errors
        formStatus.className = 'form-status';
        formStatus.textContent = '';
        clearErrorMessages();
        
        // Validate form
        if (!validateForm()) {
            formStatus.className = 'form-status error';
            formStatus.textContent = currentLanguage === 'fr' ? 
                translations.fr.errorMessage : 
                translations.en.errorMessage;
            return;
        }
        
        // Get form data
        const formData = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            to_name: 'Tchongwang Bakayoko',
            reply_to: document.getElementById('email').value
        };
        
        // Show loading state
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + 
            (currentLanguage === 'fr' ? translations.fr.sending : translations.en.sending);
        submitBtn.disabled = true;
        
        try {
            // Send email via EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                formData
            );
            
            // Success
            formStatus.className = 'form-status success';
            formStatus.textContent = currentLanguage === 'fr' ? 
                translations.fr.successMessage : 
                translations.en.successMessage;
            
            // Reset form
            contactForm.reset();
            
            // Show success animation
            showSuccessAnimation();
            
        } catch (error) {
            // Error
            console.error('EmailJS Error:', error);
            formStatus.className = 'form-status error';
            formStatus.textContent = currentLanguage === 'fr' ? 
                '❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.' : 
                '❌ An error occurred. Please try again or contact me directly by email.';
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
                formStatus.textContent = '';
            }, 5000);
        }
    });
    
    // Add real-time validation
    addRealTimeValidation();
}

function validateForm() {
    let isValid = true;
    const inputs = [
        { id: 'name', type: 'text' },
        { id: 'email', type: 'email' },
        { id: 'subject', type: 'text' },
        { id: 'message', type: 'textarea' }
    ];
    
    inputs.forEach(input => {
        const element = document.getElementById(input.id);
        const errorElement = document.getElementById(`${input.id}-error`);
        
        // Check if empty
        if (!element.value.trim()) {
            showError(input.id, currentLanguage === 'fr' ? 
                translations.fr.requiredField : 
                translations.en.requiredField);
            isValid = false;
        }
        // Check email format
        else if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(element.value)) {
                showError(input.id, currentLanguage === 'fr' ? 
                    translations.fr.validEmail : 
                    translations.en.validEmail);
                isValid = false;
            }
        }
        // Check message length
        else if (input.id === 'message' && element.value.trim().length < 10) {
            showError(input.id, currentLanguage === 'fr' ? 
                'Le message doit contenir au moins 10 caractères' : 
                'Message must be at least 10 characters long');
            isValid = false;
        }
    });
    
    return isValid;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement && inputElement) {
        errorElement.textContent = message;
        inputElement.style.borderColor = 'var(--danger-color)';
        inputElement.focus();
    }
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('.form-group input, .form-group textarea');
    
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    inputElements.forEach(element => {
        element.style.borderColor = 'var(--lighter-gray)';
    });
}

function addRealTimeValidation() {
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const errorElement = document.getElementById(`${this.id}-error`);
            if (errorElement) {
                errorElement.textContent = '';
                this.style.borderColor = 'var(--lighter-gray)';
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim() && this.id === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value)) {
                    showError(this.id, currentLanguage === 'fr' ? 
                        translations.fr.validEmail : 
                        translations.en.validEmail);
                }
            }
        });
    });
}

function showSuccessAnimation() {
    const formContainer = document.querySelector('.contact-form-container');
    if (!formContainer) return;
    
    // Create confetti effect
    const confettiCount = 50;
    const colors = ['#3a86ff', '#8338ec', '#ff006e', '#10b981', '#f59e0b'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 2px;
            top: -20px;
            left: ${Math.random() * 100}%;
            opacity: 0.8;
            z-index: 1000;
            animation: confettiFall ${Math.random() * 2 + 1}s linear forwards;
        `;
        
        formContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
    
    // Add confetti animation to CSS
    if (!document.querySelector('#confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'confetti-styles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Dans la fonction init(), ajoutez l'appel à initContactForm()
function init() {
    setCurrentYear();
    initMobileMenu();
    initBackToTop();
    initActiveNav();
    initStatsAnimation();
    initSkillsTabs();
    initProjectsFilter();
    initContactForm(); // ← AJOUTEZ CETTE LIGNE
    initTypewriter();
    initTheme();
    initLanguage();
    initSmoothScroll();
    initAnimations();
    initExperienceTimeline();
}