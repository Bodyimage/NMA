const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');
    const navItems = Array.from(document.querySelectorAll('.nav-links a'));

    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });


    const interventionDetails = {
      CBT: {
        fullName: "Cognitive Behavioural Therapy",
        modalTitle: "Cognitive Behavioural Therapy: CBT",
        description: "Cognitive behavioral therapy was defined as an intervention aimed at identifying and modifying dysfunctional body-related cognitions, emotions, or behaviors through core CBT components, such as cognitive restructuring and exposure.",
        mechanism: "Cognitive restructuring, behavioural experiments, exposure, skills practice, and relapse-prevention strategies.",
        formats: "Structured modules / individual or group sessions / guided programs / blended formats"
      },
      ACT: {
        fullName: "Acceptance and Commitment Therapy",
        modalTitle: "Acceptance and Commitment Therapy: ACT",
        description: "Acceptance and commitment therapy was defined as an intervention aimed at enhancing psychological flexibility in relation to body-related experiences through core ACT processes.",
        mechanism: "Acceptance, cognitive defusion, present-moment awareness, values clarification, and committed action.",
        formats: "Acceptance practices"
      },
      SC: {
        fullName: "Self-Compassion Intervention",
        modalTitle: "Self-Compassion Intervention: SC",
        description: "Self-compassion intervention was defined as an intervention aimed at cultivating self-kindness, common humanity, and balanced awareness of internal experiences in relation to body-related experiences.",
        mechanism: "Interventions were classified as self-compassion only when self-compassion was the central therapeutic mechanism, not merely when mindfulness or acceptance components were included.",
        formats: "Compassionate writing / Guided exercises / Self-kindness practices"
      },
      MBI: {
        fullName: "Mindfulness-Based Intervention",
        modalTitle: "Mindfulness-Based Intervention: MBI",
        description: "Mindfulness-based intervention was defined as an intervention centered on mindfulness training, emphasizing present-moment, non-judgemental awareness and acceptance of body-related thoughts, emotions, and sensations.",
        mechanism: "Present-moment awareness, acceptance, attentional control, interoceptive awareness, and emotion regulation.",
        formats: "Meditation practices / breathing exercises / digital modules"
      },
      BPBD: {
        fullName: "Body Positivity / Body Diversity",
        modalTitle: "Body Positivity / Body Diversity: BPBD",
        description: "Body positivity/diversity interventions were defined as interventions explicitly aiming to promote acceptance, love, or appreciation of the body’s appearance, shapes, or sizes, and to challenge narrow societal standards of beauty.",
        mechanism: "Increasing acceptance of body diversity, reducing internalization of narrow ideals, and broadening definitions of beauty and worth.",
        formats: "Body positive media exposure /  social-media content"
      },
      BFBN: {
        fullName: "Body Functionality / Body Neutrality",
        modalTitle: "Body Functionality / Body Neutrality: BFBN",
        description: "Body functionality/neutrality interventions were defined as interventions explicitly aiming to shift participants’ focus away from appearance-based evaluation or societal beauty standards toward body-related functions and abilities.",
        mechanism: "Reducing appearance centrality while strengthening functionality appreciation, body respect, and neutral self-relating.",
        formats: "Functionality writing tasks, social-media content exposure"
      },
      CBM: {
        fullName: "Cognitive Bias Modification",
        modalTitle: "Cognitive Bias Modification: CBM",
        description: "Cognitive bias modification was defined as an intervention that explicitly aimed to reduce maladaptive attentional, interpretative, or approach biases toward body-related stimuli through repeated practice, thereby promoting more adaptive processing of such stimuli.",
        mechanism: "Reducing biased attention to threat or appearance cues and modifying automatic negative interpretations.",
        formats: ""
      },
      EC: {
        fullName: "Evaluative Conditioning",
        modalTitle: "Evaluative Conditioning: EC",
        description: "Evaluative conditioning was defined as an intervention aimed at modifying the evaluative valence of body-related stimuli through repeated pairing with positively or negatively valenced stimuli.",
        mechanism: "Changing associative evaluations and reducing automatic negative affective responses to body-related stimuli.",
        formats: ""
      },
      CD: {
        fullName: "Cognitive Dissonance",
        modalTitle: "Cognitive Dissonance: CD",
        description: "Cognitive dissonance was defined as an intervention aimed at reducing thin-ideal internalization by eliciting dissonance toward the pursuit of the thin ideal, typically through verbal, written, or behavioral exercises that critique or counter societal appearance ideals.",
        mechanism: "Reducing thin-ideal internalization by producing attitude-behaviour inconsistency.",
        formats: "Brief group workshops, peer-led programs, writing tasks, verbal exercises, or prevention programs such as dissonance-based body image interventions."
      },
      PE: {
        fullName: "Psychoeducational Intervention",
        modalTitle: "Psychoeducational Intervention: PE",
        description: "Psychoeducational intervention was defined as an intervention in which information and conceptual knowledge constituted the primary active component. Media literacy interventions were included within this category when they targeted media exposure and appearance-ideal internalization by promoting critical evaluation of unrealistic media messages.",
        mechanism: "Improving knowledge, critical awareness, and media-literacy-related resistance to harmful appearance norms.",
        formats: "Educational sessions, information sheets, classroom lessons, videos, or structured informational programs."
      },
      PPI: {
        fullName: "Positive Psychology Intervention",
        modalTitle: "Positive Psychology Intervention: PPI",
        description: "Positive psychology intervention was defined as an intervention aimed at improving body image and body-related well-being by cultivating positive psychological resources, such as body appreciation, and gratitude for bodily functions.",
        mechanism: "Increasing positive affect, self-appreciation, gratitude, and strengths awareness.",
        formats: "Gratitude exercises, appreciation writing, and brief well-being modules."
      },
      SCI: {
        fullName: "Stimulus Control-Based Intervention",
        modalTitle: "Stimulus Control-Based Intervention: SCI",
        description: "Stimulus control interventions were defined as interventions explicitly aiming to reduce exposure to body image-relevant cues by temporarily abstaining from or markedly limiting engagement with triggering stimuli.",
        mechanism: "Reducing exposure to triggering cues.",
        formats: "Trigger management / media-use modification"
      },
      EW: {
        fullName: "Expressive Writing Intervention",
        modalTitle: "Expressive Writing Intervention: EW",
        description: "Expressive writing was defined as an intervention in which participants wrote about their deepest thoughts and emotions regarding personally significant body-related experiences.",
        mechanism: "Writing about their deepest thoughts and emotions.",
        formats: "Structured writing sessions"
      },
      IPI: {
        fullName: "Integrated Psychotherapy Intervention",
        modalTitle: "Integrated Psychotherapy Intervention: IPI",
        description: "Integrated intervention was defined as an intervention that combined two or more distinct components drawn from multiple theoretical frameworks, such as cognitive behavioral therapy plus psychoeducational intervention.",
        mechanism: "Combining complementary mechanisms such as cognitive change, acceptance, compassion, and psychoeducation.",
        formats: "Multi-component programs / blended therapy packages / combined interventions"
      },
      NAC: {
        fullName: "Non-active Control",
        modalTitle: "Non-active Control: NAC",
        description: "Non-active control was defined as a control condition without active therapeutic components. This category included wait-list or assessment-only controls, treatment/lesson as usual, and attention controls involving neutral, non-therapeutic content matched in format or duration to control for nonspecific effects.",
        mechanism: "Used to estimate intervention effects relative to minimal or no active therapeutic input.",
        formats: "Waitlist control, assessment-only control, treatment as usual, lesson as usual, or neutral attention control."
      },
      AC: {
        fullName: "Active Control",
        modalTitle: "Active Control: AC",
        description: "Active control was defined as a control condition that involved participant engagement, credibility, or expectancy but excluded the core therapeutic components of the active intervention.",
        mechanism: "Active control conditions provide credible contact, information, or activities while omitting the key active mechanism of the target intervention.",
        formats: "Psychoeducation controls, psychological placebo conditions."
      }
    };

    const interventionCards = Array.from(document.querySelectorAll('.intervention-card'));
    const interventionModal = document.getElementById('interventionModal');
    const interventionFlyCard = document.getElementById('interventionFlyCard');
    const interventionFlipCard = document.getElementById('interventionFlipCard');
    const interventionBackdrop = document.getElementById('interventionBackdrop');
    const modalIconFront = document.getElementById('modalIconFront');
    const modalCode = document.getElementById('modalCode');
    const modalName = document.getElementById('modalName');
    const modalCount = document.getElementById('modalCount');
    const modalBackTitle = document.getElementById('modalBackTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalMechanism = document.getElementById('modalMechanism');
    const modalFormats = document.getElementById('modalFormats');
    const modalPopLink = document.querySelector('.modal-pop-link');
    const modalScrollContent = document.getElementById('modalScrollContent');

    let activeInterventionCard = null;
    let interventionFlipTimer = null;

    function openIntervention(card) {
      const code = card.dataset.code;
      const color = card.dataset.color || 'purple';
      const details = interventionDetails[code];
      if (!details) return;

      activeInterventionCard = card;

      const rect = card.getBoundingClientRect();
      const modalWidth = Math.min(420, window.innerWidth - 32);
      const dx = rect.left + rect.width / 2 - window.innerWidth / 2;
      const dy = rect.top + rect.height / 2 - window.innerHeight / 2;
      const startScale = Math.max(0.34, Math.min(0.72, rect.width / modalWidth));

      interventionFlyCard.className = `intervention-fly-card ${color}`;
      interventionFlyCard.style.setProperty('--start-x', `${dx}px`);
      interventionFlyCard.style.setProperty('--start-y', `${dy}px`);
      interventionFlyCard.style.setProperty('--start-scale', startScale.toFixed(3));

      modalIconFront.innerHTML = card.querySelector('svg').outerHTML;
      modalCode.textContent = code;
      modalName.textContent = details.fullName;
      modalCount.textContent = card.querySelector('.study-count').textContent;
      modalBackTitle.textContent = details.modalTitle || `${details.fullName}: ${code}`;
      modalDescription.textContent = details.description;
      modalMechanism.textContent = details.mechanism;
      modalFormats.textContent = details.formats;
      modalScrollContent.scrollTop = 0;

      interventionModal.hidden = false;
      interventionModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      interventionModal.classList.remove('is-open', 'is-flipped');
      window.clearTimeout(interventionFlipTimer);

      requestAnimationFrame(() => {
        interventionModal.classList.add('is-open');
        interventionFlipTimer = window.setTimeout(() => {
          interventionModal.classList.add('is-flipped');
        }, 520);
      });

      const closeButton = interventionModal.querySelector('.modal-close');
      window.setTimeout(() => closeButton.focus({ preventScroll: true }), 160);
    }

    function closeIntervention() {
      if (interventionModal.hidden) return;

      window.clearTimeout(interventionFlipTimer);
      interventionModal.classList.remove('is-flipped', 'is-open');
      document.body.classList.remove('modal-open');
      interventionModal.setAttribute('aria-hidden', 'true');

      window.setTimeout(() => {
        interventionModal.hidden = true;
        if (activeInterventionCard) {
          activeInterventionCard.focus({ preventScroll: true });
        }
      }, 260);
    }

    interventionCards.forEach(card => {
      card.addEventListener('click', () => openIntervention(card));
    });

    interventionModal.querySelectorAll('.modal-close').forEach(button => {
      button.addEventListener('click', closeIntervention);
    });

    interventionBackdrop.addEventListener('click', closeIntervention);

    interventionFlipCard.addEventListener('click', event => {
      if (event.target.closest('button, a, .modal-scroll-content')) return;
      interventionModal.classList.toggle('is-flipped');
    });

    modalScrollContent.addEventListener('click', event => {
      event.stopPropagation();
    });

    modalScrollContent.addEventListener('wheel', event => {
      event.stopPropagation();
    }, { passive: true });

    modalScrollContent.addEventListener('touchstart', event => {
      event.stopPropagation();
    }, { passive: true });

    modalScrollContent.addEventListener('touchmove', event => {
      event.stopPropagation();
    }, { passive: true });

    modalPopLink.addEventListener('click', closeIntervention);

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !interventionModal.hidden) {
        closeIntervention();
      }
    });

    const sectionIds = [
      'cover',
      'overview',
      'interventions',
      'general-population',
      'high-risk-population',
      'eating-disorder-population'
    ];

    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        navItems.forEach(item => item.classList.remove('active'));

        const activeItem = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeItem) activeItem.classList.add('active');
      });
    }, {
      root: null,
      threshold: 0.32,
      rootMargin: '-120px 0px -45% 0px'
    });

    sections.forEach(section => observer.observe(section));

