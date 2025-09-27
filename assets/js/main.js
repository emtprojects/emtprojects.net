(function () {
  // Translation system
  const translations = {
    tr: {
      // Navigation
      'nav.home': 'Ana Sayfa',
      'nav.about': 'Hakkımızda',
      'nav.activities': 'Faaliyetlerimiz',
      'nav.team': 'Takımımız',
      'nav.contact': 'İletişim',
      'nav.menu': 'Menü',
      'lang.turkish': 'EN',
      'lang.english': 'TR',
      
      // Home page
      'hero.subtitle': 'Öğrenmeye Meraklı Üretmeye Kararlı Öğrenci Topluluğu',
      'hero.explore': 'Faaliyetleri İncele',
      'hero.about': 'Hakkımızda',
      'stats.active_students': 'Aktif Öğrenci',
      'stats.projects_soon': 'Yakında',
      'stats.completed_projects': 'Tamamlanan Proje',
      'stats.main_areas': 'Ana Faaliyet Alanı',
      'education.title': 'Eğitim Modelimiz',
      'education.subtitle': 'EMT Projects\'te eğitim; teori, uygulama ve proje deneyimini bir araya getirerek öğrencilerin öğrenirken üretmesini sağlar.',
      'education.basic.title': 'Temel Bilgi – "Sağlam Bir Zemin"',
      'education.basic.description': 'Öğrencilerimize Bilgisayar Destekli Tasarım (CAD), Elektronik & Kodlama alanlarında gerekli olan teorik altyapıyı sunuyoruz. Böylece her öğrenci, öğrenme sürecine sağlam bir temel üzerinden başlıyor.',
      'education.practice.title': 'Uygulamalar – "Öğrenirken Üret"',
      'education.practice.description': 'Edinilen bilgilerin uygulamaya dönüşmesi için atölye çalışmaları ile pratik deneyim sağlıyoruz. Öğrenciler, deneyerek öğrenmenin kalıcı etkisini yaşıyor.',
      'education.project.title': 'Proje Odaklı Süreç – "Birlikte Geliştir"',
      'education.project.description': 'Ekip çalışmasına dayalı projelerle öğrenciler, gerçek problemleri çözmeyi, fikirlerini paylaşmayı ve ürün geliştirmeyi deneyimliyor. Bu süreçte hem teknik beceriler hem de iş birliği kültürü güçleniyor.',
      
      // About page
      'about.title': 'Hakkımızda',
      'about.subtitle': 'EMT Projects, öğrencilerin Bilgisayar Destekli Tasarım (CAD) ve Elektronik & Kodlama alanlarında öğrenip üretebildiği, birlikte gelişmeyi hedefleyen bir öğrenci topluluğudur.',
      'about.story.title': 'Hikayemiz',
      'about.story.p1': 'EMT Projects, öğrencilerin teknoloji ve tasarım alanında kendilerini geliştirebilmeleri için kurulmuş bir topluluktur. İlk günden bu yana bilgisayar destekli tasarım (CAD), elektronik ve kodlama üzerine çalışmalar yürütüyor, bu alanlarda ilgi duyan öğrencilere birlikte öğrenme ve üretme fırsatı sunuyoruz.',
      'about.story.p2': 'Faaliyetlerimiz, derslerden atölyelere ve sosyal medya içeriklerine kadar uzanıyor. Bu etkinlikler sayesinde öğrenciler yalnızca teknik bilgi edinmiyor; aynı zamanda fikirlerini paylaşmayı, projelerde birlikte çalışmayı ve öğrendiklerini somut ürünlere dönüştürmeyi deneyimliyor. Böylece her katılımcı kendi yolunu çizerken, aynı zamanda topluluğun ortak öğrenme sürecine de katkı sağlıyor.',
      'about.story.p3': 'Bugün EMT Projects, CAD, elektronik ve kodlama konularında meraklı öğrencilerin bir araya geldiği; deneyim kazandıkları, yeni şeyler denedikleri ve üretim sürecine katıldıkları bir topluluk olarak yoluna devam ediyor. Bizim için en değerli yön, bu ortamın her öğrenciye kendi potansiyelini keşfetme fırsatı sunmasıdır.',
      'about.goal.title': 'Amacımız',
      'about.goal.description': 'Öğrencilerin yenilikçi düşünme, üretkenlik ve takım çalışması becerilerini geliştirmelerine katkı sağlamak. Bunu yaparken, sadece teknik bilgi aktarmakla kalmayıp aynı zamanda problem çözme, yaratıcılık ve paylaşma kültürünü de desteklemeyi amaçlıyoruz.',
      'about.mission.title': 'Misyon',
      'about.mission.description': 'Öğrencilerin akademik ve kişisel gelişimlerine katkıda bulunacak etkinlikler düzenlemek, çağın gerekliliklerine uygun teknik beceriler kazandırmak ve birlikte üretme ruhunu teşvik etmek. CAD, elektronik, kodlama ve çeşitli atölye çalışmalarıyla teoriyi pratiğe dönüştürmeyi, sosyal medya içerikleriyle de bilgi ve deneyimi daha geniş kitlelere ulaştırmayı hedefliyoruz.',
      'about.vision.title': 'Vizyon',
      'about.vision.description': 'Okulumuzda başlayan bu yolculuğu daha geniş bir öğrenci kitlesine yayarak, teknoloji ve yenilik odaklı projeler üreten öncü bir öğrenci topluluğu haline gelmek. EMT Projects\'in vizyonu, öğrencilerin fikirlerini özgürce ortaya koyabildiği, kendini geliştirdiği ve geleceğin mühendisleri, tasarımcıları ve girişimcileri arasında yerini aldığı bir öğrenme ekosistemi oluşturmaktır.',
      
      // Activities page
      'activities.title': 'Faaliyetlerimiz',
      'activities.subtitle': 'EMT Projects olarak faaliyetlerimizi üç ana kategori olarak yürütüyoruz: Eğitim, Atölye ve İçerik Üretimi.',
      'activities.education.title': 'Haftalık Eğitimler',
      'activities.education.description': 'Yaklaşık onar haftalık iki eğitim alanı: Bilgisayar Destekli Tasarım (CAD) ve Elektronik & Programlama. CAD Derslerinde SOLIDWORKS programı, Elektronik Deslerinde Arduino sistemi kullanılır. Haftalık oturumlar; teorik anlatım, pratik örnekler ve ödevler içerir.',
      'activities.education.cad.title': 'Bilgisayar Destekli Tasarım İçeriği',
      'activities.education.cad.item1': 'Eskiz ve temel parçalar',
      'activities.education.cad.item2': '3 Boyutlu Modelleme',
      'activities.education.cad.item3': 'Montaj ve ilişkiler',
      'activities.education.cad.item4': 'Teknik Resim Okuma ve Oluşturma',
      'activities.education.electronics.title': 'Elektronik & Kodlama İçeriği',
      'activities.education.electronics.item1': 'Elektronik Temelleri',
      'activities.education.electronics.item2': 'Sensörler ve Seri Haberleşme',
      'activities.education.electronics.item3': 'DC ve Servo Motor Kontrolü',
      'activities.education.electronics.item4': 'Veri İletişimi ve IoT Temelleri',
      'activities.education.electronics.item5': 'Python ile Programlama',
      'activities.workshop.title': 'Uygulamalı Atölyeler',
      'activities.workshop.description': '3-4 haftada bir düzenlenen yüz yüze atölyeler ile teoriyi pratiğe dönüştürüyoruz. Uygulamalı ve proje odaklı çalışmalarımız sayesinde öğrencilerimize pratik deneyimler kazandırıyoruz.',
      'activities.workshop.item1': 'Tasarlanan modellerin prototiplenmesi ve montajı',
      'activities.workshop.item2': 'Elektronik devre kurulumu ve testi',
      'activities.workshop.item3': 'Mekanik parçalar ile elektronik devrelerin birleştirilmesi',
      'activities.workshop.item4': 'Proje üretimi ve sunumları',
      'activities.content.title': 'İçerik Üretimi',
      'activities.content.description': 'Sosyal medyada düzenli içerikler paylaşıyoruz. Teknik ipuçları, etkinlik özetleri ve topluluk projelerinden kesitler.',
      'activities.content.item1': 'CAD ve Elektronik üzerine teknik ipuçları',
      'activities.content.item2': 'Etkinlik paylaşımları ve faaliyet özetleri',
      'activities.content.item3': 'Topluluk projelerinden kesitler',
      
      // Team page
      'team.title': 'Organizasyon Takımımız',
      'team.subtitle': 'Topluluğumuz 3 alt ekipten oluşur: Eğitim, Araştırma-Geliştirme ve Sosyal Medya.',
      'team.teams.title': 'Ekipler',
      'team.education.title': 'Eğitim Ekibi',
      'team.education.item1': 'Eğitim müfredatı geliştirme',
      'team.education.item2': 'Ders materyalleri hazırlama',
      'team.education.item3': 'Atölye çalışmaları organizasyonu',
      'team.education.item4': 'Öğrenci değerlendirme süreçleri',
      'team.research.title': 'Araştırma-Geliştirme Ekibi',
      'team.research.item1': 'Teknik içerik planlama',
      'team.research.item2': 'Araştırma ve analiz',
      'team.research.item3': 'İçerik metni hazırlama',
      'team.research.item4': 'İçerik görselleştirme',
      'team.social.title': 'Sosyal Medya Ekibi',
      'team.social.item1': 'Sosyal medya stratejisi',
      'team.social.item2': 'İçerik paylaşım planlaması',
      'team.social.item3': 'Etkinlik tanıtımları',
      'team.social.item4': 'Topluluk iletişimi',
      'team.people.title': 'Kişiler',
      'team.filter.all': 'Tümü',
      'team.filter.education': 'Eğitim Ekibi',
      'team.filter.research': 'Ar-Ge Ekibi',
      'team.filter.social': 'Sosyal Medya Ekibi',
      
      // Team member roles
      'team.members.emre.role': 'Başkan • Eğitim Ekibi • CAD Eğitmeni',
      'team.members.gorkem.role': 'Danışman Öğretmen',
      'team.members.adnan.role': 'Eğitim Ekibi • Elektronik & Kodlama Eğitmeni',
      'team.members.ege.role': 'Eğitim Ekibi • CAD Eğitmeni',
      'team.members.alphan.role': 'Eğitim Ekibi • Elektronik & Kodlama Eğitmeni',
      'team.members.duru.role': 'Ar-Ge Ekibi • Ekip Sorumlusu',
      'team.members.julide.role': 'Sosyal Medya Ekibi • Ekip Sorumlusu',
      'team.members.beril.role': 'Sosyal Medya Ekibi • Ekip Sorumlusu',
      
      // Contact page
      'contact.title': 'İletişim',
      'contact.subtitle': 'Topluluğumuzla iletişime geçmek veya sosyal medya hesaplarımızı takip etmek için aşağıdaki bağlantıları kullanabilirsiniz.',
      'contact.form.title': 'İletişim',
      'contact.form.subtitle': 'Her türlü soru ve iş birliği için bize yazın. En kısa sürede dönüş yaparız.',
      'contact.form.name': 'Ad Soyad',
      'contact.form.name.placeholder': 'Adınız Soyadınız',
      'contact.form.email': 'E-posta',
      'contact.form.email.placeholder': 'ornek@eposta.com',
      'contact.form.message': 'Mesajınız',
      'contact.form.message.placeholder': 'Merhaba...',
      'contact.form.submit': 'Gönder',
      'contact.social.title': 'Sosyal Medya',
      'contact.instagram.description': 'Etkinlik duyuruları ve kulislerden kareler',
      'contact.linkedin.description': 'Topluluk hikayeleri ve proje paylaşımları',
      'contact.youtube.description': 'Eğitim kesitleri ve etkinlik kayıtları'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.activities': 'Activities',
      'nav.team': 'Team',
      'nav.contact': 'Contact',
      'nav.menu': 'Menu',
      'lang.turkish': 'EN',
      'lang.english': 'TR',
      
      // Home page
      'hero.subtitle': 'Student Community Curious to Learn, Determined to Produce',
      'hero.explore': 'Explore Activities',
      'hero.about': 'About Us',
      'stats.active_students': 'Active Students',
      'stats.projects_soon': 'Coming Soon',
      'stats.completed_projects': 'Completed Projects',
      'stats.main_areas': 'Main Activity Areas',
      'education.title': 'Our Education Model',
      'education.subtitle': 'At EMT Projects, education combines theory, practice, and project experience to enable students to produce while learning.',
      'education.basic.title': 'Basic Knowledge – "A Solid Foundation"',
      'education.basic.description': 'We provide students with the necessary theoretical foundation in Computer-Aided Design (CAD), Electronics & Coding. Thus, every student starts the learning process on a solid foundation.',
      'education.practice.title': 'Applications – "Produce While Learning"',
      'education.practice.description': 'We provide practical experience through workshops to transform acquired knowledge into practice. Students experience the lasting effect of learning by doing.',
      'education.project.title': 'Project-Oriented Process – "Develop Together"',
      'education.project.description': 'Through team-based projects, students experience solving real problems, sharing ideas, and product development. Both technical skills and collaboration culture are strengthened in this process.',
      
      // About page
      'about.title': 'About Us',
      'about.subtitle': 'EMT Projects is a student community that aims for students to learn and produce in Computer-Aided Design (CAD) and Electronics & Coding fields, and to develop together.',
      'about.story.title': 'Our Story',
      'about.story.p1': 'EMT Projects is a community established for students to develop themselves in technology and design fields. Since day one, we have been conducting studies on computer-aided design (CAD), electronics, and coding, offering students interested in these fields the opportunity to learn and produce together.',
      'about.story.p2': 'Our activities extend from lessons to workshops and social media content. Through these activities, students not only acquire technical knowledge but also experience sharing ideas, working together on projects, and transforming what they learn into concrete products. Thus, while each participant charts their own path, they also contribute to the community\'s shared learning process.',
      'about.story.p3': 'Today, EMT Projects continues its journey as a community where students interested in CAD, electronics, and coding come together; where they gain experience, try new things, and participate in the production process. The most valuable aspect for us is that this environment offers every student the opportunity to discover their own potential.',
      'about.goal.title': 'Our Goal',
      'about.goal.description': 'To contribute to students\' development of innovative thinking, productivity, and teamwork skills. While doing this, we aim not only to transfer technical knowledge but also to support problem-solving, creativity, and sharing culture.',
      'about.mission.title': 'Mission',
      'about.mission.description': 'To organize activities that will contribute to students\' academic and personal development, provide technical skills suitable for the requirements of the age, and encourage the spirit of producing together. We aim to transform theory into practice through CAD, electronics, coding, and various workshop studies, and to reach knowledge and experience to wider audiences through social media content.',
      'about.vision.title': 'Vision',
      'about.vision.description': 'To become a pioneering student community that produces technology and innovation-focused projects by spreading this journey that started in our school to a wider student audience. EMT Projects\' vision is to create a learning ecosystem where students can freely express their ideas, develop themselves, and take their place among the engineers, designers, and entrepreneurs of the future.',
      
      // Activities page
      'activities.title': 'Our Activities',
      'activities.subtitle': 'As EMT Projects, we conduct our activities in three main categories: Education, Workshop, and Content Production.',
      'activities.education.title': 'Weekly Education',
      'activities.education.description': 'Two educational areas of approximately ten weeks each: Computer-Aided Design (CAD) and Electronics & Programming. SOLIDWORKS software is used in CAD classes, and Arduino system is used in Electronics classes. Weekly sessions include theoretical explanation, practical examples, and assignments.',
      'activities.education.cad.title': 'Computer-Aided Design Content',
      'activities.education.cad.item1': 'Sketching and basic parts',
      'activities.education.cad.item2': '3D Modeling',
      'activities.education.cad.item3': 'Assembly and relationships',
      'activities.education.cad.item4': 'Technical Drawing Reading and Creation',
      'activities.education.electronics.title': 'Electronics & Coding Content',
      'activities.education.electronics.item1': 'Electronics Fundamentals',
      'activities.education.electronics.item2': 'Sensors and Serial Communication',
      'activities.education.electronics.item3': 'DC and Servo Motor Control',
      'activities.education.electronics.item4': 'Data Communication and IoT Fundamentals',
      'activities.education.electronics.item5': 'Programming with Python',
      'activities.workshop.title': 'Practical Workshops',
      'activities.workshop.description': 'We transform theory into practice through face-to-face workshops organized every 3-4 weeks. Through our practical and project-oriented studies, we provide our students with practical experiences.',
      'activities.workshop.item1': 'Prototyping and assembly of designed models',
      'activities.workshop.item2': 'Electronic circuit setup and testing',
      'activities.workshop.item3': 'Combining mechanical parts with electronic circuits',
      'activities.workshop.item4': 'Project production and presentations',
      'activities.content.title': 'Content Production',
      'activities.content.description': 'We share regular content on social media. Technical tips, event summaries, and excerpts from community projects.',
      'activities.content.item1': 'Technical tips on CAD and Electronics',
      'activities.content.item2': 'Event shares and activity summaries',
      'activities.content.item3': 'Excerpts from community projects',
      
      // Team page
      'team.title': 'Our Organization Team',
      'team.subtitle': 'Our community consists of 3 sub-teams: Education, Research-Development, and Social Media.',
      'team.teams.title': 'Teams',
      'team.education.title': 'Education Team',
      'team.education.item1': 'Educational curriculum development',
      'team.education.item2': 'Lesson material preparation',
      'team.education.item3': 'Workshop organization',
      'team.education.item4': 'Student evaluation processes',
      'team.research.title': 'Research-Development Team',
      'team.research.item1': 'Technical content planning',
      'team.research.item2': 'Research and analysis',
      'team.research.item3': 'Content text preparation',
      'team.research.item4': 'Content visualization',
      'team.social.title': 'Social Media Team',
      'team.social.item1': 'Social media strategy',
      'team.social.item2': 'Content sharing planning',
      'team.social.item3': 'Event promotions',
      'team.social.item4': 'Community communication',
      'team.people.title': 'People',
      'team.filter.all': 'All',
      'team.filter.education': 'Education Team',
      'team.filter.research': 'R&D Team',
      'team.filter.social': 'Social Media Team',
      
      // Team member roles
      'team.members.emre.role': 'President • Education Team • CAD Instructor',
      'team.members.gorkem.role': 'Advisor Teacher',
      'team.members.adnan.role': 'Education Team • Electronics & Coding Instructor',
      'team.members.ege.role': 'Education Team • CAD Instructor',
      'team.members.alphan.role': 'Education Team • Electronics & Coding Instructor',
      'team.members.duru.role': 'R&D Team • Team Leader',
      'team.members.julide.role': 'Social Media Team • Team Leader',
      'team.members.beril.role': 'Social Media Team • Team Leader',
      
      // Contact page
      'contact.title': 'Contact',
      'contact.subtitle': 'You can use the links below to contact our community or follow our social media accounts.',
      'contact.form.title': 'Contact',
      'contact.form.subtitle': 'Write to us for any questions and collaborations. We will respond as soon as possible.',
      'contact.form.name': 'Full Name',
      'contact.form.name.placeholder': 'Your Name Surname',
      'contact.form.email': 'Email',
      'contact.form.email.placeholder': 'example@email.com',
      'contact.form.message': 'Your Message',
      'contact.form.message.placeholder': 'Hello...',
      'contact.form.submit': 'Send',
      'contact.social.title': 'Social Media',
      'contact.instagram.description': 'Event announcements and behind-the-scenes shots',
      'contact.linkedin.description': 'Community stories and project shares',
      'contact.youtube.description': 'Education excerpts and event recordings'
    }
  };

  let currentLanguage = localStorage.getItem('language') || 'tr';
  
  function translatePage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang] && translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update page title based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html' || currentPage === '') {
      document.title = lang === 'en' ? 'EMT Projects | Home' : 'EMT Projects | Ana Sayfa';
    } else if (currentPage === 'hakkimizda.html') {
      document.title = lang === 'en' ? 'About | EMT Projects' : 'Hakkımızda | EMT Projects';
    } else if (currentPage === 'faaliyetlerimiz.html') {
      document.title = lang === 'en' ? 'Activities | EMT Projects' : 'Faaliyetlerimiz | EMT Projects';
    } else if (currentPage === 'takimimiz.html') {
      document.title = lang === 'en' ? 'Team | EMT Projects' : 'Takımımız | EMT Projects';
    } else if (currentPage === 'iletisim.html') {
      document.title = lang === 'en' ? 'Contact | EMT Projects' : 'İletişim | EMT Projects';
    }
  }
  
  function toggleLanguage() {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    localStorage.setItem('language', currentLanguage);
    translatePage(currentLanguage);
    
    // Update language toggle button
    const langToggle = document.querySelector('[data-lang-toggle]');
    if (langToggle) {
      const span = langToggle.querySelector('span');
      if (span) {
        span.textContent = currentLanguage === 'tr' ? 'TR' : 'EN';
      }
      langToggle.classList.toggle('active', currentLanguage === 'en');
    }
  }
  
  // Initialize translation
  translatePage(currentLanguage);
  
  // Set up language toggle
  const langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
    langToggle.classList.toggle('active', currentLanguage === 'en');
  }

  // Mobile nav toggle
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  const navbar = document.querySelector('.navbar');
  
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.contains('nav-open');
      if (isOpen) {
        links.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        links.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 800 && links && navbar) {
      if (!navbar.contains(e.target) && links.classList.contains('nav-open')) {
        links.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  // Ensure menu hidden on desktop on resize
  const updateMenuVisibility = () => {
    if (window.innerWidth > 800 && links) {
      links.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };
  window.addEventListener('resize', updateMenuVisibility);

  // Simple slider (autoplay + arrows). Expect structure: .slider > .slides > .slide
  document.querySelectorAll('.slider').forEach((slider) => {
    const slidesEl = slider.querySelector('.slides');
    const slideEls = slider.querySelectorAll('.slide');
    if (!slidesEl || slideEls.length === 0) return;

    let index = 0;
    const go = (i) => {
      index = (i + slideEls.length) % slideEls.length;
      slidesEl.style.transform = `translateX(-${index * 100}%)`;
    };

    const prev = slider.querySelector('[data-prev]');
    const next = slider.querySelector('[data-next]');
    prev && prev.addEventListener('click', () => go(index - 1));
    next && next.addEventListener('click', () => go(index + 1));

    let timer = setInterval(() => go(index + 1), 4500);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => (timer = setInterval(() => go(index + 1), 4500)));
  });

  // Avatar photo handling
  document.querySelectorAll('.avatar img').forEach((img) => {
    img.addEventListener('load', () => {
      img.parentElement.classList.add('has-photo');
    });
    
    // If image is already loaded (cached)
    if (img.complete && img.naturalHeight !== 0) {
      img.parentElement.classList.add('has-photo');
    }
  });

  // Team filtering functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const teamMembers = document.querySelectorAll('.member[data-team]');
  
  if (filterButtons.length > 0 && teamMembers.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const selectedTeam = button.getAttribute('data-team');
        
        // Filter team members
        teamMembers.forEach(member => {
          const memberTeam = member.getAttribute('data-team');
          
          if (selectedTeam === 'all' || memberTeam === selectedTeam) {
            member.classList.remove('hidden');
          } else {
            member.classList.add('hidden');
          }
        });
      });
    });
  }
})();