// ===== Click-to-enlarge result figures =====
const figureImages = Array.from(document.querySelectorAll('.figure-box img'));

if (figureImages.length) {
  const figureLightbox = document.createElement('div');
  figureLightbox.className = 'figure-lightbox';
  figureLightbox.hidden = true;
  figureLightbox.setAttribute('aria-hidden', 'true');

  figureLightbox.innerHTML = `
    <button class="figure-lightbox-backdrop" type="button" aria-label="Close enlarged figure"></button>
    <div class="figure-lightbox-panel" role="dialog" aria-modal="true" aria-label="Enlarged figure">
      <button class="figure-lightbox-close" type="button" aria-label="Close enlarged figure">×</button>
      <p class="figure-lightbox-caption"></p>
      <img src="" alt="">
    </div>
  `;

  document.body.appendChild(figureLightbox);

  const lightboxImg = figureLightbox.querySelector('img');
  const lightboxCaption = figureLightbox.querySelector('.figure-lightbox-caption');
  const lightboxClose = figureLightbox.querySelector('.figure-lightbox-close');
  const lightboxBackdrop = figureLightbox.querySelector('.figure-lightbox-backdrop');

  let lastFocusedFigure = null;

  function openFigureLightbox(img) {
    lastFocusedFigure = img;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt || 'Enlarged figure';
    lightboxCaption.textContent = img.alt || 'Enlarged figure';
    figureLightbox.hidden = false;
    figureLightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    lightboxClose.focus({ preventScroll: true });
  }

  function closeFigureLightbox() {
    figureLightbox.hidden = true;
    figureLightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.classList.remove('modal-open');

    if (lastFocusedFigure) {
      lastFocusedFigure.focus({ preventScroll: true });
    }
  }

  figureImages.forEach(img => {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${img.alt || 'Figure'} - click to enlarge`);

    img.addEventListener('click', () => openFigureLightbox(img));
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFigureLightbox(img);
      }
    });
  });

  lightboxClose.addEventListener('click', closeFigureLightbox);
  lightboxBackdrop.addEventListener('click', closeFigureLightbox);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !figureLightbox.hidden) {
      closeFigureLightbox();
    }
  });
}
